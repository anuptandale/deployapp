// import CustomButton2 from '@/components/atoms/CustomButton2'
// import Letstalk from '@/components/molecules/Contact'
// import FotterComponent from '@/components/molecules/Fotter'
// import css from "../../styles/sap.module.css"
// import Navbar from '@/components/molecules/navbar';
// import Image from "next/image";
// import React from 'react'

// const SapTalentPool = () => {
//     return (
//         <div>
//             <Navbar />
//             <section style={{ padding: "50px 0px" }} >
//                 <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                     <div id={css.topsection}>
//                         <div style={{ fontSize: "48px", width: "300px", fontWeight: "600", lineHeight: "59px" }}>SAP Talent on Demand</div>
//                         <div style={{ fontSize: "20px" }}>Find a transformation consultant to achieve meaningful change.</div>
//                         <div>
//                             <CustomButton2
//                                 label="GET STARTED"
//                                 // onClick={hirenowClick}
//                                 buttonStyle={{
//                                     width: "272px",
//                                     height: "51.6px",
//                                     border: "1px solid #2871ff",
//                                     color: "#fff",
//                                     fontSize: "20px",
//                                     backgroundColor: "#2871ff",
//                                 }}
//                                 hoverStyle={{
//                                     backgroundColor: "lightblue",
//                                     color: "#2871ff",
//                                 }}
//                             />
//                         </div>
//                     </div>
//                     <Image style={{ borderRadius: "10px" }} src="/TalentPoolImages/service5.jpg" height={330} width={330} alt="" />
//                 </div>
//             </section>
//             <section>
//                 <div id={css.meetyou}>
//                     <div style={{ fontSize: "23px", fontWeight: "600" }}>MEET YOUR NEW COMPETITIVE ADVANTAGE</div>
//                     <div style={{ opacity: "0.8" }}>Why limit yourself to traditional sources of talent—existing staff, big consulting firms, or your personal network? Resource better, faster, more flexibly, and at the best market prices by accessing Business Talent Group’s marketplace of high-end management consultants, subject matter experts, boutiques, and executives. Overcome resource limitations, complete critical projects, and enhance business performance with on-demand talent.</div>
//                 </div>
//             </section>
//             <section id={css.secondsection}>
//                 {/* <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>SAP-FICO TRANSFORMATION CONSULTING CAPABILITIES</div> */}
//                 <div id={css.threeimage}>
//                     <div id={css.threeimagesection}>
//                         <div><Image src="/TalentPoolImages/service6.webp" height={130} width={130} alt="" /></div>
//                         <div style={{ fontWeight: "600" }}>TOP TALENT</div>
//                         <div style={{ fontSize: "14px" }}>Access independent consultants trained by Big 3 and boutique firms, plus experts and executives with experience at the world&apos;s most successful companies.</div>
//                     </div>
//                     <div id={css.threeimagesection}>
//                         <div><Image src="/TalentPoolImages/service7.webp" height={130} width={130} alt="" /></div>
//                         <div style={{ fontWeight: "600" }}>WORLD-CLASS SERVICE</div>
//                         <div style={{ fontSize: "14px" }}>Get the service level you need—from hands-on support to automated and instant—to scope the work, present a curated slate of candidates, and manage all contracting and compliance.</div>
//                     </div>
//                     <div id={css.threeimagesection}>
//                         <div><Image src="/TalentPoolImages/service8.webp" height={130} width={130} alt="" /></div>
//                         <div style={{ fontWeight: "600" }}>BUILT FOR BUSINESS</div>
//                         <div style={{ fontSize: "14px" }}>Rest easy with best-in-class information security, confidentiality, labor compliance, and contracting processes that adhere to the strict requirements of leading organizations.</div>
//                     </div>
//                 </div>
//             </section>
//             <section>
//                 <div id={css.threeButtonOuter}>
//                     <div style={{ fontSize: "23px", fontWeight: "600" }}>LIMITLESS ACCESS TO TOP TALENT AND SKILLS</div>
//                     <div style={{ width: "1000px", textAlign: "center", opacity: "0.8" }}>Whether you want to flex your team, reduce consulting spend, place an interim C-suite executive, or access in-demand skills or expertise, get top business minds with experience in the industries, functions, and capabilities you need.</div>
//                     <div id={css.outerButton}>
//                         <div id={css.threeButton}>
//                             <div id={css.but}>CAPABILITIES</div>
//                             <div id={css.but}>INDUSTRIES</div>
//                             <div id={css.but}>FUNCTIONS</div>
//                         </div>
//                         <div id={css.buttonTypesOuter}>
//                             <div id={css.buttonTypes}>
//                                 <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_1.webp" height={78} width={78} alt="" />STRATEGY & PLANNING</div>
//                                 <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_2.webp" height={78} width={78} alt="" />OPERATIONS & PERFORMANCE</div>
//                                 <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_3.webp" height={78} width={78} alt="" />TRANSFORMATIONS</div>
//                                 <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_4.webp" height={78} width={78} alt="" />HIGHLY SKILLED CONTINGENT LABOR</div>
//                             </div>
//                             <div id={css.buttonTypes}>
//                                 <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_5.webp" height={78} width={78} alt="" />INTERIM EXECUTIVES</div>
//                                 <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_6.webp" height={78} width={78} alt="" />ORGANIZATIONAL DESIGN & EFFECTIVENESS</div>
//                                 <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_7.webp" height={78} width={78} alt="" />PROJECT MANAGEMENT</div>
//                                 <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_8.webp" height={78} width={78} alt="" />MANAGEMENT CONSULTING RESOURCES</div>
//                             </div>
//                         </div>
//                         <div>
//                             <div id={css.allservice}>See All Services</div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section id={css.secondsectiongrey}>
//                 <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>TECHNOLOGY + TALENT + KNOW-HOW</div>
//                 <div style={{ fontSize: "18px", padding: "0px 200px", marginBottom: "50px", opacity: "0.7" }}>Our high-end, on-demand talent marketplace powers greater agility, innovation, outcomes, and competitive advantage. Through proprietary technology, vast talent knowledge, and skilled in-house consultants, we deliver a handpicked selection of freelance consultants and experts vetted for the project at hand.</div>
//                 <div id={css.threeimage}>
//                     <div id={css.threeimagesection}>
//                         <div><Image src="/TalentPoolImages/service9.webp" height={130} width={130} alt="" /></div>
//                         <div style={{ fontWeight: "600" }}>SHARE YOUR NEED</div>
//                         <div style={{ fontSize: "14px" }}>Call, post, or chat details of your project, ideal consultant, budget, and timeline.</div>
//                     </div>
//                     <div id={css.threeimagesection}>
//                         <div><Image src="/TalentPoolImages/service10.webp" height={130} width={130} alt="" /></div>
//                         <div style={{ fontWeight: "600" }}>SELECT YOUR TALENT</div>
//                         <div style={{ fontSize: "14px" }}>Choose your consultant or team of experts from a curated slate of talent.</div>
//                     </div>
//                     <div id={css.threeimagesection}>
//                         <div><Image src="/TalentPoolImages/service11.webp" height={130} width={130} alt="" /></div>
//                         <div style={{ fontWeight: "600" }}>GET THE WORK DONE</div>
//                         <div style={{ fontSize: "14px" }}>Rest easy as your consultant is rapidly deployed onsite or remote. Let us take care of the rest.</div>
//                     </div>
//                 </div>
//             </section>
//             <section id={css.secondsection}>
//                 <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>MARKETPLACE TALENT FACTS</div>
//                 <div id={css.threeimage}>
//                     <div id={css.threeimagesection}>
//                         {/* <div style={{ fontWeight: "600" }}>CLASSICALLY TRAINED</div> */}
//                         <div id={css.greenNumber}>53%</div>

