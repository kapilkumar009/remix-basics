import { Link } from "@remix-run/react"

export default function AdminIndex() {
  return (
    <p>
        <Link to="new">
        create a New Post
        </Link>
    </p>
  )
}
