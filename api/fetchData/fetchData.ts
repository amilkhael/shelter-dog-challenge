import { API_URL } from "../constants"
import { RequestInterface } from "./RequestInterface.interface"
import { HttpRequestType } from "./HttpRequestType.type"

export const checkStatus = (response: Response): Promise<Response> => {
  if (response.ok) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

export const parseJSON = async <T>(response: Response): Promise<T> => {
  return await response.json()
}

export const request = async <T>({
  method,
  endpoint,
  params,
  data,
}: RequestInterface): Promise<unknown> => {
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
    .then(checkStatus)
    .then(parseJSON<T>)
    .catch((error) => console.log("There was a problem!", error))
}

export const Get = <T>({
  endpoint,
  params = null,
}: HttpRequestType): Promise<unknown> => {
  const requestInformation: RequestInterface = {
    method: "GET",
    endpoint,
    params,
    data: null,
  }
  return request<T>(requestInformation)
}

export const Post = <T>({ endpoint, data = null }: HttpRequestType): Promise<unknown> => {
  const requestInformation: RequestInterface = {
    method: "POST",
    endpoint,
    params: null,
    data,
  }
  return request<T>(requestInformation)
}
