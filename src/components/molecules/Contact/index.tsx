import React from 'react'
import css from "../../../styles/sapTalentStyle.module.css";
import { Button } from '@mui/material';
const Letstalk = () => {
    return (
        <div>
            <div id={css.contactOuter}>
                <div style={{fontSize:"23px", fontWeight:"600"}}>LET&nbsp;S TALK</div>
                <div style={{opacity:"0.7"}}>Speak to a Skillscapital to learn how on-demand talent can help with your most important work.</div>
                <form id={css.formDesign}>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                            <label htmlFor="fname">*First name</label><br />
                            <input className={css.inputTag} type="text" id="fname" name="fname" value="" />
                        </div>
                        <div>
                            <label htmlFor="fname">*Last name</label><br />
                            <input className={css.inputTag} type="text" id="fname" name="fname" value="" />
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                            <label htmlFor="fname">*Business Email</label><br />
                            <input className={css.inputTag} type="text" id="fname" name="fname" value="" />
                        </div>
                        <div>
                            <label htmlFor="fname">Phone</label><br />
                            <input className={css.inputTag} type="text" id="fname" name="fname" value="" />
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                            <label htmlFor="fname">*Company</label><br />
                            <input className={css.inputTag} type="text" id="fname" name="fname" value="" />
                        </div>
                        <div>
                            <label htmlFor="fname">*Country</label><br />
                            <input className={css.inputTag} type="text" id="fname" name="fname" value="" />
                        </div>
                    </div>
                    <div>
                        <div className={css.namecontainer}>Message*</div>
                        <textarea className={css.inputTag} name="message" cols={46} rows={3} style={{ height: "100px", width: "730px", borderColor: "lightgray", borderRadius: "5px" }} ></textarea>

                    </div>
                    <Button
                         type='submit'
                        style={{ width: "190px", padding: "15px 15px", borderRadius: "5px" }}
                        variant="contained">
                        Lets Talk
                    </Button>

                </form>
            </div>
        </div>
    )
}

export default Letstalk;
