const API_BASE_URL = 'http://localhost:5000';

export const fetchTours = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/trendy`);
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error('Error fetching tours:', error);
      throw error;
    }
  };

  export const fetchTourById = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/tours/${id}`);
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error('Error fetching tour by ID:', error);
      throw error;
    }
  };