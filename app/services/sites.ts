import api from "@/app/config/api";

function useSites() {
  async function getSites(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        let response = await api.get(`sites`);

        // //console.log(response.data);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  }

  return {
    getSites,
  };
}

export { useSites };
