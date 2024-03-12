import FotterComponent from '@/components/molecules/Fotter'
import Navbar from '@/components/molecules/navbar'
import Image from 'next/image'
import React from 'react'
import style from "../../styles/vettingStyles.module.css";
import CardComponent from '@/components/atoms/card';
import commonStyle, { cardsStyling } from '@/constants/commonStyle';
import { HomePageText } from '@/constants/texts';
import homePageStyle from "../../styles/homePageStyles.module.css"
import hireDevStyles from "../../styles/hireDevStyles.module.css"
const Vetting = () => {
  const handleButtonExplore = () => {

  }
  return (
    <div className={style.font}>
      <section>
        <Navbar />
      </section>

      <section className={style.topsection}>
        <div>
          <div className={style.heading}>
            <div>The SkillsCapital</div>
            <div>Vetting Process</div>
          </div>
          <div className={style.subheading}>YouTeam is an invitation-only network of top small- and medium-sized development agencies located in Latin America and Europe. Every talent on YouTeam passes a multi-step vetting process.</div>
        </div>
        <div>
          <Image src="/VettingImages/vetting1.webp" width={420} height={320} alt="v1" />
        </div>
      </section>
      <section id={homePageStyle.ourEliteNetwork} >
        <div
          style={{ background: "#F1F1F1", padding: "10px 100px 50px 100px" }}
        >
          <div style={commonStyle.textCenter}>
            <br />
            <br />
            <h2 style={cardsStyling.sapCloudLegacyMainHeading}>
              10X Faster Scouting of Tech Talents
            </h2>
            <br />
            <br />
          </div>
          <div className="cards" style={commonStyle.dflex_1}>
            <CardComponent
              imageUrl={"/VettingImages/vetting2.avif"}
              imageHeight={210}
              imageWidth={250}
              headingNumber={"AI Algorithm"}
              headingText={""}
              paragraphText={""}
              buttonText="Explore"
              onButtonClick={handleButtonExplore}
              buttonEnabled={false}
            />

            <CardComponent
              imageUrl={"/VettingImages/vetting3.jpg"}
              imageHeight={250}
              imageWidth={250}
              headingNumber={"Expert Curation"}
              headingText={""}
              paragraphText={""}
              buttonText="Explore"
              onButtonClick={handleButtonExplore}
              buttonEnabled={false}
            />
            <CardComponent
              imageUrl={"/VettingImages/vetting5.avif"}
              imageHeight={200}
              imageWidth={250}
              headingNumber={"Human Insights"}
              headingText={""}
              paragraphText={""}
              buttonText="Explore"
              onButtonClick={handleButtonExplore}
              buttonEnabled={false}
            />
          </div>
        </div>
      </section>

      <section className={style.outerhowitwork}>

        <div className={hireDevStyles.howitHeading}>Human Intelligence consists of...</div>
        <div className={hireDevStyles.howitwork}>
          <div>
            <div className={style.firstbox}>
              <Image src="/HireDevImages/redImage.png" alt="" height={100} width={100} />
              <div style={{ textAlign: "center" }}>TECHNICAL FIT</div>
            </div>
          </div>
          {/* <ArrowForwardIcon /> */}
          <div>
            <div className={style.secondbox}>
              <Image src="/HireDevImages/yelloImage.png" alt="" height={100} width={100} />
              <div style={{ textAlign: "center" }}>CULTURAL FIT</div>
            </div>
          </div>
          {/* <ArrowForwardIcon/> */}
          <div>
            <div className={style.thirdbox}>
              <Image src="/HireDevImages/greenImage.png" alt="" height={100} width={100} />
              <div style={{ textAlign: "center" }}>COMMUNICATION SKILLS</div>
            </div>
          </div>

        </div>

      </section>
      <section className={style.outerhowitwork2}>

        <div className={hireDevStyles.howitHeading}>AI Intelligence consists of...</div>
        <div className={style.howitwork2}>
          <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>
            <div>
              <div className={style.firstbox}>
                <Image src="/HireDevImages/redImage.png" alt="" height={100} width={100} />
                <div style={{ textAlign: "center" }}>SKILLS MATCH</div>
              </div>
            </div>
            <div>
              <div className={style.secondbox}>
                <Image src="/HireDevImages/yelloImage.png" alt="" height={100} width={100} />
                <div style={{ textAlign: "center" }}>JOB SPECS MATCH</div>
              </div>
            </div>
          </div>
          <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>
            <div >
              <div className={style.thirdbox}>
                <Image src="/HireDevImages/greenImage.png" alt="" height={100} width={100} />
                <div style={{ textAlign: "center" }}>AVAILABILITY MATCH</div>
              </div>
            </div>
            <div>
              <div className={style.thirdbox}>
                <Image src="/HireDevImages/greenImage.png" alt="" height={100} width={100} />
                <div style={{ textAlign: "center" }}>PRICE MATCH</div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className={style.outerhowitwork}>

        <div className={hireDevStyles.howitHeading}>External Intelligence consists of...</div>
        <div className={hireDevStyles.howitwork}>
          <div>
            <div className={style.firstbox}>
              <Image src="/HireDevImages/redImage.png" alt="" height={100} width={100} />
              <div style={{ textAlign: "center" }}>PROCTORED ASSIGNMENT</div>
            </div>
          </div>
          {/* <ArrowForwardIcon /> */}
          <div>
            <div className={style.secondbox}>
              <Image src="/HireDevImages/yelloImage.png" alt="" height={100} width={100} />
              <div style={{ textAlign: "center" }}>NON-PROCTORED ASSIGNMENT</div>
            </div>
          </div>
          {/* <ArrowForwardIcon/> */}


        </div>

      </section>
      <section>
        <FotterComponent />
      </section>
    </div>
  )
}

export default Vetting
