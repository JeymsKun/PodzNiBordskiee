import logo from '../logo.svg';
import '../css/style.css';
import '../css/responsive.css';
import '../App.css';

function Bottom() {
    return (
        <div className="bottom-adjust adjust-bottom">
            <section className="bottom-area">
                <div className="more-info">
                    <ul className="all">
                        <li><a href="legal-notice.html">Legal Notice</a></li>
                        <li><a href="privacy-notice.html">Privacy Notice</a></li>
                        <li><a href="cookie-notice.html">Cookie Notice</a></li>
                    </ul>
                </div>
            </section>

            <footer className="copyright-podz-ni-bordskiee">
                <div className="footer-copyright">
                    <p className="copyright">
                        © 2024 Podz Ni Bordskiee<br />
                        Follow us on Facebook <i className="fa-brands fa-facebook"></i><a
                            href="https://www.facebook.com/bordzkie.bedz" style={{ textDecoration: 'none', color: 'white' }}>
                            @PodzNiBordskiee</a>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Bottom;
