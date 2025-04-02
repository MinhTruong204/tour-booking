

import { useRef, useState, useEffect } from 'react';
import styles from './Header.module.scss';
import logo from '../../../assets/images/logo.png';

function Header() {
    const [hoveredIndex, setHoveredIndex] = useState(null); // Lưu chỉ số của phần tử đang hover
    const [hoverWidth, setHoverWidth] = useState(0); // Lưu chiều rộng của thẻ li
    const [hoverLeft, setHoverLeft] = useState(0); // Lưu vị trí left của thẻ li

    const [activeIndex, setActiveIndex] = useState(0); // Lưu chỉ số của phần tử đang active
    const menuRefs = useRef([]); // Tạo mảng refs cho các thẻ li
    const menuItems = [
        { label: 'Trang chủ', link: '/home' },
        { label: 'Tours', link: '/about' },
        { label: 'Khuyến Mãi', link: '/tours' },
        { label: 'Liên hệ', link: '/contact' },
        { label: 'Đăng nhập | Đăng ký', link: '/dndk' },
    ];

    // Xác định mục active dựa trên URL hiện tại
    useEffect(() => {
        let currentPath = window.location.pathname; 
        const activeItemIndex = menuItems.findIndex((item) => item.link === currentPath);;
        if (activeItemIndex !== -1) {
            setActiveIndex(activeItemIndex);
            if (menuRefs.current[activeItemIndex]) {
                setHoverWidth(menuRefs.current[activeItemIndex].offsetWidth);
                setHoverLeft(menuRefs.current[activeItemIndex].offsetLeft);
            }
        }
    }, [menuItems]);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index); // Cập nhật chỉ số của thẻ li đang hover
        if (menuRefs.current[index]) {
            setHoverWidth(menuRefs.current[index].offsetWidth); // Lấy width của thẻ li
            setHoverLeft(menuRefs.current[index].offsetLeft); // Lấy vị trí left của thẻ li
        }
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null); // Xóa trạng thái hover
        if (menuRefs.current[activeIndex]) {
            setHoverWidth(menuRefs.current[activeIndex].offsetWidth); // Trở về width của mục active
            setHoverLeft(menuRefs.current[activeIndex].offsetLeft); // Trở về vị trí left của mục active
        }
    };

    const handleMenuClick = (index) => {
        setActiveIndex(index); // Cập nhật chỉ số của mục menu đang active
        if (menuRefs.current[index]) {
            setHoverWidth(menuRefs.current[index].offsetWidth);
            setHoverLeft(menuRefs.current[index].offsetLeft);
        }
    };

    return (
        <div>
            <nav className={styles.header}>
                <img src={logo} alt="logo" className={styles.logo} />
                <ul className={styles.menu}>
                    {/* Background trượt */}
                    <div
                        className={styles.hoverBackground}
                        style={{
                            width: `${hoverWidth +30 }px`,
                            left: `${hoverLeft}px`,
                        }}
                    ></div>
                    {/* Menu items */}
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            ref={(el) => (menuRefs.current[index] = el)}
                            onMouseEnter={() => handleMouseEnter(index)} // Xử lý khi hover
                            onMouseLeave={handleMouseLeave} // Xử lý khi rời chuột
                            onClick={() => handleMenuClick(index)} // Cập nhật trạng thái active khi click
                            className={index === activeIndex ? styles.active : ''} // Thêm class active nếu mục menu đang được chọn
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