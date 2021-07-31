import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup} from 'react-bootstrap'
import students from '../students'

const StuentScreen = ({ match }) => {
  
  const student = students.find((s) => s._id === match.params.id)

  return (
    <>
      <Link className="btn-btn-dark my-3">Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={student.image} alt={student.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{student.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>{student.email}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>{student.mobile}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>{student.faculty}</h3>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}

export default StuentScreen
