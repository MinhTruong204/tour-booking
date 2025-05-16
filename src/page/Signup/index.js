import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Thêm dòng này
import styles from '../Signin/signin.module.scss';
import { registerUser, verifyOtp } from '../../api/userAPI';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        tendangnhap: '',
        diachi: '',
        sodienthoai: '',
        ngaysinh: '',
        password: '',
    });
    const [step, setStep] = useState('register');
    const [otp, setOtp] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate(); // Thêm dòng này

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dataToSend = {
                ...formData,
                ngaysinh: formData.ngaysinh
                    ? formData.ngaysinh + 'T00:00:00'
                    : '',
            };
            await registerUser(dataToSend);
            setEmail(formData.email);
            setStep('otp');
        } catch (error) {
            alert('Đăng ký thất bại!');
        }
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        try {
            await verifyOtp({ email, otp });
            alert('Xác thực thành công!');
            navigate('/'); // Chuyển hướng về trang chủ
        } catch (error) {
            alert('Mã OTP không đúng hoặc đã hết hạn!');
        }
    };

    if (step === 'otp') {
        return (
            <div className={styles.registerContainer}>
                <form className={styles.form} onSubmit={handleOtpSubmit}>
                    <h2 className={styles.title}>Xác thực OTP</h2>
                    <div className={styles.inputGroup}>
                        <label>Nhập mã OTP đã gửi tới email</label>
                        <input
                            type="text"
                            value={otp}
                            onChange={e => setOtp(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.button}>
                        Xác thực
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className={styles.registerContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.title}>Đăng ký</h2>
                <div className={styles.inputGroup}>
                    <label>Email <strong style={{color: "red"}}>*</strong>      </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label>Họ tên <strong style={{color: "red"}}>*</strong></label>
                    <input
                        type="text" 
                        name="tendangnhap"
                        value={formData.tendangnhap}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label>Địa chỉ <strong style={{color: "red"}}>*</strong></label>
                    <input
                        type="text"
                        name="diachi"
                        value={formData.diachi}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label>Số điện thoại <strong style={{color: "red"}}>*</strong></label>
                    <input
                        type="tel"
                        name="sodienthoai"
                        value={formData.sodienthoai}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label>Ngày sinh <strong style={{color: "red"}}>*</strong></label>
                    <input
                        type="date"
                        name="ngaysinh"
                        value={formData.ngaysinh}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label>Mật khẩu <strong style={{color: "red"}}>*</strong></label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className={styles.button}>
                    Đăng ký
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
