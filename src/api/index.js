import GhostContentAPI from "@tryghost/content-api";


const api = new GhostContentAPI({
    url: 'https://blogadmin.acheifornecedor.com',
    key: '1962d97db06766c9a862d61f9a',
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
    limit: "all",
    include: 'count.posts,posts'
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

export async function getSettings(){
  const settings = await api.settings.browse();
  return settings

}