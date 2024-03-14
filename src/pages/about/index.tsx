import Navbar from "@/components/molecules/navbar";
import React from "react";
import aboutPageStyles from "./../../styles/aboutPageStyles.module.css";
import {
  AboutUsText,
} from "@/constants/texts";
import Image from "next/image";
import talentPoolStyles from "./../../styles/talentPoolStyles.module.css";
import HireDevSectionWithImageAndIcon from "@/components/molecules/HireDevSectionWithImageAndIcon";
import FotterComponent from "@/components/molecules/Fotter";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className={aboutPageStyles.aboutUsHeroContainer}>
        <h1 className={aboutPageStyles.aboutUsHeroHeading}>
          {AboutUsText.aboutUsHeroHeading}{" "}
        </h1>
        <h2 className={aboutPageStyles.aboutUsHeroSubHeading}>
          {AboutUsText.aboutUsHeroBoldHeading}
        </h2>
      </div>
      <section className={aboutPageStyles.sectionMargin}>
        <div className={aboutPageStyles.aboutUsFounderContainer}>
          {/* <div className={aboutPageStyles.aboutUsFounderContentContainer}> */}
            {/* <p>{AboutUsText.aboutUsFounderpara}</p>
            <p>{AboutUsText.aboutUsFounderpara1}</p>
            <p>{AboutUsText.aboutUsFounderpara2}</p> */}
            <p>{AboutUsText.aboutUsFounderpara4}</p>
            <p>{AboutUsText.aboutUsFounderpara5}</p>
          {/* </div> */}
          
        </div>
      </section>
      <main className={aboutPageStyles.mainMarginAllSides}>
        <section className={aboutPageStyles.mission}>
          <HireDevSectionWithImageAndIcon
            imageUrl={"/AboutPageImages/about2.png"}
            altText={"SkillsCaptal Mission"}
            order="imageLeft"
            Imgheight={400}
            Imgwidth={500}
            logoImagesUrl={null}
            noOflogoImages={null}
            pointsIcons={AboutUsText.missionPointsIcons}
            heading={AboutUsText.missionHeading}
            subHeading={AboutUsText.missionSubHeading}
            noOfPoints={3}
            points={[
              AboutUsText.missionHiringPoint1,
              AboutUsText.missionHiringPoint2,
              AboutUsText.missionHiringPoint3,
            ]}
            paraPoints={AboutUsText.missionParaPoints}
            buttonEnable={false}
          />
        </section>
        <section style={{ marginTop: "30px" }}>
          <div className={aboutPageStyles.mission}>
            <HireDevSectionWithImageAndIcon
              imageUrl={"/AboutPageImages/about5.svg"}
              logoImagesUrl={null}
              noOflogoImages={null}
              Imgheight={500}
              Imgwidth={500}
              altText={"WhySkillsCapitalDev"}
              order="imageRight"
              pointsIcons={AboutUsText.visionPointsIcons}
              heading={AboutUsText.visionHeading}
              subHeading={AboutUsText.visionSubHeading}
              noOfPoints={3}
              points={[
                AboutUsText.visionHiringPoint1,
                AboutUsText.visionHiringPoint2,
                AboutUsText.visionHiringPoint3,
              ]}
              paraPoints={AboutUsText.visionParaPoints}
              buttonEnable={false}
            />
          </div>
        </section>
      </main>
      
      
      <FotterComponent />
    </>
  );
};

export default AboutUs;