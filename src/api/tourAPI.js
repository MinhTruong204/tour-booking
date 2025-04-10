const API_BASE_URL = 'http://localhost:5000';
const TOKEN = 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJTVFVUcmFsdmVsLmNvbSIsInN1YiI6ImFkbWluIiwiZXhwIjoxNzQ0MTkwNDc4LCJpYXQiOjE3NDQxODY4NzgsImp0aSI6IjIwNTNiNTI2LTgyMDctNGIyZS1hODBhLTdlZGYyZTExNDJmNyIsInNjb3BlIjoiIn0.IoSGZFQLmWrRwZOERnaryob5Z5W90D-rcRw__1oyhkfemqdkcLeo8vJLm-T6bCtGYKLdR0mL69jQ6o2TeI6CLg'; // Thay thế bằng token thực tế của bạn

export const fetchTours = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/tours`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${TOKEN}`, // Thêm token vào header
            },
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
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
                Authorization: `Bearer ${TOKEN}`, // Thêm token vào header
            },
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching tour by ID:', error);
        throw error;
    }
};