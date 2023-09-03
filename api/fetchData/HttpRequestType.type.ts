import { RequestInterface } from "./RequestInterface.interface"
export type HttpRequestType = Omit<RequestInterface, "method">
