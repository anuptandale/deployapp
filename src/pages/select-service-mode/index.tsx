import Navbar from '@/components/molecules/navbar'
import React from 'react'
import style from "../../styles/selectServiceModeStyle.module.css";
import css from "../../styles/jobs.module.css";
import AccordionComponent from '@/components/atoms/accodion';
import homePageStyle from "../../styles/homePageStyles.module.css"
import { accordianStylingHomePage } from '@/constants/commonStyle';
import { VettingPageText } from '@/constants/texts';
const SelectServiceMode = () => {
    return (
        <div>
            <section>
                <Navbar />
            </section>
            <section className={style.topSection}>
                <div style={{ textAlign: 'center', fontSize: "30px" }}>Select the Best Match</div>
                <div style={{ textAlign: 'center', fontSize: "20px" }}>Select the service model that best aligns with your project needs and preferences. Whether you prefer the autonomy of our Self-Service model or the comprehensive support of our Assisted Service model, we&apos;re here to connect you with the right talent, efficiently and effectively.</div>
            </section>
            <section className={css.jobdesc}>
                <div className={css.jobdescContent} >
                    <div className={style.jobdescHeading}>Self Service Model</div>
                    <div>Empower your talent search with our Self Service model, designed for those who prefer a hands-on approach. Directly access our pre-vetted talent pool, utilize our advanced AI-driven matching, and manage the hiring process at your pace, with our intuitive platform facilitating every step</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "35px" }}>
                        <div className={css.flexgap1}>
                            <div className={css.jobrespon}>Benefits:</div>
                            <div className={css.jobresponContent} >
                                {/* <FiberManualRecordIcon sx={{ fontSize: "10px" }} */}
                                <div>  Complete control over the selection process</div>
                                <div>Immediate access to our extensive talent pool</div>
                                <div>AI-powered recommendations tailored to your requirements</div>
                                <div>Specialist team support for candidate communication</div>
                                <div>User-friendly platform to streamline your search and hiring</div>

                            </div>
                        </div>
                        <div className={css.flexgap1}>
                            <div className={css.jobrespon}>Best for:</div>
                            <div className={css.jobresponContent} >
                                <div>Clients who prefer to manage the hiring process themselves</div>
                                <div>Projects where you have clear, specific requirements</div>
                                <div>When you want to quickly browse and select candidates</div>

                            </div>
                        </div>


                    </div>


                </div>

            </section>
            <section >
                <main style={{padding:"20px 100px"}} >
                    <div className="accodiaonHome">
                        <div className={homePageStyle.ondemandflex} >
                            <div >
                                <h2 style={accordianStylingHomePage.accordianStylingHeading}>
                                    How It Works: Self Service Model
                                </h2>

                                {/* <p style={accordianStylingHomePage.accordianStylingPara}>
                                                {VettingPageText.thirdPara}
                                            </p> */}
                                <br />
                                <br />
                                <AccordionComponent
                                    title="Submit Requirements"
                                    content="Log into the platform and submit your detailed project requirements or job description."
                                />
                                <br />
                                <AccordionComponent
                                    title="AI-Powered Matching"
                                    content="Utilize our AI algorithms to receive a list of top-matched, pre-vetted candidates."
                                />
                                <br />
                                <AccordionComponent
                                    title="Specialized Team Support"
                                    content="Our team confirms the availability and interest of your selected candidates, ensuring they&apos;re ready for your project."
                                />
                                <br />
                                <AccordionComponent
                                    title="Access Client Portal"
                                    content="Review the interested and available candidates or explore backups in your dedicated client portal."
                                />
                                <br />
                                <AccordionComponent
                                    title="Schedule Interviews"
                                    content="Use the platform&apos;s tools to schedule interviews and further assess the candidates."
                                />
                                <br />
                                <AccordionComponent
                                    title="Make Your Selection"
                                    content="Choose the best candidate for your needs and proceed with onboarding."
                                />
                            </div>
                            {/* <div>
                                            <Image
                                                src={"/VettingImages/vetting9.png"}
                                                alt="Accordian Image"
                                                width={442}
                                                height={350}
                                            />
                                        </div> */}
                        </div>
                    </div>
                </main>
            </section>
            <section className={css.jobdesc}>
                <div className={css.jobdescContent} >
                    <div className={style.jobdescHeading}>Assisted Service Model</div>
                    <div>Opt for our Assisted Service model to benefit from the expertise of our specialized team. In addition to leveraging our platform&apos;s capabilities, you&apos;ll receive personalized support to ensure your talent matches are perfectly aligned with your project&apos;s unique needs.</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "35px" }}>
                        <div className={css.flexgap1}>
                            <div className={css.jobrespon}>Benefits:</div>
                            <div className={css.jobresponContent} >
                                {/* <FiberManualRecordIcon sx={{ fontSize: "10px" }} */}
                                <div>  Dedicated team to assist with your search and vetting process</div>
                                <div>Personalized matching and handpicked candidate shortlists</div>
                                <div>Proactive communication and coordination throughout the hiring process</div>
                                <div>Enhanced support for interviews and assessments
Ideal for complex projects or when seeking highly specialized talent</div>
                                

                            </div>
                        </div>
                        <div className={css.flexgap1}>
                            <div className={css.jobrespon}>Best for:</div>
                            <div className={css.jobresponContent} >
                                <div>Clients who prefer a guided, hands-on approach from our team</div>
                                <div>When you require additional expertise in identifying the right talent</div>
                                <div>For complex or high-stakes projects where precision in candidate selection is crucial</div>

                            </div>
                        </div>


                    </div>


                </div>

            </section>
            <section >
                <main style={{padding:"20px 100px"}} >
                    <div className="accodiaonHome">
                        <div className={homePageStyle.ondemandflex} >
                            <div >
                                <h2 style={accordianStylingHomePage.accordianStylingHeading}>
                                How It Works: Assisted Service Model
                                </h2>

                                {/* <p style={accordianStylingHomePage.accordianStylingPara}>
                                                {VettingPageText.thirdPara}
                                            </p> */}
                                <br />
                                <br />
                                <AccordionComponent
                                    title="Submit Requirements"
                                    content="Provide us with your project details and specific talent needs."
                                />
                                <br />
                                <AccordionComponent
                                    title="Personalized Support"
                                    content="Our specialized team reviews your requirements and uses our AI-enhanced tools to identify ideal candidates."
                                />
                                <br />
                                <AccordionComponent
                                    title="Candidate Shortlisting"
                                    content="We present you with a curated list of candidates, pre-confirmed for their interest and availability."
                                />
                                <br />
                                <AccordionComponent
                                    title="Access Client Portal"
                                    content="Review the interested and available candidates or explore backups in your dedicated client portal."
                                />
                                <br />
                                <AccordionComponent
                                    title="Client Review"
                                    content="Access your client portal to review the selected candidates, with the flexibility to request further information or additional options."
                                />
                                <br />
                                <AccordionComponent
                                    title="Interview Coordination"
                                    content="We assist in scheduling interviews and provide support throughout the selection process."
                                />
                                <br />
                                <AccordionComponent
                                    title="Finalize Your Choice"
                                    content="Once you&apos;ve selected the right candidate, we facilitate the final steps to get them on board with your project."
                                />
                            </div>
                            {/* <div>
                                            <Image
                                                src={"/VettingImages/vetting9.png"}
                                                alt="Accordian Image"
                                                width={442}
                                                height={350}
                                            />
                                        </div> */}
                        </div>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default SelectServiceMode
