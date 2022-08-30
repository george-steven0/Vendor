import { Zoom,LightSpeed, Fade } from 'react-reveal';
import Banner from './Banner/banner';
import Content from './Content/content';
import './landing.scss'
import Review from './Review/review';
import Statistics from './Statistics/statistics';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Newsletter from './Newsletter/newsLetter';

const LandingPage = () => {
    return ( 
        <article className="landingPage">
            <section>
                <Banner />
            </section>

            <section className='landingContent'>
                <div className='ContentComponent'>
                    <Content />
                </div>

                <div className='statisticsComponent'>
                    <LightSpeed>
                        <Statistics />
                    </LightSpeed>
                </div>

                <div className="reviewComponent">
                    <Fade>
                        <Review />
                    </Fade>
                </div>

                <div className="newsLetterComponent">

                    <Newsletter />
                    
                </div>  
                
            </section>
        </article>
    );
}

export default LandingPage;