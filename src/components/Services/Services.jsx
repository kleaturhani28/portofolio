import React, { useState } from 'react';
import './services.scss';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section_title">Services</h2>
            <span className="section_subtitle">What i offer</span>

            <div className="services_container container grid">
                <div className="services_content">
                    <div>
                        <i className="uil uil-web-grid services_icon"></i>
                        <h3 className="services_title">
                            Backend &<br /> Integrations
                        </h3>
                    </div>

                    <span className="services_button" onClick={() =>
                        toggleTab(1)}>
                        View More
                        <i className="uil uil-arrow-right 
                services_button-icon"></i></span>

                    <div className={toggleState === 1 ?
                        "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times
                        services_modal-close"></i>

                            <h3 className="services_modal-title">
                                Backend & Integrations
                            </h3>
                            <p className="services_modal-description">
                                Reliable backends, ERP↔MES integrations and workflow automation.
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        ERP↔MES integration & digital-signature automation (Delphi)
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        REST APIs, services with logging, retries, scheduling
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Caching/queue basics (Redis), background jobs
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Databases: MySQL & SQLite (schema, queries, migrations)
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-arrow services_icon"></i>
                        <h3 className="services_title">
                            Web<br /> Development
                        </h3>
                    </div>

                    <span className="services_button" onClick={() =>
                        toggleTab(2)}>
                        View More
                        <i className="uil uil-arrow-right 
                services_button-icon"></i></span>

                    <div className={toggleState === 2 ?
                        "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times
                        services_modal-close"></i>

                            <h3 className="services_modal-title">Web Development</h3>
                            <p className="services_modal-description">
                                From idea to deploy: responsive sites and internal tools.
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Laravel/PHP backends, CRUD, authentication
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        React frontends & dashboards (responsive)
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        REST API integration & form workflows
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-edit services_icon"></i>
                        <h3 className="services_title">
                            Mobile Apps<br /> (Flutter/Kotlin)
                        </h3>
                    </div>

                    <span className="services_button" onClick={() =>
                        toggleTab(3)}>
                        View More
                        <i className="uil uil-arrow-right 
                services_button-icon"></i></span>

                    <div className={toggleState === 3 ?
                        "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times
                        services_modal-close"></i>

                            <h3 className="services_modal-title">Mobile Apps</h3>
                            <p className="services_modal-description">
                                Kotlin native Android development
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Flutter cross-platform UI
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        API integration & local data storage
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Deployable demo builds (APK)
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-life-ring services_icon"></i>
                        <h3 className="services_title">
                            Support &<br /> Maintenance
                        </h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(4)}>
                        View More <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 4 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                            <h3 className="services_modal-title">Support & Maintenance</h3>
                            <p className="services_modal-description">
                                Keeping apps reliable and secure after deployment.
                            </p>
                            <ul className="services_modal-services grid">
                                <li>
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>Bug fixing & performance optimization</p>
                                </li>
                                <li>
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>Small feature updates & UX improvements</p>
                                </li>
                                <li>
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>Monitoring, error logging & security checks</p>
                                </li>
                                <li>
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>Flexible freelance / remote availability</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
