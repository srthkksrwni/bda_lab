import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectPage.css";

const ProjectPage = () => {
  const objectives = [
    "Comprehensive Health Monitoring: Track vital signs and activity levels, predict potential health issues, and provide timely recommendations and alerts.",
    "Mobile Application Support: Enable access to health data, medication reminders, and direct communication with caregivers or doctors.",
    "Wheelchair Users Health Monitoring Ontology (WUHM): Integrate medical guidelines and sensor data to offer a holistic view of user health.",
    "User Training & Support: Guide users and caregivers to effectively use the system.",
    "Clinical Validation: Conduct trials to evaluate the devices impact on health outcomes and quality of life."
  ];

  const contributors = [
{
name: "Prof. Sonali Agarwal",
role: "Project Investigator",
//cv: "https://profile.iiita.ac.in/sonali/CV.pdf",
photo: "\Sonali Maam.jpg"
},
{
name: "Prof. Navjot Singh",
role: "Co-Project Investigator",
//cv: "https://sites.google.com/iiita.ac.in/navjotsingh/home",
photo: "https://it.iiita.ac.in/photo/navjot.jpg"
},
{
name: "Dr. Sadhana Tiwari",
role: "Post Doctoral Fellow",
//cv: "https://drive.google.com/file/d/1y1gk0E-qTV0TN-Xsoq2rb_wTcSiNSlyU/view?usp=drive_link",
photo: "/Sadhana Tiwari.jpg"
}
];

  const modules = [
    {
      title: "1. Bimodal Gesture Recognition System",
      description:
        "Flex-based and video-based gesture detection captures user movements through IoT sensors, including Libelium and Flex sensors. Data is processed via Arduino and Raspberry Pi, transmitted to the cloud, and integrated with a mobile application for real-time alerts, improving assistance for wheelchair users in daily tasks.",
      link: "/gesturecare"
    },
    {
      title: "2. WUHM Ontology Development",
      description:
        "The Wheelchair Users' Health Monitoring (WUHM) ontology integrates sensor data and medical guidelines to monitor user health. It supports disease differentiation, historical and real-time data analysis, and personalized advice for healthcare providers.",
      link: "/healthmonitor"
    },
    {
      title: "3. Reasoning on Ontology & Hadoop",
      description:
        "Continuous sensor data is stored in Hadoop HDFS, analyzed via MapReduce and HiveQL, and queried using SPARQL. Insights from this reasoning enable informed decision-making, enhancing safety and health outcomes for users.",
      link: "/ontologyproject"
    },
    {
      title: "4. Complex Event Detection & Decision Making",
      description:
        "Real-time events are detected using Kafka streams and a CEP engine. Sensor data such as heart rate and body temperature are monitored against thresholds to detect diseases and support proactive interventions.",
      link: "/cepproject"
    },
    {
      title: "5. Mobile Application",
      description:
        "The app provides real-time health monitoring, alerts, messages to caregivers/doctors, medication reminders, and exercise schedules. It is compatible with multiple devices and designed for flexibility and user-friendly interaction.",
      link: "/mobile-app"
    },
    {
      title: "6. Cloud-Based Platform",
      description:
        "A centralized cloud platform stores patient profiles, historical data, and medication details. It enables secure communication, remote monitoring, and actionable insights for timely healthcare intervention.",
      link: "/cloudplatform"
    }
  ];

  const deliverables = [
    "Prototype",
    "Mobile App Development",
    "Web Interface with Cloud Integration",
    "Patent",
    "Copyright",
    "Publications"
  ];

  const renderLink = (link) => {
    if (link.startsWith("/")) {
      return <Link to={link} className="module-link">More Details</Link>;
    }
    return <a href={link} target="_blank" rel="noopener noreferrer" className="module-link">More Details</a>;
  };

  return (
    <div className="project-page">

      <h1 className="page-title">
  Cyber-Physical Health Assistance Device for Wheelchair Users
</h1>
{/* --- Funding & Grant Details --- */}
<div className="grant-details-container">
  <div className="agency-header">
    <span className="agency-label">Funding Agency</span>
    <h2 className="agency-name">iHUB Divyasampark IIT Roorkee for Devices Materials and Technology Foundation</h2>
    <p className="agency-sub">A Section-8 Company established by Government of India (DST) and IIT Roorkee</p>
  </div>

  <div className="grant-meta-grid">
    <div className="meta-item">
      <strong>Ref. No.:</strong> <span>2024-25/TIH-IITR/274</span>
    </div>
  </div>
</div>


{/* Contributors */}
<section className="contributors-section">
  <h2 className="section-title">Contributors</h2>

  <div className="contributors-grid">
  {contributors.map((person, index) => (
    <div className="contributor-card" key={index}>
      <img
        src={person.photo}
        alt={person.name}
        className="contributor-photo"
      />

      <h3 className="contributor-name">{person.name}</h3>
      <p className="contributor-role">{person.role}</p>

      {/* <a
        href={person.cv}
        target="_blank"
        rel="noopener noreferrer"
        className="cv-link"
      >
        View CV
      </a> */}
    </div>
  ))}
</div>
</section>

      <section className="project-section">
        <h2 className="section-title">Project Brief</h2>
        <p className="project-text">
          This project develops a cyber-physical system–based smart health assistance device for wheelchair users,
          integrating IoT sensors, Arduino/Raspberry Pi hardware, and cloud intelligence. 
          It enables real-time health monitoring, personalized care, and rapid emergency response using 
          big-data technologies such as Hadoop and Kafka. The solution enhances mobility, safety, and independent living,
          significantly improving the quality of life for wheelchair-dependent individuals.
        </p>
      </section>

      <section className="project-section">
        <h2 className="section-title">Project Objectives</h2>
        <ul className="objectives-list">
          {objectives.map((obj, index) => (
            <li key={index}>{obj}</li>
          ))}
        </ul>
      </section>

      <section className="project-section">
        <h2 className="section-title">Project Modules</h2>
        {modules.map((mod, index) => (
          <div className="module" key={index}>
            <h3 className="module-title">{mod.title}</h3>
            <p className="project-text">{mod.description}</p>
            {renderLink(mod.link)}
          </div>
        ))}
      </section>

      <section className="project-section deliverables-section">
        <h2 className="section-title">Project Deliverables</h2>
        <div className="deliverables-grid">
          {deliverables.map((item, index) => (
            <div className="deliverable-card" key={index}>
              <span className="checkmark">✔</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
