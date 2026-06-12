import "./Publications.css";

function Publications() {
  const publications = [
    {
      year: 2025,
      title:
        "Deep Semantics for Structured Data: Hybrid LLM-Based Models for Temporal Forecasting",
      venue: "International Conference on Neural Information Processing",
    },
    {
      year: 2025,
      title:
        "A Review of Ontology-Driven Big Data Analytics in Healthcare: Challenges, Tools, and Applications",
      venue: "arXiv",
    },
    {
      year: 2025,
      title:
        "Innovative Framework for Early Estimation of Mental Disorder Scores to Enable Timely Interventions",
      venue:
        "International Conference on Database and Expert Systems Applications",
    },
    {
      year: 2025,
      title:
        "Ontology-Based Forest Fire Management Using Complex Event Processing and Large Language Models",
      venue:
        "International Conference on Database and Expert Systems Applications",
    },
    {
      year: 2025,
      title:
        "A Diagnosis and Treatment of Liver Diseases: Integrating Batch Processing, Rule-Based Event Detection and Explainable Artificial Intelligence",
      venue: "Evolving Systems",
    },
    {
      year: 2025,
      title:
        "Multimodal Image Fusion on ECG Signals for Congestive Heart Failure Classification",
      venue: "Multimedia Tools and Applications",
    },
    {
      year: 2025,
      title:
        "Ontology-Driven Semantic Interoperability Approach for Big Data Analytics in Healthcare IoT Systems",
      venue:
        "International Conference on Cloud Computing, Data Science and Engineering",
    },
    {
      year: 2025,
      title:
        "Enhanced Melanoma Classification Using Image Masking and Customized CNN Architecture",
      venue:
        "Next-Generation Networks and Deployable Artificial Intelligence",
    },

    {
      year: 2024,
      title:
        "Melanoma Classification using GAN Based Augmentation and Self-Supervised Feature Extraction",
      venue: "IEEE International Conference on Big Data",
    },
    {
      year: 2024,
      title:
        "Diabetes Risk Prediction and Sugar Intake Management",
      venue: "Artificial Intelligence and Information Technologies",
    },
    {
      year: 2024,
      title:
        "Geolocated Event Detection using Graph Mining Approach on Real-Time Multimodal Data",
      venue:
        "International Conference on Computing Communication and Networking Technologies",
    },
    {
      year: 2024,
      title:
        "A Model Fusion Approach for Severity Prediction of Diabetes with Respect to Binary and Multiclass Classification",
      venue: "International Journal of Information Technology",
    },
    {
      year: 2024,
      title:
        "Diabetic Retinopathy Prediction Based on CNN and AlexNet Model",
      venue:
        "International Conference on Cloud Computing, Data Science and Engineering",
    },

    {
      year: 2023,
      title:
        "A Personalized Cancer Diagnosis using Text Based Clinical Data with Machine Learning Models",
      venue: "OCIT 2023",
    },
    {
      year: 2023,
      title:
        "AI-Enabled Learning for Imbalanced Class Data using Spark Streaming Concepts",
      venue: "OCIT 2023",
    },
    {
      year: 2023,
      title:
        "A Decision Support System for Liver Diseases Prediction",
      venue: "arXiv",
    },
    {
      year: 2023,
      title:
        "Autism Spectrum Disorder Detection using Autistic Image Dataset",
      venue: "EECSI 2023",
    },
    {
      year: 2023,
      title:
        "Deep Neural Networks for Brain Tumor Image Segmentation and Detection",
      venue: "EECSI 2023",
    },
    {
      year: 2023,
      title:
        "Semantic Web-Based Diagnosis and Treatment of Vector-Borne Diseases Using SWRL Rules",
      venue: "Knowledge-Based Systems",
    },
    {
      year: 2023,
      title:
        "Predicting Habitable Exoplanets in Different Star-Systems Using Deep Learning Based Anomaly Detection Approach",
      venue: "IJCNN 2023",
    },
    {
      year: 2023,
      title:
        "Empirical Analysis of Chronic Disease Dataset for Multiclass Classification Using Optimal Feature Selection Based Hybrid Model with Spark Streaming",
      venue: "Future Generation Computer Systems",
    },

    {
      year: 2022,
      title:
        "An Optimized Hybrid Solution for IoT Based Lifestyle Disease Classification Using Stress Data",
      venue: "ICONIP 2022",
    },
    {
      year: 2022,
      title:
        "Natural Language Processing and Ontology Based Decision Support System for Diabetic Patients",
      venue: "EECSI 2022",
    },
    {
      year: 2022,
      title:
        "Forecasting COVID-19 Cases Using Statistical Models and Ontology-Based Semantic Modelling",
      venue: "arXiv",
    },
    {
      year: 2022,
      title:
        "Empirical Analysis of Lifelog Data using Optimal Feature Selection Based Unsupervised Logistic Regression Model",
      venue: "arXiv",
    },

    {
      year: 2021,
      title:
        "A Shrewd Artificial Neural Network-Based Hybrid Model for Pervasive Stress Detection of Students",
      venue: "Big Data",
    },
    {
      year: 2021,
      title:
        "Data Stream Management for CPS Based Healthcare: A Contemporary Review",
      venue: "IETE Technical Review",
    },

    {
      year: 2019,
      title:
        "Classification of Physiological Signals for Emotion Recognition Using IoT",
      venue: "EECSI 2019",
    },

    {
      year: 2015,
      title:
        "Character Recognition Using Ensemble Classifier",
      venue:
        "International Journal of Computer Science Engineering Technology",
    },

    {
      year: 2013,
      title:
        "An Optimized Approach for K-Means Clustering",
      venue: "International Journal of Computer Applications",
    },
  ];
    return (
      <div className="portfolio-publications-page">
        <section className="portfolio-publications-header">
          <h1>Publications</h1>
          <p>
            Research contributions in Data Mining, Machine Learning,
            Deep Learning, Healthcare Analytics, Data Stream Processing,
            Semantic Web Technologies, and Artificial Intelligence.
          </p>
        </section>

        <section className="portfolio-stats-section">
          <div className="portfolio-stat-card">
            <h2>30+</h2>
            <p>Research Publications</p>
          </div>
          <div className="portfolio-stat-card">
            <h2>9+</h2>
            <p>Journal Papers</p>
          </div>

          <div className="portfolio-stat-card">
            <h2>9+</h2>
            <p>Conference Papers</p>
          </div>
          <div className="portfolio-stat-card">
            <h2>2</h2>
            <p>Patent & Copyright</p>
          </div>
        </section>

        <section className="portfolio-publication-section">
          <h2>Research Publications</h2>

          <div className="portfolio-publication-grid">
            {publications.map((paper, index) => (
              <div key={index} className="portfolio-publication-card">
                <div className="portfolio-publication-year">
                  {paper.year}
                </div>

                <div className="portfolio-publication-content">
                  <h3>{paper.title}</h3>
                  <p>{paper.venue}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="portfolio-publication-section">
          <h2>Patent & Copyright Applications</h2>

          <div className="portfolio-patent-card">
            <span>2026</span>

            <h3>
              A Wearable Assistive System with Integrated Real-Time
              Health and Emotion Monitoring of Lower-Limb Disabled Persons
            </h3>

            <p>
              Patent Application No. 202611052999
            </p>
          </div>

          <div className="portfolio-patent-card">
            <span>2026</span>

            <h3>
              Ontology-Driven Knowledge Modeling for IoT-Based
              Health Monitoring of Wheelchair Users
            </h3>

            <p>
              Copyright Application (Diary No. LD-12519/2026-CO)
            </p>
          </div>
        </section>
      </div>
    );
  }

export default Publications;