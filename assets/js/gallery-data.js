/* gallery-data.js
 * ----------------
 * Event folders for the Gallery page. Each entry is one "folder".
 *
 * To add an event:
 *   1. Drop photos into  assets/img/gallery/<event>/  (compress to
 *      ≤300 KB JPG, ~1600px on the long edge).
 *   2. Append an object below:
 *        {
 *          title:   "Event name",
 *          date:    "Month YYYY",            // optional, shown as a badge
 *          caption: "One-line summary of the whole event.",  // folder-level
 *          photos: [
 *            { src: "assets/img/gallery/<event>/1.jpg", caption: "This shot." },
 *            { src: "assets/img/gallery/<event>/2.jpg" }     // caption optional
 *          ]
 *        }
 *   A folder may hold a single photo or many. Newest events first.
 *
 * NOTE: the entries below reuse the homepage slider banners as
 * placeholders — replace with real event photos when available.
 */
var galleryEvents = [
  {
    title: "UbiSys @ ACM SenSys 2026",
    date: "May 2026",
    caption: "CPS-IoT Week, Saint-Malo, France — WristSense main-track talk, three posters, and Dr. Suchetana Chakraborty on the N2Women panel.",
    photos: [
      { src: "assets/img/sensys2026.jpg", caption: "WristSense talk, N2Women panel, and poster sessions at SenSys 2026." }
    ]
  },
  {
    title: "UbiSys @ ACM CHI 2026",
    date: "April 2026",
    caption: "Barcelona — MorsEar (Honorable Mention) at the Main Track and VectionSense at the SAXR workshop.",
    photos: [
      { src: "assets/img/chi2026.jpg", caption: "Garvit presenting MorsEar at ACM CHI 2026." }
    ]
  },
  {
    title: "Conference Throwback (2023–2025)",
    date: "2023–2025",
    caption: "A look back at UbiSys at conferences before 2026 — multiple moments in one folder.",
    photos: [
      { src: "assets/img/comsnets2025.jpg", caption: "COMSNETS 2025 — posters by Garvit, Osho, and Susmita." },
      { src: "assets/img/percom.jpg", caption: "IEEE PerCom 2025 — full paper and WiP with Dr. Suchetana and Dr. Sandip Chakraborty." },
      { src: "assets/img/vtc2024.jpg", caption: "VTC 2024 — Osho on vehicular communication networks." },
      { src: "assets/img/buildsys2023.jpg", caption: "BuildSys 2023 — Dr. Suchetana Chakraborty presenting “Sense As You Go”." }
    ]
  },
  {
    title: "SensePod Testbed",
    date: "Ongoing",
    caption: "The lab's edge-AI ambient sensing testbed deployment.",
    photos: [
      { src: "assets/img/sensepod.jpg", caption: "SensePod nodes deployed for real-world ambient sensing." }
    ]
  }
];
