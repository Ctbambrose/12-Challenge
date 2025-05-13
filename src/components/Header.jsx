import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const currentPage = location.pathname;

    return (
        <header className="header">
            <h1 className='name'>Colton<br/><span className='lastname'>Ambrose</span></h1>
            <nav className='navigation'>
                <ul>
                    <li>
                        <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                            AboutMe
                        </Link>
                    </li>
                    <li>
                        <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>
                        Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );

}

export default Header;