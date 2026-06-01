// netlify/functions/claude-proxy.js
// ─────────────────────────────────────────────────────────────
// Secure server-side proxy for the Anthropic Claude API.
// The ANTHROPIC_API_KEY environment variable is set in the
// Netlify dashboard (Site settings → Environment variables).
// It is NEVER exposed to the browser.
// ─────────────────────────────────────────────────────────────

const ALLOWED_PROMPTS = [
  "Melanin Glow", "Golden Hour", "Y2K", "Vamp Romantic",
  "Poetcore", "Cool Blue", "Dancehall", "Soft Glow"
];

exports.handler = async function (event) {

  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: corsHeaders(),
      body: ""
    };
  }

  // Only allow POST
  if (event.httpMethod !== "POST") {
    return respond(405, { error: "Method not allowed" });
  }

  // Parse body
  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return respond(400, { error: "Invalid JSON body" });
  }

  const { prompt, style } = body;

  // Validate — must include a recognised style name (basic abuse guard)
  if (!prompt || typeof prompt !== "string" || prompt.length > 600) {
    return respond(400, { error: "Invalid prompt" });
  }
  if (!style || !ALLOWED_PROMPTS.some(s => style.includes(s))) {
    return respond(400, { error: "Unrecognised style" });
  }

  // Check API key is configured
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("ANTHROPIC_API_KEY environment variable is not set.");
    return respond(500, { error: "API key not configured. See Netlify environment variables." });
  }

  // Call Anthropic
  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 600,
        messages: [{ role: "user", content: prompt }]
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Anthropic API error:", response.status, err);
      return respond(502, { error: "Upstream API error", status: response.status });
    }

    const data = await response.json();
    const text = (data.content || []).map(c => c.text || "").join("");

    return respond(200, { text });

  } catch (err) {
    console.error("Fetch error:", err);
    return respond(500, { error: "Failed to reach Anthropic API" });
  }
};

function respond(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json", ...corsHeaders() },
    body: JSON.stringify(body)
  };
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS"
  };
}
