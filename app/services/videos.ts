import api from "@/app/config/api";

function useVideos() {
  async function getVideo(id: number): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        let response = await api.get(`videos/${id}`);

        setTimeout(() => {
          resolve(response.data);
        }, 1000); // Altere o valor para ajustar o tempo de atraso
      } catch (error) {
        reject(error);
      }
    });
  }

  async function getVideos(
    page: number = 1,
    perPage: number = 10
  ): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        let response = await api.get(
          `videos?_page=${page}&_per_page=${perPage}`
        );

        // //console.log(response.data);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  }

  async function getVideosCategory(
    categoryId = 1,
    page = 1,
    perPage = 10
  ): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await api.get(
          `videos?category=${categoryId}&_page=${page}&_per_page=${perPage}`
        );

        // Adiciona um delay de 1 segundo (1000 ms) antes de resolver a Promise
        setTimeout(() => {
          resolve(response.data);
        }, 1000); // Altere o valor para ajustar o tempo de atraso
      } catch (error) {
        reject(error);
      }
    });
  }

  return {
    getVideos,
    getVideo,
    getVideosCategory,
  };
}

export { useVideos };
