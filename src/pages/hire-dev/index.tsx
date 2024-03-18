import React from 'react'
import Navbar from "@/components/molecules/navbar";
import hireDevStyles from "./../../styles/hireDevStyles.module.css";
import { HireDeveloperPageText, HomePageText } from "@/constants/texts";
import commonStyle from "@/constants/commonStyle";
import Image from "next/image";
import CandidateProfile from "@/components/molecules/CandidateProfiles";
import ResponsiveCarousel from "@/components/molecules/ProfileCorousel";
import FotterComponent from "@/components/molecules/Fotter";
import CustomButton2 from "@/components/atoms/CustomButton2";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import IconTextButton from "@/components/atoms/ButtonWithIcon";
import { useRouter } from "next/router";
import cloudExpertise from "../../assets/images/Hire_developer/cloudExpertise.png";
import sapExpertise from "../../assets/images/Hire_developer/sapExpertise.png";
import legacyExpertise from "../../assets/images/Hire_developer/legacyExpertise.png";
import HireDevSectionWithImageAndIcon from "@/components/molecules/HireDevSectionWithImageAndIcon";
import { Button } from "@mui/material";
import { useState } from "react";
const Hiredev = () => {
    const [profileButton, setProfileButton] = useState("sap");
    const router = useRouter();
    const HireDeveloperClicked = () => {
        // router.push("/search-developers");
    };
    const WatchVideoClicked = () => {
        alert("WatchVideoClicked Clicked");
    };
    const handleClick = () => {
        // router.push('/search-developers');
    }
    return (
        <div>
            <section>
                <Navbar />
            </section>
            {/* <div className={hireDevStyles.wholeContainer}>
                <br />
                <section className={hireDevStyles.hireDevTopSection} >
                    <div className={hireDevStyles.flexCenter2}>
                        
                        <div>hello </div>
                        <div>
                            
                            <Image src="/HireDeveloperImages/hiring3.png" alt="" height={300} width={400} />
                        </div>
                    </div>
                </section>
            </div> */}
            <main>
          <section>
            <section id={hireDevStyles.superchargeContainer} >
              {/* <div style={{ width: "80vw", margin: "auto" }}> */}
              <HireDevSectionWithImageAndIcon
                imageUrl={"/HireDevImages/superCharge.png"}
                altText={"WhySkillsCapitalDev"}
                Imgheight={550}
                Imgwidth={520}
                order="imageRight"
                pointsIcons={HireDeveloperPageText.superChargePointsIcons}
                heading={HireDeveloperPageText.superchargeHiringHeading}
                subHeading={HireDeveloperPageText.superchargeHiringSubHeading}
                noOfPoints={3}
                points={[
                  HireDeveloperPageText.superchargeHiringPoint1,
                  HireDeveloperPageText.superchargeHiringPoint2,
                  HireDeveloperPageText.superchargeHiringPoint3,
                ]}
                paraPoints={HireDeveloperPageText.superChargeParaPoints}
                noOflogoImages={3}
                logoImagesUrl={[`1`, "2", "3"]}
                buttonEnable={false}
              />
              {/* </div> */}
            </section>
            <section id={hireDevStyles.LaserFocusContainer}>
              <HireDevSectionWithImageAndIcon
                imageUrl={"/HireDevImages/TeamGood.png"}
                altText={"WhySkillsCapitalDev"}
                Imgheight={600}
                Imgwidth={550}
                order="imageLeft"
                pointsIcons={HireDeveloperPageText.perfectMatchPointsIcons}
                heading={HireDeveloperPageText.perfectMatchHeading}
                subHeading={HireDeveloperPageText.superchargeHiringSubHeading}
                noOfPoints={3}
                points={[
                  HireDeveloperPageText.perfectMatchPoint1,
                  HireDeveloperPageText.perfectMatchPoint2,
                  HireDeveloperPageText.perfectMatchPoint3,
                ]}
                paraPoints={HireDeveloperPageText.perfectMatchParaPoints}
                noOflogoImages={3}
                logoImagesUrl={[`1`, "2", "3"]}
                buttonEnable={false}
              />
            </section>
          </section>
        </main>
        </div>
    )
}

export default Hiredev
