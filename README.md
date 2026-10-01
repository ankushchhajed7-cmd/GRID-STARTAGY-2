# GRID 2

GridTrend EA **Strategy 2** ka mobile monitor (PWA) — white + pink mirror finish.

Live: https://ankushchhajed7-cmd.github.io/GRID-STARTAGY-2/

| File | Kaam |
|---|---|
| `index.html` | App (HOME · GRID · RISK · HISTORY · SETUP) |
| `manifest.json`, `sw.js`, `icon-*.png` | Install + offline |
| `ea/GridTrend_EA_Strategy2_v1_03.mq5` | EA + Firebase bridge (`/gt2/{account}`) |

**Setup (1 baar):** EA v1.03 VPS pe lagao → MT5 WebRequest list mein Firebase URL → Firebase rules mein `"gt2": {".read": true, ".write": true}` → app khud account dhoondh lega.
Preview bina EA ke: `?demo=1`
