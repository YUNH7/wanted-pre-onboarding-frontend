import axios from "axios";

async function postData(path, data) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}${path}`,
      data
    );
    return response;
  } catch (error) {
    return error.response;
  }
}

export default postData;
