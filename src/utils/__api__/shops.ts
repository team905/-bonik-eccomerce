import axios from "axios";
import Shop from "models/shop.model";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const getShopList = async (id) => {
  let payload = {
    "categoryId": "0a4a0d05-a4e7-4a1e-9a19-bfbe7c253084",
    "referenceLatitude": "21.988760337494558",
    "referenceLongitude": "74.55944155430889"
  }
  try {
    const response = await axios.post(`${baseURL}/users/getNearbyShopsByCategory`, payload);
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching new arrivals:", error);
    // Handle the error appropriately
    // Maybe return a default value or rethrow the error
  }
};


export const getSlugs = async (): Promise<{ params: { slug: string } }[]> => {
  const response = await axios.get("/api/shops/slugs");
  return response.data;
};



const getShopBySlug = async (id) => {
  let payload = {
    "page": "1",
    "limit": "10",
    "categoryId": "0a4a0d05-a4e7-4a1e-9a19-bfbe7c253084",
    "userId":"8af8ba06-4d25-422a-b08d-9e581f4bf578",
    "search":""
  }
  try {
    const response = await axios.post(`${baseURL}/product/getByCategory`, payload);
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching new arrivals:", error);
    // Handle the error appropriately
    // Maybe return a default value or rethrow the error
  }
};

export default { getShopList, getSlugs, getShopBySlug };
