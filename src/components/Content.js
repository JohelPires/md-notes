import { Col, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import React from 'react'

function Content() {
  function openNote() {
    alert('Note was clicked')
  }
  return (
    <Row className='conteudo'>
      <Col className='mt-3x' md={3}>
        <ListGroup variant='flush'>
          <ListGroupItem onClick={openNote}>
            <h5>Title of the note</h5>
          </ListGroupItem>
          <ListGroupItem onClick={openNote}>
            <h5>Title of the note</h5>
          </ListGroupItem>
          <ListGroupItem onClick={openNote}>
            <h5>Title of the note</h5>
          </ListGroupItem>
          <ListGroupItem onClick={openNote}>
            <h5>Title of the note</h5>
          </ListGroupItem>
          <ListGroupItem onClick={openNote}>
            <h5>Title of the note</h5>
          </ListGroupItem>
        </ListGroup>
      </Col>
      <Col md={9}>
        <div>
          <Form>
            <Form.Group
              className='mt-3 mb-3'
              controlId='exampleForm.ControlInput1'
            >
              {/* <Form.Label>Título da nota</Form.Label> */}
              <Form.Control type='text' placeholder='Title' />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              {/* <Form.Label>Nota:</Form.Label> */}
              <Form.Control as='textarea' rows={9} />
            </Form.Group>
          </Form>
        </div>
      </Col>
    </Row>
  )
}

export default Content
