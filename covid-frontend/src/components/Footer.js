import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className='fixed-bottom'  style={{backgroundColor: '#005bbb', height:'50px'}}>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        <h5 className='text-white'>Made by Nick, James, and Matt. 2020. Be Safe.</h5>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
