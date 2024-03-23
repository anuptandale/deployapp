import Navbar from '@/components/molecules/navbar';
import React from 'react'
import css from "../../styles/sapTalentStyle.module.css"
import CustomButton2 from '@/components/atoms/CustomButton2';
import { SapPageText } from '@/constants/texts';
import Image from 'next/image';
import FotterComponent from '@/components/molecules/Fotter';
const SapTalentExpertise = () => {
  return (
    <div>
      <Navbar />
      <section id={css.outermostSection}  >
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div id={css.topsection}>
                        <div style={{ fontSize: "48px", width: "300px", fontWeight: "600", lineHeight: "59px" }}>SAP-FICO Expertise</div>
                        <div style={{ fontSize: "20px" }}>{SapPageText.mainSubHeading}</div>
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
                <div id={css.meetyou}>
                    {/* <div style={{ fontSize: "23px", fontWeight: "600" }}>SAP FICO professionals encompass Functional, Technical, and Techno-Functional Consultants, each with distinct responsibilities. They assume roles such as Consultants, Developers, Architects, Managers, Testers, and Support staff, contributing to projects spanning Implementation, Enhancement, Support, and Migration phases, ensuring the seamless integration and optimization of SAP FICO solutions.</div> */}
                    <div style={{ opacity: "0.8" }}>SAP FICO professionals encompass Functional, Technical, and Techno-Functional Consultants, each with distinct responsibilities. They assume roles such as Consultants, Developers, Architects, Managers, Testers, and Support staff, contributing to projects spanning Implementation, Enhancement, Support, and Migration phases, ensuring the seamless integration and optimization of SAP FICO solutions.</div>
                </div>
            </section>
            <section id={css.secondsection}>
                <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>SAP-FICO Function Type</div>
                <div id={css.threeimage}>
                    <div id={css.threeimagesection}>
                        <div><Image src="/TalentPoolImages/service6.webp" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>Functional Consultant</div>
                        <div style={{ fontSize: "14px",width:"300px" }}>Responsibilities include understanding business requirements, configuring SAP FICO modules, and providing functional expertise to stakeholders.</div>
                    </div>
                    <div id={css.threeimagesection}>
                        <div><Image src="/TalentPoolImages/service7.webp" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>Technical Consultant</div>
                        <div style={{ fontSize: "14px",width:"300px" }}>Responsibilities include system configuration, customization, and development of SAP FICO solutions based on technical specifications.</div>
                    </div>
                    <div id={css.threeimagesection}>
                        <div><Image src="/TalentPoolImages/service8.webp" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>Techno-Functional Consultant</div>
                        <div style={{ fontSize: "14px",width:"300px" }}>Responsibilities include a combination of functional and technical tasks, such as translating business requirements into technical solutions, configuring systems, and providing end-user support.</div>
                    </div>
                </div>
            </section>
            <section id={css.insightsection}>
                <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>SAP-FICO Role Type</div>
                <div id={css.insightOuter2}>
                    <div id={css.insight3}>
                        <div style={{ fontWeight: "600" }}>Consultant  &gt;</div>
                        <div>Involves providing consulting services to clients, analyzing business processes, and recommending SAP FICO solutions to meet their needs.</div>
                    </div>
                    <div id={css.insight3}>
                        <div style={{ fontWeight: "600" }}>Developer  &gt;</div>
                        <div>Involves customizing and developing SAP FICO functionalities, including writing code, creating reports, and implementing system enhancements.</div>
                    </div>
                    <div id={css.insight3}>
                        <div style={{ fontWeight: "600" }}>Architect  &gt;</div>
                        <div>Involves designing and planning SAP FICO solutions architecture, ensuring alignment with business goals and best practices.</div>
                    </div>
                    
                </div>
            </section>
            <section id={css.insightsection}>
                {/* <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>{SapficoPageText.techHeading}</div> */}
                <div id={css.insightOuter2}>
                    <div id={css.insight3}>
                        <div style={{ fontWeight: "600" }}>Manager  &gt;</div>
                        <div>Involves overseeing SAP FICO projects, leading teams, managing resources, and ensuring project delivery within scope, schedule, and budget.</div>
                    </div>
                    <div id={css.insight3}>
                        <div style={{ fontWeight: "600" }}>Tester  &gt;</div>
                        <div>Involves testing SAP FICO configurations, functionalities, and integrations to ensure quality and compliance with business requirements.</div>
                    </div>
                    <div id={css.insight3}>
                        <div style={{ fontWeight: "600" }}>Support  &gt;</div>
                        <div>Involves providing ongoing support and troubleshooting for SAP FICO systems, addressing user issues, and resolving technical problems.</div>
                    </div>
                    
                </div>
            </section>
            <section id={css.secondsection}>
                <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>SAP-FICO Project Type</div>
                <div id={css.threeimage}>
                    <div id={css.threeimagesection}>
                        <div><Image src="/TalentPoolImages/service6.webp" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>Implementation</div>
                        <div style={{ fontSize: "14px",width:"300px" }}>Involves deploying SAP FICO solutions for the first time in an organization, including system setup, configuration, and user training.</div>
                    </div>
                    <div id={css.threeimagesection}>
                        <div><Image src="/TalentPoolImages/service7.webp" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>Enhancement</div>
                        <div style={{ fontSize: "14px",width:"300px" }}>Involves making improvements or additions to existing SAP FICO systems, such as implementing new functionalities or optimizing processes.</div>
                    </div>
                    <div id={css.threeimagesection}>
                        <div><Image src="/TalentPoolImages/service8.webp" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>Support</div>
                        <div style={{ fontSize: "14px",width:"300px" }}>Involves providing ongoing maintenance, troubleshooting, and user support for existing SAP FICO systems to ensure smooth operation.</div>
                    </div>
                    <div id={css.threeimagesection}>
                        <div><Image src="/TalentPoolImages/service8.webp" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>Migration</div>
                        <div style={{ fontSize: "14px",width:"300px" }}>Involves transferring data and functionalities from legacy systems to SAP FICO, ensuring data integrity and system compatibility throughout the migration process.</div>
                    </div>
                </div>
            </section>
            <FotterComponent/>
    </div>
  )
}

export default SapTalentExpertise;
