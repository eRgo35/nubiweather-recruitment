export const retrieveRealtime = async () => {
  try {
    const response = await fetch("api/realtime-weather", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const retrieveForecast = async ({ days }) => {
  try {
    const response = await fetch(`api/forecast-weather?days=${days}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
