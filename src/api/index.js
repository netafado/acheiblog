import GhostContentAPI from "@tryghost/content-api";


const api = new GhostContentAPI({
    url: 'https://apiblogachei.isaiasfrancisco.com.br',
    key: '4dc0203836ea8f0fa042742e51',
    version: "v3"
  });

  export async function getPosts() {
    const posts = await api.posts
      .browse({
        limit: "all",
        include: 'tags,authors'
      })
      .catch(err => {
        console.error(err);
      });

      const configPosts = posts.map(post => {
        const options = {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        };
      
        post.dateFormatted = new Intl.DateTimeFormat('pt-BR', options)
          .format(new Date(post.published_at));
      });
      return posts
  }

  export async function getSinglePost(postSlug) {
    return await api.posts
      .read({
        slug: postSlug,
        include: 'tags,authors'
      })
      .catch(err => {
        console.error(err);
      });
  }