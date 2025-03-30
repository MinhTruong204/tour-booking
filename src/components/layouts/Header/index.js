import styles from './Header.module.scss';
import logo from '../../../assets/images/logo.png';
import calender from '../../../assets/icons/calendar-days-solid.svg';
function Header() {
    return (
        <div>
            <nav className={styles.header}>
                <img src={logo} alt="logo" className={styles.logo} />
                <ul className={styles.menu}>
                    <li>
                        <a href="home">Trang chủ</a>
                    </li>
                    <li>
                        <a href="about">Tours</a>
                    </li>
                    <li>
                        <a href="tours">Khuyến Mãi</a>
                    </li>
                    <li>
                        <a href="contact">Liên hệ</a>
                    </li>

                    <li>
                        <a href="dndk">Đăng nhập | Đăng ký</a>
                    </li>
                    <li>
                        <i className="fa-regular fa-calendar"></i>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
