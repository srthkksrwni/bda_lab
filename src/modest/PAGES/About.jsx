function About() {
    return (
        <div className="modest-page-wrapper">
            {/* Hero */}
            <section className="modest-hero-header-large">
                <img
                    src="/Image/About-bg.png"
                    alt=""
                    className="modest-bg-image-cover-half"
                />

                <div className="modest-container modest-text-center">
                    <h1 className="modest-page-title">
                        MODEST
                    </h1>

                    <p className="modest-page-subtitle">
                        Multimodal Analysis for Mental Disorder Recognition to Improve
                    </p>
                </div>
            </section>

            {/* Overview */}
            <section className="modest-section-white">
                <div className="modest-grid modest-grid-2 modest-align-start">
                    <h2 className="modest-section-title">
                        Project Overview
                    </h2>

                    <p className="modest-section-desc">
                        A Multimodal Analysis for Mental Disorder Recognition to Improve
                        Mental Health and Well-being (MODEST) is a cutting-edge research
                        initiative sanctioned by the Council of Science & Technology, U.P.
                        (Letter No. CST/D-715). Hosted at the Indian Institute of
                        Information Technology (IIIT) - Allahabad, the project aims to
                        revolutionize mental health diagnostics by moving beyond traditional
                        clinical interviews.
                    </p>
                </div>
            </section>

            {/* Vision */}
            <section className="modest-section-dark-green">
                <div className="modest-container-narrow modest-text-center">
                    <p className="modest-uppercase-heading">
                        The Vision
                    </p>

                    <h2 className="modest-serif-title">
                        Human-centric AI for early mental health support
                    </h2>

                    <p className="modest-section-desc-white">
                        Our primary mission is to develop an AI-powered electronic health
                        platform that integrates cost-effective interventions to promote
                        well-being. By utilizing a generalized multimodal fusion framework,
                        Project MODEST automatically estimates mental disorder scores in
                        their early stages, allowing for timely clinical support for
                        individuals, students, and children.
                    </p>
                </div>
            </section>

            {/* Objectives */}
            <section className="modest-section-cream">
                <h2 className="modest-section-title modest-mb-16">
                    Core Objectives :
                </h2>

                <div className="modest-grid modest-grid-3 modest-gap-10">
                    {[
                        {
                            title: "Early Recognition",
                            text: "Integrating text, audio, visual, and physiological (EEG/GSR) data for the early detection of disorders like Depression, Anxiety, and Schizophrenia.",
                        },
                        {
                            title: "Inclusive Technology",
                            text: "Using domain adaptation and cross-attention mechanisms to capture the complex relationships between various triggers and mental health.",
                        },
                        {
                            title: "Decolonizing the Mind",
                            text: "Beyond technical recognition, we are committed to strategies that assist in reflection, restructure, and the growth of a safe, inclusive therapeutic experience.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="modest-objective-card"
                        >
                            <span className="modest-objective-number">
                                0{index + 1}
                            </span>
                            <h3 className="modest-objective-title">
                                {item.title}
                            </h3>
                            <p className="modest-objective-text">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Methodology */}
            <section className="modest-section-white">
                <div className="modest-grid modest-grid-2 modest-gap-16">
                    <div>
                        <p className="modest-uppercase-heading-alt">
                            Technical Methodology
                        </p>

                        <h2 className="modest-section-title-alt">
                            Deep learning architectures for multimodal diagnosis
                        </h2>
                    </div>

                    <div className="modest-list-desc">
                        <p>
                            The project employs sophisticated deep learning architectures
                            (CNN, LSTM, and BiLSTM) to process diverse data types:
                        </p>

                        <p><b>Visual:</b> Face detection and expression encoding using CNNs.</p>
                        <p><b>Audio:</b> Prosodic and acoustic analysis to identify emotional markers.</p>
                        <p><b>Textual:</b> Natural Language Processing (BERT/Whisper) to analyze interview transcripts.</p>
                        <p><b>Physiological:</b> EEG and GSR monitoring via Bluetooth-enabled wearables to capture real-time stress markers.</p>
                    </div>
                </div>
            </section>

            {/* Research */}
            <section className="modest-section-dark-green">
                <h2 className="modest-section-title">
                    Featured Research & Contributions
                </h2>

                <div className="space-y-10 max-w-5xl">
                    <p className="modest-text-desc">
                        <b>Innovative Early Estimation:</b> Our research has established a
                        framework for early mental disorder score estimation, presented at
                        the DEXA 2025 Conference (Springer Nature).
                    </p>

                    <p className="modest-text-desc">
                        <b>Explainable AI (XAI):</b> We have successfully submitted work on
                        an XAI-enabled framework to IEEE INDICON 2025, focusing on fusion
                        approaches that make AI-driven diagnoses more interpretable for
                        clinicians.
                    </p>

                    <p className="modest-text-desc">
                        <b>Comprehensive Diagnostics:</b> Our latest manuscripts
                        (arXiv:2502.03943) provide a data-driven approach to classifying
                        Depression, Anxiety, and Schizophrenia with high accuracy and
                        cultural sensitivity.
                    </p>
                </div>
            </section>


        </div>
    );
}

export default About;