import contentImg from '../../../assets/imgs/contentImg.jpg'
import { MdConnectedTv,MdDeliveryDining, MdOutlineStorefront } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { Fade } from 'react-reveal';



const Content = () => {
    return ( 
        <>
            <div className="bodyContent">

                <Fade left>
                    <div className="contentInfo">
                        <div className="leftSection">
                            <div>
                                <span>create a store</span>
                                <p>Build your online store online</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitatonem delectus cupiditate obcaecati quis maiores beatae repellendus, accusantium necessitatibus vero repellat deleniti eius atque aperiam non fugiat assumenda hic quas. Quisquam!
                                </p>

                                <button>Learn More</button>
                            </div>
                        </div>

                        <div className="rightSection">
                            <div className='contentImg'>
                                <img src={contentImg} alt="" />
                            </div>
                        </div>
                    </div>
                </Fade>


                <Fade right>
                    <div className="contentSteps">
                        <div className="stepsCont">
                            <div className="leftSection">
                                <div>
                                    <span>how to trade?</span>
                                    <p>Easy 4 steps to manage your products selling</p>
                                    
                                    <div className='stepsIconsCont'>
                                        <div className='stepIcon'>
                                            <span>
                                                <MdConnectedTv />
                                            </span>

                                            <span>Register and List Your Products</span>
                                        </div>

                                        <div className='stepIcon'>
                                            <span>
                                                <IoNewspaperOutline />
                                            </span>

                                            <span>Start Selling Your Products</span>
                                        </div>

                                        <div className='stepIcon'>
                                            <span>
                                                <MdDeliveryDining />
                                            </span>

                                            <span>Deliver your Products Everywhere</span>
                                        </div>

                                        <div className='stepIcon'>
                                            <span>
                                                <MdOutlineStorefront />
                                            </span>

                                            <span>Get Payments and Increase your Income</span>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>

                            <div className="rightSection">
                                <div className='contentImg'>
                                    <img src={contentImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>


            </div>
        </>
    );
}

export default Content;