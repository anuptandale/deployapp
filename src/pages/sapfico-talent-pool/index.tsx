import Navbar from '@/components/molecules/navbar'
import React from 'react';
import Image from "next/image";
import css from "../../styles/sapTalentStyle.module.css"
import CustomButton2 from '@/components/atoms/CustomButton2';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FotterComponent from '@/components/molecules/Fotter';
import Contact from '../contact-us';
import Letstalk from '@/components/molecules/Contact';
import { SapficoPageText } from '@/constants/texts';
const SapFicoTalentPool = () => {
    return (
        <div>
            <Navbar />
            <section style={{backgroundColor: "#f2f2f2",  padding: "50px 0px" }} >
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div id={css.topsection}>
                        <div style={{ fontSize: "48px", width: "300px", fontWeight: "600", lineHeight: "59px" }}>{SapficoPageText.mainheading}</div>
                        <div style={{ fontSize: "20px" }}>{SapficoPageText.mainSubHeading}</div>
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
                <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>{SapficoPageText.tranHeading}</div>
                <div id={css.threeimage}>
                    <div id={css.threeimagesection}>
                        <div><Image src="/TalentPoolImages/service2.webp" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>{SapficoPageText.tranHeading1}</div>
                        <div style={{ fontSize: "14px" }}>{SapficoPageText.tranSubHeading1}</div>
                    </div>
                    <div id={css.threeimagesection}>
                        <div><Image src="/TalentPoolImages/service3.webp" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>{SapficoPageText.tranHeading2}</div>
                        <div style={{ fontSize: "14px" }}>{SapficoPageText.tranSubHeading2}</div>
                    </div>
                    <div id={css.threeimagesection}>
                        <div><Image src="/TalentPoolImages/service4.webp" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>{SapficoPageText.tranHeading3}</div>
                        <div style={{ fontSize: "14px" }}>{SapficoPageText.tranSubHeading3}</div>
                    </div>
                </div>
            </section>
            <section id={css.insightsection}>
                <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>{SapficoPageText.wedoHeading}</div>
                <div id={css.insightOuter}>
                    <div id={css.insight2}>
                        <div style={{ fontWeight: "600", fontSize: "24px" }}>{SapficoPageText.wedoHeading1}</div>
                        <div>{SapficoPageText.wedoSubHeading1}</div>
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
                <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>{SapficoPageText.indemandHeading}</div>
                <div id={css.allsapOuter}>
                    <div id={css.allsapInner}>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; {SapficoPageText.type[0]}</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; {SapficoPageText.type[1]}</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; {SapficoPageText.type[2]}</div>



                    </div>
                    <div id={css.allsapInner}>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; {SapficoPageText.type[3]}</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; {SapficoPageText.type[4]}</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; {SapficoPageText.type[5]}</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; {SapficoPageText.type[6]}</div>


                    </div>
                    <div id={css.allsapInner}>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; {SapficoPageText.type[7]}</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; {SapficoPageText.type[8]}</div>
                        <div ><FiberManualRecordIcon sx={{ fontSize: "15px", color: "grey" }} />&nbsp; {SapficoPageText.type[9]}</div>

                    </div>
                </div>
            </section>
            <section id={css.secondsection2}>
                <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>{SapficoPageText.limitlessHeading}</div>
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
                <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>{SapficoPageText.margketHeading}</div>
                <div id={css.threeimage}>
                    <div id={css.threeimagesection}>
                        <div style={{ fontWeight: "600" }}>{SapficoPageText.margketHeading1}</div>
                        <div id={css.greenNumber}>{SapficoPageText.marketNumber1}</div>

                        <div style={{ fontSize: "14px", opacity: "0.8" }}>{SapficoPageText.margketSubHeading1}</div>
                    </div>
                    <div id={css.threeimagesection}>
                        <div style={{ fontWeight: "600" }}>{SapficoPageText.margketHeading2}</div>
                        <div id={css.greenNumber}>{SapficoPageText.marketNumber2}</div>

                        <div style={{ fontSize: "14px", opacity: "0.8" }}>{SapficoPageText.margketSubHeading2}</div>
                    </div>
                    <div id={css.threeimagesection}>
                        <div style={{ fontWeight: "600" }}>{SapficoPageText.margketHeading3}</div>
                        <div id={css.greenNumber}>{SapficoPageText.marketNumber3}</div>

                        <div style={{ fontSize: "14px", opacity: "0.8" }}>{SapficoPageText.margketSubHeading3}</div>
                    </div>
                </div>
            </section>
            <section id={css.insightsection}>
                <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>{SapficoPageText.techHeading}</div>
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
