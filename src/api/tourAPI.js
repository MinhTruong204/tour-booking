const API_BASE_URL = 'http://localhost:5000'; //172.17.4.109:8080/QuanLyDuLich
// const TOKEN = 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJTVFVUcmFsdmVsLmNvbSIsInN1YiI6ImFkbWluIiwiZXhwIjoxNzQ0MzM2ODkyLCJpYXQiOjE3NDQzMzMyOTIsImp0aSI6ImFiMTBhNjI5LTk5M2UtNDJmOS1hYjMwLWI0NGVlNzA5ZThiYyIsInNjb3BlIjoiUk9MRV9BRE1JTiBEQU5HQkFJIn0.AjCnbKJx-D7S4zZX8BG5I-1EwrXrskX9A3S4lbU2NTfbwj2-AyA1qIXz1NtsYZBd5VR0Gu1mX0caUVzL2TyUYw'; // Thay thế bằng token thực tế của bạn

export const fetchTours = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/tours`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Authorization: `Bearer ${TOKEN}`, // Thêm token vào header
            }
            
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data;

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
            mode: 'no-cors'
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching tour by ID:', error);
        throw error;
    }
};