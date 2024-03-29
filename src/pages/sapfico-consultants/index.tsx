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

const SapficoConsultantPage = () => {
  return (
    <div>
      <Navbar/>
      <section id={sapStyle.outermostSection}  >
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div id={sapStyle.topsection}>
                        <div style={{ fontSize: "48px", width: "400px", fontWeight: "600", lineHeight: "59px" }}>SAP-FICO Consultant</div>
                        <div style={{ fontSize: "20px", width: "700px" }}>Welcome to our SAP FICO Consultant page, dedicated to providing comprehensive information for individuals interested in pursuing a career as an SAP FICO Consultant. </div>
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
                    <div style={{ opacity: "0.8" }}>Emphasizing the role of an SAP FICO Consultant, required skills and qualifications, career growth opportunities, and resources available for training and certification. Encourage visitors to explore the resources provided and take proactive steps towards pursuing a successful career as an SAP FICO Consultant. Provide links to relevant training programs, certification options, and job search resources to assist them in their journey.</div>
                </div>
            </section>
            <section id={sapStyle.secondsection}>
                <div style={{ fontSize: "32px", fontWeight: "600", marginBottom: "50px" }}>Skills and Qualifications</div>
                <div id={sapStyle.threeimage}>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/TalentPoolImages/technical_skills.png" height={160} width={160} alt=""  /></div>
                        <div style={{ fontWeight: "600" }}>Technical Skills</div>
                        <div style={{ fontSize: "14px" }}>Emphasize knowledge of SAP FICO modules such as General Ledger (GL), Accounts Payable (AP), Accounts Receivable (AR), Asset Accounting (AA), and Controlling (CO).</div>
                    </div>
                    
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/TalentPoolImages/soft_skills.jpg" height={160} width={160} alt="" style={{borderRadius:"100px"}} /></div>
                        <div style={{ fontWeight: "600" }}>Soft Skills</div>
                        <div style={{ fontSize: "14px" }}>Emphasize the importance of attention to detail, analytical thinking, and the ability to work under pressure.</div>
                    </div>
                </div>
            </section>
            <section id={sapStyle.secondsection}>
                <div style={{ fontSize: "32px", fontWeight: "600", marginBottom: "50px" }}>Career Path and Growth Opportunities</div>
                <div id={sapStyle.threeimage}>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/TalentPoolImages/entryLevel.jpg" height={130} width={130} alt="" style={{borderRadius:"70px"}} /></div>
                        <div style={{ fontWeight: "600" }}>Entry-level Positions</div>
                        <div style={{ fontSize: "14px" }}>Entry-level positions available for aspiring SAP FICO Consultants, such as Junior SAP FICO Consultant or SAP FICO Analyst.</div>
                    </div>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/TalentPoolImages/midLevel.jpg" height={130} width={130} alt="" style={{borderRadius:"70px"}}/></div>
                        <div style={{ fontWeight: "600" }}>Mid-level Positions</div>
                        <div style={{ fontSize: "14px" }}>Mid-level positions that SAP FICO Consultants can progress into, such as Senior SAP FICO Consultant or SAP FICO Team Lead.</div>
                    </div>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/TalentPoolImages/advanceLevel.jpg" height={130} width={130} alt="" style={{borderRadius:"70px"}} /></div>
                        <div style={{ fontWeight: "600" }}>Advanced Positions</div>
                        <div style={{ fontSize: "14px" }}>Explore advanced positions available for experienced SAP FICO Consultants, such as SAP FICO Project Manager or SAP FICO Solution Architect.</div>
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
                        Role of an SAP FICO Consultant
                        </h2>
                        <br />
                        <br />
                    </div>
                    <div className="cards" style={commonStyle.dflex_1}>
                        <CardComponent
                            imageUrl={"/VettingImages/consultant.jpg"}
                            imageHeight={210}
                            imageWidth={210}
                            headingNumber={"Implementation of SAP FICO Modules"}
                            headingText={""}
                            paragraphText={"SAP FICO Consultants are responsible for implementing SAP FICO modules, ensuring they are tailored to meet the specific needs and requirements of the organization. "}
                            buttonText="Explore"
                            onButtonClick={null}
                            buttonEnabled={true}
                        />

                        <CardComponent
                            imageUrl={"/VettingImages/casestudy.jpg"}
                            imageHeight={200}
                            imageWidth={250}
                            headingNumber={"Support for Financial Processes"}
                            headingText={""}
                            paragraphText={"Consultants provide ongoing support for financial processes within the organization, including troubleshooting issues, resolving system errors, and assisting end-users with queries related to SAP FICO functionalities. "}
                            buttonText="Explore"
                            onButtonClick={null}
                            buttonEnabled={true}
                        />
                        <CardComponent
                            imageUrl={"/VettingImages/manager.webp"}
                            imageHeight={160}
                            imageWidth={190}
                            headingNumber={"Analyzing Business Requirements"}
                            headingText={""}
                            paragraphText={"SAP FICO Consultants play a crucial role in analyzing business requirements related to financial accounting and controlling. "}
                            buttonText="Explore"
                            onButtonClick={null}
                            buttonEnabled={true}
                        />
                    </div>
                </div>
            </section>
            <section className={hireDevStyles.outerhowitwork}>

                <div style={{ fontSize: "32px", fontWeight: "600", marginBottom: "50px" }}>Job Search and Application Tips</div>
                <div className={hireDevStyles.howitwork}>
                    <div>
                        <div className={style.steps}>Job Search</div>
                        <div className={style.firstbox}>
                            <Image src="/VettingImages/vetting12.png" alt="" height={150} width={150} />
                            <div></div>
                            <div style={{ textAlign: "center" }}>Offer tips and strategies for finding SAP FICO Consultant job opportunities, such as networking, leveraging online job boards, and reaching out to recruiters.</div>
                        </div>
                    </div>
                    {/* <ArrowForwardIcon /> */}
                    <div>
                        <div className={style.steps}>Interview prep</div>
                        <div className={style.firstbox}>
                            <Image src="/VettingImages/vetting13.avif" alt="" height={150} width={150} />
                            <div style={{ textAlign: "center" }}>Offer guidance on showcasing technical proficiency, problem-solving abilities, and alignment with the organization&apos;s goals and culture during interviews.</div>
                        </div>
                    </div>


                </div>

            </section>
            <section id={sapStyle.secondsection}>
                <div style={{ fontSize: "32px", fontWeight: "600", marginBottom: "50px" }}>Training and Certification</div>
                <div id={sapStyle.threeimage}>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/VettingImages/certification.jpg" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>SAP FICO Certification</div>
                        <div style={{ fontSize: "14px" }}>Provide information on SAP FICO certification options available, such as SAP Certified Application Associate - Financial Accounting (SAP S/4HANA).</div>
                    </div>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/TalentPoolImages/traning2.png" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>Training Programs</div>
                        <div style={{ fontSize: "14px" }}>Highlight training programs and resources available for SAP FICO Consultants, including online courses, workshops, and seminars.</div>
                    </div>
                    
                </div>
            </section>
            <FotterComponent/>
    </div>
  )
}

export default SapficoConsultantPage
