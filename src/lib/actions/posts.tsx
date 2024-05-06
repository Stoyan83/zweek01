export async function getPosts() {
  try {
    let response = await fetch("http://jsonplaceholder.typicode.com/posts?_start=0&_limit=50");
    let data = await response.json();
    return data;
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
}
