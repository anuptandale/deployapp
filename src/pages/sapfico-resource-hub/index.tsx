import Navbar from '@/components/molecules/navbar'
import React from 'react'
import sapStyle from "../../styles/sapTalentStyle.module.css"
import style from "../../styles/sapOverviewStyle.module.css"
import CustomButton2 from '@/components/atoms/CustomButton2'
import css from "../../styles/jobs.module.css";
import Image from 'next/image';
import FotterComponent from '@/components/molecules/Fotter';
import CardComponent from '@/components/atoms/card'
import hireDevStyles from "../../styles/hireDevStyles.module.css"
import commonStyle, { cardsStyling } from '@/constants/commonStyle'
import homePageStyle from "../../styles/homePageStyles.module.css"
const SapFicoResourceHub = () => {
  return (
    <div>
      <Navbar/>
      <section id={sapStyle.outermostSection}  >
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div id={sapStyle.topsection}>
                        <div style={{ fontSize: "48px", width: "400px", fontWeight: "600", lineHeight: "59px" }}>SAP-FICO Resources Hub</div>
                        <div style={{ fontSize: "20px", width: "700px" }}>Welcome to our SAP FICO Resources Hub, your go-to for all things SAP Financial Accounting and Controlling (FICO). Whether you&apos;re an experienced SAP professional or new to finance and technology.</div>
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
                    <div style={{ opacity: "0.8" }}>SAP FICO encompasses core functionalities like General Ledger (GL), Accounts Payable (AP), Accounts Receivable (AR), Asset Accounting (AA), and Controlling (CO). It facilitates essential processes such as financial transactions, reporting, and regulatory compliance. Essentially, SAP FICO ensures accurate financial tracking, insightful analysis, and regulatory adherence within organizations.</div>
                </div>
            </section>
            <section id={sapStyle.secondsection}>
                <div style={{ fontSize: "32px", fontWeight: "600", marginBottom: "50px" }}>Learning Paths and Guides</div>
                <div id={sapStyle.threeimage}>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/TalentPoolImages/entryLevel.jpg" height={160} width={160} alt="" style={{borderRadius:"100px"}} /></div>
                        <div style={{ fontWeight: "600" }}>Beginner Guide</div>
                        <div style={{ fontSize: "14px" }}>Step-by-step introduction to SAP FICO for beginners, covering basic concepts, terminology, and navigation.Recommended learning resources, including online courses, tutorials, and books for beginners.</div>
                    </div>
                    
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/TalentPoolImages/advanceLevel.jpg" height={160} width={160} alt="" style={{borderRadius:"100px"}} /></div>
                        <div style={{ fontWeight: "600" }}>Advanced Topics</div>
                        <div style={{ fontSize: "14px" }}>Deep dive into advanced topics such as SAP S/4HANA Finance, financial planning and analysis (FP&A), and real-time reporting with SAP FICO.Advanced learning resources and certification paths for experienced SAP professionals.</div>
                    </div>
                </div>
            </section>
            <section id={sapStyle.secondsection}>
                <div style={{ fontSize: "32px", fontWeight: "600", marginBottom: "50px" }}>Training and Certification</div>
                <div id={sapStyle.threeimage}>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/VettingImages/certification.jpg" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>SAP FICO Certification</div>
                        <div style={{ fontSize: "14px" }}>Overview of SAP FICO certification paths, including certification levels and prerequisites. Guidance on how to prepare for SAP FICO certification exams and recommended study materials.</div>
                    </div>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/TalentPoolImages/traning2.png" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>Training Programs</div>
                        <div style={{ fontSize: "14px" }}>Information on SAP FICO training programs offered by SAP Education and authorized training partners. Details on training formats and scheduling options.</div>
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
                            headingNumber={"Implementation Best Practices"}
                            headingText={""}
                            paragraphText={"Gain insights into best practices for SAP FICO implementation projects, covering crucial aspects such as planning, configuration, testing, and go-live strategies."}
                            buttonText="Explore"
                            onButtonClick={null}
                            buttonEnabled={true}
                        />

                        <CardComponent
                            imageUrl={"/VettingImages/casestudy.jpg"}
                            imageHeight={200}
                            imageWidth={250}
                            headingNumber={"Real-world Case Studies"}
                            headingText={""}
                            paragraphText={"Explore real-world case studies showcasing successful SAP FICO implementations across various industries. "}
                            buttonText="Explore"
                            onButtonClick={null}
                            buttonEnabled={true}
                        />
                        <CardComponent
                            imageUrl={"/VettingImages/manager.webp"}
                            imageHeight={160}
                            imageWidth={190}
                            headingNumber={"Tips, Tricks, and Expert Advice"}
                            headingText={""}
                            paragraphText={"Discover tips and tricks for optimizing SAP FICO performance, enhancing efficiency, and overcoming common challenges. "}
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
                        <div className={style.steps}>Career Paths</div>
                        <div className={style.firstbox}>
                            <Image src="/VettingImages/vetting12.png" alt="" height={150} width={150} />
                            <div></div>
                            <div style={{ textAlign: "center" }}>Overview of career opportunities for SAP FICO professionals, including job roles, responsibilities, and salary expectations.</div>
                        </div>
                    </div>
                    {/* <ArrowForwardIcon /> */}
                    <div>
                        <div className={style.steps}>Job Opportunities</div>
                        <div className={style.firstbox}>
                            <Image src="/VettingImages/vetting13.avif" alt="" height={150} width={150} />
                            <div style={{ textAlign: "center" }}>Access to job boards, recruitment portals, and job postings specifically for SAP FICO roles.</div>
                        </div>
                    </div>


                </div>

            </section>
            <section className={style.joinSkills} >
                <div style={{ fontSize: "32px", fontWeight: "600", marginBottom: "50px" }}>SAP FICO Community and Support</div>
                <div style={{ display: "flex", gap: "50px" }}>
                    <div className={style.flexgap}>
                        <div className={style.whyjoinImages}><Image src="/JobsPageImages/community.jpg" alt="css" height={200} width={200} /></div>
                        <div className={css.jobrespon}>Forums and Communities</div>
                        <div className={style.whyjoinContent}>Explore links to online forums, discussion boards, and SAP Community pages specifically dedicated to SAP FICO. </div>
                    </div>
                    <div className={css.flexgap}>
                        <div className={style.whyjoinImages}><Image src="/JobsPageImages/networking.avif" alt="css" height={200} width={200} /></div>
                        <div className={css.jobrespon}>Opportunities for Networking</div>
                        <div className={style.whyjoinContent}>Connect with other SAP FICO professionals through various networking opportunities provided within the community. </div>
                    </div>
                    <div className={css.flexgap}>
                        <div className={style.whyjoinImages}><Image src="/JobsPageImages/resources.avif" alt="css" height={200} width={200} /></div>
                        <div className={css.jobrespon}>Access to Support Resources</div>
                        <div className={style.whyjoinContent}>Gain access to a wealth of SAP support resources, including comprehensive documentation, knowledge base articles, and support forums.  </div>
                    </div>
                    
                </div>
            </section>
            <FotterComponent/>
    </div>
  )
}

export default SapFicoResourceHub
