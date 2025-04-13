import axios from "axios";

const API_BASE_URL = "https://dummy.restapiexample.com/api/v1";

const employees_api = async () => {
  const getEmployes = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/employees`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  // const get_employee_by_id = async (id) => {
  //   try {
  //     const response = await axios.get(`${API_BASE_URL}/employee`, { id: 1 });
  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const update_employee_by_id = async (id) => {
  //   try {
  //     const response = await axios.put(`${API_BASE_URL}/update`, { id: 1 });
  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const delete_employee_by_id = async (id) => {
  //   try {
  //     const response = await axios.delete(`${API_BASE_URL}/delete`, { id });
  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const create_employee = async (id) => {
  //   try {
  //     const response = await axios.post(`${API_BASE_URL}/create`, { id });
  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    getEmployes(),
    get_employee_by_id(),
    update_employee_by_id(),
    delete_employee_by_id(),
    create_employee()
  );
};
export default employees_api;
