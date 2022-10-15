import HomeCard from "./HomeCard/homeCard";
import logo from '../../assets/imgs/logo.png'
import bannerLogo from '../../assets/imgs/bannerLogo.jpg'
import banner from '../../assets/imgs/banner.jpg'
import regSlide from '../../assets/imgs/regSlide.png'
import { Fragment, useState } from "react";
import { IoLogoFacebook as Fb } from "react-icons/io";
import { FaPinterestSquare as Pin, FaYoutubeSquare as Youtube, FaInstagram as Insta, FaTwitter as Twitter } from "react-icons/fa";
import { BsCardImage ,BsStarFill} from "react-icons/bs";
import MuiAccordion from "../MuiAccordion/accordion";

const HomeCardComponent = () => {
    const accordionListData =[
        {id:1, title: 'category',list : ['item 1', 'item 2']},
        {id:2, title: 'work hours',list : ['item 3 ', 'item 4']},
        {id:3, title: 'contact vendor',list : ['item 1', 'item 6']}
    ]

    const accordionList = accordionListData.map(item=>{
        return (
            <Fragment key={item.id}>
                <MuiAccordion title={item.title} list={item.list} />
            </Fragment>
        )
    })



    const homeCardData = [
        {id:1, price : "18", img:bannerLogo, description : "analog clock", title: 'clock',},
        {id:2, price : "18", img:banner, description : "analog clock", title: 'clock',},
        {id:3, price : "18", img:regSlide, description : "analog clock", title: 'clock',},
        {id:4, price : "18", img:bannerLogo, description : "analog clock", title: 'clock',},
        {id:5, price : "18", img:banner, description : "analog clock", title: 'clock',}
    ]

    const homeCardList = homeCardData.map(item=>{
        return(
            <Fragment key={item.id}>
                <HomeCard title={item.title} description = {item.description}  img = {item.img} price = {item.price} />
            </Fragment>
        )
    })

    return ( 
        <>
        <div className="homeMainContent">
                        
            <div className="mainContentLeft homeMainContentLeft">

                {accordionList}
                
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

                    <div className="cardContainer">
                        {homeCardList}

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default HomeCardComponent;