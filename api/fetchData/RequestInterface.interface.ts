export interface RequestInterface {
  method: "POST" | "GET" | "PUT" | "DELETE"
  endpoint: string
  params?: any
  data?: any
}
