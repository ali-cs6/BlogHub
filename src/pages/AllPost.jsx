import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/confirguration"

function AllPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => { }, []);
  appwriteService.getPosts([])
    .then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    })

    return (
      <div className=" w-full text-center flex items-center justify-center text-textColor">
        <div className="mx-5 sm:mx-8 lg:mx-16">
          <div className="grid content-center md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            {posts?.map((post) => (
              <div key={post.$id}>
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </div>
  
        {!posts && (
          <h1 className="text-2xl p-10 font-bold mt-10 flex flex-col gap-3">
            No posts available{" "}
            <p className="text-textHover">
              <Link to="/add-post">Create post</Link>
            </p>
          </h1>
        )}
      </div>
    );
}

export default AllPost