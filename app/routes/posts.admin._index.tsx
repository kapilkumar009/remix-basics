import { Link } from "@remix-run/react"
import { Button } from 'antd';
export default function AdminIndex() {
  return (
    <p>
        <Link to="new">
          <Button>create a New Post</Button>
        </Link>
    </p>
  )
}