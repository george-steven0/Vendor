import HomeCard from "../HomeCardComponent/HomeCard/homeCard";
import logo from '../../assets/imgs/logo.png'
import bannerLogo from '../../assets/imgs/bannerLogo.jpg'
import banner from '../../assets/imgs/banner.jpg'
import regSlide from '../../assets/imgs/regSlide.png'
import { Fragment, useState } from "react";
import { IoLogoFacebook as Fb } from "react-icons/io";
import { BsCardImage ,BsStarFill} from "react-icons/bs";
import MuiAccordion from "../MuiAccordion/accordion";
import './companyProfile.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndustry, faBox, faWrench, faChartBar, faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const CompanyProfileComponent = () => {
    const accordionListData =[
        {id:1, icon : faIndustry, title: 'company overview',list : ['item 1', 'item 2']},
        {id:2, icon : faBox, title: 'selected products',list : ['item 3 ', 'item 4']},
        {id:3, icon : faWrench, title: 'production capacity',list : ['item 1', 'item 6']},
        {id:3, icon : faChartBar, title: 'trade capacity',list : ['item 1', 'item 6']},
        {id:3, icon : faCircleNotch, title: 'business performance',list : ['item 1', 'item 6']}
    ]

    const accordionList = accordionListData.map(item=>{
        return (
            <Fragment key={item.id}>
                {/* <MuiAccordion title={item.title} list={item.list} /> */}
                <li>
                    <span><FontAwesomeIcon icon={item.icon} /> &nbsp;</span>{item.title}
                </li>
            </Fragment>
        )
    })



    const homeCardData = [
        {id:1, img:bannerLogo, description : "analog clock", title: 'clock',},
        {id:2, img:banner, description : "analog clock", title: 'clock',},
        {id:2, img:regSlide, description : "analog clock", title: 'clock',},
        {id:2, img:bannerLogo, description : "analog clock", title: 'clock',},
        {id:3, img:banner, description : "analog clock", title: 'clock',}
    ]

    const homeCardList = homeCardData.map(item=>{
        return(
            <Fragment key={item.id}>
                <HomeCard title={item.title} description = {item.description}  img = {item.img} />
            </Fragment>
        )
    })

    return ( 
        <>
            <div className="homeMainContent">
                        
                <div className="mainContentLeft">

                    <ul>
                        {accordionList}
                    </ul>
                    
                </div>

                <div className="mainContentRight">
                    <div className="homeCardsContainer">
                        {/* <div className="cardNav">
                            <div className="cardNavLinks">
                                <ul>
                                    <li>
                                        <BsCardImage />
                                    </li>
                                    <li>
                                        <span>company profile</span>
                                    </li>

                                    <li>
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

                        </div> */}

                        <div className="companyProfile">
                            
                            <div className="topPart">
                                <div className="companyName">
                                    Thuder Co, Ltd
                                </div>

                                <div className="companyBtn">
                                    <button className="chat">
                                        Chat Now
                                    </button>

                                    <button className="contactSupllier">
                                        Contact Supplier
                                    </button>

                                    <button className="order">
                                        Start Order
                                    </button>
                                </div>
                            </div>

                            <div className="companyInfo">
                                <div className="infoTop">

                                    <div className="companyImg">
                                        <img src={regSlide} alt="" />
                                    </div>

                                    <div className="companyDetails">
                                        <div>
                                            <textarea 
                                                placeholder="write here"
                                                value="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptate voluptas ipsam vero totam quidem voluptatum iusto cupiditate est corporis perferendis, maxime amet explicabo pariatur deleniti velit eaque nemo esse!  dskjhf sdjfkskdf sdkj ksdhfksh dkfskdjfh kjsdhfksdh fkjhs dkjfh" >
                                            
                                            </textarea>
                                        </div>

                                        <div className="companyRatingInfo">
                                            <div className="ratingNum">
                                                <p>4.5 / 5</p>
                                                <p>Satisfied</p>
                                                <p>107 Reviews</p>
                                            </div>

                                            <div className="ratingTable">
                                                <table>
                                                    <tr>
                                                        <td>Supplier Index</td>
                                                        <td>
                                                            <BsStarFill />
                                                            <BsStarFill />
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>Transaction</td>
                                                        <td> - </td>
                                                    </tr>

                                                    <tr>
                                                        <td>Response Time</td>
                                                        <td> Hidden </td>
                                                    </tr>

                                                    <tr>
                                                        <td>Response Rate</td>
                                                        <td> Hidden </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="companyInfoTable">
                                    <table>
                                        <tr>
                                            <td>Business Type</td>
                                            <td>Manufactur, Trading</td>

                                            <td>Country/ Region</td>
                                            <td>China</td>
                                        </tr>

                                        <tr>
                                            <td>Main Product</td>
                                            <td>Mens clothes, Women Clothes,  Women Clothes,  Women Clothes</td>

                                            <td>Toal employee</td>
                                            <td>11 - 50</td>
                                        </tr>

                                        <tr>
                                            <td>Business Type</td>
                                            <td>Manufactur, Trading</td>

                                            <td>Country/ Region</td>
                                            <td>China</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CompanyProfileComponent;