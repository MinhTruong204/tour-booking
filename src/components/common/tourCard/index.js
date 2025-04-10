import React from 'react';
import styles from './TourCard.module.scss'; // Import file SCSS module

function TourCard({ tour }) {
    return (
        <div className={styles.tourCard}>
            <div className={styles.tourCard__image}>
                <img src={tour.anhminhhoa} alt={tour.tentour} />
                {/* <span className={styles.category}>{tour.theloai}</span> */}
            </div>
            <div className={styles.tourCard__content}>
                <p className={styles.location}>{tour.tinhthanh}</p>
                <h3 className={styles.title}>{tour.tentour}</h3>

                <div className={styles.price}>
                    Chỉ từ
                    <span className={styles.new}>
                        {tour.giaban.toLocaleString()}{' '}
                    </span>
                    <br />
                    <span className={styles.old}>
                        {tour.giagoc.toLocaleString()}{' '}
                    </span>
                    VND
                </div>
                {/* <button className={styles.button}>Xem chi tiết</button> */}
            </div>
        </div>
    );
}

export default TourCard;
