import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Student = ({ student }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/student/${student._id}`}>
        <Card.Img src={student.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/student/${student._id}`}>
          <Card.Title as="div">
            <strong>{student.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">{student.email}</div>
        </Card.Text>
        <Card.Text as="div">
          <div className="my-3">{student.faculty}</div>
        </Card.Text>
        <Card.Text as="div">
          <div className="my-3">{student.mobile}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Student
