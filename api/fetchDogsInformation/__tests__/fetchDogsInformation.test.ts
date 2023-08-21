import { API_URL } from "@api/constants"
import DogInformationData from "@data/DogsInformationData.json"
import { fetchDogsInformation } from "../fetchDogsInformation"

describe("Fetch Dogs Information", () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })
  it("returns dogs information list", () => {
    fetchMock.mockResponseOnce(JSON.stringify(DogInformationData))
    const dogIds = ["VXGFTIcBOvEgQ5OCx40W", "V3GFTIcBOvEgQ5OCx40W"]
    const dogsInformation = fetchDogsInformation(dogIds)

    expect(fetchMock.mock.calls.length).toEqual(1)
    expect(fetchMock.mock.calls[0][0]).toEqual(`${API_URL}/dogs`)
    dogsInformation.then((data) => {
      expect(data).toEqual(DogInformationData)
    })
  })
})
