import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'


const HomePage = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  console.log(blogs);
  return (
    <div className="container mt-5" style={{ justifyContent: "center", }}>
      <div className="row">
        {blogs.map((blog) => (
          <div className='col-md-4' key={blog.id}>
            <Link style={{ color: 'inherit', textDecoration: 'none' }} to={`/view/${blog.id}`}>
              <Card style={{ marginBottom: '25px' }}>
                <Card.Header style={{ backgroundColor: '#727279', color: 'white' }}>
                  {blog.title}
                </Card.Header>
                <Card.Body>
                  <Card.Text>{blog.category}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>

  )
}

export default HomePage;

