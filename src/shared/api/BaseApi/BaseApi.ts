import ky from 'ky';

import { env } from '../../config/env';

class BaseApi {
  private readonly api = ky.create({
    prefixUrl: env.NEXT_PUBLIC_BASE_API_URL,
    headers: { 'Content-Type': 'application/json' },
    timeout: 10000,
    credentials: 'include',
  });

  get<TResponse>(url: string): Promise<TResponse> {
    return this.api.get(url).json();
  }

  post<TResponse, TData>(url: string, data: TData): Promise<TResponse> {
    return this.api.post(url, { json: data }).json();
  }
}

export const baseApi = new BaseApi();
