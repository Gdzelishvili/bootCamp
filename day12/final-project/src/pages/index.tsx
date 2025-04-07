import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/about">Go to About Page</Link> <br />
      <Link href="/contact">Go to contact Page</Link><br />
      <Link href="/posts">Go to posts Page</Link><br />
    </div>
  )
}
