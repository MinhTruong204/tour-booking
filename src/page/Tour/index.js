import { useState } from 'react';
import Banner from '../../components/layouts/Banner';
import styles from './Tour.module.scss';
import Order from '../../components/layouts/Order';
const tour = {
    id: 'TOUR_DN_3N',
    tentour: 'Khám phá Đà Nẵng 3 ngày 2 đêm',
    tinhthanh: 'Đà Nẵng',
    khuvuc: 'Miền Trung',
    anhminhhoa: 'https://byvn.net/8Zuz',
    theloai: 'THIEN_NHIEN',
    giagoc: 3200000,
    gioithieu:
        'Trải nghiệm vẻ đẹp thiên nhiên và văn hóa của Đà Nẵng với lịch trình hấp dẫn gồm Bà Nà Hills, Bán đảo Sơn Trà, Cầu Rồng và Biển Mỹ Khê.',
    thongtinlichtrinh: {
        idlichtrinh: 'LT_DN_3N',
        thoigiandi: '2025-05-10T08:00:00',
        thoigianve: '2025-05-12T18:00:00',
        diemdungs: [
            {
                iddiemdung: 'D2',
                tendiemdung: 'Bán đảo Sơn Trà',
                thoigiandi: '2025-05-10T13:30:00',
                thoigianroi: '2025-05-10T16:30:00',
                anhminhhoa: ['https://byvn.net/CdDe', 'https://byvn.net/J2Fp'],
            },
            {
                iddiemdung: 'D3',
                tendiemdung: 'Cầu Rồng & Biển Mỹ Khê',
                thoigiandi: '2025-05-10T17:00:00',
                thoigianroi: '2025-05-10T19:30:00',
                anhminhhoa: ['https://byvn.net/OlGZ', 'https://byvn.net/KI5k'],
            },
            {
                iddiemdung: 'D1',
                tendiemdung: 'Bà Nà Hills',
                thoigiandi: '2025-05-10T08:00:00',
                thoigianroi: '2025-05-10T12:00:00',
                anhminhhoa: ['https://byvn.net/5mZt', 'https://byvn.net/71j2'],
            },
        ],
    },
    cackhuyenmai: [],
    giaban: 3200000,
};

function Tour() {
    const [activeIndexes, setActiveIndexes] = useState([]); // Lưu trữ các mục đang mở

    const togglePlanContent = (index) => {
        if (activeIndexes.includes(index)) {
            setActiveIndexes(activeIndexes.filter((i) => i !== index)); // Loại bỏ mục nếu đã mở
        } else {
            setActiveIndexes([...activeIndexes, index]); // Thêm mục nếu chưa mở
        }
    };

    return (
        <div>
            <Banner img ={tour.anhminhhoa}>Chi tiết</Banner>
            <div className={styles.content + ' container'}>
                <div className={styles.info}>
                    {/* <img
                        src={tour.anhminhhoa}
                        alt={tour.tentour}
                        className={styles.image}
                    />
                    <br /> */}
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
                            {tour.giaban.toLocaleString('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                            })}
                        </span>
                        <span className={styles.originalPrice}>
                            {tour.giaban.toLocaleString('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                            })}
                        </span>
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
                            {tour.thongtinlichtrinh.diemdungs.map(
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
                                                    src={diemdung.anhminhhoa[0]}
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

                {/* <div className={styles.order}> </div> */}
                <div className={styles.order}>
                    <Order></Order>
                </div>
            </div>
        </div>
    );
}

export default Tour;
