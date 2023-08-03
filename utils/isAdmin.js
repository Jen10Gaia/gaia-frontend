import axios from "axios";

// We use this to protect our routes
export const isAdminUser = async (access_token) => {
  try {
    const response = await axios.post(
      `${process.env.API_URL}/api/admin/check/`,
      {
        token: access_token,
      }
    );

    if (response.status === 200) return true;
    return false;
  } catch (error) {
    return false;
  }
};
