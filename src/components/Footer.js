import "../styles/Footer.css";
import { Link } from "react-router-dom";
import {FaGithub, FaLinkedin} from "react-icons/fa";

function Footer() {
    return (
    <footer>
        <nav class="column">
            <h3>Links</h3>
            <ul>
                <Link to="/">Home</Link>
            </ul>
            <ul>
                <Link to="/about">About Me</Link>
            </ul>
            <ul>
                <Link to="/experience">Experience</Link>
            </ul>
            <ul>
                <Link to="/projects">Projects</Link>
            </ul>
        </nav>

        <section class="column">
            <h3>Socials</h3>
            <ul>
                <li>
                    <a href="https://github.com/ryanvngo87">
                        <FaGithub className="icon"/>GitHub
                    </a>   
                </li>
            </ul>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/ryanvngo87/">
                        <FaLinkedin className="icon"/>LinkedIn
                    </a>
                </li>
            </ul>
        </section>

        <section class="column">
            <h3>Contact</h3>
            <ul>
                <li>Email: <a href="mailto:ryanvngo@gmail.com">ryanvngo@gmail.com</a></li>
            </ul>
            <ul>
                <li>Phone Number: <a href="tel:+4694080510">(469) 408-0510</a></li>
            </ul>
        </section>
        <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Ryan Ngo. All rights reserved.</p>
        </div>
    </footer>
    )
}

export default Footer;