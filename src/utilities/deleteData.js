import axios from "axios";
import { server } from "./server";

async function deleteData(path) {
  try {
    const response = await axios.delete(`${server}${path}`);
    return response;
  } catch (error) {
    return error.response;
  }
}

export default deleteData;
