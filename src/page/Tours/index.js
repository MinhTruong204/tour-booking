import React, { useEffect, useState } from 'react';
import Banner from '../../components/layouts/Banner';
import styles from './Tours.module.scss';
import bannerimg from '../../assets/images/danhsachtour-banner.jpg';
import { fetchTours } from '../../api/tourAPI'; // Đường dẫn đến file tourAPI.js

function Tours() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getTours = async () => {
            try {
                const data = await fetchTours();
                setTours(data);
            } catch (error) {
                // Có thể hiển thị thông báo lỗi ở đây nếu muốn
            } finally {
                setLoading(false);
            }
        };
        getTours();
    }, []);

    return (
        <>
            <Banner img={bannerimg}>Danh sách chuyến đi</Banner>
            <div className={styles.toursPage}>
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
                        <input
                            type="range"
                            min="130"
                            max="250"
                            className={styles.priceRange}
                        />
                        <div>
                            Price: <span>$130 - $250</span>
                        </div>
                    </div>
                    <div className={styles.filterGroup}>
                        <label>Languages</label>
                    </div>
                </aside>

                {/* Tour List */}
                <main className={styles.tourList}>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        tours.map((tour) => (
                            <div className={styles.tourCard} key={tour.id}>
                                <div className={styles.tourImageWrapper}>
                                    <img
                                        src={tour.anhminhhoa}
                                        alt={tour.tentour}
                                        className={styles.tourImage}
                                    />
                                    <div className={styles.priceTag}>
                                        {tour.giaban
                                            ? `$${(tour.giaban / 23000).toFixed(
                                                  0,
                                              )}`
                                            : '$--'}
                                        <span className={styles.priceUnit}>
                                            / person
                                        </span>
                                    </div>
                                    <div className={styles.featured}>
                                        FEATURED
                                    </div>
                                    <div className={styles.tourIcons}>
                                        <i className="fa-solid fa-video"></i>
                                        <i className="fa-solid fa-camera"></i>
                                    </div>
                                </div>
                                <div className={styles.tourContent}>
                                    <div className={styles.tourName}>
                                        {tour.tentour}
                                    </div>
                                    <div className={styles.tourLocation}>
                                        <i className="fa-solid fa-location-dot"></i>
                                        {tour.tinhthanh}, {tour.khuvuc}
                                    </div>
                                    <button className={styles.bookBtn}>
                                        Book Now{' '}
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </main>
            </div>
        </>
    );
}

export default Tours;
