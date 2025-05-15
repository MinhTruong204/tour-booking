import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../../assets/images/logo.png';

function Header() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [user, setUser] = useState(null);
    const menuRefs = useRef([]);
    const navigate = useNavigate();

    // Menu không có đăng nhập/đăng ký nếu đã đăng nhập
    const menuItems = [
        { label: 'Trang chủ', link: '/home' },
        { label: 'Danh sách', link: '/tours' },
        { label: 'Liên hệ', link: '/contact' },
    ];

    useEffect(() => {
        // Kiểm tra đăng nhập
        const userData = localStorage.getItem('user');
        if (userData) setUser(JSON.parse(userData));
        else setUser(null);
        // Xác định mục active dựa trên URL hiện tại
        let currentPath = window.location.pathname;
        if (currentPath === '/') currentPath = '/home';
        const allMenu = [...menuItems];
        const activeItemIndex = allMenu.findIndex(
            (item) => item.link === currentPath,
        );
        if (activeItemIndex !== -1) setActiveIndex(activeItemIndex);
    }, [window.location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const headerElement = document.querySelector(`.${styles.header}`);
            if (window.scrollY > 500) {
                headerElement.classList.add(styles.scrolled);
            } else {
                headerElement.classList.remove(styles.scrolled);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/home');
    };

    return (
        <div>
            <nav className={styles.header}>
                <img src={logo} alt="logo" className={styles.logo} />
                <ul className={styles.menu}>
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            ref={(el) => (menuRefs.current[index] = el)}
                            onClick={() => setActiveIndex(index)}
                            className={
                                index === activeIndex ? styles.active : ''
                            }
                        >
                            <Link to={item.link}>{item.label}</Link>
                        </li>
                    ))}
                    {!user && (
                        <>
                            <li>
                                <Link to="/signin">Đăng nhập</Link>
                            </li>
                            <li>
                                <Link to="/signup">Đăng ký</Link>
                            </li>
                        </>
                    )}
                    {user && (
                        <li className={styles.userBox}>
                            <span className={styles.username}>
                                Chào,{' '}
                                {user?.result?.tendangnhap ||
                                    user?.result?.email}
                            </span>
                            <button
                                className={styles.logoutBtn}
                                onClick={handleLogout}
                            >
                                Đăng xuất
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default Header;
