import axios from "axios";
import cookie from "cookie";

export default async (req, res) => {
  if (req.method === "GET") {
    const cookies = cookie.parse(req.headers.cookie || "");

    const access = cookies.access || false;

    if (!access) {
      return res.status(401).json({
        message: "Login first to check if user is admin",
      });
    }

    try {
      const response = await axios.get(`${process.env.API_URL}/api/admin/check`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });

      if (response.data.isAdmin) {
        return res.status(200).json({
          isAdmin: response.data.isAdmin,
        });
      }
    } catch (error) {
      res.status(error?.response.status).json({
        error: "Something went wrong while verifying user is admin",
      });
    }
  }
};