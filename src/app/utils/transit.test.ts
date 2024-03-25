import { fetchTransitData } from './transit';

const promiseAllSpy = jest.spyOn(Promise, 'all').mockImplementation((iterables) =>
  Promise.resolve(
    iterables.map((iterable) =>
      typeof iterable === 'function' ? iterable() : iterable
    )
  )
);

describe('fetchTransitData', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (global.fetch as jest.Mock) = jest.fn(() =>
      ({
        json: () => ({ some: 'data' }), 
      })
    );
    promiseAllSpy.mockClear();
  });

  it('calls fetch for each URL and returns data', async () => {
    const urls = [
      `${process.env.TRANSIT_API_URL}/get-ferry-time`,
      `${process.env.TRANSIT_API_URL}/get-station-time-unified/B06`,
      `${process.env.TRANSIT_API_URL}/get-tram-time`,
    ];

    const result = await fetchTransitData();

    expect(global.fetch).toHaveBeenCalledTimes(urls.length);
    urls.forEach((url) => {
      expect(global.fetch).toHaveBeenCalledWith(url, { cache: 'no-store' });
    });
    expect(promiseAllSpy).toHaveBeenCalledTimes(2);
    expect(result).toEqual({ data: [{ some: 'data' }, { some: 'data' }, { some: 'data' }], error: null });
  });
});