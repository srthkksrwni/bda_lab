USE bda_lab;

-- =====================================================
-- FUNDING & COLLABORATION SEED DATA
-- =====================================================
INSERT INTO funding_collaboration (partner_name, logo) VALUES
('DST India', 'fund1.jpg'),
('i Hub Divyasampark', 'fund2.png'),
('CSIR India', 'fund3.jpg'),
('Ministry of Education', 'fund4.png'),
('IIIT Allahabad', 'fund5.jpg'),
('ISRO', 'fund6.png'),
('ASEAN India', 'fund7.jpg'),
('ERASMUS', 'fund8.png'),
('UBL Jakarta', 'fund9.png'),
('ICMR', 'fund10.png'),
('CST-UP', 'fund11.jpg'),
('UP GOVERNMENT', 'fund12.png'),
('UTM Malaysia', 'fund13.png'),
('IEEE CIS', 'fund14.jpg'),
('University of Peradeniya', 'fund15.png');

-- =====================================================
-- EVENTS SEED DATA
-- =====================================================
INSERT INTO events (category_id, category_label, citation, link) VALUES
('conferences', 'International Conferences',
'Sonali Agarwal (General Chair), "16th Innovations in Software Engineering Conference (ISEC 2023)." Organized under ACM India, 2023.',
NULL),
('conferences', 'International Conferences',
'Sonali Agarwal (General Chair), "29th International Conference on Neural Information Processing (ICONIP 2022)." Supported by APNNS Society, 2022.',
NULL),
('conferences', 'International Conferences',
'Sonali Agarwal (General Chair), "9th International Conference on Big Data Analytics (BDA 2021)." Self-Sponsored (Grant: Rs. 0.39 Lakh), 2021.',
NULL),
('conferences', 'International Conferences',
'Sonali Agarwal (General Chair), "2nd International Conference on Machine Intelligence and Signal Processing (MISP 2019)." Multi-agency Funding by SERB (Rs. 1.50 Lakh), CSIR (Rs. 0.50 Lakh), and INSA (Rs. 0.50 Lakh), 2019.',
NULL),
('corporate', 'Corporate Training',
'Invited Expert/Course Instructor, "Advanced Big Data Analytics (Lectures and Hands On) - Week 3." Conducted by CEC IIT Roorkee for ITS group, Dates: 15.04.2024 to 19.04.2024, Mode: Offline.',
NULL),
('corporate', 'Corporate Training',
'Sonali Agarwal (Coordinator), "Space Science and Technology Awareness Training (START 2024) Programme." Organized in collaboration with ISRO (Nodal Centre), 2024.',
NULL),
('corporate', 'Corporate Training',
'Sonali Agarwal (Coordinator), "Residential Training Program on Big Data Analytics, AI, Blockchain, and IoT." Organized for ONGC Officials, Funded by ONGC (Grant: Rs. 14.74 Lakh), 2020.',
NULL),
('gian', 'GIAN Courses',
'Sonali Agarwal (Coordinator), "Learning from Data Streams (GIAN Course)." Funded by MHRD (Grant: Rs. 6.08 Lakh), 2023.',
NULL),
('gian', 'GIAN Courses',
'Sonali Agarwal (Coordinator), "Parallel and Distributed Data Stream Mining (GIAN Course)." Funded by MHRD (Grant: Rs. 5.44 Lakh), 2017.',
NULL),
('tutorials', 'Tutorials',
'Sonali Agarwal. "Mining Useful Information Via Complex Network Visualization." Tutorial at IEEE Visualization & Visual Analytics (IEEE VIS), 2023.',
NULL),
('tutorials', 'Tutorials',
'Sonali Agarwal. "Explainable AI: Bridging the AI decisions and human trust." Tutorial at IEEE International Conference on Big Data (IEEE BigData), 2022.',
NULL),
('tutorials', 'Tutorials',
'Sonali Agarwal. "Unrevealing Data Correlations with Self-Supervised Learning." Tutorial at IEEE Symposium Series on Computational Intelligence (IEEE SSCI), 2022.',
NULL),
('tutorials', 'Tutorials',
'Sonali Agarwal. "Target Class Learning for Anomaly/Outlier Detection: A Robust Strategy." Tutorial at 26th International Conference on Pattern Recognition (ICPR), 2022.',
NULL),
('tutorials', 'Tutorials',
'Sonali Agarwal. "Software Testing and Quality Assurance for Data Intensive Applications." Tutorial at 25th Int. Conf. on Evaluation and Assessment in Software Engineering (EASE), 2022.',
NULL),
('tutorials', 'Tutorials',
'Sonali Agarwal. "Unrevealing Data Correlations with Self-Supervised Learning." Tutorial at 26th Pacific-Asia Conference on Knowledge Discovery and Data Mining (PAKDD), 2022.',
NULL),
('tutorials', 'Tutorials',
'Sonali Agarwal. "Biomedical Image Segmentation using Deep Learning." Tutorial at 27th Int. Conf. on Database Systems for Advanced Applications (DASFAA), 2022.',
NULL),
('tutorials', 'Tutorials',
'Sonali Agarwal. "Software Testing and Quality Assurance for Data Intensive Applications." Tutorial at 15th Innovations in Software Engineering Conference (ISEC), 2022.',
NULL),
('tutorials', 'Tutorials',
'Sonali Agarwal. "AI techniques to combat COVID-19." Tutorial at 28th International Conference on Neural Information Processing (ICONIP), 2021.',
NULL),
('tutorials', 'Tutorials',
'Sonali Agarwal. "AI techniques to combat COVID-19." Tutorial at 8th IEEE International Conference on Data Science and Advanced Analytics (DSAA), 2021.',
NULL),
('workshop', 'Workshops',
'Invited Expert, Organized by CEC IIT Roorkee, April 15-19, 2024.',
NULL),
('workshop', 'Workshops',
'Sonali Agarwal (Coordinator), Sponsored by ISRO (Grant: Rs. 20.00 Lakh), 2023.',
NULL),
('workshop', 'Workshops',
'Sonali Agarwal (Coordinator), Self-Sponsored, May 23-27, 2023.',
NULL),
('workshop', 'Workshops',
'Sonali Agarwal (Coordinator), Self-Sponsored, August 29 – September 2, 2022.',
NULL),
('workshop', 'Workshops',
'Sonali Agarwal (Coordinator), Self-Sponsored, December 15-18, 2021.',
NULL),
('workshop', 'Workshops',
'Sonali Agarwal (Coordinator), Sponsored by ONGC (Grant: Rs. 14.74 Lakh), 2020.',
NULL),
('workshop', 'Workshops',
'Sonali Agarwal (Coordinator), Sponsored by IEEE CIS (Grant: USD 7000), 2019.',
NULL),
('workshop', 'Workshops',
'Sonali Agarwal (Coordinator), Sponsored by SERB, CSIR, INSA, and UP-CST (Total Grant: Rs. 3.50 Lakh), 2019.',
NULL),
('workshop', 'Workshops',
'Sonali Agarwal (Coordinator), Sponsored by DST (Grant: Rs. 2.71 Lakh), 2017.',
NULL),
('awards', 'Awards',
'Distinguished Paper Award (IEEE CS TCSE) | Awarded for research on Commit-Size Context and Hyper Co-Change Graph Centralities in Defect Prediction.',
NULL),
('awards', 'Awards',
'Best Paper Award for our paper published in the 5th International Conference on Data Management, Analytics and Innovation (ICDMAI), 2021.',
NULL);

