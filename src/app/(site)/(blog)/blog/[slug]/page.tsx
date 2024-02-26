export default async function SinglePost({ params }: { params: { slug: string } }) {
  const { slug } = params

  return <div>{slug}</div>
}
export const revalidate = 10
