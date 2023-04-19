import axios from "axios";
import { server } from "./server";

async function postData(path, data) {
  try {
    const response = await axios.post(`${server}${path}`, data);
    return response;
  } catch (error) {
    return error.response;
  }
}

export default postData;
