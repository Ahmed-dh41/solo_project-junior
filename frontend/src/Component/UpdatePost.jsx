import React, { useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import axios from "axios"
import "./UpdatePost.css";

function UpdatePost() {
const location = useLocation()
const data = location.state
console.log(data)
  const [updatedContent, setUpdatedContent] = useState("")
  const [updatedImage, setUpdatedImage] = useState("")
  const [updatedPrice, setUpdatedPrice] = useState("")

  const handleUpdate = (id) => {
    const updatedData = {
      content: updatedContent,
      image: updatedImage,
      price: updatedPrice,
    };

    axios
      .put(`http://localhost:3005/api/post/${id}`, updatedData) // Fixed axios call
      .then((response) => {
        console.log("Post updated successfully")
       
      })
      .catch((error) => {
        console.error("Error updating post:", error)
      });
  };

  return (
    <div  className="update-container" >
      <h2>Update Post</h2>
      <div>
        <label>Content:</label>
        <input
         className="update-input"
          type="text"
          value={updatedContent}
          onChange={(e) => setUpdatedContent(e.target.value)}
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
         className="update-input"
          type="text"
          value={updatedImage}
          onChange={(e) => setUpdatedImage(e.target.value)}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
         className="update-input"
          type="number"
          value={updatedPrice}
          onChange={(e) => setUpdatedPrice(e.target.value)}
        />
      </div>
      <button onClick={()=>handleUpdate(data.idposts)}>Update Post</button>
    </div>
  )
}

export default UpdatePost
