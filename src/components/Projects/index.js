import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Col, Row } from 'react-bootstrap';
import first from '../../assets/projects/0.jpg';
import second from '../../assets/projects/1.jpg';
import third from '../../assets/projects/4.jpg'

function Projects() {

    return(
        <Container id='projects' fluid className='projects-container'>
            <h2 className='text-center p-3' style={{ fontfamily: ' Merriweather, serif'}}>Projects</h2>
            <Row>
                <Col>
                    <Card className='mb-3' style={{ width: '15rem' }}>
            <Card.Img variant="top" src={first} />
            <Card.Body>
                <Card.Title>E-commerce Backend</Card.Title>
                <Card.Text>
                <ul>
                    <li>dotenv , express , mysql , sequelize</li>
                </ul>
                </Card.Text>
                <Button variant="primary" href='https://github.com/santiagov916/e-commerce-database' target='_blank'>See repository</Button>
            </Card.Body>
            </Card>
            </Col>
            <Col>
<Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src={second} />
  <Card.Body>
    <Card.Title>Dev-tech Blog</Card.Title>
    <Card.Text>
      <ul>
          <li>
              mysql, express, express-handlebars
          </li>
      </ul>
    </Card.Text>
    <Button variant="primary" href='https://github.com/santiagov916/dev-tech-blog' target='_blank'>See repository</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card style={{ width: '15rem' }}>
  <Card.Img variant="top" className='third' src={third} />
  <Card.Body>
    <Card.Title>Social-API</Card.Title>
    <Card.Text>
        <ul>
            <li>
            nodemon, mongoose
            NoSQL
            </li>
        </ul>
    </Card.Text>
    <Button variant="primary" href='https://github.com/santiagov916/social-api' target='_blank'>See repository</Button>
  </Card.Body>
</Card>
</Col>
        </Row>
</Container>
    )};

export default Projects;