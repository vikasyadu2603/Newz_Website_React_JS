import React from "react"
import { Row ,Col } from "antd"
import '../header/header.css'
const Head = () => {
  return (
    <> 
      <Row className="head">
        <Col className='logo'>
     
            <img src='../images/logo.png' alt='' />
      
        </Col>
        <Col className='ad'><img src='../images/headerb.png' alt='' /></Col>
      </Row>
    
    </>
  )
}

export default Head
