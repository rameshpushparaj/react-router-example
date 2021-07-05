import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function Post() {
  const { id } = useParams();
  const params = new URLSearchParams(useLocation().search);
  return (
    <div className="main">
      <h2>POST</h2>
      <p>Post ID : {id}</p>
      <p>Query String Params : {params.get('title')}</p>
    </div>
  );
}

export default Post;