-- =====================================================
-- RESEARCH UPDATES SEED DATA
-- =====================================================
INSERT INTO research_updates (title, year) VALUES
('AI-Based Mental Health Detection using Multimodal Learning', '2025'),
('Deep Learning for Healthcare Analytics', '2024'),
('Machine Learning for Early Disease Prediction', '2024'),
('Natural Language Processing for Mental Health Assessment', '2023'),
('Computer Vision for Medical Image Analysis', '2023');

-- =====================================================
-- FACULTY SEED DATA
-- =====================================================
INSERT INTO faculty (
    name,
    designation,
    description,
    email,
    image_url,
    scholar_url,
    profile_url,
    external_links
)
VALUES (
    'Prof. Sonali Agarwal',
    'Professor',
    'Head, Centre for Intelligent Robotics (CIR)\nProfessor-In-Charge, Students’ Holistic Growth, Inclusive Care and Mental Wellness\nGeneral Chair: ISEC 2023 | ICONIP 2022 | BDA 2021',
    'sonali@iiita.ac.in',
    'uploads/faculty/1782986072_208e9c91.jpg',
    'https://scholar.google.com/citations?user=hPvt6d8AAAAJ&hl=en',
    'https://profile.iiita.ac.in/sonali/',
    '[
        {
            "title":"Visit Centre for Intelligent Robotics",
            "url":"https://cir.iiita.ac.in/"
        }
    ]'
);

