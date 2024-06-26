export async function getImages(limit = 50) {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_start=0&_limit=${limit}`
    );
    let data = await response.json();
    return data;
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
}

export async function getImage(id: string) {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
    let data = await response.json();
    return data;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
}
