export const getData = async () => {
    const response = await fetch('https://api.giphy.com/v1/stickers/random?api_key=3WkXl41bxNimkpU9VksBsO0pPKtkly7r&tag=&ating=g');
    const data = await response.json();
    return data;
}
  