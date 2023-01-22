export const getInitialActivities = () => {
  const requests = [];

  for (let i = 0; i < 4; i++) {
    requests.push(fetch("https://www.boredapi.com/api/activity"));
  }

  return Promise.all(requests).then((responses) =>
    Promise.all(responses.map((response) => response.json()))
  );
};
