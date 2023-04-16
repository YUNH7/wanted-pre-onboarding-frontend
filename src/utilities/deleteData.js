import axios from "axios";

async function deleteData(path) {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}${path}`
    );
    return response;
  } catch (error) {
    return error.response;
  }
}

export default deleteData;