//                         <div style={{ fontSize: "14px", opacity: "0.8" }}>of the Fortune 100 served</div>
//                     </div>
//                     <div id={css.threeimagesection}>
//                         {/* <div style={{ fontWeight: "600" }}>PROVEN & HANDS-ON</div> */}
//                         <div id={css.greenNumber}>99%</div>

//                         <div style={{ fontSize: "14px", opacity: "0.8" }}>fill rate on all talent requests</div>
//                     </div>
//                     <div id={css.threeimagesection}>
//                         {/* <div style={{ fontWeight: "600" }}>EXECUTION-ORIENTED</div> */}
//                         <div id={css.greenNumber}>91%</div>

//                         <div style={{ fontSize: "14px", opacity: "0.8" }}>of clients explore a new project within 12 months</div>
//                     </div>
//                 </div>
//             </section>
//             <section>
//                 <Letstalk />
//             </section>
//             <FotterComponent />
//         </div>
//     )
// }

// export default SapTalentPool
import Navbar from '@/components/molecules/navbar'
import React from 'react';
import Image from "next/image";
import css from "../../styles/sapTalentStyle.module.css"
import CustomButton2 from '@/components/atoms/CustomButton2';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FotterComponent from '@/components/molecules/Fotter';
import Contact from '../contact-us';
import Letstalk from '@/components/molecules/Contact';
const SapFicoTalentPool = () => {
    return (
        <div>
            <Navbar />
            <section style={{backgroundColor: "#f2f2f2",  padding: "50px 0px" }} >
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div id={css.topsection}>
                        <div style={{ fontSize: "48px", width: "300px", fontWeight: "600", lineHeight: "59px" }}>SAP-FICO Consulting</div>
                        <div style={{ fontSize: "20px" }}>Find a transformation consultant to achieve meaningful change.</div>
                        <div>
                            <CustomButton2
                                label="FIND A CONSULTANT"
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
                    <Image style={{borderRadius:"10px"}} src="/TalentPoolImages/service5.jpg" height={330} width={330} alt="" />
                </div>
            </section>
            <section id={css.secondsection}>
                <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>SAP-FICO TRANSFORMATION CONSULTING CAPABILITIES</div>
                <div id={css.threeimage}>
                    <div id={css.threeimagesection}>
                        <div><Image src="/TalentPoolImages/service2.webp" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>EXPERTISE TO ACCELERATE YOUR TRANSFORMATION</div>
                        <div style={{ fontSize: "14px" }}>Engage thought leaders on everything from Six Sigma implementation to risk management, employee empowerment to CRM adoption.</div>
                    </div>
                    <div id={css.threeimagesection}>
                        <div><Image src="/TalentPoolImages/service3.webp" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>SKILLS TO SUPPLEMENT YOUR TEAM</div>
                        <div style={{ fontSize: "14px" }}>Add expertise whenever you need to fulfill important initiatives or meet critical deadlines.</div>
                    </div>
                    <div id={css.threeimagesection}>
                        <div><Image src="/TalentPoolImages/service4.webp" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>FROM INSIGHT TO ACTION</div>
                        <div style={{ fontSize: "14px" }}>BTG&apos;s modular approach makes it easy to get the help you need, whether it&apos;s individuals or teams, on-site or remote, U.S. based or global.</div>
                    </div>
                </div>
            </section>
            <section id={css.insightsection}>
                <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>WHAT WE DO</div>
                <div id={css.insightOuter}>
                    <div id={css.insight2}>
                        <div style={{ fontWeight: "600", fontSize: "24px" }}>The power of pace in technology</div>
                        <div>Hivemind Technologies explains what steps matter in speeding software development for transformations.</div>
                    </div>
                    <div id={css.insight2}>
                        <div style={{ fontWeight: "600", fontSize: "24px" }}>The power of pace in technology</div>
                        <div >Hivemind Technologies explains what steps matter in speeding software development for transformations.</div>
                    </div>
                    <div id={css.insight2}>
                        <div style={{ fontWeight: "600", fontSize: "24px" }}>The power of pace in technology</div>
                        <div >Hivemind Technologies explains what steps matter in speeding software development for transformations.</div>
                    </div>
                    <div id={css.insight2}>
                        <div style={{ fontWeight: "600", fontSize: "24px" }}>The power of pace in technology</div>
                        <div >Hivemind Technologies explains what steps matter in speeding software development for transformations.</div>
                    </div>
                </div>
            </section>
            <section id={css.allsapOuterMost}>
                <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>IN-DEMAND PROBLEM SOLVERS FOR ALL OF YOUR TRANSFORMATION CONSULTING NEEDS</div>
                <div id={css.allsapOuter}>
                    <div id={css.allsapInner}>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; Financial Accounting (FI)</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; Controlling (CO)</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; General Ledger (FI-GL)</div>



                    </div>
                    <div id={css.allsapInner}>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; Accounts Payable (FI-AP)</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; Accounts Receivable (FI-AR)</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; Asset Accounting (FI-AA)</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; Profitability Analysis (CO-PA)</div>


                    </div>
                    <div id={css.allsapInner}>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; Bank Accounting (FI-BL)</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; Cost Element Accounting (CO-OM-CEL)</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; Cost Center Accounting (CO-OM-CCA)</div>

                    </div>
                </div>
            </section>
            <section id={css.secondsection2}>
                <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>LIMITLESS ACCESS TO TOP TRANSFORMATION CONSULTANTS</div>
                <div id={css.threeimageprofile}>
                    <div id={css.threeimagesection}>
                        <Image style={{ borderRadius: "100px" }} src="/TalentPoolImages/person.jpg" height={130} width={130} alt="" />
                        <div style={{ fontWeight: "600" }}>ALEX PASHKOWSKY</div>
                        <div>Program Manager</div>
                    </div>
                    <div id={css.threeimagesection}>
                        <Image style={{ borderRadius: "100px" }} src="/TalentPoolImages/person.jpg" height={130} width={130} alt="" />
                        <div style={{ fontWeight: "600" }}>ALEX PASHKOWSKY</div>
                        <div>Program Manager</div>
                    </div>
                    <div id={css.threeimagesection}>
                        <Image style={{ borderRadius: "100px" }} src="/TalentPoolImages/person.jpg" height={130} width={130} alt="" />
                        <div style={{ fontWeight: "600" }}>ALEX PASHKOWSKY</div>
                        <div>Program Manager</div>
                    </div>
                </div>
            </section>
            <section id={css.secondsection}>
                <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>MARKETPLACE TALENT FACTS</div>
                <div id={css.threeimage}>
                    <div id={css.threeimagesection}>
                        <div style={{ fontWeight: "600" }}>CLASSICALLY TRAINED</div>
                        <div id={css.greenNumber}>8,100+</div>

                        <div style={{ fontSize: "14px", opacity: "0.8" }}>have worked at top consulting firms</div>
                    </div>
                    <div id={css.threeimagesection}>
                        <div style={{ fontWeight: "600" }}>PROVEN & HANDS-ON</div>
                        <div id={css.greenNumber}>64%</div>

                        <div style={{ fontSize: "14px", opacity: "0.8" }}>have both consulting and operational experience</div>
                    </div>
                    <div id={css.threeimagesection}>
                        <div style={{ fontWeight: "600" }}>EXECUTION-ORIENTED</div>
                        <div id={css.greenNumber}>5,600</div>

                        <div style={{ fontSize: "14px", opacity: "0.8" }}>experienced project and program managers</div>
                    </div>
                </div>
            </section>
            <section id={css.insightsection}>
                <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>TRANSFORMATION CONSULTING CASE STUDIES AND FEATURED INSIGHTS</div>
                <div id={css.insightOuter}>
                    <div id={css.insight}>
                        <div style={{ fontWeight: "600" }}>The power of pace in technology</div>
                        <div>Hivemind Technologies explains what steps matter in speeding software development for transformations.</div>
                    </div>
                    <div id={css.insight}>
                        <div style={{ fontWeight: "600" }}>The power of pace in technology</div>
                        <div>Hivemind Technologies explains what steps matter in speeding software development for transformations.</div>
                    </div>
                    <div id={css.insight}>
                        <div style={{ fontWeight: "600" }}>The power of pace in technology</div>
                        <div>Hivemind Technologies explains what steps matter in speeding software development for transformations.</div>
                    </div>
                    <div id={css.insight}>
                        <div style={{ fontWeight: "600" }}>The power of pace in technology</div>
                        <div>Hivemind Technologies explains what steps matter in speeding software development for transformations.</div>
                    </div>
                </div>
            </section>
            <section>
                <Letstalk/>
            </section>
            <FotterComponent />
        </div>
    )
}

export default SapFicoTalentPool
