# S6 LIVE (pehle GRID 2)

PERSONAL FX **Strategy 6 (hedge ladder)** ka mobile monitor (PWA) — white + pink mirror finish.
Pehle ye repo GRID 2 (GridTrend S2) tha; wo account band hua, purana code git history me hai.

Live: https://ankushchhajed7-cmd.github.io/GRID-STARTAGY-2/  ·  Preview bina EA: `?demo=1`

| File | Kaam |
|---|---|
| `index.html` | App (LIVE · LADDER · RISK · HISTORY · SETUP) |
| `manifest.json`, `sw.js`, `icon-*.png` | Install + offline |

**Data:** PERSONAL FX **v8.7** (repo Samusignal, `vps-ea/`) Firebase `/personalfx/s6live/<S6_LiveKey>/` me likhta hai:
`hb` (balance, equity, setting, har 30 sec), `live/<pair>` (main, har hedge, pending, P/L, DD — har 3 sec),
`events`, `cycles` (har band cycle). Account number nahi jaata.

**Setup (1 baar):** EA v8.7 par Strategy = 6, `S6_LiveOn = true`, `S6_LiveKey = s6`, FirebaseAuth bhara →
app ke SETUP me Firebase URL + FirebaseAuth + key (sirf phone ke localStorage me, kabhi commit nahi).
