import { API_URL } from "@services/constants"
import { login } from "../login"

describe("Login", () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it("send user data", () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: "12345" }))
    const testUser = {
      name: "test",
      email: "test@example.com",
    }
    login(testUser)
    expect(fetchMock.mock.calls.length).toEqual(1)
    expect(fetchMock.mock.calls[0][0]).toEqual(`${API_URL}/auth/login`)
  })
})
