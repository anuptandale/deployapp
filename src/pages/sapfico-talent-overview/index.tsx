import CustomButton2 from '@/components/atoms/CustomButton2'
import Navbar from '@/components/molecules/navbar'
import React from 'react'
import sapStyle from "../../styles/sapTalentStyle.module.css"
import Image from 'next/image';
import css from "../../styles/jobs.module.css";
import style from "../../styles/sapOverviewStyle.module.css"
import hireDevStyles from "../../styles/hireDevStyles.module.css"
import CardComponent from '@/components/atoms/card';
import commonStyle, { cardsStyling } from '@/constants/commonStyle';
import homePageStyle from "../../styles/homePageStyles.module.css"
import { SapficoPageText } from '@/constants/texts';
import FotterComponent from '@/components/molecules/Fotter';
const SapficoOverviewPage = () => {
    return (
        <div>
            <Navbar />
            <section id={sapStyle.outermostSection}  >
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div id={sapStyle.topsection}>
                        <div style={{ fontSize: "48px", width: "300px", fontWeight: "600", lineHeight: "59px" }}>SAP-FICO overview</div>
                        <div style={{ fontSize: "20px", width: "600px" }}>SAP FICO plays a vital role in enabling organizations to manage financial processes efficiently, make informed decisions, and comply with financial regulations.</div>
                        <div>
                            <CustomButton2
                                label="GET STARTED"
                                // onClick={hirenowClick}
                                buttonStyle={{
                                    width: "272px",
                                    height: "51.6px",
                                    border: "1px solid #2871ff",
                                    color: "#fff",
                                    fontSize: "20px",
                                    backgroundColor: "#2871ff",
                                }}
                                hoverStyle={{
                                    backgroundColor: "lightblue", color: "#2871ff",
                                }}
                            />
                        </div>
                    </div>
                    <Image style={{ borderRadius: "10px" }} src="/TalentPoolImages/sapimage.png" height={130} width={330} alt="" />
                </div>
            </section>
            <section>
                <div id={sapStyle.meetyou}>
                    {/* <div style={{ fontSize: "23px", fontWeight: "600" }}>SAP FICO professionals encompass Functional, Technical, and Techno-Functional Consultants, each with distinct responsibilities. They assume roles such as Consultants, Developers, Architects, Managers, Testers, and Support staff, contributing to projects spanning Implementation, Enhancement, Support, and Migration phases, ensuring the seamless integration and optimization of SAP FICO solutions.</div> */}
                    <div style={{ opacity: "0.8" }}>SAP FICO talent is highly sought after across industries due to the increasing demand for efficient financial management and compliance. With the appropriate skills and certifications, individuals can embark on fulfilling careers as SAP FICO consultants, analysts, managers, and architects. Explore our platform for SAP FICO job opportunities, training resources, and career guidance, accelerating your journey within the SAP ecosystem. This detailed page offers comprehensive insights for individuals keen on pursuing SAP FICO careers and organizations seeking skilled professionals in this domain.</div>
                </div>
            </section>
            <section id={sapStyle.secondsection}>
                <div style={{ fontSize: "32px", fontWeight: "600", marginBottom: "50px" }}>SAP FICO Projects Types</div>
                <div id={sapStyle.threeimage}>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/TalentPoolImages/imple.png" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>Implementation</div>
                        <div style={{ fontSize: "14px" }}>Involves setting up SAP FICO modules from scratch to meet organizational requirements.</div>
                    </div>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/TalentPoolImages/migration.jpg" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>Migration</div>
                        <div style={{ fontSize: "14px" }}>Transferring data and processes from legacy systems to SAP FICO.</div>
                    </div>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/TalentPoolImages/upfrade.jpg" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>Upgrade</div>
                        <div style={{ fontSize: "14px" }}>Updating existing SAP FICO systems to newer versions for enhanced features and performance.</div>
                    </div>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/TalentPoolImages/support.jpg" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>Support</div>
                        <div style={{ fontSize: "14px" }}>Providing ongoing maintenance, troubleshooting, and user support for SAP FICO implementations.</div>
                    </div>
                </div>
            </section>
            <section id={sapStyle.secondsection}>
                <div style={{ fontSize: "32px", fontWeight: "600", marginBottom: "50px" }}>SAP FICO Best Practices</div>
                <div id={sapStyle.threeimage}>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/TalentPoolImages/analysys.png" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>Thorough Requirement Analysis</div>
                        <div style={{ fontSize: "14px" }}>Understanding business needs and aligning SAP FICO solutions accordingly.</div>
                    </div>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/TalentPoolImages/planning.png" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>Clear Project Planning</div>
                        <div style={{ fontSize: "14px" }}>Establishing timelines, milestones, and resource allocation for smooth project execution.</div>
                    </div>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/TalentPoolImages/testing.png" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>Comprehensive Testing</div>
                        <div style={{ fontSize: "14px" }}>Conducting rigorous testing to ensure the accuracy and reliability of SAP FICO implementations.</div>
                    </div>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/TalentPoolImages/traning2.png" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>User Training and Support</div>
                        <div style={{ fontSize: "14px" }}>Providing adequate training and support to end-users for efficient utilization of SAP FICO systems.</div>
                    </div>
                </div>
            </section>
            <section className={style.joinSkills} >
                <div style={{ fontSize: "32px", fontWeight: "600", marginBottom: "50px" }}>Skills and Qualifications for SAP FICO Professionals</div>
                <div style={{ display: "flex", gap: "50px" }}>
                    <div className={style.flexgap}>
                        <div className={style.whyjoinImages}><Image src="/JobsPageImages/elite.jpg" alt="css" height={200} width={200} /></div>
                        <div className={css.jobrespon}>Technical Skills</div>
                        <div className={style.whyjoinContent}>Knowledge of SAP FICO modules including General Ledger (GL), Accounts Payable (AP), Accounts Receivable (AR), Asset Accounting (AA), and Controlling (CO).</div>
                    </div>
                    <div className={css.flexgap}>
                        <div className={style.whyjoinImages}><Image src="/JobsPageImages/growth.jpg" alt="css" height={200} width={200} /></div>
                        <div className={css.jobrespon}>Functional Skills</div>
                        <div className={style.whyjoinContent}>Strong understanding of financial accounting principles and processes.</div>
                    </div>
                    <div className={css.flexgap}>
                        <div className={style.whyjoinImages}><Image src="/TalentPoolImages/softSkills.jpg" alt="css" height={100} width={200} /></div>
                        <div className={css.jobrespon}>Soft Skills</div>
                        <div className={style.whyjoinContent}>Excellent communication, Problem-solving abilities and interpersonal skills.</div>
                    </div>
                </div>
            </section>
            <section id={homePageStyle.ourEliteNetwork} >
                <div
                    style={{ background: "#F1F1F1", padding: "10px 100px 50px 100px" }}
                >
                    <div style={commonStyle.textCenter}>
                        <br />
                        <br />
                        <h2 style={cardsStyling.sapCloudLegacyMainHeading}>
                        Roles in SAP FICO
                        </h2>
                        <br />
                        <br />
                    </div>
                    <div className="cards" style={commonStyle.dflex_1}>
                        <CardComponent
                            imageUrl={"/VettingImages/consultant.jpg"}
                            imageHeight={210}
                            imageWidth={210}
                            headingNumber={"SAP FICO Consultant"}
                            headingText={""}
                            paragraphText={"Responsible for implementing, configuring, and customizing SAP FICO modules according to client requirements."}
                            buttonText="Explore"
                            onButtonClick={null}
                            buttonEnabled={true}
                        />

                        <CardComponent
                            imageUrl={"/VettingImages/vetting6.webp"}
                            imageHeight={200}
                            imageWidth={250}
                            headingNumber={"SAP FICO Analyst"}
                            headingText={""}
                            paragraphText={"Analyzes financial data and processes to identify areas for optimization and improvement."}
                            buttonText="Explore"
                            onButtonClick={null}
                            buttonEnabled={true}
                        />
                        <CardComponent
                            imageUrl={"/VettingImages/manager.webp"}
                            imageHeight={160}
                            imageWidth={190}
                            headingNumber={"SAP FICO Manager"}
                            headingText={""}
                            paragraphText={"Develops strategies to align SAP FICO solutions with organizational goals."}
                            buttonText="Explore"
                            onButtonClick={null}
                            buttonEnabled={true}
                        />
                    </div>
                </div>
            </section>
            <section className={hireDevStyles.outerhowitwork}>

                <div style={{ fontSize: "32px", fontWeight: "600", marginBottom: "50px" }}>Market Demand for SAP FICO Talent</div>
                <div className={hireDevStyles.howitwork}>
                    <div>
                        <div className={style.steps}>Current Trends</div>
                        <div className={style.firstbox}>
                            <Image src="/VettingImages/vetting12.png" alt="" height={150} width={150} />
                            <div></div>
                            <div style={{ textAlign: "center" }}>Increased adoption of SAP S/4HANA, driving demand for FICO professionals with S/4HANA implementation experience.</div>
                        </div>
                    </div>
                    {/* <ArrowForwardIcon /> */}
                    <div>
                        <div className={style.steps}>Industry Demand</div>
                        <div className={style.firstbox}>
                            <Image src="/VettingImages/vetting13.avif" alt="" height={150} width={150} />
                            <div style={{ textAlign: "center" }}>Industries such as banking, manufacturing, retail, and healthcare are actively seeking SAP FICO talent to streamline financial processes and enhance reporting capabilities.</div>
                        </div>
                    </div>


                </div>

            </section>
            <section id={sapStyle.secondsection}>
                <div style={{ fontSize: "32px", fontWeight: "600", marginBottom: "50px" }}>Career Opportunities in SAP FICO</div>
                <div id={sapStyle.threeimage}>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/TalentPoolImages/entryLevel.jpg" height={130} width={130} alt="" style={{borderRadius:"70px"}} /></div>
                        <div style={{ fontWeight: "600" }}>Entry-level Positions</div>
                        <div style={{ fontSize: "14px" }}>Junior SAP FICO Consultant</div>
                    </div>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/TalentPoolImages/midLevel.jpg" height={130} width={130} alt="" style={{borderRadius:"70px"}}/></div>
                        <div style={{ fontWeight: "600" }}>Mid-level Positions</div>
                        <div style={{ fontSize: "14px" }}>Senior SAP FICO Consultant</div>
                    </div>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/TalentPoolImages/advanceLevel.jpg" height={130} width={130} alt="" style={{borderRadius:"70px"}} /></div>
                        <div style={{ fontWeight: "600" }}>Advanced Positions</div>
                        <div style={{ fontSize: "14px" }}>SAP FICO Solution Architect</div>
                    </div>
                </div>
            </section>
            <FotterComponent/>
        </div>
    )
}

export default SapficoOverviewPage
