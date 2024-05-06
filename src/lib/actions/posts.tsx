export async function getPosts(limit = 50) {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=0&_limit=${limit}`
    );
    let data = await response.json();
    return data;
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
}

export async function getPost(id: string) {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    let data = await response.json();
    return data;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
}
