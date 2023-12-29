import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postBlog } from '../reducer/blogReducer';
import { Button, Form } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import Alert from 'react-bootstrap/Alert';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

    const newBlog = {
      id: uuid(),
      title,
      category,
      description,
    };

    // Dispatch the addBlog action with the new blog data
    dispatch(postBlog(newBlog));
    setTimeout(() => {
      navigate("/");
    }, 3000); // 3 seconds timeout


    // Reset the form fields
    setTitle('');
    setCategory('');
    setDescription('');
    setShowSuccessAlert(true);


  };

  return (
    <div className='container mt-5'>
      {showSuccessAlert &&
        <Alert variant="success">
          BLOG SUCCESSFULLY ADDED!!!!!
        </Alert>
      }
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBlogTitle">
          <Form.Label style={{ fontWeight: 'bold' }} >Blog Title</Form.Label>
          <Form.Control
            type="text"
            required="true"
            placeholder="Enter title"
            value={title}
            onChange={handleTitleChange}

          />
        </Form.Group>

        <Form.Group controlId="formBlogCategory">
          <Form.Label style={{ fontWeight: 'bold' }}>Category</Form.Label>
          <Form.Control
            type="text"
            required="true"
            placeholder="Enter category"
            value={category}
            onChange={handleCategoryChange}
          />
        </Form.Group>

        <Form.Group controlId="formBlogDescription">
          <Form.Label style={{ fontWeight: 'bold' }} >Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            required="true"
            placeholder="Enter description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </Form.Group>

        <Button style={{ marginTop: "10px" }} variant="dark" type="submit">
          Upload
        </Button>
      </Form>
    </div>
  );
};


export default AddPost;

