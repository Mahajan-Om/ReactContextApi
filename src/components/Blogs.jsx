import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

const Blogs = () => {

  // step 3 : Consume 
  const {posts , loading} = useContext(AppContext);

  return (
    <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px]">
    {
      loading ? 

      (<Spinner/>) :

      (posts.length === 0 ? 

      (<div>
        <p> No Posts Found </p>
      </div>) : 

      (posts.map((post)=> (   // isme har ek post ke liye ek card bhi bna sakte the phir post ko as a prop pass krna pdta isliye isme hi likh diya code 
          <div key={post.id}>
            <p  className="font-bold text-sm ">{post.title}</p>

            <p className="text-[14px]">
              By <span className="italic">{post.author}</span> on <span className="underline font-bold">{post.category}</span>
            </p>

            <p className="text-[14px]">Posted on {post.date}</p>

            <p className="text-[16px] mt-[13px]">{post.content}</p>

            <div className="flex flex-wrap gap-x-2 items-center">
              {
                post.tags.map((tag,index)=>{
                  return <span key={index} className="text-xs font-semibold underline text-blue-700 cursor-pointer">{`#${tag}`}</span>
                })
              }
            </div>
          </div>
      )))
      
      )
    }

      
    </div>
  )
}

export default Blogs