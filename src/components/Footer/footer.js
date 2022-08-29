import logo from '../../assets/imgs/logo.png'
import { FaPinterestSquare as Pin, FaYoutubeSquare as Youtube, FaInstagram as Insta, FaTwitter as Twitter } from "react-icons/fa";
import { IoLogoFacebook as Fb } from "react-icons/io";
import './footer.scss'

const Footer = () => {
    return ( 
        <>
            <footer className="footerWrapper">
                <div className="footerContent">
                    <div className="footerContentWrapper">

                        <div className="ft1">
                            <ul>
                                <li>
                                    <img src={logo} alt="" />
                                </li>

                                <li>
                                    <span>Calista Wise 7292 Dictum Av. Antonio, Italy.</span>
                                </li>

                                <li>
                                    <span>(+01)-800-3456-88</span>
                                </li>

                                <li>
                                    <span>nasathemes@gmail.com</span>
                                </li>

                            </ul>
                        </div>

                        <div className="ft1">
                            <ul>
                                <li>
                                    <ul className="footerSocialLinks">
                                        <li>
                                            <Twitter />
                                        </li>

                                        <li>
                                            <Fb />
                                        </li>

                                        <li>
                                            <Pin />
                                        </li>

                                        <li>
                                            <Insta />
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <span>Calista Wise 7292 Dictum Av. Antonio, Italy.</span>
                                </li>

                                <li>
                                    <span>(+01)-800-3456-88</span>
                                </li>

                                <li>
                                    <span>nasathemes@gmail.com</span>
                                </li>

                            </ul>
                        </div>

                        <div className="ft1">
                            <ul>
                                <li>
                                    <span>NewsLetter</span>
                                </li>

                                <li>
                                    <span>Calista Wise 7292 Dictum Av. Antonio, Italy.</span>
                                </li>

                                <li>
                                    <span>(+01)-800-3456-88</span>
                                </li>

                                <li>
                                    <span>nasathemes@gmail.com</span>
                                </li>

                            </ul>
                        </div>

                        <div className="ft1">
                            <ul>
                                <li>
                                    <div className="newsLetterController">
                                        <input type="search" placeholder="Enter Your Email Here" name="" id="" />
                                        <button>Subscribe</button>
                                    </div>
                                </li>

                                <li>
                                    <span>Customer Service</span>
                                </li>

                                <li>
                                    <span>Privacy Policy</span>
                                </li>

                                <li>
                                    <span>Terms & Condion</span>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>

            </footer>

            <div className="footerCopyRightsWrapper">
                <div className="copyRights">
                    &copy; 2020 Nasatheme - All Right reserved!
                </div>

                <div className="copyRightLinks">
                    <ul>
                        <li>privacy & policy</li>
                        <li>Terms & condions</li>
                        <li>Accessibility</li>
                        <li>Store Directory</li>
                        <li>About us</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Footer;