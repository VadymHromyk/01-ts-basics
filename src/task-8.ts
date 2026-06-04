import axios from "axios";

interface Post {
  body: string;
  id: number;
  title: string;
}

async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );
  return response.data;
}

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});
