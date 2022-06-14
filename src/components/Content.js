import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import React from 'react'

function Content() {
  function openNote() {
    alert('Note was clicked')
  }
  return (
    <Row className='conteudo'>
      <Col md={3}>
        <ListGroup>
          <ListGroupItem onClick={openNote}>
            <Card>
              <Card.Title>Name of the note</Card.Title>
              <Card.Body>
                some initial words of the file goes here so you get an idea of
                its contents...
              </Card.Body>
            </Card>
          </ListGroupItem>
          <ListGroupItem>
            <Card>
              <Card.Title>Name of the note</Card.Title>
              <Card.Body>
                some initial words of the file goes here so you get an idea of
                its contents...
              </Card.Body>
            </Card>
          </ListGroupItem>
          <ListGroupItem>
            <Card>
              <Card.Title>Name of the note</Card.Title>
              <Card.Body>
                some initial words of the file goes here so you get an idea of
                its contents...
              </Card.Body>
            </Card>
          </ListGroupItem>
        </ListGroup>
      </Col>
      <Col md={9}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sunt
          nulla debitis numquam eveniet ut magni et ullam dolorum pariatur,
          velit nisi ea laboriosam, eum odio blanditiis illum nostrum repellat.
        </div>
      </Col>
    </Row>
  )
}

export default Content
