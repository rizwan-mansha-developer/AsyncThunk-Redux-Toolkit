import React from "react";
import { deletePost } from "./postsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const TableData = ({ post }) => {
  const navigate = useNavigate();

  const { id } = post;

  const dispatch = useDispatch();

  const handleDelete = () => {
    try {
      // dispatch action to store
      dispatch(deletePost({ id })).unwrap();
      navigate("/");
    } catch (error) {
      console.log(`Failed to delete the post ${error}`);
    }
  };

  return (
    <div className="item">
      <div>
        <h3>{post.title}</h3>
        <p className="postCredit">{post.body}</p>
      </div>
      <div>
        <button className="btn btn-danger" onClick={handleDelete}>
          delete
        </button>
      </div>
    </div>
  );
};

export default TableData;
