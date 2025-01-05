export const renameIds = async (ids) => {
    try {
      const response = await axios.get(endpoint);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };