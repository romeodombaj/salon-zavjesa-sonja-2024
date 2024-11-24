const useGetGalleryData = () => {
  const getGalleryData = async (slug = "zavjese") => {
    console.log("heres");
    try {
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/gallery?slug=${slug}`
      );

      if (!resp.ok) {
        return console.log("ERROR GETTING DATA");
      }

      return resp.json();
    } catch (error) {
      console.log(error);
    }
  };

  return { getGalleryData };
};

export default useGetGalleryData;
