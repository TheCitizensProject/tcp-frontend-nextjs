export const fetchTransitData = async () => {
  try {
    const urls = [
      `${process.env.TRANSIT_API_URL}/get-ferry-time`,
      `${process.env.TRANSIT_API_URL}/get-station-time-unified/B06`,
      `${process.env.TRANSIT_API_URL}/get-tram-time`,
    ];

    const responses = await Promise.all(
      urls.map(url => fetch(url, { cache: "no-store" }))
    );
    const data = await Promise.all(responses.map(response => response.json()));

    return { data, error: null };
  } catch (error) {
    console.error("error fetching transit data: ", error);
    return { data: null, error };
  }
};