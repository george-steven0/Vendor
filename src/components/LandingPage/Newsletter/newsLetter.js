import { AiOutlineMail } from "react-icons/ai";

const Newsletter = () => {
    return ( 
        <>
            <article className="newsletter">
                <div className="newsletterCont">

                    <div className="newsTitle">
                        <h2>Let’s talk about how we can make brands work for you</h2>

                        <button>Register</button>
                    </div>

                    <div className="Subscripe">
                        <div className="newsContainer">

                            <div className="iconCont">
                                <div className="icon"><span><AiOutlineMail /></span></div>

                                <div className="iconDetails">
                                    <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                                    <span>Get all the latest information on Events, Sales and Offers.</span>
                                </div>
                            </div>

                            <div className="newsForm">
                                <div className="formInput">
                                    <input type="email" name="" id="" placeholder="Your Email" />
                                    <button>Subscripe</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </article>
        </>
    );
}

export default Newsletter;