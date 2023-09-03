import { API_URL } from "@api/constants"
import DogBreedsData from "@data/DogBreedsData.json"
import { fetchDogBreeds } from "../fetchDogBreed"

describe("Fetch Dog Breeds", () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })
  it("returns dog breeds list", () => {
    fetchMock.mockResponseOnce(JSON.stringify(DogBreedsData))
    const dogsInformation = fetchDogBreeds()

    expect(fetchMock.mock.calls.length).toEqual(1)
    expect(fetchMock.mock.calls[0][0]).toEqual(`${API_URL}/dogs/breeds`)
    dogsInformation.then((data) => {
      expect(data).toEqual(DogBreedsData)
    })
  })
})
