import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Student from '../components/Student'
import { Row, Col } from 'react-bootstrap'
import { ListStudent } from '../actions/studentAction'

const HomeScreen = () => {

  const dispatch =  useDispatch()

const studentList = useSelector(state => state.studentList)

const {loading,error,students} = studentList

  useEffect(()=>{
    dispatch(ListStudent())
  },[dispatch,ListStudent])



  return (
    <>
      <h1>students</h1>
      {loading ? <h2>loading...</h2> : error ? <h3>{error}</h3>:
      <Row>
        {students.map( student => (
          <Col sm={12} md={6} lg={4} xl={3}>
           <Student student =  {student}/>
          </Col>
        ))}
      </Row>
      }
    </>
  )
}

export default HomeScreen
