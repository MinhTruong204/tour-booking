const API_BASE_URL = 'http://192.168.1.30:8080/QuanLyDuLich'; //http://172.17.4.109:8080/QuanLyDuLich http://localhost:5000

export const fetchTours = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/tours`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Authorization: `Bearer ${TOKEN}`, // Thêm token vào header
            },
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data.result;
    } catch (error) {
        console.error('Error fetching tours:', error);
        throw error;
    }
};

export const fetchTourById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/tours/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching tour by ID:', error);
        throw error;
    }
};
