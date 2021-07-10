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
    return posts
}

export async function getPostsByTag(tag) {
  console.log(tag)
  const posts = await api.posts
    .browse({
      filter: `tags:[${tag}]`,
      include: 'tags,authors'
    })
    .catch(err => {
      console.error(err);
    });
    return posts
}


export async function getTag(slug) {
  const tag = await api.tags.read({slug:slug}, 
    {include: 'count.posts,posts'})
  return tag
}


export async function getTags() {
  const tags = await api.tags
  .browse({
    limit: "all"
  })
  .catch(err => {
    console.error(err);
  });
  return tags
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