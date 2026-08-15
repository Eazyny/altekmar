Fixes the first-load header contrast flash.

- Keeps the working scroll/background detector.
- Forces the absolute top of the page to light-surface mode (dark text).
- Rechecks after 100/300/700/1500 ms plus window load so hydration/video/layout cannot leave a stale tone.
- Changes only HeaderFour.jsx.
