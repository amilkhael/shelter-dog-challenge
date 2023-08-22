import { API_URL } from "../constants"
import { RequestInterface } from "./RequestInterface.interface"
import { HttpRequestType } from "./HttpRequestType.type"

export const checkStatus = <T>(response: Response): Promise<T> | undefined => {
  if (response.ok) {
    if (response.headers.get("content-type") !== "text/plain; charset=utf-8")
      return response.json() as Promise<T>
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

export const request = async <T>({
  method,
  endpoint,
  params,
  data,
}: RequestInterface): Promise<void | T> => {
  const url = params
    ? `${API_URL}${endpoint}?${new URLSearchParams(params)}`
    : `${API_URL}${endpoint}`
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
    .then(checkStatus<T>)
    .catch((error) => console.log("There was a problem!", error))
}

export const Get = <T>({
  endpoint,
  params = null,
}: HttpRequestType): Promise<void | T> => {
  const requestInformation: RequestInterface = {
    method: "GET",
    endpoint,
    params,
    data: null,
  }
  return request<T>(requestInformation)
}

export const Post = <T>({
  endpoint,
  data = null,
}: HttpRequestType): Promise<void | T> => {
  const requestInformation: RequestInterface = {
    method: "POST",
    endpoint,
    params: null,
    data,
  }
  return request<T>(requestInformation)
}
