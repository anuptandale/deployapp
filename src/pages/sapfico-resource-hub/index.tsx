import Navbar from '@/components/molecules/navbar'
import React from 'react'
import sapStyle from "../../styles/sapTalentStyle.module.css"
import CustomButton2 from '@/components/atoms/CustomButton2'
import Image from 'next/image';
import FotterComponent from '@/components/molecules/Fotter';
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
            <FotterComponent/>
    </div>
  )
}

export default SapFicoResourceHub
