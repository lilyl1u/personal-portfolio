export type PostData = {
  id: string
  title: string
  content: string
}



//used in blog
export async function getPosts(): Promise<PostData[]> {
  // Simulate a database or API call
  return [
    { id: '1', title: 'First post', content: 'This is the content of the first post.' },
    { id: '2', title: 'Second post', content: 'This is the content of the second post.' },
  ]
}

//different blogs to link to in carousel on main page
export const posts = [
  {
    title: "Blog 1",
    slug: "blog-1",
    content: "This is the content of Blog 1.",
  },
  {
    title: "Blog 2",
    slug: "blog-2",
    content: "This is the content of Blog 2.",
  },
  {
    title: "Blog 3",
    slug: "blog-3",
    content: "This is the content of Blog 3.",
  },
    {
    title: "Blog 4",
    slug: "blog-4",
    content: "This is the content of Blog 4.",
  },
]

