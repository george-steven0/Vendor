import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import user from '../../../assets/imgs/user.png'
import {BsStarFill} from "react-icons/bs";

const Review = () => {
    return ( 

        <>
            <article className="review">
                <section className="reviewCont">
                    <div className="leftSection">
                        <div>
                            <span>What they say</span>
                            <p>Success stories from Wolmart sellers</p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing hendrerit. Pellentesque aliquet nibh nec urna dolor sit In nisi dapibus id, mattis
                            </p>

                            <button>
                                <span>visit vendors</span> <span><FontAwesomeIcon icon={faArrowRight} /></span>
                            </button>
                        </div>
                    </div>

                    <div className="rightSection">
                        <div className='cardContainer'>
                            <div className='card'>
                                <div>
                                    <img src={user} alt="" />
                                </div>

                                <div className='cardRating'>
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                </div>

                                <div className="cardContent">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim debitis omnis aliquam, fugit asperiores harum ullam veritatis non vitae velit natus blanditiis optio hic sit perferendis distinctio! Aspernatur, est omnis?
                                </div>

                                <div>
                                    <p>Victoria</p>
                                    <span>CEO</span>
                                </div>
                            </div>

                            <div className='card'>
                                <div>
                                    <img src={user} alt="" />
                                </div>

                                <div className='cardRating'>
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                </div>

                                <div className="cardContent">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim debitis omnis aliquam, fugit asperiores harum ullam veritatis non vitae velit natus blanditiis optio hic sit perferendis distinctio! Aspernatur, est omnis?
                                </div>
                                
                                <div>
                                    <p>Victoria</p>
                                    <span>CEO</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </>
    );
}

export default Review;