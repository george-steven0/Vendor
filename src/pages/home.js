import Navbar from "../components/Navbar/navbar";
import '../assets/styles/home.scss'
import logo from '../assets/imgs/logo.png'
import bannerLogo from '../assets/imgs/bannerLogo.jpg'
import banner from '../assets/imgs/banner.jpg'
import regSlide from '../assets/imgs/regSlide.png'
import { IoLogoFacebook as Fb } from "react-icons/io";
import { FaPinterestSquare as Pin, FaYoutubeSquare as Youtube, FaInstagram as Insta, FaTwitter as Twitter } from "react-icons/fa";
import { BsCardImage ,BsStarFill} from "react-icons/bs";
import { Fragment, useEffect, useState } from "react";
import MuiAccordion from "../components/MuiAccordion/accordion";
import HomeCard from "../components/HomeCardComponent/HomeCard/homeCard";
import HomeCardComponent from "../components/HomeCardComponent/homeCardComponent";
import CompanyProfileComponent from "../components/CompanyProfileComponent/companyProfile";
import ContactComponent from "../components/ContactComponent/contact";
import { FaArrowUp } from "react-icons/fa";
import Footer from "../components/Footer/footer";


const Home = () => {

    const [openHome, setopenHome] = useState(true)
    const [opencompany, setopencompany] = useState(false)
    const [openContact, setopenContact] = useState(false)
    const [isVisable, setisVisable] = useState(false)


    const openHomeHandler = ()=>{
        setopenHome(true)
        setopencompany(false)
        setopenContact(false)
    }

    const openCompanyHandler = ()=>{
        setopenHome(false)
        setopencompany(true)
        setopenContact(false)
    }

    const openContactHandler = ()=>{
        setopenHome(false)
        setopencompany(false)
        setopenContact(true)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setisVisable(true);
            } else {
                setisVisable(false);
            }
            };
            
            window.addEventListener("scroll", toggleVisibility);
        
            return () => window.removeEventListener("scroll", toggleVisibility);
    }, [])
    


    return ( 
        <>
            <article className="home">

                {isVisable ? <div className="toTop">
                    <span onClick={scrollToTop}><FaArrowUp /></span>
                </div> : null}

                {/* <section className="navbar">
                    <Navbar />
                </section> */}

                <section className="homeContent">
                    <div className="topHeaderWrapper">

                        <div className="overlay">
                            <div className="topHeaderWrapperContent">
                                <div className="topHeaderLogo">
                                    <div>
                                        <img src={bannerLogo} alt="" />
                                    </div>

                                    <div className='logoTitle'>
                                        Puka Furniture
                                    </div>

                                    <div className="logoRating">
                                        5.00 rating from 1 review
                                    </div>
                                    <div class="rating">
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                    </div>
                                </div>

                                <div className="topHeaderInfo">
                                    <ul>
                                        <li> Sonya Ray, Corona New Mexico 08219, Belau</li>
                                        <li>(+404) 960-3807</li>
                                        <li>puka@nasatheme.com</li>
                                        <li>Store Open</li>
                                        <li className='topHeaderSocialIcons'>
                                            <ul>
                                                <li><span><Fb /></span></li>
                                                <li><span><Pin /></span></li>
                                                <li><span><Youtube /></span></li>
                                                <li><span><Insta /></span></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="homeMainContent">
                        
                        {/* <div className="mainContentLeft">

                            {accordionList}
                            
                        </div> */}

                        <div className="mainContentRight ContentNav">
                            <div className="homeCardsContainer">
                                <div className="cardNav">
                                    <div className="cardNavLinks">
                                        <ul>
                                            <li onClick={openHomeHandler}>
                                                <BsCardImage />
                                            </li>
                                            <li onClick={openCompanyHandler}>
                                                <span>company profile</span>
                                            </li>

                                            <li onClick={openContactHandler}>
                                                <span>contacts</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="cardNavControl">
                                        <ul>
                                            <li>
                                                <input type="search" placeholder="Enter Product Name" name="" id="" />
                                                <button>Search</button>
                                            </li>

                                            <li>
                                                <select name="" id="">
                                                    <option selected>
                                                        Default Sort
                                                    </option>

                                                    <option value="">1</option>
                                                </select>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                                {/* <div className="cardContainer">
                                    <HomeCardComponent />

                                </div> */}
                            </div>
                        </div>
                    </div>
                    
                    {/* {openHome ? <HomeCardComponent /> : null}
                    {opencompany ? <CompanyProfileComponent /> : null} */}
                    {openHome ? <HomeCardComponent /> : opencompany ? <CompanyProfileComponent /> : openContact ? <ContactComponent /> : null}
                </section>




                {/* <div>
                    <Footer />
                </div> */}


            </article>
        </>
    );
}

export default Home;