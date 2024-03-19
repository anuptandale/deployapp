import Navbar from '@/components/molecules/navbar'
import React from 'react';
import Image from "next/image";
import css from "../../styles/sapTalentStyle.module.css"
import CustomButton2 from '@/components/atoms/CustomButton2';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FotterComponent from '@/components/molecules/Fotter';
const SapTalentPool = () => {
    return (
        <div>
            <Navbar />
            <section style={{backgroundColor:"#f2f2f2", padding:"50px 0px"}} >
                <div id={css.topsection}>
                <div style={{ fontSize: "48px", width: "300px", fontWeight: "600", lineHeight: "59px" }}>SAP Consulting</div>
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
            </section>
            <section id={css.secondsection}>
                <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>TRANSFORMATION CONSULTING CAPABILITIES</div>
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
            <section id={css.allsapOuterMost}>
                <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>IN-DEMAND PROBLEM SOLVERS FOR ALL OF YOUR TRANSFORMATION CONSULTING NEEDS</div>
                <div id={css.allsapOuter}>
                    <div id={css.allsapInner}>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; SAP Production Planning (PP)</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; SAP Project Systems (PS)</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; SAP Plant Maintenance (PM)</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; SAP Financial Accounting (FI)</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; SAP General Ledger</div>
   

                    </div>
                    <div id={css.allsapInner}>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; SAP SCM</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; SAP HANA</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; SAP Controlling (CO)</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; SAP Solution Manager</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; SAP Basis</div>

                    </div>
                    <div id={css.allsapInner}>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; SAP ERP</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; SAP SE</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; SAP Accounts Payable and Receivable</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; SAP Bank Accounting</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; SAP Asset Accounting</div>
                    </div>
                </div>
            </section>
            <section id={css.secondsection2}>
                <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>LIMITLESS ACCESS TO TOP TRANSFORMATION CONSULTANTS</div>
                <div id={css.threeimage}>
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

                        <div style={{ fontSize: "14px",opacity:"0.8" }}>have worked at top consulting firms</div>
                    </div>
                    <div id={css.threeimagesection}>
                        <div style={{ fontWeight: "600" }}>PROVEN & HANDS-ON</div>
                        <div id={css.greenNumber}>64%</div>

                        <div style={{ fontSize: "14px",opacity:"0.8" }}>have both consulting and operational experience</div>
                    </div>
                    <div id={css.threeimagesection}>
                        <div style={{ fontWeight: "600" }}>EXECUTION-ORIENTED</div>
                        <div id={css.greenNumber}>5,600</div>

                        <div style={{ fontSize: "14px",opacity:"0.8" }}>experienced project and program managers</div>
                    </div>
                </div>
            </section>
            <section id={css.insightsection}>
                <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>TRANSFORMATION CONSULTING CASE STUDIES AND FEATURED INSIGHTS</div>
                <div id={css.insightOuter}>
                    <div id={css.insight}>
                        <div style={{fontWeight:"600"}}>The power of pace in technology</div>
                        <div>Hivemind Technologies explains what steps matter in speeding software development for transformations.</div>
                    </div>
                    <div id={css.insight}>
                        <div style={{fontWeight:"600"}}>The power of pace in technology</div>
                        <div>Hivemind Technologies explains what steps matter in speeding software development for transformations.</div>
                    </div>
                    <div id={css.insight}>
                        <div style={{fontWeight:"600"}}>The power of pace in technology</div>
                        <div>Hivemind Technologies explains what steps matter in speeding software development for transformations.</div>
                    </div>
                    <div id={css.insight}>
                        <div style={{fontWeight:"600"}}>The power of pace in technology</div>
                        <div>Hivemind Technologies explains what steps matter in speeding software development for transformations.</div>
                    </div>
                </div>
            </section>
            <FotterComponent/>
        </div>
    )
}

export default SapTalentPool
