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
export const postContactUsForm = async (formData) => {
  const payload = {
    name: formData.name,
    email_id: formData.email,
    mobile_no: formData.contact,
    subject: formData.subject,
    message: formData.message,
  };

  console.log("📤 Sending Payload:", payload);

  const response = await axios.post(
    `${API_BASE_URL}/contactus/addContactUsForm`,
    payload
  );

  return response.data;
};
export const addEnquiryForm = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/enquiry/addEnquiryForm`, formData);
    return response.data;
  } catch (error) {
    console.error("Enquiry form submission error:", error);
    throw error;
  }
};
export const addSuperStockerForm = async (payload) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/superStocker/addSuperStockerForm`, payload);
    return response.data;
  } catch (error) {
    console.error("SuperStocker form error:", error.response?.data || error.message);
    throw error;
  }
};

