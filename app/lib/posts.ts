export type PostData = {
  id: string
  title: string
}

//used in blog
export async function getPosts(): Promise<PostData[]> {
  // Simulate a database or API call
  return [
    { id: '1', title: 'First post' },
    { id: '2', title: 'Second post' },
  ]
}
