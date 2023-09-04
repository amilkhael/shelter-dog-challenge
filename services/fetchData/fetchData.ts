import { API_URL } from "../constants"
import { RequestInterface } from "./RequestInterface.interface"
import { HttpRequestType } from "./HttpRequestType.type"

export const request = async <T>({
  method,
  endpoint,
  params,
  data,
}: RequestInterface<string, T>): Promise<void | T> => {
  const url = params ? `${API_URL}${endpoint}${params}` : `${API_URL}${endpoint}`
  const requestOptions: RequestInit = {
    method,
    credentials: "include",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  }

  if (data) {
    requestOptions.body = JSON.stringify(data)
  }

  return await fetch(url, requestOptions)
    .then((response) => {
      if (!response.ok) {
        switch (response.status) {
          case 401:
            throw new Error("Unauthorized")
          default:
            throw new Error(response.statusText)
        }
      }
      if (response.url.includes("/login")) return response.text() as Promise<T>

      return response.json() as Promise<T>
    })
    .then((data) => {
      return data
    })
}

export const Get = <T>({
  endpoint,
  params = undefined,
}: HttpRequestType<string, T>): Promise<void | T> => {
  const requestInformation: RequestInterface<string, T> = {
    method: "GET",
    endpoint,
    params,
    data: undefined,
  }
  return request<T>(requestInformation)
}

export const Post = <T>({
  endpoint,
  data,
}: HttpRequestType<undefined, T>): Promise<void | T> => {
  const requestInformation: RequestInterface<string, T> = {
    method: "POST",
    endpoint,
    params: undefined,
    data,
  }
  return request<T>(requestInformation)
}
