const obtenerPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const info = await response.json();
    console.log(info);
  } catch (error) {
    console.error(error);
  }
};

obtenerPosts();
