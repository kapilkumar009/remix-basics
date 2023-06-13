import { Link, useActionData } from "@remix-run/react"
import { getPost } from "~/models/post.server";
import { Button } from 'antd';
import { Input, Space } from 'antd';
import { useEffect, useState } from "react";
import { ActionArgs, json } from "@remix-run/node";
import { Form } from "@remix-run/react";

export const action =async ({request}:ActionArgs)=>{
  const formData=await request.formData();
  const searchInput=formData.get("searchInput")
  return json({ post: await getPost(searchInput) });
}

export default function AdminIndex() {
  const [inputValue, setInputValue] = useState('');
  const  post=useActionData<typeof action>();
  
  useEffect(()=>{
    console.log("searchdata",post)
    },[post])
  const style:React.CSSProperties={backgroundColor:"#1677ff"}
  return (
    <>
     <Space direction="horizontal">
      <Form method="post">
     <input
        type="text"
        value={inputValue}
        name="searchInput"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search Something"
      />
      <button type="submit">search</button>
      </Form>
    <p>
        <Link to="new">
          <Button style={style}
          type="primary">create a New Post</Button>
        </Link>
      </p>
      </Space>
      {post && Array.isArray(post.post) && post.post.map((item: any) => <h1 key={item.slug}>{item.slug}</h1>)}

      </>
  )
}