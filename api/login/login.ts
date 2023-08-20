import { Post } from "../fetchData/fetchData"
import { User } from "./User.type"

export const login = (user: User): Promise<string> => {
  const endpoint = "/auth/login"
  return Post<string>({ endpoint, data: user }) as Promise<string>
}
