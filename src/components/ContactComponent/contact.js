import './contact.scss'
import user from '../../assets/imgs/user.png'
import { RiChat1Line } from "react-icons/ri";
import { BiEnvelope } from "react-icons/bi";
import { GiCheckMark as Check } from "react-icons/gi";



const ContactComponent = () => {
    return ( 
        <>
            <article className="contact">
                <section className="contactWrapper">
                    <div className="contactTitle">
                        <p>Contact Information</p>
                    </div>

                    <div className='contactInfo'>
                        <div className='leftPart'>
                            <div>
                                <img src={user} alt="" />
                                <p className='contactName'>User Name</p>
                                <span className='contactPosition'>Position Title</span>
                                <button><RiChat1Line /> Chat Now</button>
                            </div>
                        </div>

                        <div className="rightPart">
                            <table>
                                <tr>
                                    <td>Telephone</td>
                                    <td>01122336655</td>
                                </tr>

                                <tr>
                                    <td>address</td>
                                    <td>107 street, south road</td>
                                </tr>

                                <tr>
                                    <td>zip code</td>
                                    <td>100223</td>
                                </tr>

                                <tr>
                                    <td>country / region</td>
                                    <td>china</td>
                                </tr>

                                <tr>
                                    <td>city</td>
                                    <td>gangabon</td>
                                </tr>
                            </table>

                            <div className='rightBtn'>
                                <button>
                                    <BiEnvelope /> &nbsp;
                                    <span>Contact Supplier</span>
                                </button>

                                <button>Start Order</button>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="contactWrapper companyWrapper">
                    <div className="contactTitle">
                        <p>company Contact Information</p>
                    </div>

                    <div className='contactInfo companyContactInfo'>

                        <div className="rightPart">
                            <table>
                                <tr>
                                    <td><span className='checkIcon'><Check /></span> company name</td>
                                    <td>ct fashion clothes wear for men</td>
                                </tr>

                                <tr>
                                    <td><span className='checkIcon'><Check /></span> operational address</td>
                                    <td>107 street, south road</td>
                                </tr>

                                <tr>
                                    <td>website</td>
                                    <td><a href="#"> www.test.com</a></td>
                                </tr>

                            </table>

                            
                        </div>
                    </div>
                </section>

                <div className="contactForm">
                    <div className="contactFormWrapper">
                        <div className='title'>
                            <h3>send message to supplier</h3>
                        </div>

                        <div className='formWrapper'>
                            <form>
                                <table>
                                    <tr>
                                        <td>to : </td>
                                        <td><input type="text" name="" id=""  placeholder='Name'/></td>
                                    </tr>

                                    <tr>
                                        <td>message: </td>
                                        <td><textarea placeholder='Enter Your Message Here'></textarea></td>
                                    </tr>
                                </table>

                                <div className='formBtn'><button>Send</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}

export default ContactComponent;