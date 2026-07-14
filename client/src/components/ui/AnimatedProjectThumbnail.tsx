/**
 * AnimatedProjectThumbnail
 * -------------------------------------------------------------------------
 * Looping, per-project animated cover art for the case-study cards.
 * One component, four scenes (Uber / Anand PAG / Nomad AI / Skingenius),
 * each drawn from the project itself and carrying its own theme color.
 *
 * Design notes
 * - Fully self-contained: pure CSS + inline SVG, no images, no fonts, no
 *   Tailwind, no external assets. Drop it anywhere.
 * - Fills its parent (position:absolute; inset:0). Put it where an <img> /
 *   <ThumbnailPreviewMedia> currently lives inside <EditorialThumbnailLink>.
 * - Sizing is fluid via CSS container-query units (cqw) + percentages, so the
 *   scenes adapt to whatever panel height/width the card gives them.
 * - The scene markup is verified motion art with no user input, so it is
 *   rendered once via dangerouslySetInnerHTML and kept out of the React render
 *   path. Treat each SCENE string as a static asset.
 * - Animations calm to a rest state and play on hover (the panel is the hover
 *   target). Pass `motion="always"` for ambient looping instead.
 *
 * Optional: for an exact type match to the design, load JetBrains Mono +
 * Newsreader. Without them the scenes fall back to monospace / serif and still
 * look correct.
 */
import { useId } from "react";

export type AnimatedThumbnailVariant =
  | "uber-driver-navigation"
  | "anand-pag"
  | "nomad-ai"
  | "skingenius"
  | "learning-council"
  | "finwise"
  | "aisli-research";

const KEYFRAMES = `
/* shared rest/hover gate */
[data-apt][data-apt-motion="hover"] [data-apt-scene] *{animation-play-state:paused!important}
[data-apt][data-apt-motion="hover"]:hover [data-apt-scene] *{animation-play-state:running!important}

/* uber */
@keyframes uGrid{to{transform:translate(-11%,-16%)}}
@keyframes uFlow{to{stroke-dashoffset:-28}}
@keyframes uPulse{0%,100%{opacity:.25;transform:rotate(-45deg) scale(.85)}50%{opacity:.9;transform:rotate(-45deg) scale(1.15)}}
@keyframes uReq{0%,6%{opacity:0;transform:translateY(14%) scale(.96)}14%,40%{opacity:1;transform:translateY(0) scale(1)}48%{opacity:0;transform:translateY(-8%) scale(.92)}100%{opacity:0}}
@keyframes uShield{0%,46%{opacity:0;transform:translateY(-6%) scale(.9)}54%,90%{opacity:1;transform:translateY(0) scale(1)}98%,100%{opacity:0;transform:scale(.92)}}
@keyframes uCar{0%,100%{filter:drop-shadow(0 0 5px #ffce8e)}50%{filter:drop-shadow(0 0 9px #ffd9a0)}}

/* anand pag */
@keyframes pFlow{0%{left:4%;opacity:0}8%{opacity:1}92%{opacity:1}100%{left:90%;opacity:0}}
@keyframes pNode{0%,100%{box-shadow:0 0 0 0 #cdaf7e00;border-color:#d8c0a0;background:#fbf4e7}50%{box-shadow:0 0 0 1.6cqw #cdaf7e33;border-color:#a9844f;background:#fff}}
@keyframes pSweep{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}
@keyframes pStack{0%,12%{opacity:0;transform:translateY(2.4cqw) scale(.9)}24%,88%{opacity:1;transform:translateY(0) scale(1)}100%{opacity:0}}
@keyframes pTick{0%,40%{opacity:0;transform:scale(.4)}55%,100%{opacity:1;transform:scale(1)}}

/* nomad */
@keyframes nFlow{to{stroke-dashoffset:-200}}
@keyframes nBar{0%{transform:scaleY(.18)}100%{transform:scaleY(1)}}
@keyframes nPill{0%,100%{box-shadow:0 0 0 0 #8fe3b400}50%{box-shadow:0 0 0 1.4cqw #8fe3b41f}}
@keyframes nDot{0%,100%{opacity:.5;transform:scale(.8)}50%{opacity:1;transform:scale(1.25)}}
@keyframes nScan{0%{transform:translateX(-30%)}100%{transform:translateX(360%)}}
@keyframes nRise{0%{stroke-dashoffset:340}100%{stroke-dashoffset:0}}

/* skingenius */
@keyframes sScan{to{transform:rotate(360deg)}}
@keyframes sOrbit{from{transform:rotate(0deg) translateX(var(--r)) rotate(0deg)}to{transform:rotate(360deg) translateX(var(--r)) rotate(-360deg)}}
@keyframes sQuiz{0%,100%{background:#f3d8cb;transform:scale(1)}50%{background:#d98c73;transform:scale(1.18)}}
@keyframes sFan{0%,18%{opacity:0;transform:translateX(2cqw) rotate(var(--rot)) translateY(.6cqw)}30%,90%{opacity:1;transform:translateX(0) rotate(var(--rot))}100%{opacity:0}}
@keyframes sPulse{0%,100%{box-shadow:0 0 0 0 #d98c7322}50%{box-shadow:0 0 0 2.4cqw #d98c7300}}

/* learning-council (multi-agent workspace) */
@keyframes cTask{0%,4%{opacity:0;transform:translateX(-3cqw)}10%,26%{opacity:1;transform:translateX(0)}34%{opacity:0;transform:translateX(2cqw)}100%{opacity:0}}
@keyframes cThink{0%,100%{opacity:.4;transform:scale(.9);border-color:#3a4038}50%{opacity:1;transform:scale(1.06);border-color:#9bbfa3}}
@keyframes cLink{to{stroke-dashoffset:-22}}
@keyframes cCrit{0%,40%{opacity:0;stroke-dashoffset:60}52%,82%{opacity:1;stroke-dashoffset:0}94%,100%{opacity:0}}
@keyframes cMem{0%,55%{opacity:0;transform:translateY(2.4cqw) scale(.92)}66%,92%{opacity:1;transform:translateY(0) scale(1)}100%{opacity:0;transform:translateY(-1.6cqw)}}
@keyframes cDot{0%,100%{opacity:.3}50%{opacity:1}}

/* finwise (ai-wealth-associate) */
@keyframes fReb1{0%,100%{flex-grow:42}50%{flex-grow:30}}
@keyframes fReb2{0%,100%{flex-grow:30}50%{flex-grow:24}}
@keyframes fReb3{0%,100%{flex-grow:28}50%{flex-grow:46}}
@keyframes fDraw{0%{stroke-dashoffset:200}60%,100%{stroke-dashoffset:0}}
@keyframes fWhy{0%,30%{opacity:0;transform:translateY(1.6cqw)}42%,90%{opacity:1;transform:translateY(0)}100%{opacity:0}}
@keyframes fShield{0%,55%{opacity:0;transform:scale(.7)}68%,100%{opacity:1;transform:scale(1)}}
@keyframes fDot{0%,100%{opacity:.35}50%{opacity:1}}
@keyframes fScan{0%{transform:translateX(-40%)}100%{transform:translateX(340%)}}

/* aisli-research (audio to ISL) */
@keyframes aWave1{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}
@keyframes aWave2{0%,100%{transform:scaleY(.9)}50%{transform:scaleY(.35)}}
@keyframes aWave3{0%,100%{transform:scaleY(.5)}50%{transform:scaleY(1)}}
@keyframes aFlow{to{stroke-dashoffset:-24}}
@keyframes aGloss{0%,8%{opacity:0;transform:translateY(1.4cqw)}16%,30%{opacity:1;transform:translateY(0)}38%{opacity:0;transform:translateY(-1cqw)}100%{opacity:0}}
@keyframes aPose{0%,100%{opacity:0}8%,25%{opacity:1}33%{opacity:0}}
@keyframes aPulse{0%,100%{box-shadow:0 0 0 0 #b9a7f000}50%{box-shadow:0 0 0 2cqw #b9a7f01f}}
@keyframes aDot{0%,100%{opacity:.35}50%{opacity:1}}

@media (prefers-reduced-motion: reduce){
  [data-apt] [data-apt-scene] *{animation:none!important}
}
`;