-- =====================================================
-- PUBLICATION CITATION STATISTICS
-- =====================================================
INSERT INTO publication_citation_stats
(id, citations, h_index, i10_index)
VALUES
(1, 7016, 39, 111)
ON DUPLICATE KEY UPDATE
citations = VALUES(citations),
h_index = VALUES(h_index),
i10_index = VALUES(i10_index);

-- =====================================================
-- PUBLICATION YEARLY GRAPH
-- =====================================================
INSERT INTO publication_yearly_stats (year, total) VALUES
(2020, 450),
(2021, 820),
(2022, 1050),
(2023, 950),
(2024, 980),
(2025, 830),
(2026, 1200)
ON DUPLICATE KEY UPDATE
total = VALUES(total);

-- =====================================================
-- BLOGS SEED DATA
-- =====================================================
INSERT INTO blogs (image) VALUES
('uploads/blogs/campus.jpg'),
('uploads/blogs/maingate.jpg');



-- ===========================
-- STUDENTS
-- ===========================

INSERT INTO students (
    category,
    batch_year,
    name,
    email,
    research_topic,
    image_url,
    scholar_url,
    profile_url
)
VALUES

-- ===========================
-- POST DOCTORATE
-- ===========================

(
    'postdoc',
    NULL,
    'Dr. Sadhana Tiwari',
    'prf.sadhana@iiita.ac.in',
    '',
    'uploads/students/1783423356_d90258ed.jpg',
    'https://scholar.google.com/citations?user=zv8vatkAAAAJ&hl=en&oi=ao',
    '/#/portfolio'
),

-- ===========================
-- PHD SCHOLARS
-- ===========================

(
    'phd',
    NULL,
    'Amit Kumar Singh',
    'mse2022010@iiita.ac.in',
    'AI - Added rapid mission design in complex dynamical environments',
    'uploads/students/1783423463_75c232e7.jpg',
    '',
    ''
),

(
    'phd',
    NULL,
    'Mrs. Nitu Kumari',
    'rsi2022506@iiita.ac.in',
    'Self Supervised Learning in Medical Imaging',
    'uploads/students/1783423505_e8571c42.jpeg',
    'https://scholar.google.com/citations?hl=en&user=B9zsVckAAAAJ',
    ''
),

(
    'phd',
    NULL,
    'Mr. Ritesh Chandra',
    'rsi202201@iiita.ac.in',
    'Ontology-Enabled Big Data Analytics for Clinical Decision Support in Healthcare Systems',
    'uploads/students/1783423523_8a4a8840.jpg',
    'https://scholar.google.com/citations?user=44lff0IAAAAJ&hl=en&oi=ao',
    ''
),

(
    'phd',
    NULL,
    'Mrs. Anvita Srivastava',
    'rsi2024507@iiita.ac.in',
    'Stream Analytics Framework for data-driven applications',
    'uploads/students/1783423533_eb70f2b9.jpg',
    'https://scholar.google.com/citations?hl=en&user=DE-NpLMAAAAJ',
    ''
),

