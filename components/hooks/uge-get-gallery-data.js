import axios from "axios";
const useGetGalleryData = () => {
  const getGalleryData = async (slug = "zavjese") => {
    try {
      const resp = await axios.get(
        `https://salon-zavjesa-sonja-2024.vercel.app/api/gallery?slug=${slug}`
      );

      return await resp.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { getGalleryData };
};

export default useGetGalleryData;
