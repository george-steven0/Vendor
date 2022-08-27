import './navbar.scss'
import logo from '../../assets/imgs/logo.png'
import enFlag from '../../assets/imgs/en.png'
import menuImg from '../../assets/imgs/menu-h1.jpg'
import { Link } from 'react-router-dom';
import { IoNewspaperOutline } from "react-icons/io5";
import { FaRegUserCircle as UserIcon } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown as ArrowDown } from "react-icons/md";
import { TbHeadset } from "react-icons/tb";
import { AiOutlineShopping as Cart } from "react-icons/ai";
import { BsHeart as Wishlist } from "react-icons/bs";
import { IoIosGitCompare as Compare, IoIosArrowBack as LeftArrow, IoIosArrowForward as RightArrow } from "react-icons/io";
import { FaBars,FaSearch,FaTimes } from 'react-icons/fa';
import NavCard from './NavbarCard/navbarCard';
import { useState } from 'react';
import MuiAccordion from '../MuiAccordion/accordion';
import Modal from '../Modal/modal';



const Navbar = () => {
    const [navCardData, setnavCardData] = useState([
        { id:1, img:menuImg, type : "fashion" },
        { id:2, img:menuImg, type : "baby" },
        { id:3, img:menuImg, type : "t-shirt" },
        { id:4, img:menuImg, type : "cosmotics" },
        { id:5, img:menuImg, type : "watches" },
        { id:6, img:menuImg, type : "cosmotics" },

    ])

    const navCardDataList = navCardData && navCardData.map(item=>{
        return(
            <div key={item.id}>
                <NavCard img={item.img} type={item.type} />
            </div>
        )
    })

    const [showSideNav, setshowSideNav] = useState(false)

    const showSideNavHandler = ()=>{

        setshowSideNav(!showSideNav)
    }

    const [showCart, setshowCart] = useState(false)

    const showCartHandler = ()=>{

        setshowCart(!showCart)
    }


    const [showModal, setshowModal] = useState(false)

    const showModalNav = ()=>{
        setshowModal(!showModal)
    }

    const [showModalLogin, setshowModalLogin] = useState(false)

    const showModalLoginHandler = ()=>{
        setshowModalLogin(!showModalLogin)
    }

    return ( 
        <>
            <section className='lg-screen navbar'>
                <div className='topNav'>
                    <div className="topNavLinks">
                        <div className='topNavAd'>
                            <span><IoNewspaperOutline /></span>
                            <span>Add anything here or remove it...</span>
                        </div>

                        <div className='topNavMenu'>
                            <ul>
                                <li onClick={showModalLoginHandler}>
                                    <span><UserIcon /></span>
                                    <span>Login / Register</span>
                                </li>

                                <li>
                                    <span></span>
                                    <span>Order Tracking</span>
                                </li>

                                <li>
                                    <span></span>
                                    <span>US Dollar</span>
                                </li>

                                <li>
                                    <span><img src={enFlag} alt="" /></span>
                                    <span>English</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='navWrapper'>
                        <div className="navWrapperContent">

                            <div className='navLogo'>
                                <img src={logo} alt="Logo" />
                            </div>

                            <div className='navSearch'>
                                <input type="search" placeholder='Iam Shopping for ...' name="" id="" />
                            </div>

                            <div className="navWrapperIcons">
                                <ul>
                                    <li>
                                        <div>
                                            <Cart />
                                        </div>
                                        Cart
                                    </li>

                                    <li>
                                        <div>
                                            <Wishlist />
                                        </div>
                                        Wishlist
                                    </li>

                                    <li>
                                        <div>
                                            <Compare />
                                        </div>
                                        Compare
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="navMainLinksContainer">
                            <div className="navMainLinks">
                                <ul>
                                    <li className='navHomeLink'>
                                        <Link to="/"><div>Home</div> <div className='navLinkIcon'><ArrowDown /></div></Link>

                                        <div className='navLinkContentWrapper'>
                                            <div className='navHomeLinkContent'>
                                                {navCardDataList}
                                            </div>

                                            <div className='navLinkContentBtn'><button>View all Demos</button></div>
                                        </div>
                                    </li>

                                    <li className='navHomeLink'>
                                        <Link to="/"><div>Shop</div> <div className='navLinkIcon'><ArrowDown /></div></Link>
                                        
                                        <div className='navLinkContentWrapper'>
                                            <div className='navHomeLinkContent navShopLinkContent'>
                                                <div>
                                                    <ul>
                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul>
                                                        

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul>
                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul>
                                                        

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul>
                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul>
                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul>
                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </li>

                                    <li className='navHomeLink'>
                                        <Link to="/"><div>elements</div> <div className='navLinkIcon'><ArrowDown /></div></Link>

                                        <div className='navLinkContentWrapper'>
                                            <div className='navHomeLinkContent navShopLinkContent'>
                                                <div>
                                                    <ul>
                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul>
                                                        

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul>
                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul>
                                                        

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul>
                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul>
                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul>
                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className='navHomeLink'>
                                        <Link to="/"><div>pages</div> <div className='navLinkIcon'><ArrowDown /></div></Link>

                                        <div className='navLinkContentWrapper2'>
                                            <ul>
                                                <li>My Account</li>
                                                <li>contact us</li>
                                                <li>about us</li>
                                                <li>order tracking</li>
                                                <li>faqs</li>
                                                <li>Site boxed</li>
                                                <li>pop up newsletter</li>
                                                <li>top promotion</li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className='navHomeLink'>
                                        <Link to="/"><div>vendor list</div> <div className='navLinkIcon'><ArrowDown /></div></Link>

                                        <div className='navLinkContentWrapper2 vendorWrapper'>
                                            <ul>
                                                <li>vedor list 1</li>
                                                <li>vedor list 2</li>
                                                <li>vedor list 3</li>
                                                <li>vedor list 4</li>
                                                <li>vedor list 5</li>
                                                <li>vedor list 6</li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className='navHomeLink'>
                                        <Link to="/"><div>vendor store</div> <div className='navLinkIcon'><ArrowDown /></div></Link>

                                        <div className='navLinkContentWrapper2 vendorStoreWrapper'>
                                            <ul>
                                                <li>vedor store 1</li>
                                                <li>vedor store 2</li>
                                                <li>vedor store 3</li>
                                                <li>vedor store 4</li>
                                                <li>vedor store 5</li>
                                                <li>vedor store 6</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="navContact">
                                <a href='telto:'>
                                    <span><TbHeadset /></span> &nbsp;
                                    <span>(+01)-800-3456-88</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='sm-screen navbar'>
                <div className='topNav'>
                    <div className="topNavLinks">
                        <div className='topNavAd'>
                            <span><IoNewspaperOutline /></span>
                            <span>Add anything here or remove it...</span>
                        </div>

                        {/* <div className='topNavMenu'>
                            <ul>
                                <li>
                                    <span><UserIcon /></span>
                                    <span>Login / Register</span>
                                </li>

                                <li>
                                    <span></span>
                                    <span>Order Tracking</span>
                                </li>

                                <li>
                                    <span></span>
                                    <span>US Dollar</span>
                                </li>

                                <li>
                                    <span><img src={enFlag} alt="" /></span>
                                    <span>English</span>
                                </li>
                            </ul>
                        </div> */}
                    </div>

                    <div className='navWrapper'>
                        <div className="navWrapperContent">

                            <div className='iconWrapper1'>
                                <span onClick={showSideNavHandler}><FaBars /></span>
                                <span onClick={showModalNav}><FaSearch /></span>
                            </div>

                            <div className='navLogo'>
                                <img src={logo} alt="Logo" />
                            </div>

                            <div className='iconWrapper2'>
                                <span onClick={showModalLoginHandler}><UserIcon /></span>
                                <span onClick={showCartHandler}><Cart /></span>
                            </div>


                            {/* <div className='navSearch'>
                                <input type="search" placeholder='Iam Shopping for ...' name="" id="" />
                            </div>

                            <div className="navWrapperIcons">
                                <ul>
                                    <li>
                                        <div>
                                            <Cart />
                                        </div>
                                        Cart
                                    </li>

                                    <li>
                                        <div>
                                            <Wishlist />
                                        </div>
                                        Wishlist
                                    </li>

                                    <li>
                                        <div>
                                            <Compare />
                                        </div>
                                        Compare
                                    </li>
                                </ul>
                            </div> */}
                        </div>

                        {/* <div className="navMainLinksContainer">
                            <div className="navMainLinks">
                                <ul>
                                    <li className='navHomeLink'>
                                        <Link to="/"><div>Home</div> <div className='navLinkIcon'><ArrowDown /></div></Link>

                                        <div className='navLinkContentWrapper'>
                                            <div className='navHomeLinkContent'>
                                                {navCardDataList}
                                            </div>

                                            <div className='navLinkContentBtn'><button>View all Demos</button></div>
                                        </div>
                                    </li>

                                    <li className='navHomeLink'>
                                        <Link to="/"><div>Shop</div> <div className='navLinkIcon'><ArrowDown /></div></Link>
                                        
                                        <div className='navLinkContentWrapper'>
                                            <div className='navHomeLinkContent navShopLinkContent'>
                                                <div>
                                                    <ul>
                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul>
                                                        

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul>
                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul>
                                                        

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul>
                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul>
                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul>
                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </li>

                                    <li className='navHomeLink'>
                                        <Link to="/"><div>elements</div> <div className='navLinkIcon'><ArrowDown /></div></Link>

                                        <div className='navLinkContentWrapper'>
                                            <div className='navHomeLinkContent navShopLinkContent'>
                                                <div>
                                                    <ul>
                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul>
                                                        

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul>
                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>

                                                        <li>
                                                            product card 1
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul>
                                                        

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul>
                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul>
                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <ul>
                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>

                                                        <li>
                                                            card 1
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className='navHomeLink'>
                                        <Link to="/"><div>pages</div> <div className='navLinkIcon'><ArrowDown /></div></Link>

                                        <div className='navLinkContentWrapper2'>
                                            <ul>
                                                <li>My Account</li>
                                                <li>contact us</li>
                                                <li>about us</li>
                                                <li>order tracking</li>
                                                <li>faqs</li>
                                                <li>Site boxed</li>
                                                <li>pop up newsletter</li>
                                                <li>top promotion</li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className='navHomeLink'>
                                        <Link to="/"><div>vendor list</div> <div className='navLinkIcon'><ArrowDown /></div></Link>

                                        <div className='navLinkContentWrapper2 vendorWrapper'>
                                            <ul>
                                                <li>vedor list 1</li>
                                                <li>vedor list 2</li>
                                                <li>vedor list 3</li>
                                                <li>vedor list 4</li>
                                                <li>vedor list 5</li>
                                                <li>vedor list 6</li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className='navHomeLink'>
                                        <Link to="/"><div>vendor store</div> <div className='navLinkIcon'><ArrowDown /></div></Link>

                                        <div className='navLinkContentWrapper2 vendorStoreWrapper'>
                                            <ul>
                                                <li>vedor store 1</li>
                                                <li>vedor store 2</li>
                                                <li>vedor store 3</li>
                                                <li>vedor store 4</li>
                                                <li>vedor store 5</li>
                                                <li>vedor store 6</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="navContact">
                                <a href='telto:'>
                                    <span><TbHeadset /></span> &nbsp;
                                    <span>(+01)-800-3456-88</span>
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className={showSideNav ? "sideNavOverlay" : "sideNavOverlay sideNavOverlayDis"}>
                    <div className={showSideNav ? "sideNav activeSideNav" : "sideNav"}>
                        <div className="sideNavIcon" onClick={showSideNavHandler}>
                            <span><LeftArrow /></span>
                        </div>

                        <div className="sideNavMenuWrapper">
                            <ul>
                                <li>
                                    <h1>Vendor CO</h1>
                                </li>

                                <li>
                                    <MuiAccordion title='Home' list = {['item 1', 'item 2']} />
                                </li>

                                <li>
                                    <MuiAccordion title='Shop' list={[]} />
                                </li>

                                <li>
                                    <MuiAccordion title='Elements' list={[]} />
                                </li>

                                <li>
                                    <MuiAccordion title='Pages' list={[]} />
                                </li>

                                <li>
                                    <MuiAccordion title='Vendor List' list={[]} />
                                </li>

                                <li>
                                    <MuiAccordion title='Vendor Store' list={[]} />
                                </li>

                                <li className='loginLi'>
                                    <span><UserIcon /> &nbsp;</span><span>login / register</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={showCart ? "sideNavOverlay" : "sideNavOverlay sideNavOverlayDis"}>
                    <div className={showCart ? "sideCart activeSideCard" : "sideCart"}>
                        <div className="sideCartIcon" onClick={showCartHandler}>
                            <span><RightArrow /></span>
                        </div>

                        <div className="sideCartWrapper">
                            <div className='cartWrapperTitle'>
                                <h2>My Cart</h2>
                            </div>

                            <div className='cartBodyIcon'>
                                <span><Cart /></span>
                            </div> 

                            <div className='cartNotice'>
                                <span>No Product Here</span>
                            </div>

                            <div className='cartCloseBtn'>
                                <button onClick={showCartHandler}>Return</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Modal className={"modalNav"} show={showModal} dismissHandler={showModalNav}>
                <div className="modalForm">
                        <input type="search" name="" id="" placeholder='Shopping For'/>
                        <button>Search</button>
                </div>
            </Modal>

            <Modal className={"modalLogin"} show={showModalLogin} dismissHandler={showModalLoginHandler}>
                <div className="modalLoginWrapper">
                    <div className='closeIcon' onClick={showModalLoginHandler}>
                        <FaTimes />
                    </div>
                    <div className='modalLoginTitle'>
                        <img src={logo} alt="" />
                    </div>

                    <div className='form'>
                        <h3>Greate to have you back!</h3>

                        <form className='formWrapper'>
                            <div>
                                <label>User Name</label>
                                <input type='text' />
                            </div>

                            <div>
                                <label>Password</label>
                                <input type='pasword' />
                            </div>

                            <div className='submitBtn'>
                                <button>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default Navbar;