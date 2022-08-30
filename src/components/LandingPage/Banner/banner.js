import { Roll } from "react-reveal";

const Banner = () => {
    return ( 
        <>
            <div className="banner">
                <div className="overlay">
                    <div className="bannerContent">
                        <Roll>
                            <p>Join MarketPlace</p>
                            <p>Become a Vendor</p>
                            <button>Start Selling Today!</button>
                        </Roll>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;