import axios from "axios";
const useGetGalleryData = () => {
  const getGalleryData = async (slug = "zavjese") => {
    try {
      const resp = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/gallery?slug=${slug}`
      );

      return await resp.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { getGalleryData };
};

export default useGetGalleryData;
