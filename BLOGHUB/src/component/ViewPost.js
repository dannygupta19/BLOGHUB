import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { deleteBlog } from '../reducer/blogReducer';
import { useLikeContext } from '../context/LikeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';



const ViewPost = () => {
  const { id } = useParams();
  const blog = useSelector((state) =>
    state.blogs.blogs.find((blog) => blog.id === id)
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { blogLikes, handleLike } = useLikeContext();

  const blogLike = blogLikes[blog.id] || { likes: 0, liked: false };

  const handleLikeClick = () => {
    handleLike(blog.id);
  };

  const handleBlogDelete = (blogId) => {
    dispatch(deleteBlog(blogId));
    navigate("/");
  }

  const handleEditBlog = (id) => {
    navigate(`/editblog/${id}`);
  }
  if (!blog) {
    return <div>Post not found</div>;
  }

  return (
    <div className='container mt-5'>
      <Card>

        <Card.Header bg="dark" style={{ backgroundColor: "lightgray" }}>
          <Card.Title>{blog.title}</Card.Title>
        </Card.Header>
        <Card.Body style={{ backgroundColor: "lightyellow" }}>
          <Card.Text>{blog.category}</Card.Text>
          <Card.Text >{blog.description}</Card.Text>
        </Card.Body>
      </Card>
      <div className="d-flex justify-content-between align-items-center" >
        <div className="d-flex justify-content-between" style={{ marginTop: "10px", }}>
          <Button style={{ marginRight: "10px" }} onClick={() => handleEditBlog(blog.id)} variant="primary" className="mr-2">
            Edit
          </Button>
          <Button onClick={() => handleBlogDelete(blog.id)} variant="danger">Delete</Button>
        </div>

        
        <div>
          <div onClick={handleLikeClick}>
            {blogLike.liked ? (
              <>
                <FontAwesomeIcon icon={faThumbsUp} style={{ color: 'blue' }} />
                {blogLike.likes}
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faThumbsDown} style={{ color: 'gray' }} />
                {blogLike.likes}
              </>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ViewPost;
