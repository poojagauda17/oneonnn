// /utils/employee.js
import axios from "axios";

const API_BASE_URL = "https://oneonnn-1.onrender.com/api";

export const getAllHomeScreenList = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/banner/getAllHomeScreenList`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching banner list:", error);
    return [];
  }
};
export const getAllBlogList = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/blog/getAllBlog`);
    return response.data;
  } catch (error) {
    console.error("Error fetching banner list:", error);
    return [];
  }
};
export const getAllProductList = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/product/getAllProductList`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching banner list:", error);
    return [];
  }
};
