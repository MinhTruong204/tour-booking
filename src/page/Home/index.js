import { useEffect, useState } from 'react';

import styles from './Home.module.scss';

import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner3.jpg';

const bannerImgs = [banner1, banner2, banner3];

function Home() {
    const [currentImageBanner, setcurrentImageBanner] = useState(bannerImgs[0]);
    const [filters, setFilters] = useState({
        region: '',
        time: '',
        category: '',
        budget: '',
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setcurrentImageBanner((prev) => {
                const currentIndex = bannerImgs.indexOf(prev);
                const nextIndex = (currentIndex + 1) % bannerImgs.length;
                return bannerImgs[nextIndex];
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleFilterChange = (key, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [key]: value,
        }));
        console.log(`${key} selected:`, value);
    };

    return (
        <div>
            {/* Banner */}
            <div className={styles.banner}>
                <img src={currentImageBanner}></img>
                <h1>Khám phá Việt Nam, lan tỏa thế giới</h1>
                <p>Cùng bạn chinh phục mọi chân trời</p>
            </div>
            {/* Search Bar */}
            <div className={styles.container}>
                <div className={styles.searchBar}>
                    <ul>
                        {/* Khu vực */}
                        <li>
                            <i className="fa-solid fa-location-arrow"></i>
                            <div className={styles.content}>
                                <h5>Khu vực</h5>
                                <select
                                    value={filters.region}
                                    onChange={(e) =>
                                        handleFilterChange('region', e.target.value)
                                    }
                                    className={styles.optionBox}
                                >
                                    <option value="" disabled>
                                        Chọn khu vực
                                    </option>
                                    <option value="bac">Miền Bắc</option>
                                    <option value="trung">Miền Trung</option>
                                    <option value="nam">Miền Nam</option>
                                    <option value="tay">Miền Tây</option>
                                </select>
                            </div>
                        </li>

                        {/* Thời gian */}
                        <li>
                            <i className="fa-solid fa-clock"></i>
                            <div className={styles.content}>
                                <h5>Thời gian</h5>
                                <select
                                    value={filters.time}
                                    onChange={(e) =>
                                        handleFilterChange('time', e.target.value)
                                    }
                                    className={styles.optionBox}
                                >
                                    <option value="" disabled>
                                        Chọn thời gian
                                    </option>
                                    <option value="1">1 ngày</option>
                                    <option value="3">3 ngày</option>
                                    <option value="7">7 ngày</option>
                                </select>
                            </div>
                        </li>

                        {/* Thể loại */}
                        <li>
                            <i className="fa-solid fa-tags"></i>
                            <div className={styles.content}>
                                <h5>Thể loại</h5>
                                <select
                                    value={filters.category}
                                    onChange={(e) =>
                                        handleFilterChange('category', e.target.value)
                                    }
                                    className={styles.optionBox}
                                >
                                    <option value="" disabled>
                                        Chọn thể loại
                                    </option>
                                    <option value="adventure">Phiêu lưu</option>
                                    <option value="relax">Nghỉ dưỡng</option>
                                    <option value="culture">Văn hóa</option>
                                </select>
                            </div>
                        </li>

                        {/* Tài chính */}
                        <li>
                            <i className="fa-solid fa-wallet"></i>
                            <div className={styles.content}>
                                <h5>Tài chính</h5>
                                <select
                                    value={filters.budget}
                                    onChange={(e) =>
                                        handleFilterChange('budget', e.target.value)
                                    }
                                    className={styles.optionBox}
                                >
                                    <option value="" disabled>
                                        Chọn tài chính
                                    </option>
                                    <option value="low">Dưới 5 triệu</option>
                                    <option value="medium">5-10 triệu</option>
                                    <option value="high">Trên 10 triệu</option>
                                </select>
                            </div>
                        </li>
                    </ul>
                    <button className={styles.searchButton}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        Tìm kiếm
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