(
    'phd',
    NULL,
    'Mrs. Sonam Yadav',
    'rsi2024503@iiita.ac.in',
    'Uncertainty-aware concept drift management framework',
    'uploads/students/1783423547_80c7fe08.jpg',
    'https://scholar.google.com/citations?hl=en&user=1PXAetgAAAAJ',
    ''
),

(
    'phd',
    NULL,
    'Ms. Himanshi Singh',
    'rsi2026003@iiita.ac.in',
    'Multimodal Analysis for Mental Disorder Recognition',
    'uploads/students/1783423558_c467c109.jpeg',
    'https://scholar.google.com/citations?user=b5mtNfcAAAAJ&hl=en',
    ''
),

-- ===========================
-- GRADUATED PHD
-- ===========================

(
    'graduated',
    NULL,
    'Dr. Divya Tomar',
    '',
    '',
    'uploads/students/1783423996_8679ad89.jpg',
    'https://scholar.google.com/citations?user=Zrlnp7UAAAAJ&hl=en',
    ''
),

(
    'graduated',
    NULL,
    'Dr. Narinder Singh Punn',
    '',
    '',
    'uploads/students/1783424011_ae692033.jpg',
    'https://scholar.google.com/citations?user=GQz--cYAAAAJ&hl=en',
    ''
),

(
    'graduated',
    NULL,
    'Dr. Rohit Bakshi',
    '',
    '',
    'uploads/students/1783424021_9d348a72.jpg',
    'https://scholar.google.com/citations?user=d-Kal94AAAAJ&hl=en',
    ''
),

(
    'graduated',
    NULL,
    'Dr. Sanjay Singh Sonbhadara',
    '',
    '',
    'uploads/students/1783424040_4a2a2f65.jpg',
    'https://scholar.google.com/citations?user=e0VFj78AAAAJ&hl=en',
    ''
),

(
    'graduated',
    NULL,
    'Dr. Sashi Shekhar',
    '',
    '',
    'uploads/students/1783424067_4fb896d5.jpeg',
    'https://scholar.google.com/citations?user=HsMk-RsAAAAJ&hl=en',
    ''
),

(
    'graduated',
    NULL,
    'Dr. Sadhana Tiwari',
    '',
    '',
    'uploads/students/1783424077_44dc30e0.jpg',
    'https://scholar.google.com/citations?user=zv8vatkAAAAJ&hl=en',
    ''
),

(
    'graduated',
    NULL,
    'Dr. Ashutosh Kumar',
    '',
    '',
    'uploads/students/1783424092_37d812b7.jpg',
    'https://scholar.google.com/citations?user=wVPIvmcAAAAJ&hl=en',
    ''
),

(
    'graduated',
    NULL,
    'Dr. Amit Kumar',
    '',
    '',
    'uploads/students/1783424110_f856f3d8.png',
    'https://scholar.google.com/citations?hl=en&user=c6sPHMcAAAAJ&view_op=list_works&sortby=pubdate',
    ''
);

