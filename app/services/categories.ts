import api from "@/app/config/api";

function useCategories() {
  async function getCategories(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        let response = await api.get(`categories`);

        // //console.log(response.data);
        setTimeout(() => {
          resolve(response.data);
        }, 1000); // Altere o valor para ajustar o tempo de atraso
      } catch (error) {
        reject(error);
      }
    });
  }

  return {
    getCategories,
  };
}

export { useCategories };
