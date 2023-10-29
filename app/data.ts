// TODO set return type
export async function getGames() {
  const apiUrl = "https://api.openligadb.de/getmatchdata/bl1/2023/9";
  const res = await fetch(apiUrl, {});

  const data = await res.json();

  return data;
}
