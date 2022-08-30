import Revenu from '../../../assets/imgs/about-revenue.png'
import Product from '../../../assets/imgs/about-products.png'
import Customer from '../../../assets/imgs/about-customer.png'
import Buyers from '../../../assets/imgs/about-buyers.png'

const Statistics = () => {
    return ( 
        <>
            <div className="statistics">
                <div className="statisticsInfo">
                    <div>
                        <img src={Revenu} alt="" />
                        <p>€ 7.5M</p>
                        <span>Gross annual revenues</span>
                    </div>

                    <div>
                        <img src={Product} alt="" />
                        <p>15,987</p>
                        <span>Products for sale</span>
                    </div>

                    <div>
                        <img src={Customer} alt="" />
                        <p>12,567</p>
                        <span>Satisfied customers</span>
                    </div>

                    <div>
                        <img src={Buyers} alt="" />
                        <p>876K</p>
                        <span>Active buyers for 2020</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Statistics;