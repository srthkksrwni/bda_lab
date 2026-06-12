import "./AchievementsActivities.css";
function AchievementsAndActivities() {
  const awards = [
    {
      title: "IEEE VIS Inclusivity & Diversity Scholarship",
      year: "2023",
      description:
        "Recipient of IEEE VIS Scholarship worth $1000 for attending IEEE VIS 2023.",
    },
    {
      title: "Best Research Presentation Award",
      year: "2024",
      description:
        "Awarded for presenting Ph.D. thesis work at ASCIS 2024, Marwadi University, Gujarat.",
    },
  ];
  const activities = [
    {
      year: "2022",
      title: "DASFAA 2022",
      description:
        "Participated in the 27th International Conference on Database Systems for Advanced Applications hosted by IIIT Hyderabad.",
    },
    {
      year: "2021",
      title: "PAKDD 2021",
      description:
        "Participated in the 25th International Conference on Knowledge Discovery and Data Mining hosted by JNU and IIIT Hyderabad.",
    },
    {
      year: "2020",
      title: "ICEECS 2020",
      description:
        "Attended the International Conference ICEECS-2020 at VBSPU, Jaunpur.",
    },
    {
      year: "2020",
      title: "ONGC Sponsored Training Program",
      description:
        "Organized a 5-day training program on Big Data Analytics, Artificial Intelligence, Blockchain Technology and IoT.",
    },
    {
      year: "2019",
      title: "IEEE MISP-2019",
      description:
        "Organized IEEE Sponsored 2nd International Conference MISP-2019.",
    },
    {
      year: "2019",
      title: "IEEE CIS Summer School",
      description:
        "Served as a member of the organizing committee.",
    },
    {
      year: "2019",
      title: "ATAL FDP",
      description:
        "Participated in 5-day FDP on Data Sciences.",
    },
    {
      year: "2019",
      title: "Big Data Analytics 2019",
      description:
        "Attended the 7th International Conference on Big Data Analytics at Ahmedabad University.",
    },
    {
      year: "2018",
      title: "Machine Learning & Data Analytics",
      description:
        "Attended a 7-day workshop on Machine Learning & Data Analytics.",
    },
    {
      year: "2017",
      title: "GIAN Course",
      description:
        "Participated in GIAN course on Parallel and Distributed Data Stream Mining at IIIT Allahabad.",
    },
    {
      year: "2016",
      title: "Recent Advances in Computing Technology",
      description:
        "Attended 5-day FDP at GCET Greater Noida.",
    },
    {
      year: "2015",
      title: "ICT Technology Trends & Skill Development",
      description:
        "Attended FDP at United Group of Institutions.",
    },
    {
      year: "2023",
      title: "Book Chapter Contribution",
      description:
        "Contributed a book chapter titled 'Ensemble of Machine Learning and Stream Data Analytics for Prediction of Weather' in the book 'Blockchain Enabled Secure Big Data Computing for Smart Cities Using Internet of Things' published by NOVA Science Publishers."
    },
    {
      year: "2023",
      title: "ABDI Book Co-Author",
      description:
        "Co-authored the 6th ABDI book 'Revolution in Data Science, AI & Cybersecurity in Connected World' launched during the DataGovAI 2023 Summit in Jakarta."
    },
    {
      year: "2015",
      title: "ICGCIoT 2015",
      description:
        "Attended International Conference on Green Computing and Internet of Things.",
    },
    {
      year: "2013",
      title: "EICC-2013",
      description:
        "Worked as Organizer of EICC-2013 National Conference at GCET Greater Noida.",
    },
    {
      year: "2013",
      title: "Cloud Computing Workshop",
      description:
        "Participated in International Workshop on Cloud Computing & its Applications at GBU Greater Noida.",
    },
    {
      year: "2012",
      title: "Software Engineering Workshop",
      description:
        "Participated in National Workshop on Recent Advances in Software Engineering organized by DTU Delhi.",
    },
    {
      year: "GATE",
      title: "GATE Qualification",
      description:
        "Qualified GATE with 96.7 percentile and AIR 575.",
    },
  ];

 return (
  <div className="portfolio-achievements-page">
    <section className="portfolio-achievements-header">
      <h1>Achievements & Activities</h1>
      <p>
        Academic achievements, professional activities, workshops,
        training programs, and leadership contributions.
      </p>
    </section>

    <section className="portfolio-achievements-section">
      <h2>Awards & Recognition</h2>

      <div className="portfolio-awards-grid">
        {awards.map((award, index) => (
          <div className="portfolio-award-card" key={index}>
            <span>{award.year}</span>
            <h3>{award.title}</h3>
            <p>{award.description}</p>
          </div>
        ))}
      </div>
    </section>
    <section className="portfolio-achievements-section">
      <h2>Training & Hands-on Experience</h2>

      <div className="portfolio-awards-grid">
        <div className="portfolio-award-card">
          <span>2024</span>
          <h3>ISRO ISTRAC Training</h3>
          <p>
            Provided hands-on training on "Data Engineering - Tools and
            Techniques" as part of AI-ML Training at ISRO ISTRAC,
            Bengaluru.
          </p>
        </div>

        <div className="portfolio-award-card">
          <span>2024</span>
          <h3>IIT Roorkee Certification Course</h3>
          <p>
            Conducted hands-on training on "Big Data Analytics for ITS
            Officers" at IIT Roorkee.
          </p>
        </div>
      </div>
    </section>
    <section className="portfolio-achievements-section">
      <h2>Professional Activities</h2>

      <div className="portfolio-timeline">
        {activities.map((activity, index) => (
          <div className="portfolio-timeline-item" key={index}>
            <div className="portfolio-timeline-year">
              {activity.year}
            </div>

            <div className="portfolio-timeline-content">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);
}

export default AchievementsAndActivities;