import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";

class ApiClient {
  private client: AxiosInstance;
  private token: string | null = null;

  constructor(baseURL: string) {
    this.client = axios.create({ baseURL });

    this.client.interceptors.request.use((config) => {
      if (this.token) {
        config.headers.Authorization = `Bearer ${this.token}`;
      }
      return config;
    });

    this.client.interceptors.response.use(
      (res) => res,
      async (error) => {
        if (error.response?.status === 401) {
          console.warn("Unauthorized – redirecting to login");
        }
        return Promise.reject(error);
      }
    );
  }

  setToken(token: string) {
    this.token = token;
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const res = await this.client.get<T>(url, config);
    return res.data;
  }

  async post<T>(url: string, data?: unknown): Promise<T> {
    const res = await this.client.post<T>(url, data);
    return res.data;
  }

  async put<T>(url: string, data?: unknown): Promise<T> {
    const res = await this.client.put<T>(url, data);
    return res.data;
  }

  async delete<T>(url: string): Promise<T> {
    const res = await this.client.delete<T>(url);
    return res.data;
  }
}

export const apiClient = new ApiClient(
  "https://jsonplaceholder.typicode.com"
);
