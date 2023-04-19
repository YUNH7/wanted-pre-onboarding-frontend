import axios from "axios";
import { server } from "./server";

async function putData(path, data) {
  try {
    const response = await axios.put(`${server}${path}`, data);
    return response;
  } catch (error) {
    return error.response;
  }
}

export default putData;
