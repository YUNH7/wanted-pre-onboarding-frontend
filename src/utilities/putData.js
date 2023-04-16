import axios from "axios";

async function putData(path, data) {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}${path}`,
      data
    );
    return response;
  } catch (error) {
    return error.response;
  }
}

export default putData;
