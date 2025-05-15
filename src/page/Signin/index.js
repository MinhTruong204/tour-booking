import React, { useState } from 'react';
import styles from './signin.module.scss';
import { loginUser } from '../../api/userAPI';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await loginUser({ email, password });
            // Lưu thông tin user vào localStorage để xác định đã đăng nhập
            localStorage.setItem('user', JSON.stringify(userData));
            console.log(userData);
            alert('Đăng nhập thành công!');
            navigate('/'); // Chuyển về trang chủ
        } catch (error) {
            alert('Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin.');
        }
    };

    return (
        <div className={styles.loginContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.title}>Đăng nhập</h2>

                <div className={styles.inputGroup}>
                    <label>Email</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label>Mật khẩu</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className={styles.button}>
                    Đăng nhập
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