const MONO = "'JetBrains Mono','SFMono-Regular',ui-monospace,monospace";
const SERIF = "'Newsreader','Iowan Old Style',Georgia,serif";

/** Each scene fills its parent and establishes a size container for cqw units. */
const sceneOpen = (bg: string, color: string) =>
  `<div data-apt-scene style="position:absolute;inset:0;container-type:size;overflow:hidden;background:${bg};font-family:${MONO};color:${color}">`;

const SCENES: Record<AnimatedThumbnailVariant, string> = {
  "uber-driver-navigation":
    sceneOpen(
      "radial-gradient(120% 110% at 72% 18%,#26190f 0%,#15100b 60%,#0f0b07 100%)",
      "#fbeede",
    ) +
    `<div data-apt-veil style="position:absolute;inset:0;transition:filter .5s ease">
      <div style="position:absolute;inset:-12%;background-image:linear-gradient(to right,#ffffff0d 1px,transparent 1px),linear-gradient(to bottom,#ffffff0d 1px,transparent 1px);background-size:11% 16%;animation:uGrid 16s linear infinite"></div>
      <div style="position:absolute;width:46%;height:46%;left:30%;top:18%;border-radius:50%;background:radial-gradient(circle,#b5966733,transparent 70%);filter:blur(6px)"></div>
      <svg viewBox="0 0 120 80" preserveAspectRatio="none" style="position:absolute;inset:0;width:100%;height:100%" fill="none">
        <path d="M8 70 C 26 70 30 50 46 50 C 64 50 64 36 80 36 C 96 36 100 18 114 14" stroke="#7c6038" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-stroke" opacity="0.5"/>
        <path id="uroute" d="M8 70 C 26 70 30 50 46 50 C 64 50 64 36 80 36 C 96 36 100 18 114 14" stroke="#d8b072" stroke-width="3.4" stroke-linecap="round" stroke-dasharray="10 14" vector-effect="non-scaling-stroke" style="animation:uFlow 2.2s linear infinite"></path>
        <g stroke="#ffce8e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" opacity="0.96">
          <path d="M33 57 L36 52 L30 51" />
          <path d="M74 43 L77 37 L71 36" />
        </g>
        <circle r="1.15" fill="#ffe1ad" style="animation:uCar 3s ease-in-out infinite">
          <animateMotion dur="9s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="linear"><mpath href="#uroute"></mpath></animateMotion>
        </circle>
      </svg>
      <div style="position:absolute;left:5.5%;top:7%;display:flex;align-items:center;gap:1.6cqw;font-size:3.1cqw;letter-spacing:.14em;color:#caa478">
        <span style="width:1.8cqw;height:1.8cqw;border-radius:50%;background:#ffce8e;box-shadow:0 0 0 1.2cqw #ffce8e22"></span>NAVIGATING
      </div>
      <div style="position:absolute;left:8%;right:8%;bottom:8%;background:#1d1610f2;border:1px solid #4a3a25;border-radius:3cqw;padding:3.4cqw 4cqw;display:flex;align-items:center;gap:3cqw;box-shadow:0 8cqw 18cqw -6cqw #000;animation:uReq 10s ease-in-out infinite">
        <div style="width:9cqw;height:9cqw;border-radius:50%;background:linear-gradient(135deg,#d8b072,#a87b3e);flex:none"></div>
        <div style="flex:1;min-width:0">
          <div style="font-size:3.6cqw;font-weight:600;color:#fbeede">New ride request</div>
          <div style="font-size:2.9cqw;color:#9c8a72;margin-top:.6cqw">4.8&#9733; &middot; 6 min &middot; $14.20</div>
        </div>
        <div style="font-size:3.2cqw;font-weight:600;color:#15100b;background:#ffce8e;border-radius:2cqw;padding:1.8cqw 3cqw">Accept</div>
      </div>
      <div style="position:absolute;right:7%;bottom:9%;display:flex;align-items:center;gap:2cqw;background:#1d1610ee;border:1px solid #5a4527;border-radius:99px;padding:1.8cqw 2.8cqw;box-shadow:0 6cqw 14cqw -6cqw #000;animation:uShield 10s ease-in-out infinite">
        <span style="width:4.4cqw;height:4.4cqw;border-radius:50%;background:#ffce8e;display:flex;align-items:center;justify-content:center;color:#15100b;font-size:2.6cqw;font-weight:700">1</span>
        <span style="font-size:3cqw;font-weight:600;color:#fbeede;white-space:nowrap">ride queued</span>
      </div>
    </div></div>`,

  "anand-pag":
    sceneOpen(
      "radial-gradient(120% 130% at 30% 0%,#fbf4e7 0%,#f4e9d6 65%,#ecdfca 100%)",
      "#3a3026",
    ) +
    `<div style="position:absolute;left:6%;top:8%;display:flex;align-items:center;gap:1.6cqw;font-size:3.1cqw;letter-spacing:.14em;color:#9c7b46">
      <span style="width:1.8cqw;height:1.8cqw;border-radius:50%;background:#b89255"></span>VENDOR OPS &middot; LIVE
    </div>
    <div style="position:absolute;left:8%;right:8%;top:50%;height:.7cqw;border-radius:99px;background:#e0d0b6;overflow:hidden">
      <div style="position:absolute;inset:0;width:34%;background:linear-gradient(90deg,transparent,#caa468,transparent);animation:pSweep 5s linear infinite"></div>
    </div>
    <div style="position:absolute;left:8%;right:8%;top:50%;transform:translateY(-50%);display:flex;justify-content:space-between">
      <div style="display:flex;flex-direction:column;align-items:center;gap:1.4cqw"><div style="width:6.4cqw;height:6.4cqw;border-radius:50%;border:1.6px solid #d8c0a0;background:#fbf4e7;animation:pNode 6s ease-in-out infinite"></div><div style="font-size:2.5cqw;color:#8a7355">Received</div></div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:1.4cqw"><div style="width:6.4cqw;height:6.4cqw;border-radius:50%;border:1.6px solid #d8c0a0;background:#fbf4e7;animation:pNode 6s ease-in-out infinite 1.5s"></div><div style="font-size:2.5cqw;color:#8a7355">Processing</div></div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:1.4cqw"><div style="width:6.4cqw;height:6.4cqw;border-radius:50%;border:1.6px solid #d8c0a0;background:#fbf4e7;animation:pNode 6s ease-in-out infinite 3s"></div><div style="font-size:2.5cqw;color:#8a7355">Evidence</div></div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:1.4cqw">
        <div style="position:relative;width:6.4cqw;height:6.4cqw;border-radius:50%;border:1.6px solid #a9844f;background:#fff;animation:pNode 6s ease-in-out infinite 4.5s">
          <span style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#5f8a4e;font-size:3.6cqw;font-weight:700;animation:pTick 6s ease-in-out infinite 4.5s">&#10003;</span>
        </div>
        <div style="font-size:2.5cqw;color:#8a7355">Bundled</div>
      </div>
    </div>
    <div data-apt-tile style="position:absolute;top:calc(50% - 6.2cqw);width:5cqw;height:3.4cqw;border-radius:1cqw;background:#fff;border:1px solid #d8c0a0;box-shadow:0 1.4cqw 3cqw -1.4cqw #b5945a66;animation:pFlow 8s linear infinite"></div>
    <div data-apt-tile style="position:absolute;top:calc(50% - 6.2cqw);width:5cqw;height:3.4cqw;border-radius:1cqw;background:#f6ecda;border:1px solid #d8c0a0;box-shadow:0 1.4cqw 3cqw -1.4cqw #b5945a66;animation:pFlow 8s linear infinite 2.6s"></div>
    <div data-apt-tile style="position:absolute;top:calc(50% - 6.2cqw);width:5cqw;height:3.4cqw;border-radius:1cqw;background:#fff;border:1px solid #d8c0a0;box-shadow:0 1.4cqw 3cqw -1.4cqw #b5945a66;animation:pFlow 8s linear infinite 5.2s"></div>
    <div style="position:absolute;right:8%;bottom:11%;display:flex;flex-direction:column;gap:1.1cqw;align-items:flex-end">
      <div style="width:15cqw;height:2.6cqw;border-radius:.8cqw;background:#caa468;animation:pStack 7s ease-in-out infinite"></div>
      <div style="width:12cqw;height:2.6cqw;border-radius:.8cqw;background:#d8bd8e;animation:pStack 7s ease-in-out infinite .9s"></div>
      <div style="width:13.5cqw;height:2.6cqw;border-radius:.8cqw;background:#e3cda4;animation:pStack 7s ease-in-out infinite 1.8s"></div>
    </div>
    <div style="position:absolute;left:8%;bottom:11%;font-size:2.7cqw;font-weight:600;color:#5f8a4e">95% &#8594; 100% success</div></div>`,

  "nomad-ai":
    sceneOpen(
      "radial-gradient(130% 120% at 78% 8%,#1b293a 0%,#0d1420 60%,#090e16 100%)",
      "#cdd9ec",
    ) +
    `<div style="position:absolute;inset:0;background:radial-gradient(60% 50% at 80% 12%,#9fb9e122,transparent 70%)"></div>
    <div style="position:absolute;left:6.5%;top:9%;display:flex;align-items:center;gap:1.6cqw;font-size:3cqw;letter-spacing:.14em;color:#9fb9e1">
      <span style="width:1.8cqw;height:1.8cqw;border-radius:50%;background:#7fe0a8;animation:nDot 3.5s ease-in-out infinite"></span>VALUATION ENGINE
    </div>
    <div style="position:absolute;left:6.5%;top:20%;font-family:${SERIF};font-size:9cqw;font-weight:600;color:#f3f7fd;letter-spacing:-.01em">$2.4M</div>
    <div style="position:absolute;left:6.5%;top:36%;display:inline-flex;align-items:center;gap:1.2cqw;font-size:2.8cqw;font-weight:600;color:#7fe0a8;background:#14271d;border:1px solid #2c5640;border-radius:99px;padding:1cqw 2.2cqw;animation:nPill 4.5s ease-in-out infinite">&#9650; +865% growth</div>
    <svg viewBox="0 0 120 80" preserveAspectRatio="none" style="position:absolute;inset:0;width:100%;height:100%" fill="none">
      <defs><linearGradient id="nArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fb9e1" stop-opacity="0.35"/><stop offset="1" stop-color="#9fb9e1" stop-opacity="0"/></linearGradient></defs>
      <path d="M6 70 C 28 66 40 60 56 50 C 72 40 84 24 114 14 L 114 80 L 6 80 Z" fill="url(#nArea)" opacity="0.9"/>
      <path id="ncurve" d="M6 70 C 28 66 40 60 56 50 C 72 40 84 24 114 14" stroke="#bcd1f2" stroke-width="2.4" stroke-linecap="round" vector-effect="non-scaling-stroke" stroke-dasharray="340" style="animation:nRise 4.5s ease-out forwards"/>
      <path d="M6 70 C 28 66 40 60 56 50 C 72 40 84 24 114 14" stroke="#eaf2ff" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="3 9" vector-effect="non-scaling-stroke" opacity="0.8" style="animation:nFlow 4s linear infinite"/>
      <circle r="1.3" fill="#eaf2ff" style="filter:drop-shadow(0 0 4px #bcd1f2)"><animateMotion dur="4.5s" fill="freeze" rotate="0"><mpath href="#ncurve"></mpath></animateMotion></circle>
    </svg>
    <div style="position:absolute;left:6.5%;right:6.5%;bottom:9%;height:24%;display:flex;align-items:flex-end;gap:2.2cqw">
      <div data-apt-bar style="flex:1;height:46%;border-radius:1cqw 1cqw 0 0;background:linear-gradient(#7e93b8,#4d6086);transform-origin:bottom;animation:nBar 3.5s cubic-bezier(.3,.7,.3,1) infinite alternate"></div>
      <div data-apt-bar style="flex:1;height:64%;border-radius:1cqw 1cqw 0 0;background:linear-gradient(#9fb9e1,#5f78a6);transform-origin:bottom;animation:nBar 3.5s cubic-bezier(.3,.7,.3,1) infinite alternate .4s"></div>
      <div data-apt-bar style="flex:1;height:84%;border-radius:1cqw 1cqw 0 0;background:linear-gradient(#b9cdee,#7a93c4);transform-origin:bottom;animation:nBar 3.5s cubic-bezier(.3,.7,.3,1) infinite alternate .8s"></div>
      <div data-apt-bar style="flex:1;height:100%;border-radius:1cqw 1cqw 0 0;background:linear-gradient(#d6e4ff,#9fb9e1);transform-origin:bottom;animation:nBar 3.5s cubic-bezier(.3,.7,.3,1) infinite alternate 1.2s"></div>
    </div>
    <div style="position:absolute;top:0;bottom:0;width:18%;background:linear-gradient(90deg,transparent,#9fb9e114,transparent);animation:nScan 8s ease-in-out infinite"></div></div>`,

  skingenius:
    sceneOpen(
      "radial-gradient(120% 120% at 28% 12%,#fef0e9 0%,#fadfd2 60%,#f4d0c0 100%)",
      "#7a4f3f",
    ) +
    `<div style="position:absolute;left:6%;top:8%;display:flex;align-items:center;gap:1.6cqw;font-size:3cqw;letter-spacing:.13em;color:#bf6f55">
      <span style="width:1.8cqw;height:1.8cqw;border-radius:50%;background:#d98c73"></span>SKIN ANALYSIS
    </div>
    <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:42cqw;height:42cqw">
      <div style="position:absolute;inset:0;border-radius:50%;border:1.6px solid #e7b6a4;animation:sPulse 5s ease-in-out infinite"></div>
      <div data-apt-ring style="position:absolute;inset:0;border-radius:50%;background:conic-gradient(from 0deg,transparent 0deg,#d98c7300 250deg,#d98c7355 330deg,#d98c73aa 360deg);animation:sScan 6.5s linear infinite;mix-blend-mode:multiply"></div>
      <div style="position:absolute;inset:18%;border-radius:50%;background:linear-gradient(150deg,#fff4ee,#f7d9cc);border:1px solid #ecc4b4;display:flex;align-items:flex-end;justify-content:center;overflow:hidden">
        <svg viewBox="0 0 40 40" style="width:78%;height:90%" fill="none">
          <path d="M20 7 C13 7 11 13 11 18 C11 24 14 30 20 30 C26 30 29 24 29 18 C29 13 27 7 20 7 Z" fill="#eab59f" opacity="0.55"/>
          <path d="M8 40 C8 31 13 28 20 28 C27 28 32 31 32 40" fill="#eab59f" opacity="0.55"/>
        </svg>
      </div>
      <div style="position:absolute;left:50%;top:50%;width:0;height:0">
        <span style="position:absolute;width:3.4cqw;height:3.4cqw;margin:-1.7cqw;border-radius:50%;background:#d98c73;--r:24cqw;animation:sOrbit 13s linear infinite"></span>
        <span style="position:absolute;width:2.6cqw;height:2.6cqw;margin:-1.3cqw;border-radius:50%;background:#e7a98e;--r:24cqw;animation:sOrbit 13s linear infinite -4.3s"></span>
        <span style="position:absolute;width:2.2cqw;height:2.2cqw;margin:-1.1cqw;border-radius:50%;background:#c9765c;--r:24cqw;animation:sOrbit 13s linear infinite -8.6s"></span>
      </div>
    </div>
    <div style="position:absolute;right:5.5%;top:50%;width:17cqw;height:24cqw">
      <div style="position:absolute;inset:0;border-radius:1.6cqw;background:#fff;border:1px solid #eec4b4;box-shadow:0 1.6cqw 4cqw -2cqw #c97a5e66;--rot:9deg;transform-origin:bottom left;animation:sFan 9s ease-in-out infinite"></div>
      <div style="position:absolute;inset:0;border-radius:1.6cqw;background:#fff7f3;border:1px solid #eec4b4;box-shadow:0 1.6cqw 4cqw -2cqw #c97a5e66;--rot:0deg;transform-origin:bottom left;animation:sFan 9s ease-in-out infinite .45s"></div>
      <div style="position:absolute;inset:0;border-radius:1.6cqw;background:#fff;border:1px solid #eec4b4;box-shadow:0 1.6cqw 4cqw -2cqw #c97a5e66;--rot:-9deg;transform-origin:bottom left;animation:sFan 9s ease-in-out infinite .9s">
        <div style="position:absolute;left:14%;top:18%;width:48%;height:8%;border-radius:99px;background:#f0c8b8"></div>
        <div style="position:absolute;left:14%;top:36%;width:70%;height:7%;border-radius:99px;background:#f6dccf"></div>
        <div style="position:absolute;left:14%;bottom:16%;width:40%;height:9%;border-radius:99px;background:#d98c73"></div>
      </div>
    </div>
    <div style="position:absolute;left:6%;bottom:9%;display:flex;align-items:center;gap:2cqw">
      <span style="font-size:2.5cqw;color:#a86a55;margin-right:.6cqw">QUIZ</span>
      <span style="width:3cqw;height:3cqw;border-radius:50%;background:#f3d8cb;animation:sQuiz 5.5s ease-in-out infinite"></span>
      <span style="width:3cqw;height:3cqw;border-radius:50%;background:#f3d8cb;animation:sQuiz 5.5s ease-in-out infinite .9s"></span>
      <span style="width:3cqw;height:3cqw;border-radius:50%;background:#f3d8cb;animation:sQuiz 5.5s ease-in-out infinite 1.8s"></span>
      <span style="width:3cqw;height:3cqw;border-radius:50%;background:#f3d8cb;animation:sQuiz 5.5s ease-in-out infinite 2.7s"></span>
    </div></div>`,

  "learning-council":
    sceneOpen(
      "radial-gradient(120% 120% at 50% -10%,#23282a 0%,#181b1c 55%,#111314 100%)",
      "#d6ded6",
    ) +
    `<div style="position:absolute;left:6%;top:8%;display:flex;align-items:center;gap:1.6cqw;font-size:3cqw;letter-spacing:.14em;color:#9bbfa3">
      <span style="width:1.8cqw;height:1.8cqw;border-radius:50%;background:#9bbfa3;animation:cDot 3.5s ease-in-out infinite"></span>AGENT COUNCIL
    </div>
    <div style="position:absolute;right:6%;top:7.5%;font-size:2.7cqw;font-weight:600;color:#7d877c">session 2 &middot; smarter</div>
    <div style="position:absolute;left:6%;top:24%;background:#252a2b;border:1px solid #3c443d;border-radius:1.6cqw;padding:1.6cqw 2.6cqw;font-size:2.7cqw;font-weight:600;color:#e8efe6;animation:cTask 12s ease-in-out infinite">&#9776; Task intake</div>
    <svg viewBox="0 0 120 80" preserveAspectRatio="none" style="position:absolute;inset:0;width:100%;height:100%" fill="none">
      <path d="M30 44 L60 36 L90 44" stroke="#404840" stroke-width="1.4" vector-effect="non-scaling-stroke"/>
      <path d="M30 44 L60 36 L90 44" stroke="#9bbfa3" stroke-width="1.4" stroke-dasharray="3 7" vector-effect="non-scaling-stroke" style="animation:cLink 2.5s linear infinite"/>
      <path d="M90 44 C 96 56 60 64 60 50" stroke="#cdb67e" stroke-width="1.6" stroke-dasharray="60" vector-effect="non-scaling-stroke" style="animation:cCrit 12s ease-in-out infinite"/>
    </svg>
    <div style="position:absolute;left:21%;top:48%;transform:translate(-50%,-50%);width:9cqw;height:9cqw;border-radius:50%;border:1.6px solid #3a4038;background:#20251f;display:flex;align-items:center;justify-content:center;font-size:3.4cqw;color:#9bbfa3;animation:cThink 5.5s ease-in-out infinite">A</div>
    <div style="position:absolute;left:50%;top:40%;transform:translate(-50%,-50%);width:10cqw;height:10cqw;border-radius:50%;border:1.6px solid #3a4038;background:#20251f;display:flex;align-items:center;justify-content:center;font-size:3.6cqw;color:#cdb67e;animation:cThink 5.5s ease-in-out infinite 1.1s">&#9670;</div>
    <div style="position:absolute;left:79%;top:48%;transform:translate(-50%,-50%);width:9cqw;height:9cqw;border-radius:50%;border:1.6px solid #3a4038;background:#20251f;display:flex;align-items:center;justify-content:center;font-size:3.4cqw;color:#9bbfa3;animation:cThink 5.5s ease-in-out infinite 2.2s">C</div>
    <div style="position:absolute;left:50%;top:58%;transform:translateX(-50%);font-size:2.3cqw;color:#7d877c;letter-spacing:.08em;white-space:nowrap">critique &middot; revision</div>
    <div style="position:absolute;left:6%;right:6%;bottom:8%;display:flex;gap:2.2cqw">
      <div style="flex:1;background:#1d211e;border:1px solid #313732;border-radius:1.4cqw;padding:1.8cqw 2cqw">
        <div style="font-size:2.2cqw;letter-spacing:.12em;color:#7d877c">CREATES</div>
        <div style="margin-top:1.2cqw;height:1.4cqw;border-radius:99px;background:#3a4a3c;width:90%"></div>
        <div style="margin-top:1cqw;height:1.4cqw;border-radius:99px;background:#2f3832;width:64%"></div>
      </div>
      <div style="flex:1;background:#1d211e;border:1px solid #4a5547;border-radius:1.4cqw;padding:1.8cqw 2cqw;animation:cMem 12s ease-in-out infinite">
        <div style="font-size:2.2cqw;letter-spacing:.12em;color:#9bbfa3">REMEMBERS</div>
        <div style="margin-top:1.2cqw;height:1.4cqw;border-radius:99px;background:#9bbfa3;width:80%"></div>
        <div style="margin-top:1cqw;height:1.4cqw;border-radius:99px;background:#5f7561;width:54%"></div>
      </div>
      <div style="flex:1;background:#1d211e;border:1px solid #313732;border-radius:1.4cqw;padding:1.8cqw 2cqw">
        <div style="font-size:2.2cqw;letter-spacing:.12em;color:#7d877c">SHOWS</div>
        <div style="margin-top:1.2cqw;height:1.4cqw;border-radius:99px;background:#4a463a;width:72%"></div>
        <div style="margin-top:1cqw;height:1.4cqw;border-radius:99px;background:#2f3832;width:88%"></div>
      </div>
    </div></div>`,

  finwise:
    sceneOpen(
      "radial-gradient(120% 130% at 22% 4%,#f4f6ee 0%,#eaf0e3 60%,#dde7d3 100%)",
      "#33402f",
    ) +
    `<div style="position:absolute;left:6%;top:8%;display:flex;align-items:center;gap:1.6cqw;font-size:3cqw;letter-spacing:.13em;color:#4f7a52">
      <span style="width:1.8cqw;height:1.8cqw;border-radius:50%;background:#4f7a52;animation:fDot 3.5s ease-in-out infinite"></span>FINWISE ASSOCIATE
    </div>
    <div style="position:absolute;left:6%;top:18%;font-family:${SERIF};font-size:5.4cqw;font-weight:600;color:#26331f;letter-spacing:-.01em">Your next best money move</div>
    <div style="position:absolute;left:6%;top:38%;width:46%;display:flex;flex-direction:column;gap:1.8cqw">
      <div style="display:flex;align-items:center;gap:2cqw"><span style="font-size:2.4cqw;color:#6b7a64;width:14cqw">Savings</span><div style="flex:1;height:2.8cqw;border-radius:99px;background:#d6e1cc;overflow:hidden;display:flex"><div style="background:#4f7a52;flex-grow:42;animation:fReb1 8s ease-in-out infinite"></div></div></div>
      <div style="display:flex;align-items:center;gap:2cqw"><span style="font-size:2.4cqw;color:#6b7a64;width:14cqw">Debt</span><div style="flex:1;height:2.8cqw;border-radius:99px;background:#d6e1cc;overflow:hidden;display:flex"><div style="background:#7ea177;flex-grow:30;animation:fReb2 8s ease-in-out infinite"></div></div></div>
      <div style="display:flex;align-items:center;gap:2cqw"><span style="font-size:2.4cqw;color:#6b7a64;width:14cqw">Retire</span><div style="flex:1;height:2.8cqw;border-radius:99px;background:#d6e1cc;overflow:hidden;display:flex"><div style="background:#a6c39c;flex-grow:28;animation:fReb3 8s ease-in-out infinite"></div></div></div>
    </div>
    <svg viewBox="0 0 120 80" preserveAspectRatio="none" style="position:absolute;inset:0;width:100%;height:100%" fill="none">
      <path d="M58 52 C 72 52 74 38 90 34" stroke="#9db98f" stroke-width="1.6" stroke-dasharray="200" vector-effect="non-scaling-stroke" style="animation:fDraw 8s ease-in-out infinite"/>
    </svg>
    <div style="position:absolute;right:5.5%;top:30%;width:38%;background:#ffffff;border:1px solid #d4e1cb;border-radius:2cqw;padding:2.6cqw 2.8cqw;box-shadow:0 3cqw 7cqw -3cqw #5d7a4f55">
      <div style="font-size:2.3cqw;letter-spacing:.1em;color:#4f7a52">RECOMMENDED</div>
      <div style="font-family:${SERIF};font-size:4.6cqw;font-weight:600;color:#26331f;margin-top:.6cqw">Move $400 &#8594; Roth</div>
      <div style="font-size:2.5cqw;color:#6b7a64;margin-top:1.4cqw;line-height:1.4;animation:fWhy 9s ease-in-out infinite">Why: tax-free growth beats your 0.6% debt rate.</div>
    </div>
    <div style="position:absolute;right:5.5%;bottom:9%;display:inline-flex;align-items:center;gap:1.6cqw;background:#eaf2e4;border:1px solid #bcd4b0;border-radius:99px;padding:1.4cqw 2.4cqw;animation:fShield 9s ease-in-out infinite">
      <span style="font-size:3cqw;color:#4f7a52">&#128737;</span><span style="font-size:2.5cqw;font-weight:600;color:#3c5a3e">guardrails passed</span>
    </div>
    <div style="position:absolute;left:6%;bottom:9.5%;font-size:2.5cqw;color:#6b7a64">3 scenarios compared</div>
    <div style="position:absolute;top:0;bottom:0;width:16%;background:linear-gradient(90deg,transparent,#ffffff55,transparent);animation:fScan 10s ease-in-out infinite"></div></div>`,

  "aisli-research":
    sceneOpen(
      "radial-gradient(125% 120% at 80% 6%,#2a2350 0%,#1c1838 58%,#141026 100%)",
      "#d8d2f2",
    ) +
    `<div style="position:absolute;left:6%;top:8%;display:flex;align-items:center;gap:1.6cqw;font-size:2.9cqw;letter-spacing:.12em;color:#b9a7f0">
      <span style="width:1.8cqw;height:1.8cqw;border-radius:50%;background:#b9a7f0;animation:aDot 3.2s ease-in-out infinite"></span>SPEECH &#8594; INDIAN SIGN LANGUAGE
    </div>
    <div style="position:absolute;left:6%;top:43%;transform:translateY(-50%);width:20cqw;height:28cqw;display:flex;align-items:center;justify-content:space-between;gap:1cqw">
      <div style="flex:1;height:100%;border-radius:99px;background:linear-gradient(#cdbcff,#8f78d6);transform-origin:center;animation:aWave1 2.2s ease-in-out infinite"></div>
      <div style="flex:1;height:100%;border-radius:99px;background:linear-gradient(#cdbcff,#8f78d6);transform-origin:center;animation:aWave2 2.2s ease-in-out infinite .3s"></div>
      <div style="flex:1;height:100%;border-radius:99px;background:linear-gradient(#cdbcff,#8f78d6);transform-origin:center;animation:aWave3 2.2s ease-in-out infinite .6s"></div>
      <div style="flex:1;height:100%;border-radius:99px;background:linear-gradient(#cdbcff,#8f78d6);transform-origin:center;animation:aWave2 2.2s ease-in-out infinite .9s"></div>
      <div style="flex:1;height:100%;border-radius:99px;background:linear-gradient(#cdbcff,#8f78d6);transform-origin:center;animation:aWave1 2.2s ease-in-out infinite 1.2s"></div>
    </div>
    <div style="position:absolute;left:6%;top:65%;font-size:2.3cqw;color:#9387c4;letter-spacing:.08em">SPOKEN INPUT &middot; ASR</div>
    <svg viewBox="0 0 120 80" preserveAspectRatio="none" style="position:absolute;inset:0;width:100%;height:100%" fill="none">
      <path id="aroute" d="M30 43 C 39 43 43 57 54 57 S 66 43 76 43" stroke="#473f72" stroke-width="2" vector-effect="non-scaling-stroke"/>
      <path d="M30 43 C 39 43 43 57 54 57 S 66 43 76 43" stroke="#b9a7f0" stroke-width="2" stroke-dasharray="3 7" stroke-linecap="round" vector-effect="non-scaling-stroke" style="animation:aFlow 2.4s linear infinite"/>
      <circle r="1.35" fill="#efeaff" style="filter:drop-shadow(0 0 4px #b9a7f0)"><animateMotion dur="4.8s" repeatCount="indefinite" rotate="auto"><mpath href="#aroute"></mpath></animateMotion></circle>
    </svg>
    <div style="position:absolute;left:38%;top:31%;font-size:2.7cqw;font-weight:600;color:#efeaff;background:#352c5e;border:1px solid #4d4288;border-radius:1.4cqw;padding:1.2cqw 2.4cqw;animation:aGloss 8s ease-in-out infinite">&#8220;namaste&#8221;</div>
    <div style="position:absolute;left:40%;top:65%;font-size:2.15cqw;color:#9387c4;letter-spacing:.08em">NLP + TRANSLATION</div>
    <div style="position:absolute;right:5%;top:50%;transform:translate(0,-46%);width:38cqw;height:48cqw">
      <div style="position:absolute;inset:0;border-radius:3cqw;background:linear-gradient(150deg,#2c2556,#211b44);border:1px solid #443a7a;box-shadow:0 4cqw 9cqw -4cqw #00000088;animation:aPulse 5s ease-in-out infinite"></div>
      <svg viewBox="0 0 40 40" style="position:absolute;inset:14%;width:72%;height:72%;animation:aPose 8s ease-in-out infinite" fill="none">
        <circle cx="14" cy="12" r="2.4" fill="#cdbcff"/><circle cx="20" cy="9" r="2.4" fill="#cdbcff"/><circle cx="26" cy="12" r="2.4" fill="#cdbcff"/>
        <path d="M14 12 L19 26 L26 12" stroke="#8f78d6" stroke-width="1.6" stroke-linecap="round"/>
        <circle cx="19" cy="26" r="3" fill="#b9a7f0"/>
      </svg>
      <svg viewBox="0 0 40 40" style="position:absolute;inset:14%;width:72%;height:72%;animation:aPose 8s ease-in-out infinite 2.6s" fill="none">
        <circle cx="11" cy="16" r="2.4" fill="#cdbcff"/><circle cx="20" cy="11" r="2.4" fill="#cdbcff"/><circle cx="29" cy="16" r="2.4" fill="#cdbcff"/>
        <path d="M11 16 L20 24 L29 16" stroke="#8f78d6" stroke-width="1.6" stroke-linecap="round"/>
        <circle cx="20" cy="24" r="3" fill="#b9a7f0"/>
      </svg>
      <svg viewBox="0 0 40 40" style="position:absolute;inset:14%;width:72%;height:72%;animation:aPose 8s ease-in-out infinite 5.2s" fill="none">
        <circle cx="15" cy="10" r="2.4" fill="#cdbcff"/><circle cx="25" cy="10" r="2.4" fill="#cdbcff"/><circle cx="20" cy="28" r="2.4" fill="#cdbcff"/>
        <path d="M15 10 L20 20 L25 10 M20 20 L20 28" stroke="#8f78d6" stroke-width="1.6" stroke-linecap="round"/>
        <circle cx="20" cy="20" r="3" fill="#b9a7f0"/>
      </svg>
      <div style="position:absolute;left:0;right:0;bottom:6%;text-align:center;font-size:2.55cqw;color:#b9a7f0;letter-spacing:.1em">ISL OUTPUT</div>
    </div></div>`,
};

let injected = false;

export interface AnimatedProjectThumbnailProps {
  variant: AnimatedThumbnailVariant;
  /** "always" loops ambiently; "hover" calms at rest and plays on hover. */
  motion?: "always" | "hover";
  className?: string;
}

export function AnimatedProjectThumbnail({
  variant,
  motion = "always",
  className,
}: AnimatedProjectThumbnailProps) {
  // Inject the keyframes once for the whole app.
  if (typeof document !== "undefined" && !injected) {
    const style = document.createElement("style");
    style.setAttribute("data-apt-keyframes", "");
    style.textContent = KEYFRAMES;
    document.head.appendChild(style);
    injected = true;
  }
  useId(); // stable across renders; keeps the rules-of-hooks linter happy

  return (
    <div
      data-apt=""
      data-apt-motion={motion}
      aria-hidden="true"
      className={className}
      style={{ position: "absolute", inset: 0 }}
      dangerouslySetInnerHTML={{ __html: SCENES[variant] }}
    />
  );
}

export default AnimatedProjectThumbnail;
