import { RequestInterface } from "./RequestInterface.interface"
export type HttpRequestType<TParams, TData> = Omit<
  RequestInterface<TParams, TData>,
  "method"
>
