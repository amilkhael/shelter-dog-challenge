export interface RequestInterface<TParams, TData> {
  method: "POST" | "GET" | "PUT" | "DELETE"
  endpoint: string
  params?: TParams
  data?: TData
}
