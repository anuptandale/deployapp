import CustomButton2 from '@/components/atoms/CustomButton2'
import Letstalk from '@/components/molecules/Contact'
import FotterComponent from '@/components/molecules/Fotter'
import css from "../../styles/sapTalentStyle.module.css"
import Navbar from '@/components/molecules/navbar';
import Image from "next/image";
import React from 'react'

const SapTalentPool = () => {
    return (
        <div>
            <Navbar />
            <section style={{ padding: "50px 0px" }} >
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div id={css.topsection}>
                        <div style={{ fontSize: "48px", width: "300px", fontWeight: "600", lineHeight: "59px" }}>SAP Talent on Demand</div>
                        <div style={{ fontSize: "20px" }}>Find a transformation consultant to achieve meaningful change.</div>
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
                                    backgroundColor: "lightblue",
                                    color: "#2871ff",
                                }}
                            />
                        </div>
                    </div>
                    <Image style={{ borderRadius: "10px" }} src="/TalentPoolImages/service5.jpg" height={330} width={330} alt="" />
                </div>
            </section>
            <section>
                <div id={css.meetyou}>
                    <div style={{ fontSize: "23px", fontWeight: "600" }}>MEET YOUR NEW COMPETITIVE ADVANTAGE</div>
                    <div style={{ opacity: "0.8" }}>Why limit yourself to traditional sources of talent—existing staff, big consulting firms, or your personal network? Resource better, faster, more flexibly, and at the best market prices by accessing Business Talent Group’s marketplace of high-end management consultants, subject matter experts, boutiques, and executives. Overcome resource limitations, complete critical projects, and enhance business performance with on-demand talent.</div>
                </div>
            </section>
            <section id={css.secondsection}>
                {/* <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>SAP-FICO TRANSFORMATION CONSULTING CAPABILITIES</div> */}
                <div id={css.threeimage}>
                    <div id={css.threeimagesection}>
                        <div><Image src="/TalentPoolImages/service6.webp" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>TOP TALENT</div>
                        <div style={{ fontSize: "14px" }}>Access independent consultants trained by Big 3 and boutique firms, plus experts and executives with experience at the world&apos;s most successful companies.</div>
                    </div>
                    <div id={css.threeimagesection}>
                        <div><Image src="/TalentPoolImages/service7.webp" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>WORLD-CLASS SERVICE</div>
                        <div style={{ fontSize: "14px" }}>Get the service level you need—from hands-on support to automated and instant—to scope the work, present a curated slate of candidates, and manage all contracting and compliance.</div>
                    </div>
                    <div id={css.threeimagesection}>
                        <div><Image src="/TalentPoolImages/service8.webp" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>BUILT FOR BUSINESS</div>
                        <div style={{ fontSize: "14px" }}>Rest easy with best-in-class information security, confidentiality, labor compliance, and contracting processes that adhere to the strict requirements of leading organizations.</div>
                    </div>
                </div>
            </section>
            <section>
                <div id={css.threeButtonOuter}>
                    <div style={{ fontSize: "23px", fontWeight: "600" }}>LIMITLESS ACCESS TO TOP TALENT AND SKILLS</div>
                    <div style={{ width: "1000px", textAlign: "center", opacity: "0.8" }}>Whether you want to flex your team, reduce consulting spend, place an interim C-suite executive, or access in-demand skills or expertise, get top business minds with experience in the industries, functions, and capabilities you need.</div>
                    <div id={css.outerButton}>
                        <div id={css.threeButton}>
                            <div id={css.but}>CAPABILITIES</div>
                            <div id={css.but}>INDUSTRIES</div>
                            <div id={css.but}>FUNCTIONS</div>
                        </div>
                        <div id={css.buttonTypesOuter}>
                            <div id={css.buttonTypes}>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_1.webp" height={78} width={78} alt="" />STRATEGY & PLANNING</div>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_2.webp" height={78} width={78} alt="" />OPERATIONS & PERFORMANCE</div>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_3.webp" height={78} width={78} alt="" />TRANSFORMATIONS</div>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_4.webp" height={78} width={78} alt="" />HIGHLY SKILLED CONTINGENT LABOR</div>
                            </div>
                            <div id={css.buttonTypes}>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_5.webp" height={78} width={78} alt="" />INTERIM EXECUTIVES</div>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_6.webp" height={78} width={78} alt="" />ORGANIZATIONAL DESIGN & EFFECTIVENESS</div>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_7.webp" height={78} width={78} alt="" />PROJECT MANAGEMENT</div>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_8.webp" height={78} width={78} alt="" />MANAGEMENT CONSULTING RESOURCES</div>
                            </div>
                        </div>
                        <div>
                            <div id={css.allservice}>See All Services</div>
                        </div>
                    </div>
                </div>
            </section>
            <section id={css.secondsectiongrey}>
                <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>TECHNOLOGY + TALENT + KNOW-HOW</div>
                <div style={{ fontSize: "18px", padding: "0px 200px", marginBottom: "50px", opacity: "0.7" }}>Our high-end, on-demand talent marketplace powers greater agility, innovation, outcomes, and competitive advantage. Through proprietary technology, vast talent knowledge, and skilled in-house consultants, we deliver a handpicked selection of freelance consultants and experts vetted for the project at hand.</div>
                <div id={css.threeimage}>
                    <div id={css.threeimagesection}>
                        <div><Image src="/TalentPoolImages/service9.webp" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>SHARE YOUR NEED</div>
                        <div style={{ fontSize: "14px" }}>Call, post, or chat details of your project, ideal consultant, budget, and timeline.</div>
                    </div>
                    <div id={css.threeimagesection}>
                        <div><Image src="/TalentPoolImages/service10.webp" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>SELECT YOUR TALENT</div>
                        <div style={{ fontSize: "14px" }}>Choose your consultant or team of experts from a curated slate of talent.</div>
                    </div>
                    <div id={css.threeimagesection}>
                        <div><Image src="/TalentPoolImages/service11.webp" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>GET THE WORK DONE</div>
                        <div style={{ fontSize: "14px" }}>Rest easy as your consultant is rapidly deployed onsite or remote. Let us take care of the rest.</div>
                    </div>
                </div>
            </section>
            <section id={css.secondsection}>
                <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>MARKETPLACE TALENT FACTS</div>
                <div id={css.threeimage}>
                    <div id={css.threeimagesection}>
                        {/* <div style={{ fontWeight: "600" }}>CLASSICALLY TRAINED</div> */}
                        <div id={css.greenNumber}>53%</div>

                        <div style={{ fontSize: "14px", opacity: "0.8" }}>of the Fortune 100 served</div>
                    </div>
                    <div id={css.threeimagesection}>
                        {/* <div style={{ fontWeight: "600" }}>PROVEN & HANDS-ON</div> */}
                        <div id={css.greenNumber}>99%</div>

                        <div style={{ fontSize: "14px", opacity: "0.8" }}>fill rate on all talent requests</div>
                    </div>
                    <div id={css.threeimagesection}>
                        {/* <div style={{ fontWeight: "600" }}>EXECUTION-ORIENTED</div> */}
                        <div id={css.greenNumber}>91%</div>

                        <div style={{ fontSize: "14px", opacity: "0.8" }}>of clients explore a new project within 12 months</div>
                    </div>
                </div>
            </section>
            <section>
                <Letstalk />
            </section>
            <FotterComponent />
        </div>
    )
}

export default SapTalentPool
