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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const HireDeveloper = () => {
  const [profileButton, setProfileButton] = useState("sap");
  const router = useRouter();
  const HireDeveloperClicked = () => {
    router.push("/search-developers");
  };
  const WatchVideoClicked = () => {
    alert("WatchVideoClicked Clicked");
  };
  const handleClick = () => {
    router.push('/search-developers');
  }
  return (
    <div className={hireDevStyles.wholeContainer}>
      <Navbar />

      <br />

      <main style={commonStyle.mainPadding}>
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


              <div
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
              </div>
            </div>

            <div>
              <ResponsiveCarousel opacityValue={1} skillSetValue="sap" />
            </div>
          </div>
        </section>
        <section style={commonStyle.sectionMargin}>
          <div className={hireDevStyles.TrustedCompaniesSection}>
            <div className={hireDevStyles.TrustedCompaniesContainer}>
              {HireDeveloperPageText.BottomImagesHeading}
            </div>
            <div>
              {" "}
              {HireDeveloperPageText.BottomImagesIconsArray.map(
                (source, index) => (
                  <Image
                    height={25}
                    width={100}
                    style={{ margin: "0px 10px" }}
                    key={index}
                    src={`/HireDevImages/Company${index + 1}.png`}
                    alt={`Image ${index}`}
                  />
                )
              )}{" "}
            </div>
          </div>
        </section>
      </main>

      <main style={commonStyle.mainPadding}>
        <section id={hireDevStyles.wholeContainer}>
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
        <section id={hireDevStyles.ourEliteContainer}>
          <div className={hireDevStyles.ourEliteHeading}>Our Elite Developers</div>
          <div className={hireDevStyles.sapContainer}>
            <div className={hireDevStyles.sapInnerContainer}>
              <div className={hireDevStyles.sapCloudLegacyHeading}>{HireDeveloperPageText.sapHeading}</div>
              <div className={hireDevStyles.sapCloudLegacySubHeading}>{HireDeveloperPageText.sapSubHeading}</div>
              <div className={hireDevStyles.sapCloudLegacyPara}>{HireDeveloperPageText.sapPara}</div>
              <div>
                <button className={hireDevStyles.sapButtonStyle}>{HireDeveloperPageText.sapButtonText}</button>
              </div>

            </div>
            <Image className={hireDevStyles.sapImage} src={sapExpertise} alt="" />
          </div>
          <div className={hireDevStyles.cloudContainer}>
            <div>
              <Image style={{ width: "520px", height: "450px" }} src={cloudExpertise} alt="" />
            </div>
            <div className={hireDevStyles.cloudeInnerContainer}>
              <div className={hireDevStyles.sapCloudLegacyHeading}>{HireDeveloperPageText.cloudHeading}</div>
              <div className={hireDevStyles.sapCloudLegacySubHeading}>{HireDeveloperPageText.cloudSubHeading}</div>
              <div className={hireDevStyles.sapCloudLegacyPara}>{HireDeveloperPageText.cloudPara}</div>
              <div>
                <button className={hireDevStyles.sapButtonStyle}>{HireDeveloperPageText.cloudButtonText}</button>
              </div>
            </div>
          </div>
          <div className={hireDevStyles.sapContainer}>
            <div className={hireDevStyles.sapInnerContainer}>
              <div className={hireDevStyles.sapCloudLegacyHeading}>{HireDeveloperPageText.legacyHeading}</div>
              <div className={hireDevStyles.sapCloudLegacySubHeading}>{HireDeveloperPageText.legacySubHeading}</div>
              <div className={hireDevStyles.sapCloudLegacyPara}>{HireDeveloperPageText.legacyPara}</div>
              <div>
                <button className={hireDevStyles.sapButtonStyle}>{HireDeveloperPageText.legacyButtonText}</button>
              </div>

            </div>
            <Image className={hireDevStyles.legacyImage} src={legacyExpertise} alt="" />
          </div>
        </section>
      </main>
      <section>
        <div className={hireDevStyles.backGroundBlue}>
          <div>
            <h1 className={hireDevStyles.heading}>
              {HomePageText.topCompaniesHeading}
            </h1>
            <br />
            <br />
            <br />
            {/* <p style={blueSection.para}>{HomePageText.topCompaniesPara}</p> */}
            <br />
            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Image
                className={hireDevStyles.amazon}
                src={"/HomePageImages/Amazon-Logo1.png"}
                alt="AmzonLogo"
                height={100}
                width={200}
              />
              <Image
                src={"/HomePageImages/adobe_logo4.png"}
                alt="AmzonLogo"
                height={100}
                width={200}
              />
              <Image
                className={hireDevStyles.tcs}
                src={"/HomePageImages/tcsLogo.png"}
                alt="AmzonLogo"
                height={100}
                width={200}
              />
              <Image
                className={hireDevStyles.hp}
                src={"/HomePageImages/hpLogo.png"}
                alt="AmzonLogo"
                height={100}
                width={100}
              />
              <Image
                className={hireDevStyles.zoho}
                src={"/HomePageImages/zohoLogo.png"}
                alt="AmzonLogo"
                height={100}
                width={200}
              />
            </div>
          </div>
        </div>
      </section>

      <section style={commonStyle.mainPadding}>

        <section className={hireDevStyles.deeplyVetted} >
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }} >
            <div className={hireDevStyles.heading1}>{HireDeveloperPageText.deepDeveloperHeading}</div>
            <div className={hireDevStyles.subheading}>{HireDeveloperPageText.deepDeveloperSubHeading}</div>
            <div className={hireDevStyles.para}>{HireDeveloperPageText.deepDeveloperPara}</div>

            <CustomButton2
              onClick={handleClick}
              label={HireDeveloperPageText.deepDeveloperButtonText}
              buttonStyle={{
                color: "#FFF",
                borderRadius: "5px",
                background: "#2871FF",
                fontSize: "15px",
                padding: "10px 25px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                width: "160px",
                border: "1px solid #2871FF",
                margin: "0px 15px 0px 0px",
              }}
              hoverStyle={{
                color: "#FFF",
                borderRadius: "5px",
                background: "#2871FF",
                fontSize: "15px",
                padding: "10px 25px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",

                margin: "0px 15px 0px 0px",
                boxShadow: " 0px 5px 5px grey",
              }}
            />
          </div>
          <div>
            <div style={{ display: "flex", gap: "10px", padding: "10px", marginBottom: "20px" }}>
              <div className={profileButton === "sap" ? hireDevStyles.sapprofileButtonSelected : hireDevStyles.sapprofileButton} onClick={() => (setProfileButton("sap"))}>Sap Profile</div>
              <div className={profileButton === "cloud" ? hireDevStyles.sapprofileButtonSelected : hireDevStyles.sapprofileButton} onClick={() => (setProfileButton("cloud"))}>Cloud Profile</div>
              <div className={profileButton === "legacy" ? hireDevStyles.sapprofileButtonSelected : hireDevStyles.sapprofileButton} onClick={() => (setProfileButton("legacy"))}>Legacy Profile</div>
            </div>
            {profileButton === "sap" && <Image style={{ boxShadow: "2px 5px 5px 5px lightgrey" }} src="/HireDevImages/devProfile.png" alt="profile" height={700} width={600} />}
            {profileButton === "cloud" && <Image style={{ boxShadow: "2px 5px 5px 5px lightgrey" }} src="/HireDevImages/devProfile.png" alt="profile" height={700} width={600} />}
            {profileButton === "legacy" && <Image style={{ boxShadow: "2px 5px 5px 5px lightgrey" }} src="/HireDevImages/devProfile.png" alt="profile" height={700} width={600} />}

          </div>
        </section>

        <section style={commonStyle.sectionMargin}>
          <br />
          <br />
          <br />
          <center>
            {" "}
          </center>
        </section>
      </section>
      <section className={hireDevStyles.outerhowitwork}>
        <div>
          <div className={hireDevStyles.howitHeading}>How it works?</div>
          <div className={hireDevStyles.howitwork}>
            <div>
              <div className={hireDevStyles.steps}>Step 1</div>
              <div className={hireDevStyles.firstbox}>
                <Image src="/HireDevImages/redImage.png" alt="" height={100} width={100} />
                <div style={{ textAlign: "center" }}>Client Submits Job Requirements on Client
                  Portal or Shares with
                  their Account Manager</div>
              </div>
            </div>
            {/* <ArrowForwardIcon /> */}
            <div>
              <div className={hireDevStyles.steps2}>Step 2</div>
              <div className={hireDevStyles.secondbox}>
                <Image src="/HireDevImages/yelloImage.png" alt="" height={100} width={100} />
                <div style={{ textAlign: "center" }}>Al Talent Cloud Shares
                  the Most Suitable Pre-
                  Vetted Matching Profiles
                  with the Client</div>
              </div>
            </div>
            {/* <ArrowForwardIcon/> */}
            <div>
              <div className={hireDevStyles.steps3}>Step 3</div>
              <div className={hireDevStyles.thirdbox}>
                <Image src="/HireDevImages/greenImage.png" alt="" height={100} width={100} />
                <div style={{ textAlign: "center" }}>Profiles
                  for Further &
                  Assessment and Selects
                  the Final Tarent/Team</div>
              </div>
            </div>
          </div>
        </div>
        <CustomButton2
            label="Hire Now"
            // onClick={hirenowClick}
            buttonStyle={{
              width: "262px",
              height: "51.6px",
              border: "1px solid #2871ff",
              color: "#fff",
              backgroundColor: "#2871ff",
              fontSize:"20px"
            }}
            hoverStyle={{
              backgroundColor: "lightblue",
              color: "#2871ff",
            }}
          />
      </section>
      <section className={hireDevStyles.aboveFooter} >
        <center>
          {" "}
          <h2 className={hireDevStyles.profileSectionHeadinh} >
            Hire Developers Based On Skills
          </h2>
        </center>
        <CandidateProfile />
      </section>

      <FotterComponent />
    </div>
  );
};

export default HireDeveloper;
