import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form"
import { useState } from "react";

function AddModal({ show, handleClose, drName }) {
    const [name, setName]=useState("")
    const [date, setDate]= useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name,date);
    }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {drName} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter your name" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={(e)=>setDate(e.target.value)} type="datetime-local" placeholder="Date" required />
            </Form.Group>
            <div className="text-center">
              <Button variant="success" type="submit" className="me-2">
                Save
              </Button>
              <Button variant="danger" type="button" onClick={handleClose}>
                Save Changes
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
