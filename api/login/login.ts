import { Post } from "../fetchData/fetchData"
import { User } from "./User.type"

export const login = (user?: User): void => {
  const endpoint = "/auth/login"
  const response = Post<User>({ endpoint, data: user })

  response
    .then((data) => {
      return data
    })
    .catch((error) => {
      throw new Error(error)
    })
}
