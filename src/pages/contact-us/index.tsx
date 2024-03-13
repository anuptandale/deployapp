import React from 'react'
import css from "../../styles/subreq.module.css";
import Link from 'next/link';
import Image from 'next/image';
import { Button, TextField } from '@mui/material';
import { FooterPageText, SubreqPageText } from '@/constants/texts';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import style from "../../styles/contactPageStyle.module.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Navbar from '@/components/molecules/navbar';
import FotterComponent from '@/components/molecules/Fotter';
const Contact = () => {
    return (
        <div>
            <Navbar/>
        <div className={style.step2container}>

            <div className={style.step2innercontainer}>
                <div className={style.leftContainet} >
                    <div className={style.heading}>Lets get in touch</div>
                    <div className={style.coninfo}>
                        <div className={style.flex}><LocationOnIcon/> {FooterPageText.address1} {FooterPageText.address2}</div>
                        <div className={style.flex}><EmailIcon/> {FooterPageText.email}</div>
                        {/* <div className={style.flex}><LocalPhoneIcon/> {FooterPageText.phone}</div> */}
                    </div>
                    <div  className={style.coninfo2}>
                        <a href="#" className={css.socialIcon}>
                            <TwitterIcon sx={{ color: "black" }} />
                        </a>
                        <a href="#" className={css.socialIcon}>
                            <FacebookIcon sx={{ color: "black" }} />
                        </a>
                        <a href="#" className={css.socialIcon}>
                            <InstagramIcon sx={{ color: "black" }} />
                        </a>
                        <a href="https://www.linkedin.com/company/skillscapital/" target="_blank" className={css.socialIcon}>
                            <LinkedInIcon sx={{ color: "black" }} />
                        </a>
                        {/* Add more social media icons as needed */}
                    </div>
                </div>
                <div className={css.fieldcontainer}>
                    <div className={css.fieldinnercontainer}>
                        <div className={css.enterdetails} >Enter Details</div>
                        <div>
                            <div className={css.namecontainer}>Name*</div>
                            <TextField
                                placeholder="Enter Your Name"
                                name="Name"
                                sx={{ width: "300px" }}
                            // value={ClientData.Name}
                            // onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <div className={css.namecontainer}>Email*</div>
                            <TextField
                                placeholder="Enter Your Email"
                                name="Email"
                                sx={{ width: "300px" }}
                            // value={ClientData.Email}
                            // onChange={handleInputChange}
                            // helperText={errors.Email}
                            />
                        </div>
                        <div>
                            <div className={css.namecontainer}>Phone*</div>
                            <TextField
                                placeholder="Enter Your Phone"
                                name="Phone"
                                sx={{ width: "300px" }}
                            // value={ClientData.Email}
                            // onChange={handleInputChange}
                            // helperText={errors.Email}
                            />
                        </div>
                        <div>
                            <div className={css.namecontainer}>Message*</div>
                            <textarea cols={46} rows={3} style={{height:"80px",width:"300px",borderColor:"lightgray",borderRadius:"5px"}} name="comments"></textarea>
                            {/* <label htmlFor="">Message</label> */}
                        </div>
                        <Button
                            // onClick={onNextStep} 
                            // disabled={!ClientData.workType || !ClientData.Name || !ClientData.Email}
                            style={{ width: "190px", padding: "15px 15px", borderRadius: "45px" }}
                            variant="contained">
                            send
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <FotterComponent />
        </div>
        </div>
    )
}

export default Contact;
