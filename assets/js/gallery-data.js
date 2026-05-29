/* gallery-data.js
 * ----------------
 * Event folders for the Gallery page. Each entry is one "folder".
 *
 * To add an event:
 *   1. Drop photos into  assets/img/gallery/<event>/  .
 *   2. Append an object below: { title, date, caption, photos: [{src,caption?}] }.
 *
 *   A folder may hold a single photo or many. Newest events first.
 *   Per-photo `caption` is optional — if omitted, the folder caption is used.
 */
var galleryEvents = [
  {
    title:   "PhD Open Seminar \u2014 Ananya Mondal",
    date:    "May 2026",
    caption: "Ananya Mondal presented her PhD open seminar: \u201cContext-Aware Multi-Sensor Fusion at the Edge for Real-Time Human Activity Recognition.\u201d",
    photos: [
      { src: "assets/img/gallery/2026-05-28_ananya_seminar/01.jpg" },
    ]
  },
  {
    title:   "UbiSys @ ACM SenSys 2026, Saint-Malo",
    date:    "May 2026",
    caption: "CPS-IoT Week, Saint-Malo \u2014 WristSense main-track talk, three posters (MultiWearSense, RoadSense, SAX study), and Dr. Suchetana Chakraborty on the N2Women panel.",
    photos: [
      { src: "assets/img/gallery/2026-05_SenSys_SaintMalo/01.jpg" },
      { src: "assets/img/gallery/2026-05_SenSys_SaintMalo/02.jpg" },
      { src: "assets/img/gallery/2026-05_SenSys_SaintMalo/03.jpg" },
      { src: "assets/img/gallery/2026-05_SenSys_SaintMalo/04.jpg" },
      { src: "assets/img/gallery/2026-05_SenSys_SaintMalo/05.jpg" },
      { src: "assets/img/gallery/2026-05_SenSys_SaintMalo/06.jpg" },
      { src: "assets/img/gallery/2026-05_SenSys_SaintMalo/07.jpg" },
      { src: "assets/img/gallery/2026-05_SenSys_SaintMalo/08.jpg" },
      { src: "assets/img/gallery/2026-05_SenSys_SaintMalo/09.jpg" },
      { src: "assets/img/gallery/2026-05_SenSys_SaintMalo/10.jpg" },
    ]
  },
  {
    title:   "MTech Graduation Farewell Dinner",
    date:    "May 2026",
    caption: "Farewell dinner for the MTech 2026 graduates.",
    photos: [
      { src: "assets/img/gallery/2026-05-01_mtech_graduation_dinner/01.jpg" },
      { src: "assets/img/gallery/2026-05-01_mtech_graduation_dinner/02.jpg" },
      { src: "assets/img/gallery/2026-05-01_mtech_graduation_dinner/03.jpg" },
      { src: "assets/img/gallery/2026-05-01_mtech_graduation_dinner/04.jpg" },
      { src: "assets/img/gallery/2026-05-01_mtech_graduation_dinner/05.jpg" },
    ]
  },
  {
    title:   "UbiSys @ IEEE PerCom 2026, Pisa",
    date:    "March 2026",
    caption: "Full paper, WiP posters, PerRad workshop co-organization, and N2Women invited speaker at IEEE PerCom 2026 in Pisa.",
    photos: [
      { src: "assets/img/gallery/2026-03_PerCom_Pisa/01.jpg" },
      { src: "assets/img/gallery/2026-03_PerCom_Pisa/02.jpg" },
      { src: "assets/img/gallery/2026-03_PerCom_Pisa/03.jpg" },
      { src: "assets/img/gallery/2026-03_PerCom_Pisa/04.jpg" },
      { src: "assets/img/gallery/2026-03_PerCom_Pisa/05.jpg" },
      { src: "assets/img/gallery/2026-03_PerCom_Pisa/06.jpg" },
      { src: "assets/img/gallery/2026-03_PerCom_Pisa/07.jpg" },
      { src: "assets/img/gallery/2026-03_PerCom_Pisa/08.jpg" },
      { src: "assets/img/gallery/2026-03_PerCom_Pisa/09.jpg" },
      { src: "assets/img/gallery/2026-03_PerCom_Pisa/10.jpg" },
      { src: "assets/img/gallery/2026-03_PerCom_Pisa/11.jpg" },
    ]
  },
  {
    title:   "Lab Outing \u2014 Mehrangarh Fort, Jodhpur",
    date:    "March 2026",
    caption: "A lab outing to Mehrangarh Fort in Jodhpur.",
    photos: [
      { src: "assets/img/gallery/2026-03-01_lab_outing_Mehrangarh/01.jpg" },
      { src: "assets/img/gallery/2026-03-01_lab_outing_Mehrangarh/02.jpg" },
      { src: "assets/img/gallery/2026-03-01_lab_outing_Mehrangarh/03.jpg" },
      { src: "assets/img/gallery/2026-03-01_lab_outing_Mehrangarh/04.jpg" },
    ]
  },
  {
    title:   "PhD Open Seminar \u2014 Garvit Chugh",
    date:    "December 2025",
    caption: "Garvit Chugh presented his PhD open seminar: \u201cWearables for Personal Wellbeing and Digital Health: A Pervasive Sensing Perspective.\u201d",
    photos: [
      { src: "assets/img/gallery/2025-12_garvit_seminar/01.jpg" },
      { src: "assets/img/gallery/2025-12_garvit_seminar/02.jpg" },
      { src: "assets/img/gallery/2025-12_garvit_seminar/03.jpg" },
      { src: "assets/img/gallery/2025-12_garvit_seminar/04.jpg" },
      { src: "assets/img/gallery/2025-12_garvit_seminar/05.jpg" },
    ]
  },
  {
    title:   "Teacher's Day with Dr. Suchetana",
    date:    "September 2025",
    caption: "Celebrating Teacher's Day with Dr. Suchetana Chakraborty.",
    photos: [
      { src: "assets/img/gallery/2025-09-05_teachers_day/01.jpg" },
      { src: "assets/img/gallery/2025-09-05_teachers_day/02.jpg" },
      { src: "assets/img/gallery/2025-09-05_teachers_day/03.jpg" },
    ]
  },
  {
    title:   "Lab Dinner at The Spice",
    date:    "July 2025",
    caption: "Lab dinner at The Spice.",
    photos: [
      { src: "assets/img/gallery/2025-07-26_lab_dinner_thespice/01.jpg" },
      { src: "assets/img/gallery/2025-07-26_lab_dinner_thespice/02.jpg" },
    ]
  },
  {
    title:   "UbiSys @ IEEE PerCom 2025, Washington DC",
    date:    "March 2025",
    caption: "Conference trip to IEEE PerCom 2025 in Washington DC.",
    photos: [
      { src: "assets/img/gallery/2025-03_PerCom_DC/01.jpg" },
      { src: "assets/img/gallery/2025-03_PerCom_DC/02.jpg" },
      { src: "assets/img/gallery/2025-03_PerCom_DC/03.jpg" },
      { src: "assets/img/gallery/2025-03_PerCom_DC/04.jpg" },
      { src: "assets/img/gallery/2025-03_PerCom_DC/05.jpg" },
      { src: "assets/img/gallery/2025-03_PerCom_DC/06.jpg" },
      { src: "assets/img/gallery/2025-03_PerCom_DC/07.jpg" },
      { src: "assets/img/gallery/2025-03_PerCom_DC/08.jpg" },
      { src: "assets/img/gallery/2025-03_PerCom_DC/09.jpg" },
      { src: "assets/img/gallery/2025-03_PerCom_DC/10.jpg" },
      { src: "assets/img/gallery/2025-03_PerCom_DC/11.jpg" },
      { src: "assets/img/gallery/2025-03_PerCom_DC/12.jpg" },
      { src: "assets/img/gallery/2025-03_PerCom_DC/13.jpg" },
    ]
  },
  {
    title:   "Lab Outing on Campus",
    date:    "January 2025",
    caption: "Evening lab outing on the IIT Jodhpur campus.",
    photos: [
      { src: "assets/img/gallery/2025-01-29_lab_outing_campus/01.jpg" },
      { src: "assets/img/gallery/2025-01-29_lab_outing_campus/02.jpg" },
      { src: "assets/img/gallery/2025-01-29_lab_outing_campus/03.jpg" },
      { src: "assets/img/gallery/2025-01-29_lab_outing_campus/04.jpg" },
    ]
  },
  {
    title:   "UbiSys @ COMSNETS 2025, Bengaluru",
    date:    "January 2025",
    caption: "Posters by Garvit, Osho, and Susmita at COMSNETS 2025 in Bengaluru.",
    photos: [
      { src: "assets/img/gallery/2025-01_COMSNETS_Bengaluru/01.jpg" },
      { src: "assets/img/gallery/2025-01_COMSNETS_Bengaluru/02.jpg" },
      { src: "assets/img/gallery/2025-01_COMSNETS_Bengaluru/03.jpg" },
      { src: "assets/img/gallery/2025-01_COMSNETS_Bengaluru/04.jpg" },
      { src: "assets/img/gallery/2025-01_COMSNETS_Bengaluru/05.jpg" },
      { src: "assets/img/gallery/2025-01_COMSNETS_Bengaluru/06.jpg" },
      { src: "assets/img/gallery/2025-01_COMSNETS_Bengaluru/07.jpg" },
      { src: "assets/img/gallery/2025-01_COMSNETS_Bengaluru/08.jpg" },
      { src: "assets/img/gallery/2025-01_COMSNETS_Bengaluru/09.jpg" },
    ]
  },
  {
    title:   "Lab Outing \u2014 Lunch",
    date:    "December 2024",
    caption: "Lab outing and lunch.",
    photos: [
      { src: "assets/img/gallery/2024-12-02_lab_outing_lunch/01.jpg" },
      { src: "assets/img/gallery/2024-12-02_lab_outing_lunch/02.jpg" },
    ]
  },
  {
    title:   "Dr. Suchetana's Birthday Celebration",
    date:    "September 2024",
    caption: "Birthday celebration for Dr. Suchetana Chakraborty in the lab.",
    photos: [
      { src: "assets/img/gallery/2024-09-05_suchetana_birthday/01.jpg" },
      { src: "assets/img/gallery/2024-09-05_suchetana_birthday/02.jpg" },
    ]
  },
  {
    title:   "Lab Dinner with Interns",
    date:    "July 2023",
    caption: "Dinner with the summer interns.",
    photos: [
      { src: "assets/img/gallery/2023-07-13_lab_dinner_interns/01.jpg" },
      { src: "assets/img/gallery/2023-07-13_lab_dinner_interns/02.jpg" },
    ]
  },
  {
    title:   "Lab Celebration",
    date:    "July 2023",
    caption: "A lab celebration in July 2023.",
    photos: [
      { src: "assets/img/gallery/2023-07-03_lab_celebration/01.jpg" },
      { src: "assets/img/gallery/2023-07-03_lab_celebration/02.jpg" },
    ]
  },
  {
    title:   "Lab Dinner",
    date:    "May 2023",
    caption: "A lab dinner.",
    photos: [
      { src: "assets/img/gallery/2023-05-13_lab_dinner/01.jpg" },
    ]
  },
  {
    title:   "IITJ Demo Showcase",
    date:    "September 2022",
    caption: "Demo showcase at IIT Jodhpur \u2014 \u201cSmart Graded-Water Supply Grid at IIT Jodhpur.\u201d",
    photos: [
      { src: "assets/img/gallery/2022-09-24_IITJ_demo/01.jpg" },
      { src: "assets/img/gallery/2022-09-24_IITJ_demo/02.jpg" },
    ]
  },
  {
    title:   "Lab Dinner",
    date:    "May 2022",
    caption: "A lab dinner.",
    photos: [
      { src: "assets/img/gallery/2022-05-12_lab_dinner/01.jpg" },
    ]
  },
];
