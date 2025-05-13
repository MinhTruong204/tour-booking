import { useRef, useState, useEffect } from 'react';
import styles from './Header.module.scss';
import logo from '../../../assets/images/logo.png';

function Header() {
    const [activeIndex, setActiveIndex] = useState(0);
    const menuRefs = useRef([]);
    const menuItems = [
        { label: 'Trang chủ', link: '/home' },
        { label: 'Danh sách', link: '/tours' },
        { label: 'Chi tiết', link: '/tour' },
        // { label: 'Khuyến Mãi', link: '/tours' },
        { label: 'Liên hệ', link: '/contact' },
        { label: 'Đăng nhập', link: '/signin' },
        { label: 'Đăng ký', link: '/signup' },
    ];

    // Xác định mục active dựa trên URL hiện tại
    useEffect(() => {
        let currentPath = window.location.pathname; // Lấy URL hiện tại

        // Nếu đường dẫn là "/", coi như "/home"
        if (currentPath === '/') {
            currentPath = '/home';
        }
        const activeItemIndex = menuItems.findIndex(
            (item) => item.link === currentPath,
        );
        if (activeItemIndex !== -1) {
           setActiveIndex(activeItemIndex); // Cập nhật chỉ số mục active
        }
    }, []);

    useEffect(() => {  
        const handleScroll = () => {
            const headerElement = document.querySelector(`.${styles.header}`);
            if (window.scrollY > 500) {
                headerElement.classList.add(styles.scrolled); // Thêm class khi cuộn xuống
            } else {
                headerElement.classList.remove(styles.scrolled); // Xóa class khi cuộn lên
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Dọn dẹp sự kiện
        };
    },[]);
    return (
        <div>
            <nav className={styles.header}>
                <img src={logo} alt="logo" className={styles.logo} />
                <ul className={styles.menu}>
                    {/* Menu items */}
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            ref={(el) => (menuRefs.current[index] = el)} // Gán ref cho từng thẻ li
                            onClick={() => setActiveIndex(index)} // Cập nhật trạng thái active khi click
                            className={
                                index === activeIndex ? styles.active : ''
                            } // Thêm class active nếu mục menu đang được chọn
                        >
                            <a href={item.link}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Header;
