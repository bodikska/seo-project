import './HomePageHeader.css'
import MenuHeader from '../MenuHeader/MenuHeader';

function HomePageHeader() {
 return(
    <div className="HeaderHomePage">
        <MenuHeader/>
        <div className="header-title">
            <div className="title">
                <h1 className='title-text'>Best <span className='header-color-text'>SEO & Marketing</span> Solutions for You</h1>
                <div className='nav-button'>
                    <span>Get a free analysis</span>
                    <span>
                        <i className="play-icon"></i>
                        <span className='title-text-btn'>Play video</span>
                    </span>
                </div>
            </div>
             <img src="/images/homeheader/illustration.png" alt="" />
        </div>
       <div className='core-services'>
        <div><i></i><p>SEO Content Strategy</p></div>
        <div><i></i><p>Content Marketing</p></div>
        <div><i></i><p>Website & Social Media Marketing</p></div>
       </div>
    </div>
 )

}
export default HomePageHeader;