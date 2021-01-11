import React from 'react'
import { Accordion, Button, Card } from 'react-bootstrap'

const tabs = [
    { id: 1, label: "Tab 1", description: "Content of Tab 1" },
    { id: 2, label: "Tab 2", description: "Content of Tab 2" },
    { id: 3, label: "Tab 3", description: "Content of Tab 3" }
  ];

const FAQScreen = () => {
    return (
        <>
<Accordion>
    <h1>Frequently Asked Questions</h1>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Is there free shipping offered?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Yes! Any order over $75 is shipped for free. Anyone who is subscribed
          to a supply box package also receives free shipping.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Do you ship outside of Canada?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>At the moment Covid Supply Co. only ships within Canada</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        What Payment Methods Do You Support?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>We can process PayPal payments as well as credit card payments handled by Shopify</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
        What is your return policy?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>Only items that are damaged upon arrival are accepted for a return</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
        </>
    )
}

export default FAQScreen
