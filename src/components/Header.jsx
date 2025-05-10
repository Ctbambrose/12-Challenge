import {Link, useLocation} from 'react-router-dom';

function Header() {
    const currentPage=useLocation().pathname;

    return (
        <ul>
            <li>
                <Link
                    to="/"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    Home
                </Link>
            </li>
        </ul>
    );

}

export default Header;