import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { updateBlog } from '../reducer/blogReducer';

const EditPost = () => {
  const { id } = useParams(); // Get the blog post ID from the URL parameter
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blogs = useSelector((state) => state.blogs.blogs); // Assuming 'blogs' is your blog state

  // Find the blog post to edit based on its ID
  const blogToEdit = blogs.find((blog) => blog.id === id);

  // Populate the form fields with the existing blog post data when component mounts
  useEffect(() => {
    if (blogToEdit) {
      setTitle(blogToEdit.title);
      setCategory(blogToEdit.category);
      setDescription(blogToEdit.description);
    }
  }, [blogToEdit]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBlog = {
      id,
      title,
      category,
      description,
    };


    // Dispatch the updateBlog action with the updated blog data
    dispatch(updateBlog(updatedBlog));
    navigate('/'); // Navigate back to the blog list page

    // Reset the form fields
    setTitle('');
    setCategory('');
    setDescription('');
  };

  const handleCancel = (id) => {
    navigate(`/view/${id}`)
  };

  if (!blogToEdit) {
    return <div>Blog not found</div>;
  }

  return (
    <div className='container mt-5 '>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBlogTitle">
          <Form.Label style={{ fontWeight: 'bold' }}>Blog Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            required="true"
            onChange={handleTitleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBlogCategory">
          <Form.Label style={{ fontWeight: 'bold' }}>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category"
            required="true"
            value={category}
            onChange={handleCategoryChange}
          />
        </Form.Group>

        <Form.Group controlId="formBlogDescription">
          <Form.Label style={{ fontWeight: 'bold' }}>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter description"
            required="true"
            value={description}
            onChange={handleDescriptionChange}
          />
        </Form.Group>

        <Button style={{ marginTop: "10px", marginRight: "5px" }} variant="dark" type="submit">
          Save
        </Button>
        <Button onClick={() => handleCancel(blogToEdit.id)} style={{ marginTop: "10px" }} variant="dark" type="submit">
          Cancel
        </Button>
      </Form>
    </div>
  );
};


export default EditPost;