INSERT INTO students (
    category,
    batch_year,
    name,
    email,
    research_topic,
    image_url,
    scholar_url,
    profile_url
)
VALUES
(
    'mtech',
    2025,
    'Sarang Mohrir',
    '',
    'Exploring Statistical Distance-Based Techniques for Real-Time Concept Drift Detection',
    '',
    '',
    ''
),
(
    'mtech',
    2025,
    'Amol Paliwal',
    '',
    'Anomaly detection in real time data',
    '',
    '',
    ''
),
(
    'mtech',
    2025,
    'Nishita Omar',
    '',
    'XAI in finance using various explainability algorithms',
    '',
    '',
    ''
),
(
    'mtech',
    2025,
    'Deep Jyoti',
    '',
    'Optimizing real time data processing using PySpark and Kafka',
    '',
    '',
    ''
),
(
    'mtech',
    2024,
    'Atharv Gadre',
    '',
    'Investigating Developer Reviewer Symphony Using H-Rank Mechanism',
    '',
    '',
    ''
),
(
    'mtech',
    2024,
    'Prachi Jain',
    '',
    'Optimizing Sentiment Analysis - Bi-LSTM and BERT with enlarged Bag-Of-Words and Reduced Ambiguity',
    '',
    '',
    ''
),
(
    'mtech',
    2024,
    'Prashik Nandu Gujar',
    '',
    'Melanoma classification using image masking and fine tuned CNN',
    '',
    '',
    ''
),
(
    'mtech',
    2024,
    'Shyam Dongre',
    '',
    'MLtoGAI: Semantic Web based with Machine Learning for Enhanced Disease Prediction and Personalized Recommendations using Generative AI',
    '',
    '',
    ''
),
(
    'mtech',
    2023,
    'Akanksha Lal',
    '',
    'Melanoma Classification using GAN based augmentation and Self-Supervised feature extraction',
    '',
    '',
    ''
),
(
    'mtech',
    2023,
    'Riya Panchal',
    '',
    'Multimodal Image Fusion on ECG signals for Congestive Heart Failure Classification',
    '',
    '',
    ''
),
(
    'mtech',
    2023,
    'Medha Mishra',
    '',
    'Geolocated Event Detection using Graph Mining Approach on Real-Time Multimodal Data',
    '',
    '',
    ''
),
(
    'mtech',
    2023,
    'Sahil Dubey',
    '',
    'Real Time Multimodal Sentiment Analysis using Deep Learning Approach',
    '',
    '',
    ''
),
(
    'mtech',
    2023,
    'Yash Patel',
    '',
    'Predicting Habitable Exoplanets in Different Star-Systems Using Deep Learning Based Anomaly Detection Approach',
    '',
    '',
    ''
),
(
    'mtech',
    2022,
    'Kapil Despande',
    '',
    'Anomaly detection in video surveillance using deep learning',
    '',
    '',
    ''
),
(
    'mtech',
    2022,
    'Ojas Vishwakarma',
    '',
    'Anomaly detection for medical images with one class classification',
    '',
    '',
    ''
),
(
    'mtech',
    2022,
    'Gaurav Kumar',
    '',
    'Fraud analytics in eCommerce using machine learning',
    '',
    '',
    ''
),
(
    'mtech',
    2022,
    'Rituvendra Singh',
    '',
    'Fraud analytics using machine learning based open source intelligence framework',
    '',
    '',
    ''
),
(
    'mtech',
    2022,
    'Alok Patel',
    '',
    'Anomaly detection in real time streaming data using machine learning',
    '',
    '',
    ''
),
(
    'mtech',
    2022,
    'Akrity Kumar',
    '',
    'Anomaly detection in time series classification using machine learning',
    '',
    '',
    ''
),
(
    'mtech',
    2021,
    'Gaurav Rajput',
    '',
    'Hate Speech Detection Using Deep Learning',
    '',
    '',
    ''
),
(
    'mtech',
    2021,
    'N Nikhil Chakravarthy',
    '',
    'Music Generation using Deep Learning',
    '',
    '',
    ''
),
(
    'mtech',
    2021,
    'Shivam Kasat',
    '',
    'Identification of Hematological Alteration and Adverse Respiratory Health Among Agriculture Workers Using Machine Learning Classification Model',
    '',
    '',
    ''
),
(
    'mtech',
    2021,
    'Sachin Gupta',
    '',
    'Image Classification Using Capsule Network',
    '',
    '',
    ''
),
(
    'mtech',
    2021,
    'Mukul Madaan',
    '',
    'One Class Classification using Twin Support Vector Machine',
    '',
    '',
    ''
),
(
    'mtech',
    2021,
    'Himanshu Batra',
    '',
    'Sentiment Analysis For Software Engineering Research',
    '',
    '',
    ''
),
(
    'mtech',
    2021,
    'Nalla Praveen',
    '',
    'Blood Cell Subtype Detection using Deep Learning',
    '',
    '',
    ''
),
(
    'mtech',
    2021,
    'Harish Rajora',
    '',
    'Centralized Medical System',
    '',
    '',
    ''
),
(
    'mtech',
    2020,
    'Mohit Rajesh Dandekar',
    '',
    'Fruit classification using features from the convolutional layers',
    '',
    '',
    ''
),
(
    'mtech',
    2020,
    'Uppala Sumanth',
    '',
    'Synthesis of Transfer Learning with End-to-End Learning for Autonomous Cars',
    '',
    '',
    ''
),
(
    'mtech',
    2020,
    'Vishal Verna',
    '',
    'Anomaly/ Novelty detection using one class classification',
    '',
    '',
    ''
),
(
    'mtech',
    2020,
    'Kharibam Priyojit Singh',
    '',
    'Anomaly detection for streaming data using autoencoder',
    '',
    '',
    ''
),
(
    'mtech',
    2020,
    'Anand Bihari Gupta',
    '',
    'Real-Time Occupancy Detection Processing and Analytics For Smart Building',
    '',
    '',
    ''
),
(
    'mtech',
    2020,
    'Ujala Singh',
    '',
    'Link Prediction Approach With Weighted Temporal Vectors Model In Multi-Dimensional Stack Overflow Network',
    '',
    '',
    ''
),
(
    'mtech',
    2020,
    'Swapnesh Narayan Azad',
    '',
    'Do Open Source Software Ecosystem behave like Natural Ecosystem: An Investigative Study',
    '',
    '',
    ''
),
(
    'mtech',
    2020,
    'Hariom Niranjan',
    '',
    'Use Heterogeneous Information Networks to Rank developers in Open Source Software Ecosystem',
    '',
    '',
    ''
),
(
    'mtech',
    2019,
    'Anirban Sarkar',
    '',
    'An Application of Ensemble Models and Deep Learning in Predictive Analytics',
    '',
    '',
    ''
),
(
    'mtech',
    2019,
    'Prachi Agarwal',
    '',
    'Gesture Recognition by learning local motion signatures using smartphones',
    '',
    '',
    ''
),
(
    'mtech',
    2019,
    'Umesh Singh',
    '',
    'Implementation of Iterative Routing-By-Agreement Capsule Network in Large Feature Space',
    '',
    '',
    ''
),
(
    'mtech',
    2019,
    'Akash Verma',
    '',
    'Anomaly Detection System for Video Surveillance using Deep Multiple Instance Learning with Weakly Labelled Data',
    '',
    '',
    ''
),
(
    'mtech',
    2019,
    'Shubham Swarnkar',
    '',
    'Aggressive Driving Behaviour classification using Smartphone’s Accelerometer Sensor',
    '',
    '',
    ''
),
(
    'mtech',
    2019,
    'Rajat Sahu',
    '',
    'Person Tracking with Non-overlapping Multiple Cameras',
    '',
    '',
    ''
),
(
    'mtech',
    2019,
    'Vishesh Middha',
    '',
    'Concept Drift Detection In Email Dataset Through Intention-Based Segmentation',
    '',
    '',
    ''
),
(
    'mtech',
    2019,
    'Syam Prasad Dhannuri',
    '',
    'Privacy Control in Online Social Networks by Trust Aware Link Prediction and By Detecting Fake profiles',
    '',
    '',
    ''
),
(
    'mtech',
    2019,
    'Ajay Kumar Pilaniya',
    '',
    'Integrating WordNet and STS (Semantic Textual Similarity) with DOM to detect plagiarism in online articles',
    '',
    '',
    ''
),
(
    'mtech',
    2018,
    'Devendra Kaushik',
    '',
    'Classifying Streaming data in distributed environment',
    '',
    '',
    ''
),
(
    'mtech',
    2018,
    'Shamshe Alam',
    '',
    'Distributed One-Class Support Vector Machine',
    '',
    '',
    ''
),
(
    'mtech',
    2018,
    'Akash Jain',
    '',
    'Predicting customer behaviour through clickstream analysis',
    '',
    '',
    ''
),
(
    'mtech',
    2018,
    'Rahul Swami',
    '',
    'Stream Data Analytics for Smart homes',
    '',
    '',
    ''
),
(
    'mtech',
    2018,
    'Dhwaj Verma',
    '',
    'Cardiac Arrhythmia Detection from single lead ECG using CNN and LSTM',
    '',
    '',
    ''
),
(
    'mtech',
    2018,
    'Rakesh Das',
    '',
    'Vehicle detection and counting using deep neural network',
    '',
    '',
    ''
),
(
    'mtech',
    2018,
    'Ishu Matil',
    '',
    'Affective Computing: Emotion classification of Physiological (EEG) signals',
    '',
    '',
    ''
),
(
    'mtech',
    2018,
    'Sonali Agrawal',
    '',
    'Real Time visualization and Analysis of Big Data',
    '',
    '',
    ''
),
(
    'mtech',
    2017,
    'Anant Prabhat',
    '',
    'Implementing Testing approaches for Complex Event Processing (CFP)',
    '',
    '',
    ''
),
(
    'mtech',
    2017,
    'DibyaJyoti Mahuri',
    '',
    'Cloud based mutation testing for distributed system',
    '',
    '',
    ''
),
(
    'mtech',
    2017,
    'Dhirendra Siddhartha',
    '',
    'An Efficient Approach for Software Defect Prediction',
    '',
    '',
    ''
),
(
    'mtech',
    2016,
    'Neha Garg',
    '',
    'Process Mining for Clinical Workflow',
    '',
    '',
    ''
),
(
    'mtech',
    2016,
    'Suchi Maheshwari',
    '',
    'Two-stage software defect prediction using three-way decisions',
    '',
    '',
    ''
),
(
    'mtech',
    2016,
    'Ravindra Soni',
    '',
    'Exploring web application testing techniques',
    '',
    '',
    ''
),
(
    'mtech',
    2016,
    'Rakesh Kumar Pal',
    '',
    'Test Case Minimization using Genetic Algorithm',
    '',
    '',
    ''
),
(
    'mtech',
    2016,
    'Unmesh Kishore Bendale',
    '',
    'Distributed feature selection for big data',
    '',
    '',
    ''
),
(
    'mtech',
    2015,
    'Shwet Ketu',
    '',
    'A MapReduce Based Advanced Distributed K-means Clustering for Handling Big Data',
    '',
    '',
    ''
),
(
    'mtech',
    2015,
    'Geetanjali Chaurasia',
    '',
    'Clustering based Novel Test Case Prioritization Approach for Regression Testing',
    '',
    '',
    ''
),
(
    'mtech',
    2015,
    'Anushree Priyadarshini',
    '',
    'A MapReduce based Support Vector Machine for Big Data Classification',
    '',
    '',
    ''
),
(
    'mtech',
    2015,
    'Anubha Sharma',
    '',
    'A Comparative model of classifier for Authorship Characterization',
    '',
    '',
    ''
),
(
    'mtech',
    2015,
    'Harshal Singh',
    '',
    'Link Prediction for Co-Authorship in Heterogeneous Network using Stream Classification',
    '',
    '',
    ''
),
(
    'mtech',
    2015,
    'Preetam Jayaswal',
    '',
    'Churn prediction using Tree ensembles',
    '',
    '',
    ''
),
(
    'mtech',
    2014,
    'Manoj Kumar',
    '',
    'A Clinical Decision Support System for Heart Disease- A Hybrid Approach Using Fuzzy Method and Neural Network',
    '',
    '',
    ''
),
(
    'mtech',
    2014,
    'Manish Shukla',
    '',
    'Hybrid Approach for Tuberculosis Data Classification Using Optimal Centroid Selection Based Clustering',
    '',
    '',
    ''
),
(
    'mtech',
    2014,
    'Pradeep Saini',
    '',
    'Using Clustering coherent rule generation for healthcare data',
    '',
    '',
    ''
),
(
    'mtech',
    2014,
    'Jitendra',
    '',
    'Effective detection of Parkinson’s disease using fuzzy k-nearest neighbor approach',
    '',
    '',
    ''
),
(
    'mtech',
    2014,
    'Anvita Srivastava',
    '',
    'Privacy Preserving Data Mining In Electronic Health Record Using K-Anonymity',
    '',
    '',
    ''
),
(
    'mtech',
    2013,
    'Shubham Khanna',
    '',
    'Study application of data mining by establishing pattern of Diabetes disease using SGPGI data',
    '',
    '',
    ''
),
(
    'mtech',
    2013,
    'Akhilesh Yadav',
    '',
    'Study application of data mining by establishing pattern of Lung cancer disease using SGPGI data',
    '',
    '',
    ''
),
(
    'mtech',
    2013,
    'Vijesh Patel',
    '',
    'Study application of data mining by establishing pattern of Heart Disease using SGPGI data',
    '',
    '',
    ''
),
(
    'mtech',
    2013,
    'Neha Rathore',
    '',
    'Study application of data mining by establishing pattern of Breast Cancer Disease and survivability prediction',
    '',
    '',
    ''
),
(
    'mtech',
    2012,
    'Vishal Mandpe',
    '',
    'Mining Software Repositories for Dynamic Fault Prediction',
    '',
    '',
    ''
),
(
    'mtech',
    2012,
    'Abhinav Lokhande',
    '',
    'Mining Software Repositories for Software Change Classification',
    '',
    '',
    ''
),
(
    'mtech',
    2011,
    'Divya',
    '',
    'Support Vector Classification and Regression for Health Data Mining',
    '',
    '',
    ''
),
(
    'mtech',
    2011,
    'Ruchi Arya',
    '',
    'A fuzzy Clustering approach using multi kernel approach',
    '',
    '',
    ''
),
(
    'mtech',
    2011,
    'Santosh Kumar',
    '',
    'SVM Based Data Classification using Multi Kernel approach',
    '',
    '',
    ''
),
(
    'mtech',
    2010,
    'Sadhana Tiwari',
    '',
    'Classification of Datasets using SVM',
    '',
    '',
    ''
);

