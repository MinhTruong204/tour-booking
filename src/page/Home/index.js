import { useEffect, useState } from 'react';

import styles from './Home.module.scss';
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner3.jpg';

const bannerImgs = [banner1, banner2, banner3];

function Home() {
    const [currentImageBanner, setcurrentImageBanner] = useState(bannerImgs[0]);
    useEffect(() => {
        const interval = setInterval(() => {
            setcurrentImageBanner((prev) => {
                const currentIndex = bannerImgs.indexOf(prev);
                const nextIndex = (currentIndex + 1) % bannerImgs.length;
                return bannerImgs[nextIndex];
            });
        },5000);

        return () => clearInterval(interval);
    }, []);






    return (
        <div>
            <div className={styles.banner}>
                <img src={currentImageBanner}></img>
                <h1>Khám phá Việt Nam, lan tỏa thế giới</h1>
                <p>Cùng bạn chinh phục mọi chân trời</p>
            </div>
            <div className={styles.contanter}>
                <div className = {styles.searchBar}>
                    
                </div>
            </div>
        </div>
    );
}

export default Home;
