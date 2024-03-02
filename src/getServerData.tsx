export const getServerData = async () => {
  const response = await fetch(
    "https://portfolio.lewishadden.com/portfolio-data.json"
  );
  const data = await response.json();

  return data;
};
