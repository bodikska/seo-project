import './AboutSection.css'
import ServicesSection from '../ServicesSection/ServicesSection';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

function AboutSection() {

return(
    <div>
        <div className="achievements">
            <h3>Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.</h3>
            <div className='achievementsIcon'>
                <div>
                    <img src="/images/achievements/image.png" alt="" />
                    <p>Top SEO Companies 2020 by Clutch</p>
                </div>
                <div>
                    <img src="/images/achievements/image-2.png" alt="" />
                    <p>Top Digital Marketing Agency 2019 by UpCity</p>
                </div>
                <div>
                    <img src="/images/achievements/image-3.png" alt="" />
                    <p>Official Member 2020 by Forbes Agency Council</p>
                </div>
                <div>
                    <img src="/images/achievements/image-4.png" alt="" />
                    <p>Top SEO Companies 2020 by Top Developers</p>
                </div>
            </div>
        </div>
        <div className="clients">
            <img src="/images/clients/client-logo.png" alt="" />
            <img src="/images/clients/client-logo-2.png" alt="" />
            <img src="/images/clients/client-logo-3.png" alt="" />
            <img src="/images/clients/client-logo-4.png" alt="" />
            <img src="/images/clients/client-logo-5.png" alt="" />
            <img src="/images/clients/client-logo-6.png" alt="" />
        </div>
        <div className="agency">
            <div className='agencytext'>
                <h2>Createx Agency </h2>
                <p>Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies orci.</p>
                <PrimaryButton to='/' text='More about us'/>
            </div>
            <img src="/images/Agency/image.svg" alt="" />
        </div>
        <div className="stats">
            <div>
                <div className="stat stat--orange" style={{ '--percent': '90%' }}>
                <span className="stat-value">10</span>
                </div>
                <p>Years of experience</p>
            </div>
            

            <div>
                 <div className="stat stat--pink" style={{ '--percent': '75%' }}>
                <span className="stat-value">45</span>
                </div>
                <p>Awards</p>
            </div>

            <div>
                <div className="stat stat--blue" style={{ '--percent': '83%' }}>
                <span className="stat-value">540+</span>
                </div>
                <p>Projects</p>
            </div>
            <div>
                 <div className="stat stat--green" style={{ '--percent': '100%' }}>
                <span className="stat-value">100%</span>
                </div>
            <p>Happy clients</p>
            </div>
           
        </div>
        <ServicesSection/>
    </div>
)

}

export default AboutSection;