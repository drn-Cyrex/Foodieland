const getPageUrl = (path) => {
   if (!path) {
      return "";
   }

   return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
};

export default getPageUrl;
