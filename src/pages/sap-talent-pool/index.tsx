import Navbar from '@/components/molecules/navbar'
import React, { useState } from 'react';
import Image from "next/image";
import css from "../../styles/sapTalentStyle.module.css"
import CustomButton2 from '@/components/atoms/CustomButton2';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FotterComponent from '@/components/molecules/Fotter';
import Contact from '../contact-us';
import Letstalk from '@/components/molecules/Contact';

import { SapPageText } from '@/constants/texts';
const SapTalentPool = () => {
    const [buttonClick,setButtonClick] = useState("cap");
    return (
        <div>
            <Navbar />
            <section style={{ padding: "50px 0px" }} >
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div id={css.topsection}>
                        <div style={{ fontSize: "48px", width: "300px", fontWeight: "600", lineHeight: "59px" }}>{SapPageText.mainheading}</div>
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
                    <div style={{ fontSize: "23px", fontWeight: "600" }}>{SapPageText.meetyouHeading}</div>
                    <div style={{ opacity: "0.8" }}>{SapPageText.meetyouSubHeading}</div>
                </div>
            </section>
            <section id={css.secondsection}>
                {/* <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>SAP-FICO TRANSFORMATION CONSULTING CAPABILITIES</div> */}
                <div id={css.threeimage}>
                    <div id={css.threeimagesection}>
                        <div><Image src="/TalentPoolImages/service6.webp" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>{SapPageText.topTalentHeading}</div>
                        <div style={{ fontSize: "14px",width:"300px" }}>{SapPageText.topTalentSubHeading}</div>
                    </div>
                    <div id={css.threeimagesection}>
                        <div><Image src="/TalentPoolImages/service7.webp" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>{SapPageText.worldclassHeading}</div>
                        <div style={{ fontSize: "14px",width:"300px" }}>{SapPageText.worldclassSubHeading}</div>
                    </div>
                    <div id={css.threeimagesection}>
                        <div><Image src="/TalentPoolImages/service8.webp" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>{SapPageText.buildforHeading}</div>
                        <div style={{ fontSize: "14px",width:"300px" }}>{SapPageText.buildforSubHeading}</div>
                    </div>
                </div>
            </section>
            <section>
                <div id={css.threeButtonOuter}>
                    <div style={{ fontSize: "23px", fontWeight: "600" }}>{SapPageText.buttonHeading}</div>
                    <div style={{ width: "1000px", textAlign: "center", opacity: "0.8" }}>{SapPageText.buttonSubHeading}</div>
                    <div id={css.outerButton}>
                        <div id={css.threeButton}>
                            <div id={buttonClick==="cap"?css.but :css.but2 } onClick={()=>setButtonClick("cap")}>CAPABILITIES</div>
                            <div id={buttonClick==="ind"?css.but :css.but2 } onClick={()=>setButtonClick("ind")}>INDUSTRIES</div>
                            <div id={buttonClick==="fun"?css.but :css.but2 } onClick={()=>setButtonClick("fun")}>FUNCTIONS</div>
                        </div>
                        {buttonClick==="cap" && <div id={css.buttonTypesOuter}>
                            <div id={css.buttonTypes}>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_1.webp" height={78} width={78} alt="" />{SapPageText.cap_1}</div>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_2.webp" height={78} width={78} alt="" />{SapPageText.cap_2}</div>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_3.webp" height={78} width={78} alt="" />{SapPageText.cap_3}</div>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_4.webp" height={78} width={78} alt="" />{SapPageText.cap_4}</div>
                            </div>
                            <div id={css.buttonTypes}>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_5.webp" height={78} width={78} alt="" />{SapPageText.cap_5}</div>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_6.webp" height={78} width={78} alt="" />{SapPageText.cap_6}</div>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_7.webp" height={78} width={78} alt="" />{SapPageText.cap_7}</div>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_8.webp" height={78} width={78} alt="" />{SapPageText.cap_8}</div>
                            </div>
                        </div>}
                        {buttonClick==="ind" && <div id={css.buttonTypesOuter}>
                            <div id={css.buttonTypes}>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_12.webp" height={78} width={78} alt="" />{SapPageText.indtext[0]}</div>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_13.webp" height={78} width={78} alt="" />{SapPageText.indtext[1]}</div>
                                {/* <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_.webp" height={78} width={78} alt="" />{SapPageText.cap_3}</div>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_4.webp" height={78} width={78} alt="" />{SapPageText.cap_4}</div> */}
                            </div>
                            <div id={css.buttonTypes}>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_14.webp" height={78} width={78} alt="" />{SapPageText.indtext[2]}</div>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_15.webp" height={78} width={78} alt="" />{SapPageText.indtext[3]}</div>
                                {/* <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_7.webp" height={78} width={78} alt="" />{SapPageText.cap_7}</div>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_8.webp" height={78} width={78} alt="" />{SapPageText.cap_8}</div> */}
                            </div>
                        </div>}
                        {buttonClick==="fun" && <div id={css.buttonTypesOuter}>
                            <div id={css.buttonTypes}>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_16.webp" height={78} width={78} alt="" />{SapPageText.funtext[0]}</div>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_17.webp" height={78} width={78} alt="" />{SapPageText.indtext[1]}</div>
                                {/* <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_3.webp" height={78} width={78} alt="" />{SapPageText.cap_3}</div>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_4.webp" height={78} width={78} alt="" />{SapPageText.cap_4}</div> */}
                            </div>
                            <div id={css.buttonTypes}>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_18.webp" height={78} width={78} alt="" />{SapPageText.indtext[2]}</div>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_1.webp" height={78} width={78} alt="" />{SapPageText.indtext[3]}</div>
                                {/* <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_7.webp" height={78} width={78} alt="" />{SapPageText.cap_7}</div>
                                <div style={{display:"flex",alignItems:"center",width:"300px"}}><Image src="/TalentPoolImages/service_8.webp" height={78} width={78} alt="" />{SapPageText.cap_8}</div> */}
                            </div>
                        </div>}
                        <div>
                            <div id={css.allservice}>See All Services</div>
                        </div>
                    </div>
                </div>
            </section>
            <section id={css.secondsectiongrey}>
                <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>{SapPageText.techHeading}</div>
                <div style={{ fontSize: "18px", padding: "0px 200px", marginBottom: "50px", opacity: "0.7" }}>{SapPageText.techSubHeading}</div>
                <div id={css.threeimage}>
                    <div id={css.threeimagesection}>
                        <div><Image src="/TalentPoolImages/service9.webp" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>{SapPageText.techHeading1}</div>
                        <div style={{ fontSize: "14px" }}>{SapPageText.techSubHeading1}</div>
                    </div>
                    <div id={css.threeimagesection}>
                        <div><Image src="/TalentPoolImages/service10.webp" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>{SapPageText.techHeading2}</div>
                        <div style={{ fontSize: "14px" }}>{SapPageText.techSubHeading2}</div>
                    </div>
                    <div id={css.threeimagesection}>
                        <div><Image src="/TalentPoolImages/service11.webp" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>{SapPageText.techHeading3}</div>
                        <div style={{ fontSize: "14px" }}>{SapPageText.techSubHeading3}</div>
                    </div>
                </div>
            </section>
            <section id={css.secondsection}>
                <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>{SapPageText.margketHeading}</div>
                <div id={css.threeimage}>
                    <div id={css.threeimagesection}>
                        {/* <div style={{ fontWeight: "600" }}>CLASSICALLY TRAINED</div> */}
                        <div id={css.greenNumber}>{SapPageText.marketNumber1}</div>

                        <div style={{ fontSize: "14px", opacity: "0.8" }}>{SapPageText.margketSubHeading1}</div>
                    </div>
                    <div id={css.threeimagesection}>
                        {/* <div style={{ fontWeight: "600" }}>PROVEN & HANDS-ON</div> */}
                        <div id={css.greenNumber}>{SapPageText.marketNumber2}</div>

                        <div style={{ fontSize: "14px", opacity: "0.8" }}>{SapPageText.margketSubHeading2}</div>
                    </div>
                    <div id={css.threeimagesection}>
                        {/* <div style={{ fontWeight: "600" }}>EXECUTION-ORIENTED</div> */}
                        <div id={css.greenNumber}>{SapPageText.marketNumber3}</div>

                        <div style={{ fontSize: "14px", opacity: "0.8"}}>{SapPageText.margketSubHeading3}</div>
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
