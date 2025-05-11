function Footer() {

    return (
        <footer className="footer">
            <nav className='social'>
                <ul>
                    <li>
                        <a>
                            <img className='social-icon' src='src/assets/InBug-White.png' alt='LinkedIn'/>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img className='social-icon' src='src/assets/github-mark-white.png' alt="GitHub"/>
                        </a>
                        </li>
                        <li>
                        <a>
                            <img className='social-icon' src='src/assets/Stack_Overflow_icon.png' alt="OverStack"/>
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