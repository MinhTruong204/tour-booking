import Banner from '../../components/layouts/Banner';
import styles from './Tours.module.scss';
import bannerimg from '../../assets/images/danhsachtour-banner.jpg';
const tours = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    // Có thể thêm nhiều tour khác ở đây nếu muốn
];

function Tours() {
    return (
        <>
        <Banner img={bannerimg}>Danh sách chuyến đi</Banner>
        <div className={styles.toursPage }>
            {/* Sidebar Filter */}
            <aside className={styles.sidebar}>
                <div className={styles.filterGroup}>
                    <label>Destination</label>
                    <div className={styles.dropdown}>
                        <span>Your City Or Region</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
                <div className={styles.filterGroup}>
                    <label>All Activity</label>
                    <div className={styles.dropdown}>
                        <span>Choose Activity</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
                <div className={styles.filterGroup}>
                    <label>Departure Date</label>
                    <div className={styles.dropdown}>
                        <span>Date Form</span>
                        <i className="fa-regular fa-calendar"></i>
                    </div>
                </div>
                <div className={styles.filterGroup}>
                    <label>Guest</label>
                    <div className={styles.dropdown}>
                        <span>Your Guest</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
                <div className={styles.filterGroup}>
                    <label>Filter By Price</label>
                    <input type="range" min="130" max="250" className={styles.priceRange} />
                    <div>Price: <span>$130 - $250</span></div>
                </div>
                <div className={styles.filterGroup}>
                    <label>Languages</label>
                </div>
            </aside>

            {/* Tour List */}
            <main className={styles.tourList}>
                {tours.map(tour => (
                    <div className={styles.tourCard} key={tour.id}>
                        <div className={styles.tourImageWrapper}>
                            <img src={tour.anhminhhoa} alt={tour.tentour} className={styles.tourImage} />
                            <div className={styles.priceTag}>
                                {tour.giaban ? `$${(tour.giaban / 23000).toFixed(0)}` : '$--'}
                                <span className={styles.priceUnit}>/ person</span>
                            </div>
                            <div className={styles.featured}>FEATURED</div>
                            <div className={styles.tourIcons}>
                                <i className="fa-solid fa-video"></i>
                                <i className="fa-solid fa-camera"></i>
                            </div>
                        </div>
                        <div className={styles.tourContent}>
                            <div className={styles.tourName}>{tour.tentour}</div>
                            <div className={styles.tourLocation}>
                                <i className="fa-solid fa-location-dot"></i>
                                {tour.tinhthanh}, {tour.khuvuc}
                            </div>
                            <button className={styles.bookBtn}>
                                Book Now <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </main>
        </div>
        </>
    );
}

export default Tours;