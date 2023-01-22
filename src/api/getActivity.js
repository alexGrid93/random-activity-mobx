export const getActivity = () => {
  return fetch("https://www.boredapi.com/api/activity")
    .then((data) => data.json())
    .catch(() => {
      return { activity: "Error on server ❗️ " };
    });
};
