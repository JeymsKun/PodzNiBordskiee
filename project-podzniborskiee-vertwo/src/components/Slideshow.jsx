import logo from '../logo.svg';
import '../css/style.css';
import '../css/responsive.css';
import '../App.css';
import '../scripts/Slideshow';
import slideshowFirstImage from '../img/1.jpg';
import slideshowSecondImage from '../img/2.jpg';
import slideshowThirdImage from '../img/3.jpg';
import slideshowFourthImage from '../img/4.jpg';
import slideshowFifthImage from '../img/5.jpg';

function Slideshow() {
    return (
        <div className="slideshow">

            <div className="photo-slider">
                <div className="photo-slides">
                    <input type="radio" name="radio-btn" id="radio1"/>
                    <input type="radio" name="radio-btn" id="radio2"/>
                    <input type="radio" name="radio-btn" id="radio3"/>
                    <input type="radio" name="radio-btn" id="radio4"/>
                    <input type="radio" name="radio-btn" id="radio5"/>

                    <div className="slide first">
                        <img src={slideshowFirstImage} alt=""/>
                    </div>
                    <div className="slide">
                        <img src={slideshowSecondImage} alt=""/>
                    </div>
                    <div className="slide">
                        <img src={slideshowThirdImage} alt=""/>
                    </div>
                    <div className="slide">
                        <img src={slideshowFourthImage} alt=""/>
                    </div>
                    <div className="slide">
                        <img src={slideshowFifthImage} alt=""/>
                    </div>


                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                        <div className="auto-btn4"></div>
                        <div className="auto-btn5"></div>
                    </div>

                </div>

                <div className="navigation-manual">
                    <label htmlFor="radio1" className="manual-btn"></label>
                    <label htmlFor="radio2" className="manual-btn"></label>
                    <label htmlFor="radio3" className="manual-btn"></label>
                    <label htmlFor="radio4" className="manual-btn"></label>
                    <label htmlFor="radio5" className="manual-btn"></label>
                </div>
            </div>

        </div>
    );
  }
  
export default Slideshow;
  