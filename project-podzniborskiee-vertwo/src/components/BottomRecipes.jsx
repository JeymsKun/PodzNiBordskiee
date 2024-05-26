
import '../css/recipes-style.css';
import '../css/recipes-responsive.css';
import '../App.css';

function Bottom() {
    return (
        <div className="bottom-adjust adjust-bottom">
            <section className="bottom-area">
                <div className="more-info">
                    <ul className="all">
                        <li><a href="/">Legal Notice</a></li>
                        <li><a href="/">Privacy Notice</a></li>
                        <li><a href="/">Cookie Notice</a></li>
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
