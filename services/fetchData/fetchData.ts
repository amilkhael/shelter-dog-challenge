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
        throw new Error(response.statusText)
      }
      return response.json() as Promise<T>
    })
    .then((data) => {
      return data
    })
    .catch((error) => console.log("There was a problem!", error))
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
