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
            <div className={hireDevStyles.wholeContainer}>
                <br />
                <section className={hireDevStyles.hireDevTopSection} >
                    <div className={hireDevStyles.flexCenter2}>
                    <div >
              <div className={`${hireDevStyles.mainHeadingHireDev}`}>
                {HireDeveloperPageText.HireDeveloperHeroHeading}
              </div>

              <h2 className={`${hireDevStyles.mainSubHeadingHireDev}`}>
                {HireDeveloperPageText.HireDeveloperHeroPara}
              </h2>
              <br />
              <div style={{ display: "flex", gap: "15px" }}>
                <CustomButton2
                  label={HireDeveloperPageText.HireDeveloperHeroButton1}
                  onClick={HireDeveloperClicked}
                  buttonStyle={{
                    color: "white",
                    borderRadius: "5px",
                    background: "#424241",
                    fontSize: "18px",
                    padding: "10px 25px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    margin: "0px 15px 0px 30px",
                    boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                  }}
                  hoverStyle={{
                    color: "black",
                    borderRadius: "5px",
                    background: "white",
                    fontSize: "18px",
                    padding: "10px 25px",
                    border: "1px solid black",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    margin: "0px 15px 0px 30px",
                    boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                  }}
                />
                <br />
                <br />
                <IconTextButton
                  icon={<PlayCircleFilledWhiteOutlinedIcon />}
                  text="Watch Video"
                  onClick={WatchVideoClicked}
                />
              </div>
              <br />
              <br />
              <br />


              {/* <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  gap: "50px",
                  margin: "0px 0px 0px 20px",
                }}
              >
                <div>
                  <div className={`${hireDevStyles.hireDevNumberTitle}`}>
                    {HireDeveloperPageText.HireDeveloperHeroNum1}
                  </div>
                  <span className={`${hireDevStyles.hireDevNumberContent}`}>
                    {HireDeveloperPageText.HireDeveloperHeroNum1Title}
                  </span>
                </div>
                <div>
                  <div className={`${hireDevStyles.hireDevNumberTitle}`}>
                    {HireDeveloperPageText.HireDeveloperHeroNum2}
                  </div>
                  <span className={`${hireDevStyles.hireDevNumberContent}`}>
                    {HireDeveloperPageText.HireDeveloperHeroNum2Title}
                  </span>
                </div>
                <div>
                  <div className={`${hireDevStyles.hireDevNumberTitle}`}>
                    {HireDeveloperPageText.HireDeveloperHeroNum3}
                  </div>
                  <span className={`${hireDevStyles.hireDevNumberContent}`}>
                    {HireDeveloperPageText.HireDeveloperHeroNum3Title}
                  </span>
                </div>

                <br />
              </div> */}
            </div>

                        <div>
                            {/* <ResponsiveCarousel opacityValue={1} skillSetValue="sap" /> */}
                            <Image src="/HireDeveloperImages/hiring3.png" alt="" height={300} width={400} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Hiredev
