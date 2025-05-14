function Footer() {

    return (
        <footer className="footer">
            <nav className='social'>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/colton-ambrose-08935890/">
                            <img className='social-icon' src='assets/InBug-White.png' alt='LinkedIn'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Ctbambrose">
                            <img className='social-icon' src='assets/github-mark-white.png' alt="GitHub"/>
                        </a>
                        </li>
                        <li>
                        <a href="https://stackoverflow.com/users/29160206/colton-ambrose">
                            <img className='social-icon' src='assets/Stack_Overflow_icon.png' alt="OverStack"/>
                        </a>
                    </li>
                <img id='gitHub'/>
                <img id='stackOverflow'/>
                </ul>
            </nav>
        </footer>
    );

}

export default Footer;