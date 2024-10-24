async function UseGetApi(page, limit) {
  const url = new URL("https://picsum.photos/v2");
  const response = await fetch(`${url}/list?page=${page}&limit=${limit}`);
  const data = await response.json();
  console.log(data);
}

UseGetApi();