const users = [
  {
    id: 1,
    name: 'Alice',
    posts: [
      { id: 101, title: 'Hello world' },
      { id: 102, title: 'React is great' },
    ],
  },
  {
    id: 2,
    name: 'Bob',
    posts: [{id: 201, title: 'My journey with node.js'}]
  }
];

function extractPostTitles(data) {
  return users.flatMap((user) => user.posts.flatMap(post => post.title));
}

console.log(extractPostTitles(users));