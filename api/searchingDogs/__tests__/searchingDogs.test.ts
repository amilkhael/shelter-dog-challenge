import { API_URL } from "@api/constants"
import SearchDogData from "@data/SearchDogData.json"
import { searchingDogs } from "../searchingDogs"

describe("Searching dogs", () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it("returns a dog's id list", () => {
    fetchMock.mockResponseOnce(JSON.stringify(SearchDogData))
    const dogsInformation = searchingDogs(null)
    expect(fetchMock.mock.calls.length).toEqual(1)
    expect(fetchMock.mock.calls[0][0]).toEqual(`${API_URL}/dogs/search`)
    dogsInformation.then((data) => {
      expect(data).toEqual(SearchDogData)
    })
  })
})
