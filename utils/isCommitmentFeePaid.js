import axios from "axios";

export const isCommitmentFeePaid = async (access_token) => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/api/commitment-payment/check`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    if (response.status === 200 && response.data.paid === true) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};