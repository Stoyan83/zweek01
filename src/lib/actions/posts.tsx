export async function getPosts() {
  try {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=50"
    );
    let data = await response.json();
    return data;
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
}

export async function getPost(id: number) {
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
