import {json} from "@remix-run/node";
import { Link, useLoaderData} from "@remix-run/react";
import { getPosts } from "~/models/post.server";
import { Col, Row } from 'antd';

const style: React.CSSProperties = { padding: '8px 30px 8px 0', fontSize:"40px", textAlign:"right" };
const h1:React.CSSProperties={padding:"8px 0 8px 30px", fontSize:"40px"}
const li:React.CSSProperties={padding:"8px 30px 0px 30px", fontSize:"20px", border:"1px solid #ccc",margin:"9px"}
const ul:React.CSSProperties={display:"flex",flexWrap:"wrap"}


export const loader = async()=>{
    return json({
        posts:await getPosts()
    })
}

export default function Posts() {
    const { posts } = useLoaderData<typeof loader>();
  return (
    <>
    
    <Row>
      <Col span={12}>
       <h1 style={h1}>Latest Posts</h1>
      </Col>
      <Col span={12}>
        <h2 style={style}><Link to='admin'>Admin</Link></h2>
      </Col>
    </Row>
    <ul style={ul}>
          {posts.map((post) => (
              <><li style={li} key={post.slug}>
                  <Link to={post.slug}>{post.title}</Link>
                 </li>
              </>
          ))}
      </ul>
    </>
  )
}
