<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>YAARD — Caribbean PFP Generator</title>
<meta name="description" content="The Caribbean's first aesthetic profile picture generator. Choose your aesthetic, style your photo, and download your PFP. Free, private, made in Jamaica.">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet">
<style>
:root {
  --gold:#F5C842; --rust:#D4522A; --green:#1A5C3A;
  --cream:#FDF6E3; --deep:#0D0D0D; --warm:#F9EDD4;
  --text:#1A1208; --muted:#6B5C3E; --card:#FFFAF2; --border:#E8D8B8;
}
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'DM Sans',sans-serif;background:var(--cream);color:var(--text);min-height:100vh;overflow-x:hidden;}
body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");pointer-events:none;z-index:0;}

/* ── AGE GATE ── */
#ageGate{position:fixed;inset:0;background:#0D0D0D;z-index:9999;display:flex;align-items:center;justify-content:center;padding:2rem;transition:opacity .4s ease;}
#ageGate.hidden{opacity:0;pointer-events:none;}
.gate-box{max-width:420px;width:100%;text-align:center;position:relative;}
.gate-glow{position:absolute;top:-100px;left:50%;transform:translateX(-50%);width:300px;height:300px;background:radial-gradient(circle,rgba(245,200,66,.12),transparent 65%);pointer-events:none;}
.gate-glow2{position:absolute;bottom:-80px;left:50%;transform:translateX(-50%);width:240px;height:240px;background:radial-gradient(circle,rgba(26,92,58,.15),transparent 65%);pointer-events:none;}
.gate-logo{font-family:'Syne',sans-serif;font-weight:800;font-size:2.8rem;letter-spacing:-.04em;color:white;position:relative;z-index:1;}
.gate-logo span{color:var(--gold);}
.gate-tagline{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#555;margin-bottom:2rem;position:relative;z-index:1;}
.gate-swatches{display:flex;justify-content:center;gap:6px;margin-bottom:2rem;position:relative;z-index:1;}
.gate-swatch{width:26px;height:26px;border-radius:50%;}
.gate-divider{width:40px;height:2px;background:var(--gold);margin:0 auto 2rem;position:relative;z-index:1;}
.gate-headline{font-family:'Syne',sans-serif;font-size:1.1rem;font-weight:800;color:white;line-height:1.35;margin-bottom:.6rem;position:relative;z-index:1;}
.gate-desc{font-size:13px;color:#777;line-height:1.65;margin-bottom:2rem;position:relative;z-index:1;}
.gate-question{font-family:'Syne',sans-serif;font-size:.9rem;font-weight:700;color:#aaa;margin-bottom:1.1rem;position:relative;z-index:1;}
.btn-yes{display:block;width:100%;padding:1rem;background:var(--gold);color:#0D0D0D;border:none;border-radius:12px;font-family:'Syne',sans-serif;font-size:1rem;font-weight:800;cursor:pointer;margin-bottom:.75rem;transition:transform .15s,box-shadow .15s;position:relative;z-index:1;}
.btn-yes:hover{transform:translateY(-2px);box-shadow:0 6px 24px rgba(245,200,66,.3);}
.btn-no{display:block;width:100%;padding:.85rem;background:transparent;color:#555;border:1px solid #2a2a2a;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:13px;cursor:pointer;margin-bottom:1.5rem;transition:border-color .15s,color .15s;position:relative;z-index:1;}
.btn-no:hover{border-color:#444;color:#888;}
.gate-legal{font-size:11px;color:#444;line-height:1.65;position:relative;z-index:1;}
.gate-legal a{color:#666;text-decoration:underline;}

/* ── MAIN SITE ── */
#mainSite{opacity:0;transition:opacity .5s ease .1s;}
#mainSite.visible{opacity:1;}
nav{display:flex;align-items:center;justify-content:space-between;padding:1.25rem 2rem;border-bottom:1px solid var(--border);background:rgba(253,246,227,.9);backdrop-filter:blur(12px);position:sticky;top:0;z-index:100;}
.logo{font-family:'Syne',sans-serif;font-weight:800;font-size:1.5rem;letter-spacing:-.03em;color:var(--deep);text-decoration:none;}
.logo span{color:var(--gold);}
.logo-sub{font-size:10px;font-weight:400;color:var(--muted);letter-spacing:.12em;text-transform:uppercase;display:block;margin-top:-3px;}
.nav-links{display:flex;gap:1.5rem;align-items:center;}
.nav-links a{font-size:13px;color:var(--muted);text-decoration:none;transition:color .15s;}
.nav-links a:hover{color:var(--rust);}
.nav-pill{background:var(--green);color:var(--gold);padding:8px 20px;border-radius:100px;font-size:13px;font-weight:500;border:none;font-family:'DM Sans',sans-serif;text-decoration:none;cursor:pointer;transition:transform .15s,box-shadow .15s;}
.nav-pill:hover{transform:translateY(-1px);box-shadow:0 4px 16px rgba(26,92,58,.3);}

/* ── HERO ── */
.hero{padding:4rem 2rem 2rem;max-width:960px;margin:0 auto;position:relative;z-index:1;}
.hero-badge{display:inline-flex;align-items:center;gap:6px;background:var(--gold);color:var(--deep);padding:5px 14px;border-radius:100px;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-bottom:1.5rem;}
.hero h1{font-family:'Syne',sans-serif;font-size:clamp(2.8rem,7vw,5rem);font-weight:800;line-height:.95;letter-spacing:-.03em;margin-bottom:1.25rem;}
.hero h1 em{font-style:italic;color:var(--rust);}
.hero h1 .g{color:var(--green);}
.hero-desc{font-size:1rem;color:var(--muted);max-width:460px;line-height:1.65;margin-bottom:2rem;}
.hero-stats{display:flex;gap:2rem;flex-wrap:wrap;padding:1.25rem 0;border-top:1px solid var(--border);border-bottom:1px solid var(--border);margin-bottom:3rem;}
.stat-item .num{font-family:'Syne',sans-serif;font-size:1.6rem;font-weight:700;color:var(--rust);}
.stat-item .lbl{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;}
.sec-lbl{font-family:'Syne',sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.14em;color:var(--muted);margin-bottom:1rem;}

/* ── STYLE PICKER ── */
.styles-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:10px;margin-bottom:2rem;}
.style-card{border:1.5px solid var(--border);border-radius:14px;overflow:hidden;cursor:pointer;background:var(--card);transition:all .2s;position:relative;}
.style-card:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.08);}
.style-card.active{border-color:var(--rust);box-shadow:0 0 0 3px rgba(212,82,42,.15);}
.style-card.active::after{content:'✓';position:absolute;top:8px;right:8px;background:var(--rust);color:white;width:18px;height:18px;border-radius:50%;font-size:10px;display:flex;align-items:center;justify-content:center;font-weight:700;}
.swatch{width:100%;height:58px;}
.style-name{font-family:'Syne',sans-serif;font-size:12px;font-weight:700;color:var(--text);padding:.45rem .7rem .2rem;line-height:1.3;}
.style-vibe{font-size:10px;color:var(--muted);padding:0 .7rem .6rem;line-height:1.4;}

/* ── GENERATOR BOX ── */
.gen-box{background:var(--deep);border-radius:20px;padding:2rem;margin-bottom:2rem;position:relative;overflow:hidden;}
.gen-box::before{content:'';position:absolute;top:-60px;right:-60px;width:200px;height:200px;background:radial-gradient(circle,rgba(245,200,66,.2),transparent 70%);pointer-events:none;}
.gen-box::after{content:'';position:absolute;bottom:-40px;left:-40px;width:150px;height:150px;background:radial-gradient(circle,rgba(26,92,58,.25),transparent 70%);pointer-events:none;}
.gen-title{font-family:'Syne',sans-serif;font-size:1.4rem;font-weight:800;color:white;margin-bottom:.4rem;}
.gen-sub{font-size:13px;color:#888;margin-bottom:1.25rem;}

/* steps */
.steps{display:flex;gap:6px;margin-bottom:1.25rem;flex-wrap:wrap;}
.step{display:flex;align-items:center;gap:5px;padding:4px 12px;border-radius:100px;font-size:11px;font-weight:500;border:.5px solid #333;color:#666;background:transparent;}
.step.active{background:var(--gold);color:#0D0D0D;border-color:var(--gold);}
.step.done{background:var(--green);color:var(--gold);border-color:var(--green);}
.step-n{width:15px;height:15px;border-radius:50%;background:rgba(0,0,0,.2);display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;}

/* upload */
.upload-zone{border:2px dashed rgba(255,255,255,.2);border-radius:14px;padding:2rem;text-align:center;cursor:pointer;transition:border-color .2s,background .2s;position:relative;z-index:1;}
.upload-zone:hover{border-color:var(--gold);background:rgba(245,200,66,.04);}
.upload-icon{font-size:2rem;margin-bottom:.6rem;}
.upload-txt{font-size:14px;color:#aaa;line-height:1.5;}
.upload-txt strong{color:var(--gold);}
input[type=file]{display:none;}

/* preview */
.preview-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:1rem;}
.preview-box{border-radius:var(--border-radius-md,8px);overflow:hidden;border:.5px solid rgba(255,255,255,.1);background:#1a1a1a;aspect-ratio:1;display:flex;align-items:center;justify-content:center;position:relative;}
.preview-box canvas{width:100%;height:100%;object-fit:cover;display:block;}
.prev-lbl{position:absolute;bottom:6px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,.65);color:white;font-size:10px;padding:2px 8px;border-radius:100px;white-space:nowrap;}

/* shape */
.shape-row{display:flex;gap:6px;margin-bottom:1rem;position:relative;z-index:1;}
.shape-btn{flex:1;padding:7px 4px;border-radius:8px;font-size:11px;font-weight:500;text-align:center;cursor:pointer;border:.5px solid #333;background:transparent;color:#666;transition:all .15s;}
.shape-btn:hover{border-color:#555;color:#aaa;}
.shape-btn.active{background:#0D0D0D;color:var(--gold);border-color:var(--gold);}

/* filter row */
.filter-row{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:1rem;position:relative;z-index:1;}
.filter-btn{padding:7px 4px;border-radius:8px;font-size:11px;font-weight:500;text-align:center;cursor:pointer;border:.5px solid #333;background:transparent;color:#666;transition:all .15s;}
.filter-btn:hover{border-color:#555;color:#aaa;}
.filter-btn.active{background:#111;color:var(--gold);border-color:var(--gold);}

/* intensity */
.int-row{display:flex;align-items:center;gap:10px;margin-bottom:1rem;position:relative;z-index:1;}
.int-row label{font-size:12px;color:#888;min-width:64px;}
.int-row input[type=range]{flex:1;}
.int-val{font-size:12px;font-weight:500;color:white;min-width:30px;text-align:right;}

/* action */
.action-row{display:flex;gap:8px;position:relative;z-index:1;}
.btn-apply{flex:1;padding:10px;background:var(--rust);color:white;border:none;border-radius:10px;font-family:'Syne',sans-serif;font-size:13px;font-weight:700;cursor:pointer;transition:opacity .15s;}
.btn-apply:hover{opacity:.85;}
.btn-apply:disabled{opacity:.4;cursor:not-allowed;}
.btn-dl{padding:10px 18px;background:var(--green);color:var(--gold);border:none;border-radius:10px;font-family:'Syne',sans-serif;font-size:13px;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:6px;transition:opacity .15s;}
.btn-dl:hover{opacity:.85;}
.btn-dl:disabled{opacity:.3;cursor:not-allowed;}

/* privacy note */
.priv-note{display:flex;align-items:flex-start;gap:8px;background:rgba(26,92,58,.2);border:.5px solid rgba(26,92,58,.4);border-radius:10px;padding:.65rem .9rem;font-size:11px;color:#888;line-height:1.5;margin-bottom:1rem;position:relative;z-index:1;}
.priv-note-icon{color:var(--green);font-size:14px;flex-shrink:0;margin-top:1px;}

/* tips */
.tips-box{background:var(--warm);border-radius:12px;padding:1.1rem 1.25rem;margin-bottom:1rem;border-left:3px solid var(--gold);font-size:14px;line-height:1.7;color:var(--text);}
.tips-loading{display:flex;align-items:center;gap:8px;color:var(--muted);font-size:13px;}
.spin{width:16px;height:16px;border:2px solid var(--border);border-top-color:var(--rust);border-radius:50%;animation:spin .7s linear infinite;}
@keyframes spin{to{transform:rotate(360deg);}}
.kw-title{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);margin-bottom:.6rem;}
.kw-tags{display:flex;flex-wrap:wrap;gap:6px;}
.kw-tag{background:var(--cream);border:1px solid var(--border);border-radius:100px;padding:4px 12px;font-size:11px;color:var(--text);}

/* ── DESTROYED BANNER ── */
.destroyed-banner{display:none;background:var(--deep);border-radius:20px;padding:2rem;text-align:center;margin-bottom:2rem;position:relative;overflow:hidden;}
.destroyed-banner::before{content:'';position:absolute;top:-50px;left:50%;transform:translateX(-50%);width:200px;height:200px;background:radial-gradient(circle,rgba(26,92,58,.2),transparent 65%);pointer-events:none;}
.db-icon{font-size:2.5rem;color:var(--green);margin-bottom:.75rem;position:relative;z-index:1;}
.db-title{font-family:'Syne',sans-serif;font-size:1.1rem;font-weight:800;color:var(--gold);margin-bottom:.4rem;position:relative;z-index:1;}
.db-sub{font-size:13px;color:#888;line-height:1.65;margin-bottom:1.25rem;position:relative;z-index:1;}
.db-checks{display:inline-flex;flex-direction:column;gap:6px;text-align:left;margin-bottom:1.5rem;position:relative;z-index:1;}
.db-check{font-size:12px;color:#aaa;display:flex;align-items:center;gap:8px;}
.db-check-icon{color:var(--green);font-size:14px;}
.btn-new{padding:10px 28px;background:var(--gold);color:#0D0D0D;border:none;border-radius:100px;font-family:'Syne',sans-serif;font-size:14px;font-weight:800;cursor:pointer;transition:transform .15s,box-shadow .15s;position:relative;z-index:1;}
.btn-new:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(245,200,66,.3);}

/* ── RESULT ── */
.result-area{background:var(--card);border:1px solid var(--border);border-radius:20px;padding:1.75rem;margin-bottom:2rem;display:none;}
.result-area.show{display:block;}
.result-header{font-family:'Syne',sans-serif;font-size:1.1rem;font-weight:800;margin-bottom:.3rem;}
.result-sub{font-size:13px;color:var(--muted);margin-bottom:1.25rem;}

/* ── PRIVACY STRIP ── */
.priv-strip{max-width:960px;margin:0 auto 2rem;padding:0 2rem;position:relative;z-index:1;}
.priv-inner{display:flex;align-items:center;gap:12px;background:#0D0D0D;border-radius:14px;padding:1rem 1.5rem;flex-wrap:wrap;}
.priv-inner-icon{font-size:1.4rem;flex-shrink:0;}
.priv-inner-text{flex:1;min-width:200px;}
.priv-inner-text strong{font-size:13px;color:white;font-weight:600;display:block;margin-bottom:2px;}
.priv-inner-text span{font-size:12px;color:#666;line-height:1.5;}
.priv-inner-link{font-size:12px;color:var(--gold);text-decoration:none;white-space:nowrap;}
.priv-inner-link:hover{text-decoration:underline;}

/* ── GALLERY ── */
.gallery-sec{max-width:960px;margin:0 auto 3rem;padding:0 2rem;position:relative;z-index:1;}
.gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
.gallery-item{border-radius:14px;overflow:hidden;aspect-ratio:1;cursor:pointer;}
.gal-swatch{width:100%;height:100%;display:flex;align-items:flex-end;padding:.75rem;}
.gal-lbl{background:rgba(0,0,0,.55);backdrop-filter:blur(6px);color:white;padding:5px 10px;border-radius:8px;font-size:11px;font-weight:600;font-family:'Syne',sans-serif;}

/* ── FOOTER ── */
.footer{background:var(--deep);color:#666;padding:1.5rem 2rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;font-size:12px;position:relative;z-index:1;}
.footer-logo{font-family:'Syne',sans-serif;font-weight:800;font-size:1.1rem;color:white;text-decoration:none;}
.footer-logo span{color:var(--gold);}
.footer-links{display:flex;gap:1.5rem;}
.footer-links a{color:#666;text-decoration:none;}
.footer-links a:hover{color:var(--gold);}

@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
.fu{animation:fadeUp .5s ease both;}
.d1{animation-delay:.1s}.d2{animation-delay:.2s}.d3{animation-delay:.3s}
</style>
</head>
<body>

<!-- AGE GATE -->
<div id="ageGate" role="dialog" aria-modal="true" aria-labelledby="gateH">
  <div class="gate-box">
    <div class="gate-glow"></div><div class="gate-glow2"></div>
    <div class="gate-logo">YAARD<span>.</span></div>
    <div class="gate-tagline">Caribbean PFP Generator</div>
    <div class="gate-swatches">
      <div class="gate-swatch" style="background:linear-gradient(135deg,#C97B3A,#6B2D0F)"></div>
      <div class="gate-swatch" style="background:linear-gradient(135deg,#F5C842,#E8722A)"></div>
      <div class="gate-swatch" style="background:linear-gradient(135deg,#FF6EC7,#7B4FFF)"></div>
      <div class="gate-swatch" style="background:linear-gradient(135deg,#3D0C11,#C0392B)"></div>
      <div class="gate-swatch" style="background:linear-gradient(135deg,#4FC3F7,#1565C0)"></div>
      <div class="gate-swatch" style="background:linear-gradient(135deg,#1A5C3A,#F5C842)"></div>
      <div class="gate-swatch" style="background:linear-gradient(135deg,#FADADD,#E07B9A)"></div>
    </div>
    <div class="gate-divider"></div>
    <div class="gate-headline" id="gateH">Before you enter, we need<br>to ask one question.</div>
    <div class="gate-desc">YAARD is intended for users aged 18 and over.<br>Please confirm your age to continue.</div>
    <div class="gate-question">Are you 18 years of age or older?</div>
    <button class="btn-yes" onclick="enterSite()">✓ &nbsp;Yes, I am 18 or older — Enter YAARD</button>
    <button class="btn-no" onclick="exitSite()">I am under 18 — Exit</button>
    <div class="gate-legal">By entering you confirm you are 18+ and agree to our <a href="privacy.html">Privacy Policy</a>. This site uses cookies and displays ads via Google AdSense.</div>
  </div>
</div>

<!-- MAIN SITE -->
<div id="mainSite">

<nav>
  <a href="index.html" class="logo">YAARD<span>.</span><span class="logo-sub">Caribbean PFP Generator</span></a>
  <div class="nav-links">
    <a href="about.html">About</a>
    <a href="privacy.html">Privacy</a>
    <a href="#generator" class="nav-pill">Make My PFP</a>
  </div>
</nav>

<section class="hero">
  <div class="hero-badge fu">🌴 Made for the Caribbean</div>
  <h1 class="fu d1">Your face.<br><em>Your</em> <span class="g">aesthetic.</span></h1>
  <p class="hero-desc fu d2">The only PFP generator built for Caribbean identity. Upload your photo, pick your aesthetic, get it colour-graded and download — free, private, made in Jamaica.</p>
  <div class="hero-stats fu d3">
    <div class="stat-item"><div class="num">8</div><div class="lbl">Caribbean aesthetics</div></div>
    <div class="stat-item"><div class="num">18–35</div><div class="lbl">Built for you</div></div>
    <div class="stat-item"><div class="num">100%</div><div class="lbl">Free to use</div></div>
    <div class="stat-item"><div class="num">🔒</div><div class="lbl">Photo destroyed on download</div></div>
  </div>

  <p class="sec-lbl">Choose your aesthetic</p>
  <div class="styles-grid" id="stylesGrid"></div>

  <!-- GENERATOR -->
  <div class="gen-box" id="generator">
    <div class="gen-title">Create your PFP</div>
    <div class="gen-sub">Upload · Style · Download — photo never leaves your device</div>

    <div class="steps" id="steps">
      <div class="step active" id="s0"><span class="step-n">1</span> Pick style</div>
      <div class="step" id="s1"><span class="step-n">2</span> Upload photo</div>
      <div class="step" id="s2"><span class="step-n">3</span> Apply filter</div>
      <div class="step" id="s3"><span class="step-n">4</span> Download</div>
    </div>

    <div class="priv-note">
      <span class="priv-note-icon">🔒</span>
      <span>Your photo stays in this browser only. It is permanently wiped from memory the moment you download your PFP — not when you close the tab, but <strong>immediately on download</strong>.</span>
    </div>

    <!-- UPLOAD -->
    <div class="upload-zone" id="uploadZone" onclick="document.getElementById('fi').click()">
      <div class="upload-icon">📸</div>
      <div class="upload-txt"><strong>Tap to upload your photo</strong><br>JPG or PNG · Processed in your browser only</div>
    </div>
    <input type="file" id="fi" accept="image/*">

    <!-- EDIT SECTION -->
    <div id="editSection" style="display:none">
      <p style="font-size:11px;color:#888;margin-bottom:8px;font-family:'Syne',sans-serif;text-transform:uppercase;letter-spacing:.12em;">Preview</p>
      <div class="preview-row">
        <div class="preview-box"><canvas id="cvOrig"></canvas><div class="prev-lbl">Original</div></div>
        <div class="preview-box"><canvas id="cvOut"></canvas><div class="prev-lbl" id="outLbl">Styled</div></div>
      </div>

      <p style="font-size:11px;color:#888;margin-bottom:8px;font-family:'Syne',sans-serif;text-transform:uppercase;letter-spacing:.12em;">Crop shape</p>
      <div class="shape-row">
        <button class="shape-btn active" id="shSq" onclick="setShape('square')">◻ Square</button>
        <button class="shape-btn" id="shCi" onclick="setShape('circle')">◯ Circle</button>
        <button class="shape-btn" id="shPo" onclick="setShape('portrait')">▯ Portrait</button>
      </div>

      <p style="font-size:11px;color:#888;margin-bottom:8px;font-family:'Syne',sans-serif;text-transform:uppercase;letter-spacing:.12em;">Filter variant</p>
      <div class="filter-row" id="filterRow"></div>

      <div class="int-row">
        <label>Intensity</label>
        <input type="range" id="intSlider" min="0" max="100" value="80" step="1" oninput="onInt(this.value)">
        <span class="int-val" id="intVal">80%</span>
      </div>

      <div class="action-row">
        <button class="btn-apply" id="applyBtn" onclick="applyFilter()">✦ Apply Style</button>
        <button class="btn-dl" id="dlBtn" disabled onclick="downloadAndDestroy()">⬇ Download PFP</button>
      </div>
    </div>

    <!-- DESTROYED BANNER -->
    <div class="destroyed-banner" id="destroyedBanner">
      <div class="db-icon">🛡️</div>
      <div class="db-title">Your photo has been destroyed.</div>
      <div class="db-sub">Your styled PFP was saved to your device.<br>Your original photo has been permanently removed from this session.</div>
      <div class="db-checks">
        <div class="db-check"><span class="db-check-icon">✓</span> Removed from browser memory</div>
        <div class="db-check"><span class="db-check-icon">✓</span> Canvases wiped and cleared</div>
        <div class="db-check"><span class="db-check-icon">✓</span> No copy stored on any server</div>
        <div class="db-check"><span class="db-check-icon">✓</span> No data sent to any third party</div>
      </div>
      <button class="btn-new" onclick="resetAll()">↺ Make Another PFP</button>
    </div>
  </div>

  <!-- TIPS -->
  <div class="result-area" id="resultArea">
    <div class="result-header" id="resultTitle"></div>
    <div class="result-sub" id="resultSub"></div>
    <div class="tips-box" id="tipsBox"><div class="tips-loading"><div class="spin"></div> Claude is styling your look…</div></div>
    <div class="kw-title">Pinterest keywords to use</div>
    <div class="kw-tags" id="kwTags"></div>
  </div>
</section>

<!-- PRIVACY STRIP -->
<div class="priv-strip">
  <div class="priv-inner">
    <div class="priv-inner-icon">🛡️</div>
    <div class="priv-inner-text">
      <strong>Your photo is destroyed immediately after download</strong>
      <span>No server upload. No storage. No third-party access. Wiped from browser memory the moment you tap Download.</span>
    </div>
    <a href="privacy.html" class="priv-inner-link">Read Privacy Policy →</a>
  </div>
</div>

<!-- GALLERY -->
<section class="gallery-sec">
  <p class="sec-lbl">Aesthetic inspiration</p>
  <div class="gallery-grid" id="galleryGrid"></div>
</section>

<!-- FOOTER -->
<div class="footer">
  <a href="index.html" class="footer-logo">YAARD<span>.</span></a>
  <div class="footer-links">
    <a href="about.html">About</a>
    <a href="privacy.html">Privacy Policy</a>
    <a href="mailto:hello@yaard.co">Contact</a>
  </div>
  <div>© 2026 YAARD — Caribbean PFP Generator · Ages 18+</div>
</div>

</div><!-- /mainSite -->

<script>
/* ── AGE GATE ── */
function enterSite(){
  sessionStorage.setItem('yaard_age','1');
  const g=document.getElementById('ageGate'),s=document.getElementById('mainSite');
  g.classList.add('hidden'); s.classList.add('visible');
  setTimeout(()=>{g.style.display='none';},450);
  document.body.style.overflow='';
}
function exitSite(){ window.location.href='https://www.google.com'; }
(function(){
  if(sessionStorage.getItem('yaard_age')==='1'){
    document.getElementById('ageGate').style.display='none';
    document.getElementById('mainSite').classList.add('visible');
  } else { document.body.style.overflow='hidden'; }
})();

/* ── DATA ── */
const STYLES=[
  {id:'melanin',name:'Melanin Glow',vibe:'Warm tones · Rich skin · Confident',
   grad:'linear-gradient(135deg,#C97B3A,#6B2D0F)',
   filters:[
     {name:'Warm Gold',fn:(d,a)=>grade(d,a,{r:1.18,g:1.05,b:0.72,br:12,co:1.15,sat:1.25,warm:20})},
     {name:'Amber Rich',fn:(d,a)=>grade(d,a,{r:1.22,g:1.0,b:0.65,br:8,co:1.2,sat:1.3,warm:28})},
     {name:'Sunset Skin',fn:(d,a)=>grade(d,a,{r:1.15,g:0.98,b:0.75,br:15,co:1.1,sat:1.2,warm:15})}
   ],
   kw:['melanin glow pfp','dark skin aesthetic','brown skin girl portrait','warm tone pfp 2026'],
   prompt:'5 short tips for a Melanin Glow PFP: lighting, background, outfit, pose, edit filter. Caribbean 18-35. Numbered list, 1-2 sentences each.'
  },
  {id:'golden',name:'Golden Hour',vibe:'Sunset · Tropical glow · Outdoors',
   grad:'linear-gradient(135deg,#F5C842,#E8722A)',
   filters:[
     {name:'Dusk Haze',fn:(d,a)=>grade(d,a,{r:1.25,g:1.1,b:0.6,br:20,co:1.1,sat:1.2,warm:30})},
     {name:'Bronze Light',fn:(d,a)=>grade(d,a,{r:1.3,g:1.05,b:0.55,br:15,co:1.15,sat:1.25,warm:35})},
     {name:'Soft Glow',fn:(d,a)=>grade(d,a,{r:1.2,g:1.15,b:0.8,br:25,co:1.05,sat:1.1,warm:20})}
   ],
   kw:['golden hour portrait pfp','sunset aesthetic profile','caribbean golden hour','tropical glow pfp'],
   prompt:'5 short tips for a Golden Hour PFP: best time, Jamaica outdoor location, pose, outfit colours, edit preset. Numbered list, 1-2 sentences each.'
  },
  {id:'y2k',name:'Y2K Vibes',vibe:'2000s energy · Flip phone · Retro digital',
   grad:'linear-gradient(135deg,#FF6EC7,#7B4FFF)',
   filters:[
     {name:'Faded Film',fn:(d,a)=>grade(d,a,{r:1.05,g:0.95,b:1.25,br:18,co:0.9,sat:1.15,fade:25})},
     {name:'Lo-Fi Pink',fn:(d,a)=>grade(d,a,{r:1.2,g:0.9,b:1.2,br:22,co:0.85,sat:1.2,fade:20})},
     {name:'Blue Tint',fn:(d,a)=>grade(d,a,{r:0.85,g:0.95,b:1.3,br:15,co:0.9,sat:1.1,fade:15})}
   ],
   kw:['y2k pfp black girl','y2k aesthetic profile','2000s pfp aesthetic','lo-fi y2k portrait'],
   prompt:'5 short tips for a Y2K aesthetic PFP: outfit, accessories, lo-fi filter, background, camera style. Caribbean 18-25. Numbered list, 1-2 sentences each.'
  },
  {id:'vamp',name:'Vamp Romantic',vibe:'Dark glamour · Moody · Editorial',
   grad:'linear-gradient(135deg,#3D0C11,#C0392B)',
   filters:[
     {name:'Dark Crimson',fn:(d,a)=>grade(d,a,{r:1.15,g:0.75,b:0.75,br:-18,co:1.3,sat:0.9,shadow:20})},
     {name:'Moody Wine',fn:(d,a)=>grade(d,a,{r:1.1,g:0.7,b:0.8,br:-22,co:1.35,sat:0.85,shadow:25})},
     {name:'Cinematic',fn:(d,a)=>grade(d,a,{r:1.0,g:0.8,b:0.85,br:-15,co:1.25,sat:0.8,shadow:15})}
   ],
   kw:['vamp romantic pfp','dark glamour aesthetic','moody editorial pfp','dark romantic portrait'],
   prompt:'5 short tips for a Vamp Romantic dark editorial PFP: makeup, lighting, outfit, location, edit style. Caribbean 20-35. Numbered list, 1-2 sentences each.'
  },
  {id:'poetcore',name:'Poetcore',vibe:'Academia · Intellectual · Golden indoors',
   grad:'linear-gradient(135deg,#B5934A,#5C3D1E)',
   filters:[
     {name:'Amber Tone',fn:(d,a)=>grade(d,a,{r:1.15,g:1.05,b:0.7,br:5,co:1.2,sat:0.85,warm:15})},
     {name:'Old Film',fn:(d,a)=>grade(d,a,{r:1.1,g:1.0,b:0.75,br:3,co:1.15,sat:0.75,fade:18})},
     {name:'Warm Sepia',fn:(d,a)=>grade(d,a,{r:1.2,g:1.0,b:0.65,br:0,co:1.1,sat:0.7,warm:20})}
   ],
   kw:['poetcore pfp melanin','dark academia portrait','poet aesthetic pfp','bookish profile picture'],
   prompt:'5 short tips for a Poetcore PFP: wardrobe, props, indoor lighting, location, edit tones. Caribbean 18-30. Numbered list, 1-2 sentences each.'
  },
  {id:'coolblue',name:'Cool Blue',vibe:'Icy · Serene · Ocean-coded',
   grad:'linear-gradient(135deg,#4FC3F7,#1565C0)',
   filters:[
     {name:'Arctic',fn:(d,a)=>grade(d,a,{r:0.8,g:1.0,b:1.35,br:15,co:1.15,sat:1.1,cool:20})},
     {name:'Cyan Pop',fn:(d,a)=>grade(d,a,{r:0.75,g:1.05,b:1.3,br:20,co:1.1,sat:1.2,cool:25})},
     {name:'Deep Water',fn:(d,a)=>grade(d,a,{r:0.7,g:0.9,b:1.35,br:10,co:1.2,sat:1.0,cool:15})}
   ],
   kw:['cool blue aesthetic pfp','icy portrait caribbean','ocean aesthetic profile','blue pfp aesthetic'],
   prompt:'5 short tips for a Cool Blue PFP: clothing colours, cool-tone lighting, Kingston ocean locations, pose, VSCO filter. Numbered list, 1-2 sentences each.'
  },
  {id:'dancehall',name:'Dancehall Street',vibe:'Bold · Energy · Kingston vibes',
   grad:'linear-gradient(135deg,#1A5C3A,#F5C842)',
   filters:[
     {name:'Vivid JA',fn:(d,a)=>grade(d,a,{r:1.1,g:1.15,b:0.7,br:18,co:1.2,sat:1.5,warm:10})},
     {name:'Neon Pop',fn:(d,a)=>grade(d,a,{r:1.0,g:1.2,b:0.6,br:22,co:1.15,sat:1.6,warm:5})},
     {name:'Street Bold',fn:(d,a)=>grade(d,a,{r:1.05,g:1.1,b:0.75,br:15,co:1.25,sat:1.4,warm:8})}
   ],
   kw:['dancehall aesthetic pfp','kingston street style pfp','caribbean streetwear portrait','jamaican style pfp'],
   prompt:'5 short tips for a Dancehall Street PFP: outfit/sneakers, Kingston locations, bold poses, colour choices, phone editing. Numbered list, 1-2 sentences each.'
  },
  {id:'softglow',name:'Soft Glow',vibe:'Pastel · Dewy skin · Jelly vibes',
   grad:'linear-gradient(135deg,#FADADD,#E07B9A)',
   filters:[
     {name:'Jelly Pink',fn:(d,a)=>grade(d,a,{r:1.15,g:0.95,b:1.05,br:25,co:0.9,sat:1.15,fade:15})},
     {name:'Peach Dream',fn:(d,a)=>grade(d,a,{r:1.2,g:1.05,b:0.95,br:28,co:0.88,sat:1.1,fade:18})},
     {name:'Lavender',fn:(d,a)=>grade(d,a,{r:1.05,g:0.9,b:1.15,br:30,co:0.85,sat:1.05,fade:20})}
   ],
   kw:['soft glow pfp','dewy skin aesthetic pfp','pastel pfp caribbean','jelly blush aesthetic portrait'],
   prompt:'5 short tips for a Soft Glow pastel PFP: dewy makeup, ring-light, pastel outfit, soft background, VSCO filter. Caribbean women 18-28. Numbered list, 1-2 sentences each.'
  }
];

const GALLERY=[
  {label:'🖤 Melanin Glow',bg:'linear-gradient(160deg,#D4844A,#7A3310 60%,#3D1A08)'},
  {label:'🌅 Golden Hour',bg:'linear-gradient(160deg,#FFD166,#EF8C4A 50%,#C0392B)'},
  {label:'💜 Y2K Vibes',bg:'linear-gradient(160deg,#FF6FD8,#9B5DE5 50%,#00BBF9)'},
  {label:'🩸 Vamp Romantic',bg:'linear-gradient(160deg,#2D0A12,#7B1325 60%,#B03040)'},
  {label:'📖 Poetcore',bg:'linear-gradient(160deg,#C9A96E,#7A5230 60%,#3E2A18)'},
  {label:'🌊 Cool Blue',bg:'linear-gradient(160deg,#81D4FA,#1976D2 60%,#0D47A1)'},
];

/* ── STATE ── */
let selStyle=null,selFilter=0,shape='square',intensity=80,origImg=null,styled=false;

/* ── CANVAS GRADING ── */
function grade(data,alpha,cfg){
  const d=data.data,len=d.length;
  const {r=1,g=1,b=1,br=0,co=1,sat=1,warm=0,cool=0,fade=0,shadow=0}=cfg;
  const brA=br*2.55;
  for(let i=0;i<len;i+=4){
    let rv=d[i],gv=d[i+1],bv=d[i+2];
    rv=rv*r+brA; gv=gv*g+brA; bv=bv*b+brA;
    const avg=(rv+gv+bv)/3;
    rv=avg+(rv-avg)*co; gv=avg+(gv-avg)*co; bv=avg+(bv-avg)*co;
    const gray=0.299*rv+0.587*gv+0.114*bv;
    rv=gray+(rv-gray)*sat; gv=gray+(gv-gray)*sat; bv=gray+(bv-gray)*sat;
    if(warm){rv+=warm*0.6;gv+=warm*0.2;bv-=warm*0.4;}
    if(cool){bv+=cool*0.7;gv+=cool*0.1;rv-=cool*0.3;}
    if(fade){const f=fade*2.55;rv=rv*(1-fade/100)+f;gv=gv*(1-fade/100)+f;bv=bv*(1-fade/100)+f;}
    if(shadow){const s=shadow/100;rv*=(1-s*0.4);gv*=(1-s*0.4);bv*=(1-s*0.4);}
    const bl=alpha/100;
    d[i]=Math.max(0,Math.min(255,d[i]*(1-bl)+Math.round(rv)*bl));
    d[i+1]=Math.max(0,Math.min(255,d[i+1]*(1-bl)+Math.round(gv)*bl));
    d[i+2]=Math.max(0,Math.min(255,d[i+2]*(1-bl)+Math.round(bv)*bl));
  }
}

/* ── DESTROY ── */
function destroyPhoto(){
  ['cvOrig','cvOut'].forEach(id=>{
    const cv=document.getElementById(id);
    cv.getContext('2d').clearRect(0,0,cv.width,cv.height);
    cv.width=1; cv.height=1;
  });
  if(origImg){origImg.src='';origImg=null;}
  styled=false;
  document.getElementById('fi').value='';
  document.getElementById('dlBtn').disabled=true;
}

function downloadAndDestroy(){
  if(!styled) return;
  const cv=document.getElementById('cvOut');
  const a=document.createElement('a');
  a.download='yaard-pfp-'+(selStyle?selStyle.id:'photo')+'.png';
  a.href=cv.toDataURL('image/png');
  a.click();
  setTimeout(()=>{
    destroyPhoto();
    document.getElementById('editSection').style.display='none';
    document.getElementById('destroyedBanner').style.display='block';
    setStep(3,'done');
  },300);
}

function resetAll(){
  document.getElementById('destroyedBanner').style.display='none';
  document.getElementById('uploadZone').style.display='block';
  document.getElementById('editSection').style.display='none';
  document.getElementById('resultArea').classList.remove('show');
  ['s0','s1','s2','s3'].forEach((id,i)=>{
    const el=document.getElementById(id);
    el.className='step'+(i===0?' active':'');
  });
  document.querySelectorAll('.style-card').forEach(c=>c.classList.remove('active'));
  selStyle=null;selFilter=0;shape='square';intensity=80;origImg=null;styled=false;
  document.getElementById('intSlider').value=80;
  document.getElementById('intVal').textContent='80%';
  ['shSq','shCi','shPo'].forEach((id,i)=>document.getElementById(id).classList.toggle('active',i===0));
}

/* ── STEP TRACKER ── */
function setStep(n,state){
  const ids=['s0','s1','s2','s3'];
  const el=document.getElementById(ids[n]);
  el.className='step '+state;
}

/* ── BUILD GRIDS ── */
const sg=document.getElementById('stylesGrid');
STYLES.forEach(s=>{
  const c=document.createElement('div');
  c.className='style-card'; c.id='sc-'+s.id;
  c.innerHTML=`<div class="swatch" style="background:${s.grad}"></div><div class="style-name">${s.name}</div><div class="style-vibe">${s.vibe}</div>`;
  c.onclick=()=>pickStyle(s);
  sg.appendChild(c);
});
const gg=document.getElementById('galleryGrid');
GALLERY.forEach(g=>{
  const el=document.createElement('div');
  el.className='gallery-item';
  el.innerHTML=`<div class="gal-swatch" style="background:${g.bg}"><span class="gal-lbl">${g.label}</span></div>`;
  gg.appendChild(el);
});

/* ── PICK STYLE ── */
function pickStyle(s){
  selStyle=s; selFilter=0;
  document.querySelectorAll('.style-card').forEach(c=>c.classList.remove('active'));
  document.getElementById('sc-'+s.id).classList.add('active');
  document.getElementById('outLbl').textContent=s.name;
  buildFilterRow();
  setStep(0,'done'); setStep(1,'active');
  if(origImg) applyFilter();
}

/* ── FILTER ROW ── */
function buildFilterRow(){
  const fr=document.getElementById('filterRow'); fr.innerHTML='';
  if(!selStyle) return;
  selStyle.filters.forEach((f,i)=>{
    const b=document.createElement('button');
    b.className='filter-btn'+(i===selFilter?' active':'');
    b.textContent=f.name;
    b.onclick=()=>{selFilter=i;buildFilterRow();if(origImg)applyFilter();};
    fr.appendChild(b);
  });
}

/* ── SHAPE ── */
function setShape(sh){
  shape=sh;
  document.getElementById('shSq').classList.toggle('active',sh==='square');
  document.getElementById('shCi').classList.toggle('active',sh==='circle');
  document.getElementById('shPo').classList.toggle('active',sh==='portrait');
  if(origImg){drawOrig();applyFilter();}
}

/* ── INTENSITY ── */
function onInt(v){
  intensity=parseInt(v);
  document.getElementById('intVal').textContent=v+'%';
  if(origImg&&selStyle) applyFilter();
}

/* ── DRAW ── */
function drawToCanvas(cv,img){
  const sz=shape==='portrait'?{w:400,h:533}:{w:400,h:400};
  cv.width=sz.w; cv.height=sz.h;
  const ctx=cv.getContext('2d');
  ctx.clearRect(0,0,sz.w,sz.h);
  if(shape==='circle'){ctx.save();ctx.beginPath();ctx.arc(sz.w/2,sz.h/2,sz.w/2,0,Math.PI*2);ctx.clip();}
  const ar=img.width/img.height,cAr=sz.w/sz.h;
  let sx=0,sy=0,sw=img.width,sh=img.height;
  if(ar>cAr){sw=img.height*cAr;sx=(img.width-sw)/2;}
  else{sh=img.width/cAr;sy=(img.height-sh)/2;}
  ctx.drawImage(img,sx,sy,sw,sh,0,0,sz.w,sz.h);
  if(shape==='circle') ctx.restore();
}
function drawOrig(){ drawToCanvas(document.getElementById('cvOrig'),origImg); }

function applyFilter(){
  if(!origImg||!selStyle) return;
  const cv=document.getElementById('cvOut');
  drawToCanvas(cv,origImg);
  const ctx=cv.getContext('2d');
  const id=ctx.getImageData(0,0,cv.width,cv.height);
  selStyle.filters[selFilter].fn(id,intensity);
  ctx.putImageData(id,0,0);
  styled=true;
  document.getElementById('dlBtn').disabled=false;
  setStep(2,'done'); setStep(3,'active');
}

/* ── FILE UPLOAD ── */
document.getElementById('fi').addEventListener('change',function(e){
  const file=e.target.files[0]; if(!file) return;
  const reader=new FileReader();
  reader.onload=ev=>{
    const img=new Image();
    img.onload=()=>{
      origImg=img;
      document.getElementById('uploadZone').style.display='none';
      document.getElementById('editSection').style.display='block';
      drawOrig();
      setStep(1,'done'); setStep(2,'active');
      if(selStyle) applyFilter();
      fetchTips();
    };
    img.src=ev.target.result;
  };
  reader.readAsDataURL(file);
});

/* ── TIPS (Claude API) ── */
async function fetchTips(){
  if(!selStyle) return;
  const ra=document.getElementById('resultArea');
  ra.classList.add('show');
  document.getElementById('resultTitle').textContent=selStyle.name+' — Your Style Guide';
  document.getElementById('resultSub').textContent='Personalised styling tips for your '+selStyle.name+' PFP';
  document.getElementById('tipsBox').innerHTML='<div class="tips-loading"><div class="spin"></div> Claude is styling your look…</div>';
  const kc=document.getElementById('kwTags'); kc.innerHTML='';
  selStyle.kw.forEach(k=>{const t=document.createElement('span');t.className='kw-tag';t.textContent='#'+k.replace(/ /g,'');kc.appendChild(t);});
  try{
    // Calls the secure Netlify serverless proxy — API key stays server-side only
    const res=await fetch('/.netlify/functions/claude-proxy',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({prompt:selStyle.prompt, style:selStyle.name})
    });
    if(!res.ok) throw new Error('Proxy returned '+res.status);
    const data=await res.json();
    const text=data.text||'Tips unavailable.';
    const html=text.split('\n').filter(l=>l.trim()).map(l=>{
      const m=l.match(/^(\d+\.)\s*(.*)/);
      return m?`<div style="margin-bottom:.5rem"><strong style="color:var(--rust)">${m[1]}</strong> ${m[2]}</div>`:`<div style="margin-bottom:.3rem">${l}</div>`;
    }).join('');
    document.getElementById('tipsBox').innerHTML=html;
  }catch(e){
    document.getElementById('tipsBox').innerHTML='<em style="color:var(--muted)">Style tips unavailable right now — try again in a moment.</em>';
  }
}
</script>
</body>
</html>
