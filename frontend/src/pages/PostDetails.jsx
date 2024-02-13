import { useNavigate, useParams } from "react-router-dom";
// import Comment from "../components/Comment";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Loader from "../components/Loader";
import { useState } from "react";
const PostDetails = () => {
  const postId = useParams().id;
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();


  const handleDeletePost=async ()=>{

    // try{
    //   const res=await axios.delete(URL+"/api/posts/"+postId,{withCredentials:true})
    //   console.log(res.data)
    //   navigate("/")

    // }
    // catch(err){
    //   console.log(err)
    // }

  }

  return (
    <div>
      <Navbar />
      {loader ? (
        <div className="h-[80vh] flex justify-center items-center w-full">
          <Loader />
        </div>
      ) : (
        <div className="px-8 md:px-[200px] mt-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-black md:text-3xl">
              Early-stage UK VC Episode 1 closes $95M third fund
            </h1>
            {/* {user?._id === post?.userId && ( */}
              <div className="flex items-center justify-center space-x-2">
                <p
                  className="cursor-pointer"
                  onClick={() => navigate("/edit/")}
                >
                  <BiEdit />
                </p>
                <p className="cursor-pointer" onClick={handleDeletePost}>
                  <MdDelete />
                </p>
              </div>
            {/* )} */}
          </div>
          <div className="flex items-center justify-between mt-2 md:mt-4">
            <p>@Ankit kansal</p>
            <div className="flex space-x-2">
              <p>Dec 2023</p>
              <p> Jan 2023</p>
            </div>
          </div>
          <img
          src="https://techcrunch.com/wp-content/uploads/2024/02/starship-snow-fleet.jpg?w=850&h=492&crop=1"
          alt=""
          className="w-full  mx-auto mt-8" 
        />
          <p className="mx-auto mt-8">hcjhvlvfhc</p>
          {/* <div className="flex items-center mt-8 space-x-4 font-semibold">
            <p>Categories:</p>
            <div className="flex justify-center items-center space-x-2">
              {post.categories?.map((c, i) => (
                <>
                  <div key={i} className="bg-gray-300 rounded-lg px-3 py-1">
                    {c}
                  </div>
                </>
              ))}
            </div>
          </div> */}
          {/* <div className="flex flex-col mt-4">
            <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
            {comments?.map((c) => (
              <Comment key={c._id} c={c} post={post} />
            ))}
          </div> */}
          {/* write a comment */}
          {/* <div className="w-full flex flex-col mt-4 md:flex-row">
            <input
              onChange={(e) => setComment(e.target.value)}
              type="text"
              placeholder="Write a comment"
              className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"
            />
            <button
              onClick={postComment}
              className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0"
            >
              Add Comment
            </button>
          </div> */}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PostDetails;
