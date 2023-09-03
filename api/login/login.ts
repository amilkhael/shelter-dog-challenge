import { Post } from "../fetchData/fetchData"
import { User } from "./User.type"

export const login = (user?: User): any => {
  const endpoint = "/auth/login"
  const response = Post<any>({ endpoint, data: user })

  response
    .then((data) => {
      return data
    })
    .catch((error) => {
      throw new Error(error)
    })
}
