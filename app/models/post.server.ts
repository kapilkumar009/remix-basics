import { prisma } from "~/db.server";
import type {Post} from "@prisma/client"
  
  export async function getPosts() {
    return prisma.post.findMany();
  }
  
  // get posts from database

  export async function getPost(slug:string) {
    return prisma.post.findUnique({where:{slug}})
  }

  // create post function

  export async function createPost(
  post: Pick<Post, "slug" | "title" | "markdown">
) {  
  return prisma.post.create({ data: post });
}

//delete post
export async function deletePost(slug: string) {
  return prisma.post.delete({
    where: {
      slug: slug,
    },
  });
}

 