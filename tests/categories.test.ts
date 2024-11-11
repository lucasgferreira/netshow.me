import api from "@/app/config/api";
import { useCategories } from "@/app/services/categories";

// Mock de dados
const mockCategories = [
  {
    id: "1",
    título: "Sobre o elenco",
    id_do_site: 70,
  },
  {
    id: "2",
    título: "Experiência Flow 2021",
    id_do_site: 70,
  },
  {
    id: "3",
    título: "Netshow.me fala",
    id_do_site: 70,
  },
];

// Mock do método GET do api
jest.mock("@/app/config/api", () => ({
  get: jest.fn(),
}));

describe("useCategories Hook", () => {
  it("deve retornar categorias após 1 segundo", async () => {
    // Configura o mock para retornar os dados simulados
    (api.get as jest.Mock).mockResolvedValueOnce({ data: mockCategories });

    // Instancia o hook diretamente
    const { getCategories } = useCategories();

    // Chama a função e aguarda o retorno
    const data = await getCategories();

    // Verifica se o mock foi chamado corretamente
    expect(api.get).toHaveBeenCalledWith("categories");
    expect(data).toEqual(mockCategories);
  });

  it("deve lidar com erro na requisição", async () => {
    const mockError = new Error("Erro na requisição");
    (api.get as jest.Mock).mockRejectedValueOnce(mockError);

    const { getCategories } = useCategories();

    await expect(getCategories()).rejects.toThrow("Erro na requisição");
    expect(api.get).toHaveBeenCalledWith("categories");
  });
});
