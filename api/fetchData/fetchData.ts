export const checkStatus = (response: Response): Promise<Response> => {
  if (response.ok) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

export const parseJSON = <T>(response: Response): Promise<T> => {
  return response.json()
}

export const fetchData = <T>(url: string): Promise<unknown> => {
  return fetch(url, { credentials: "include" })
    .then(checkStatus)
    .then(parseJSON<T>)
    .catch((error) => console.log("There was a problem!", error))
}
