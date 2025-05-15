const API_BASE_URL = 'http://192.168.1.30:8080/QuanLyDuLich'; // Thay bằng URL thực tế của bạn

export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) throw new Error('Đăng ký thất bại');
        return await response.json();
    } catch (error) {
        console.error('Lỗi đăng ký:', error);
        throw error;
    }
};
export const verifyOtp = async ({ email, otp }) => {
    const response = await fetch(`${API_BASE_URL}/users/verify?email=${email}&code=${otp}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        
    });
    if (!response.ok) throw new Error('OTP không hợp lệ');
    return await response.json();
};