-- =====================================================
-- ADMIN USER SEED DATA
-- Default login: username = admin, email = admin@bdalab.com
-- Password hash is kept from previous schema file.
-- =====================================================
INSERT INTO admin_users (username, email, password)
VALUES (
    'admin',
    'admin@bdalab.com',
    '$2y$10$8K1p/a0dL1LXMIgoEDFrwO3SbiWnzkeP0fiD8n53uZ9ec0XZC0YjK'
)
ON DUPLICATE KEY UPDATE
email = VALUES(email),
password = VALUES(password);

-- =====================================================
-- PUBLICATION CATEGORY STATS SEED DATA
-- =====================================================
INSERT INTO publication_stats (label, all_count, since_2021) VALUES
('Transactions & Journals', 111, 45),
('Conference Publications', 75, 28),
('Books', 10, 4)
ON DUPLICATE KEY UPDATE
all_count = VALUES(all_count),
since_2021 = VALUES(since_2021);

-- =====================================================
-- PUBLICATIONS SEED DATA
-- =====================================================
INSERT INTO publications (category, year, citation, link) VALUES
('journals', 2025, 'S. Agarwal, et al., "AI-Based Mental Health Detection using Multimodal Learning," Journal Publication, 2025.', NULL),
('journals', 2024, 'S. Agarwal, et al., "Deep Learning for Healthcare Analytics," Journal Publication, 2024.', NULL),
('journals', 2023, 'S. Agarwal, et al., "Natural Language Processing for Mental Health Assessment," Journal Publication, 2023.', NULL),
('conferences', 2025, 'S. Agarwal, et al., "Mental Disorder Recognition using Multimodal Analysis," DEXA 2025.', NULL),
('conferences', 2025, 'S. Agarwal, et al., "Explainable AI for Healthcare and Mental Wellness," INDICON 2025.', NULL),
('conferences', 2024, 'S. Agarwal, et al., "Machine Learning for Early Disease Prediction," International Conference Publication, 2024.', NULL),
('books', 2024, 'S. Agarwal, "Artificial Intelligence and Data Analytics for Healthcare," Book Chapter, 2024.', NULL),
('books', 2023, 'S. Agarwal, "Big Data Analytics and Machine Learning Applications," Book Chapter, 2023.', NULL);
