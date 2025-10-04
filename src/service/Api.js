import axios from "axios";

export async function getApi_data() {
  try {
    const response = await axios.get("http://localhost:3000/api/products");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function postApi_data(data) {
  try {
    let response = await axios.post("http://localhost:3000/api/order", data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error in the posting the data", error);
  }
}
