import { useEffect, useState } from 'react';
import Button from '../../components/common/button';
import { fetchTours } from '../../api/tourAPI';
//
import styles from './Home.module.scss';
import TourCard from '../../components/common/tourCard';
//
import banner1 from '../../assets/images/banner/banner1.jpg';
import banner2 from '../../assets/images/banner/banner2.jpg';
import banner3 from '../../assets/images/banner/banner3.jpg';
import aboutImg from '../../assets/images/about-section-homepage.jpg';
import hquan from '../../assets/images/members/hquan.jpg';
import khanh from '../../assets/images/members/khanh.jpg';
import minh from '../../assets/images/members/minh.jpg';
import phu from '../../assets/images/members/phu.jpg';
import thuc from '../../assets/images/members/thuc.jpg';
const bannerImgs = [banner1, banner2, banner3];
const members = [{avatar :hquan,name :'Hong Quan'},
    {avatar :khanh,name :'Khanh'},
    {avatar :minh,name :'Minh'},
    {avatar :phu,name :'Phu'},
    {avatar :thuc,name :'Thuc'}];

function Home() {
    const [currentImageBanner, setcurrentImageBanner] = useState(bannerImgs[0]);
    const [tours, setTours] = useState([]);
    const [filters, setFilters] = useState({
        region: '',
        time: '',
        category: '',
        budget: '',
    });
    // Set up an interval to change the banner image every 5 seconds
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

    useEffect(() => {
        const getTours = async () => {
            try {
                setTours(await fetchTours());
            } catch (error) {
                console.error('Error fetching tours:', error);
            }
        };
        getTours();
    }, []);

    // Handle filter changes
    const handleFilterChange = (key, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [key]: value,
        }));
    };

    return (
        <div>
            {/* Banner */}
            <div className={styles.banner}>
                <img src={currentImageBanner}></img>
                <h1>Khám phá Việt Nam, lan tỏa thế giới</h1>
                <p>Cùng bạn chinh phục mọi chân trời</p>
            </div>
            {/* Container */}
            <div className={`${styles.container}`}>
                {/* Search Bar */}
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
                                        handleFilterChange(
                                            'region',
                                            e.target.value,
                                        )
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
                                        handleFilterChange(
                                            'time',
                                            e.target.value,
                                        )
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
                                        handleFilterChange(
                                            'category',
                                            e.target.value,
                                        )
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
                                        handleFilterChange(
                                            'budget',
                                            e.target.value,
                                        )
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
                {/* Trendy */}
                <div className={`${styles.trendy} container`}>
                    <div className={styles.header}>
                        <div>
                            <span>Điểm đến nổi tiếng</span>
                            <h2>Những địa điểm du lịch xu hướng</h2>
                        </div>
                        <Button theme="theme1">Expolre Now</Button>
                    </div>
                    <div className={styles.content}>
                        
                        {tours.map((tour) => (
                            <div key={tour.id} className={styles.tourCard}>
                            <img src={tour.anhminhhoa} alt={tour.tentour} />
                            <p >{tour.tentour}</p>
                        </div>
                        ))}
                    </div>
                </div>

                {/* About */}
                <div className={`container ${styles.about} `}>
                    <div className={`${styles['about-content']}`}>
                        <div className={styles.imgage}>
                            <img src={aboutImg}></img>
                            <div className={styles.experienceBox}>
                                <span>00+</span>
                                Tháng kinh nghiệm
                            </div>
                        </div>
                        <div className={styles.detail}>
                            <span>Dịch vụ du lịch của chúng tôi</span>
                            <h2>
                                Cuộc phiêu lưu đáng nhớ của chúng tôi trên toàn
                                thế giới
                            </h2>
                            <p>
                                Chúng tôi cung cấp các điểm đến và các tour du
                                lịch được quản lý cẩn thận để nắm bắt bản chất
                                thực sự của vị trí, đảm bảo bạn trải nghiệm.
                                Điểm thu hút của chúng tôi giúp bạn tiết kiệm
                                nhiều hơn là mua vé cá nhân cho hệ thống gói
                                tour của bạn.
                            </p>
                            <div className={styles.slogan}>
                                "Đồng hành cùng bạn trên mọi nẻo đường, mang đến
                                những hành trình trọn vẹn, lan tỏa niềm vui bất
                                tận, kết nối yêu thương bền vững và khám phá vẻ
                                đẹp vô tận của thế giới rộng lớn."
                            </div>

                            <div className={styles.benefits}>
                                <ul>
                                    <li>
                                        <i className="fa-regular fa-circle-check"></i>
                                        Dịch vụ đáng tin cậy
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-circle-check"></i>
                                        Đặt chỗ linh hoạt, không rắc rối
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-circle-check"></i>
                                        Cập nhật lịch trình thời gian thực
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <i className="fa-regular fa-circle-check"></i>
                                        Hỗ trợ khách hàng 24/7
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-circle-check"></i>
                                        Giải pháp thanh toán liền mạch
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-circle-check"></i>
                                        Khám phá ẩm thực địa phương
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.expolre}>
                                <Button theme="theme2">
                                    Thêm về chúng tôi
                                </Button>
                                <div className={styles.we}>
                                    {members.map((member, index) => (
                                        <img
                                            key={index}
                                            src={member.avatar}
                                            alt={`Member ${index + 1}`}
                                        ></img>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['about-footer']}>
                        <p>
                            Hãy chung tay với các đối tác đáng tin cậy của chúng
                            tôi để khám phá Trải nghiệm du lịch độc quyền, sự
                            thoải mái vô song và Hành trình liền mạch trên toàn
                            thế giới
                        </p>
                    </div>
                </div>

                {/* Feature Place */}
                <div className={styles['feature-place']}>
                    <div className={styles.header}>
                        <span>Điểm đến nổi bật</span>
                        <h2>Những địa điểm du lịch nổi bật</h2>
                        <p>
                            Thẻ tham quan của chúng tôi giúp bạn tiết kiệm nhiều
                            hơn so với việc mua vé riêng lẻ cho hệ thống trọn
                            gói tour của bạn.
                        </p>
                    </div>
                    <div className={`${styles.content} container`}>
                        {tours.map((tour,index) => (
                            <TourCard key={index} tour ={tour}></TourCard>
                        ))}
                    </div>
                </div>

                {/* Tour Guiding Team */}
                <div className={styles['guiding-team']}>
                    <div className={styles.header}>
                        <span>Đội ngũ hướng dẫn viên</span>
                        <h2>Những người đồng hành đáng tin cậy</h2>
                        <p>
                            Đội ngũ hướng dẫn viên chuyên nghiệp của chúng tôi luôn sẵn sàng mang đến cho bạn những trải nghiệm tuyệt vời nhất.
                        </p>
                    </div>
                    <div className={`${styles.content} container`}>
                        {members.map((member, index) => (
                            <div key={index} className={styles.memberCard}>
                                <img src={member.avatar} alt={`Member ${index + 1}`} />
                                <div className={styles.memberInfo}>
                                    <span>Hướng dẫn viên {index + 1}</span>
                                    <h3>{member.name}</h3>
                                    <div className={styles.socialLinks}>
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-facebook"></i>
                                        </a>
                                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                
            </div>
        </div>
    );
}

export default Home;
