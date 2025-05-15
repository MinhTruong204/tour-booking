import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../../components/layouts/Banner';
import styles from './Tour.module.scss';
import bannerimg from '../../assets/images/chitiettour-banner.jpg';
import { fetchTourById } from '../../api/tourAPI'; // Đường dẫn đến file tourAPI.js
import Button from '../../components/common/button'; // Đảm bảo đúng đường dẫn

function Tour() {
    const { id } = useParams();
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeIndexes, setActiveIndexes] = useState([]);

    useEffect(() => {
        const getTour = async () => {
            try {
                const data = await fetchTourById(id);
                setTour(data.result || data); // tuỳ theo API trả về
            } catch (error) {
                setTour(null);
            } finally {
                setLoading(false);
            }
        };
        getTour();
    }, [id]);

    const togglePlanContent = (index) => {
        if (activeIndexes.includes(index)) {
            setActiveIndexes(activeIndexes.filter((i) => i !== index));
        } else {
            setActiveIndexes([...activeIndexes, index]);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (!tour) return <div>Không tìm thấy tour.</div>;

    return (
        <div>
            <Banner img={bannerimg}></Banner>
            <h1 className={styles.title + ' container'}>Chi tiết chuyến đi</h1>
            {/* Chi tiết chuyến đi <br /> */}
            <div className={styles.content + ' container'}>
                <div className={styles.info}>
                    <img
                        src={tour.anhminhhoa}
                        alt={tour.tentour}
                        className={styles.image}
                    />
                    <br />
                    <div className={styles.address}>
                        <i className="fa-solid fa-location-dot"></i>
                        <span>{tour.tinhthanh}</span>
                    </div>
                    <br />
                    <div className={styles.name}>{tour.tentour}</div>
                    <br />
                    <div className={styles.description}>{tour.gioithieu}</div>
                    <br />
                    <div className={styles.price}>
                        <span className={styles.priceLabel}>Giá:</span>
                        <span className={styles.discountPrice}>
                            {tour.giaban?.toLocaleString('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                            })}
                        </span>
                        <span className={styles.originalPrice}>
                            {tour.giagoc?.toLocaleString('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                            })}
                        </span>
                        <Button
                            theme="theme1"
                            className={styles.bookBtn}
                            style={{ marginLeft: 16 }}
                        >
                            Đặt tour
                        </Button>
                    </div>
                    <br />
                    <div className={styles.experience}>
                        <h2 className={styles.title}>
                            Trải nghiệm sự khác biệt
                        </h2>
                        <div className={styles.listWrapper}>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>
                                    Chuyên gia du lịch địa phương đáng tin cậy
                                </li>
                                <li className={styles.listItem}>
                                    Đặt chỗ linh hoạt, không rắc rối
                                </li>
                                <li className={styles.listItem}>
                                    Cập nhật hành trình theo thời gian thực
                                </li>
                            </ul>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>
                                    Chính sách hủy bỏ linh hoạt
                                </li>
                                <li className={styles.listItem}>
                                    Trải nghiệm du lịch tùy chỉnh
                                </li>
                                <li className={styles.listItem}>
                                    Ưu đãi du lịch độc quyền
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles['tour-plan']}>
                        <h2 className={styles.title}>Lịch trình</h2>
                        <div className={styles['tour-plan-list']}>
                            {tour.thongtinlichtrinh?.diemdungs?.map(
                                (diemdung, index) => (
                                    <div
                                        key={diemdung.iddiemdung}
                                        className={styles['tour-plan-item']}
                                    >
                                        <div
                                            className={
                                                styles['tour-plan-header']
                                            }
                                        >
                                            <span
                                                className={
                                                    styles['tour-plan-day']
                                                }
                                            >
                                                Địa điểm {index + 1}:
                                            </span>
                                            <span
                                                className={
                                                    styles['tour-plan-name']
                                                }
                                            >
                                                {diemdung.tendiemdung}
                                            </span>
                                            <button
                                                className={
                                                    styles['toggle-button']
                                                }
                                                onClick={() =>
                                                    togglePlanContent(index)
                                                }
                                            >
                                                <i
                                                    className={`fa-solid ${
                                                        activeIndexes.includes(
                                                            index,
                                                        )
                                                            ? 'fa-chevron-up'
                                                            : 'fa-chevron-down'
                                                    }`}
                                                ></i>
                                            </button>
                                        </div>
                                        {activeIndexes.includes(index) && (
                                            <div
                                                className={
                                                    styles['tour-plan-content']
                                                }
                                            >
                                                <img
                                                    src={
                                                        diemdung.anhminhhoa?.[0]
                                                    }
                                                    alt={diemdung.tendiemdung}
                                                    className={
                                                        styles[
                                                            'tour-plan-image'
                                                        ]
                                                    }
                                                />
                                                <div
                                                    className={
                                                        styles['tour-plan-info']
                                                    }
                                                >
                                                    <p>
                                                        <strong>
                                                            Thời gian khởi hành:
                                                        </strong>{' '}
                                                        {new Date(
                                                            diemdung.thoigiandi,
                                                        ).toLocaleString()}
                                                    </p>
                                                    <p>
                                                        <strong>
                                                            Thời gian kết thúc:
                                                        </strong>{' '}
                                                        {new Date(
                                                            diemdung.thoigianroi,
                                                        ).toLocaleString()}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tour;
