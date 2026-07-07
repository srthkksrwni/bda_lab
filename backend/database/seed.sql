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