import {json} from "@remix-run/node";
import { Link, useLoaderData} from "@remix-run/react";
import { getPosts } from "~/models/post.server";

export const loader = async()=>{
    return json({
        posts:await getPosts()
    })
}

export default function Posts() {
    const { posts } = useLoaderData<typeof loader>();
  return (
    <><h1>PostsPage</h1><ul>
          {posts.map((post) => (
              <><li key={post.slug}>
              <Link to={post.slug}>{post.title}</Link></li>
              <li><Link to="admin" className="text-red-600 underline">Admin</Link></li></>
          ))}
      </ul></>
  )
}
