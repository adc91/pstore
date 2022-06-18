import getData from '../../utils/getData';

describe('Fetch API', () => {
  const API_URL = 'https://google.com';

  beforeEach(() => {
    fetch.resetMocks();
  });

  test('LLamar API y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    getData(API_URL).then(response => {
      return expect(response.data).toEqual('12345');
    });

    // Chequear si llama a URL
    expect(fetch.mock.calls[0][0]).toEqual(API_URL);
  });

  // AXIOS Example
  /**
    exportconst searchTrack = (songName, sort) =>
    axios.get(`localhost:3000/search-tracks/${songName}/${sort}`);

    test("Search a term and get the response as array", () => {
        fetch.mockResponseOnce(JSON.stringify({ data: [] }));

        searchTrack("Dear friend", "desc").then((response) => {
            return expect(response.data).toEqual([]);
        });
    });
   */
});
