import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";
import './App.css';


// 7 Comment box doesn't automatically clear


function Post(){
    let {id} = useParams();

    const [postObject, setPostObject] = useState({}); //set as array
    const [commentObject, setCommentObject] = useState([]); //set as list
    const [newComment, setNewComment] = useState("");

    useEffect(()=>{
        //fetching the data
        axios.get(`http://localhost:3001/posts/byID/${id}`).then((response) => {
            setPostObject(response.data);
            
        });

        //fetching comments
        axios.get(`http://localhost:3001/comment/${id}`).then((response) => {
            setCommentObject(response.data);
        });
    } , []);

    const addAComment= () => {
        axios.post("http://localhost:3001/comment", {commentMain: newComment , PostId: id}).then((response) => {
            console.log("Comment added successfully");
            console.log(response);
            const commentToBeAdded = {commentMain: newComment};
            setCommentObject([...commentObject, commentToBeAdded]);
            //setCommentObject("");

        }) 
    }

    return ( 
        <div className="postPageID">
            <div className="leftSidePost">
                <div className="posts" id="individualPost">
                    <div className="postTitle">{postObject.postTitle}</div>
                    <div className="postText">{postObject.postText}</div>
                    <div className="postUsername">{postObject.postUsername}</div>
                </div>
            </div>
            <div className="rightSidePost">
                <div className="addedComment">
                    <input type="text" placeholder="comment..." autoComplete="off" onChange={(event)=> {setNewComment(event.target.value)}}/>
                    <button onClick={addAComment}>Add Comment</button>
                </div>
                <div className="commentList">
                    {commentObject.map((comment, key) => {
                        return (
                            <div key={key} className="comment">
                                {comment.commentMain}
                            </div> 
                        );
                    })}
                </div>
                
            </div>
        </div>
    );
}

export default Post;

