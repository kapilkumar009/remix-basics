import {json} from "@remix-run/node";
import { Link, useLoaderData, Outlet} from "@remix-run/react";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { getPosts , deletePost } from "~/models/post.server";

export const loader = async () =>{
    return json({posts: await getPosts()});
};

const style: React.CSSProperties = { padding: '6px', border:"1px solid #ccc", margin:"5px"};
const deleteIcon: React.CSSProperties = { margin:"10px", textAlign:"center", fontSize:"16px", cursor:"pointer"};
const editIcon:React.CSSProperties={cursor:"pointer"}
export default function PostAdmin(){
    const { posts } = useLoaderData<typeof loader>();

    return(
        <div className="mx-auto max-4xl">
            <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">
            Admin Dashboard
          </h1>
          <div className="grid grid-cols-4 gap-6">
            <nav className="col-span-4 md:col-span-1">
                <ul>
                    {posts.map((post)=>(
                        <><li key={post.slug} style={style}>
                            <p>{post.title}<DeleteOutlined
                            style={deleteIcon}/><EditOutlined style={editIcon}/></p>
                            <p>{post.slug}</p>
                        </li>
                        
                        {/* <p>{post.markdown}</p> */}
                        </>
                    ))}
                </ul>
            </nav>
            <main className="col-span-4 md:col-span-3">
                <Outlet/>
            </main>
          </div>
        </div>
    )
}