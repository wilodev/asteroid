import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface ApiClientType {
  get<T>(url: string): Promise<AxiosResponse<T>>;
  post<T>(url: string, data?: unknown): Promise<AxiosResponse<T>>;
  delete<T>(url: string): Promise<AxiosResponse<T>>;
}

export class ApiClient implements ApiClientType {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      // baseURL: import.meta.env.BASE_URL || 'http://localhost:4000',
      baseURL: 'http://localhost:4000',
    });

    this.api.interceptors.request.use((config) => {
      const clientId = localStorage.getItem('client_id');
      if (clientId) {
        config.headers['client_id'] = clientId;
      }
      return config;
    });
  }

  public get<T>(url: string, config?: AxiosRequestConfig) {
    return this.api.get<T>(url, config);
  }

  public post<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return this.api.post<T>(url, data, config);
  }

  public delete<T>(url: string, config?: AxiosRequestConfig) {
    return this.api.delete<T>(url, config);
  }
}
