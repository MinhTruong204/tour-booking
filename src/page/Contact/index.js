import React from 'react';
import styles from './Contact.module.scss';
import Banner from '../../components/layouts/Banner';
import bannercontact from '../../assets/images/contact-banner.jpg';
const ContactForm = () => {
    return (
        <>
            <Banner img={bannercontact}>Liên hệ</Banner>
            <div className={styles.contactContainer + ' container'}>
                <div className={styles.contactInfo}>
                    <h2>
                        Liên hệ với chúng tôi để nhận được sự hỗ trợ tốt nhất
                    </h2>
                    <p>
                        Chúng tôi cung cấp các điểm đến và tour du lịch được
                        tuyển chọn cẩn thận, nắm bắt được bản chất thực sự của
                        địa điểm, đảm bảo bạn trải nghiệm. Thẻ tham quan của
                        chúng tôi giúp bạn tiết kiệm nhiều hơn so với việc mua
                        vé riêng lẻ.
                    </p>

                    <div className={styles.infoItem}>
                        <div className={styles.icon}>📞</div>
                        <div>
                            <span>Vị trí của chúng tôi</span>
                            <strong>
                                180 Cao Lỗ, Phường 4, Quận 8, Hồ Chí Minh
                            </strong>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.icon}>📍</div>
                        <div>
                            <span>Số điện thoại</span>
                            <strong>+84 0123456789</strong>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.icon}>📧</div>
                        <div>
                            <span>Gửi Email</span>
                            <strong> contact@stu.edu.vn</strong>
                        </div>
                    </div>
                </div>

                <div className={styles.formSection}>
                    <h2>Đưa ra ý kiến cá nhân của bạn!</h2>
                    <p>
                        Chúng tôi cung cấp các điểm đến và tour du lịch được
                        tuyển chọn kỹ lưỡng, nắm bắt được bản chất thực sự của
                        địa điểm, đảm bảo cho bạn trải nghiệm.
                    </p>
                    <form>
                        <div className={styles.inputRow}>
                            <input type="email" placeholder="Nhập Email" />
                            <input
                                type="text"
                                placeholder="Nhập số điện thoại"
                            />
                        </div>
                        <input type="text" placeholder="Nhập tên" />
                        <textarea placeholder="Nhập phản hồi ..." />
                        <button type="submit">
                            Gửi phản hồi <span>➜</span>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactForm;
