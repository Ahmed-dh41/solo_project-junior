import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./MyData.css"; // Import your CSS file

function MyData() {
    const [data, setData] = useState([]);
    const [del, setDel] = useState(false);
    const navigate = useNavigate(); 
    

    const handeldelete = (idposts) => {
        axios.delete(`http://localhost:3005/api/post/${idposts}`)
            .then((res) => {
                setDel(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const handleData = () => {
        axios.get("http://localhost:3005/api/post")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        handleData();
    }, []);

    const handleUpdateClick = (postId) => {
        setSelectedPostId(postId)
        navigate(`/update/${postId}`);
    }
    return (
        <div className="background-container">
            <div className="data-container">
                {data.map((e) => (
                    <div key={e.id} className="post">
                        <img src={e.image_post} alt="Post" className="post-image" />
                        <h2 className="post-title">{e.content_post}</h2>
                        <p className="post-price">{e.price_post}</p>
                        <button onClick={() =>navigate("/update",{state:e}) }>update</button>
                        <button onClick={() => handeldelete(e.idposts)}>delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyData;

