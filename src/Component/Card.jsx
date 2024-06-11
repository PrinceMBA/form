// import React from "react";
// import { useState } from "react";
// import { Button, Modal } from "react-bootstrap";

// function Card(props) {
//   // const [showModal, setShowModal] = useState(false);
//   // const show = () => {
//   //   setShowModal(true);
//   // };
//   // const hide = () => {
//   //   setShowModal(false);
//   // };
//   const [showModal, setShowModal] = useState(false);

//   const Show = () => {
//     setShowModal(true);
//   };

//   const Close = () => {
//     setShowModal(false);
//   };

//   return (
//     <div>
//       <h1>{props.details.name}</h1>
//       <h3>{props.details.email}</h3>

//       <Button onClick={show}>Edit</Button>
//       <Button variant="danger">Delete</Button>

//       <Modal show={false}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary">Close</Button>
//           <Button variant="primary">Save Changes</Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default Card;

// import React, { useState } from "react";
// import { Button, Modal, Form, Col, Row } from "react-bootstrap";

// function Card(props) {
//   const [showModal, setShowModal] = useState(false);
//   const [name, setName] = useState(props.details.name);
//   const [email, setEmail] = useState(props.details.email);
//   const [phone, setPhone] = useState(props.details.phone);
//   const [age, setAge] = useState(props.details.age);

//   // const handleNameChange = (e) => {
//   //   setName(e.target.value);
//   // };

//   // const handleEmailChange = (e) => {
//   //   setEmail(e.target.value);
//   // };

//   const handleShow = () => {
//     setShowModal(true);
//   };

//   const handleClose = () => {
//     setShowModal(false);
//   };

//   return (
//     <div>
//       <h1>{props.details.name}</h1>
//       <h3>{props.details.email}</h3>
//       <Button onClick={handleShow}>Edit</Button>
//       <Button variant="danger">Delete</Button>

//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group
//               as={Row}
//               className="mb-3"
//               controlId="formHorizontalEmail"
//             >
//               <Form.Label column sm={1}>
//                 Name
//               </Form.Label>
//               <Col>
//                 <Form.Control
//                   type="text"
//                   placeholder="Place your name"
//                   value={name}
//                   onChange={(e) => {
//                     setName(e.target.value);
//                   }}
//                 />
//               </Col>
//             </Form.Group>

//             <Form.Group
//               as={Row}
//               className="mb-3"
//               controlId="formHorizontalEmail"
//             >
//               <Form.Label column sm={1}>
//                 Email
//               </Form.Label>
//               <Col>
//                 <Form.Control
//                   type="text"
//                   placeholder="Place your email"
//                   value={email}
//                   onChange={(e) => {
//                     setEmail(e.target.value);
//                   }}
//                 />
//               </Col>
//             </Form.Group>

//             <Form.Group
//               as={Row}
//               className="mb-3"
//               controlId="formHorizontalEmail"
//             >
//               <Form.Label column sm={1}>
//                 Phone
//               </Form.Label>
//               <Col>
//                 <Form.Control
//                   type="number"
//                   placeholder="Place your phonenumber"
//                   value={phone}
//                   onChange={(e) => {
//                     setPhone(e.target.value);
//                   }}
//                 />
//               </Col>
//             </Form.Group>

//             <Form.Group
//               as={Row}
//               className="mb-3"
//               controlId="formHorizontalPassword"
//             >
//               <Form.Label column sm={1}>
//                 Age
//               </Form.Label>
//               <Col>
//                 <Form.Control
//                   type="number"
//                   placeholder="Place your age"
//                   value={age}
//                   onChange={(e) => {
//                     setAge(e.target.value);
//                   }}
//                 />
//               </Col>
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary">Save Changes</Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default Card;

// import React, { useState } from "react";
// import { Button, Modal, Form, Col, Row } from "react-bootstrap";

// function Card({ details, updateStudent, deleteStudent }) {
//   const [showModal, setShowModal] = useState(false);
//   const [name, setName] = useState(details.name);
//   const [email, setEmail] = useState(details.email);
//   const [phone, setPhone] = useState(details.phone);
//   const [age, setAge] = useState(details.age);

//   const handleShow = () => setShowModal(true);
//   const handleClose = () => setShowModal(false);

//   const handleSave = () => {
//     updateStudent({ ...details, name, email, phone, age });
//     handleClose();
//   };

//   return (
//     <div>
//       <h1>{details.name}</h1>
//       <h3>{details.email}</h3>
//       <Button onClick={handleShow}>Edit</Button>
//       <Button variant="danger" onClick={() => deleteStudent(details.id)}>
//         Delete
//       </Button>

//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group
//               as={Row}
//               className="mb-3"
//               controlId="formHorizontalEmail"
//             >
//               <Form.Label column sm={1}>
//                 Name
//               </Form.Label>
//               <Col>
//                 <Form.Control
//                   type="text"
//                   placeholder="Place your name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </Col>
//             </Form.Group>

//             <Form.Group
//               as={Row}
//               className="mb-3"
//               controlId="formHorizontalEmail"
//             >
//               <Form.Label column sm={1}>
//                 Email
//               </Form.Label>
//               <Col>
//                 <Form.Control
//                   type="text"
//                   placeholder="Place your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </Col>
//             </Form.Group>

//             <Form.Group
//               as={Row}
//               className="mb-3"
//               controlId="formHorizontalEmail"
//             >
//               <Form.Label column sm={1}>
//                 Phone
//               </Form.Label>
//               <Col>
//                 <Form.Control
//                   type="number"
//                   placeholder="Place your phone number"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                 />
//               </Col>
//             </Form.Group>

//             <Form.Group
//               as={Row}
//               className="mb-3"
//               controlId="formHorizontalPassword"
//             >
//               <Form.Label column sm={1}>
//                 Age
//               </Form.Label>
//               <Col>
//                 <Form.Control
//                   type="number"
//                   placeholder="Place your age"
//                   value={age}
//                   onChange={(e) => setAge(e.target.value)}
//                 />
//               </Col>
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSave}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default Card;

import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";

function Card({ details, updateStudent, deleteStudent }) {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState(details.name);
  const [phone, setPhone] = useState(details.phone);
  const [location, setLocation] = useState(details.location);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSave = () => {
    updateStudent({ ...details, name, phone, location });
    handleClose();
  };

  return (
    <div>
      <h1>{details.name}</h1>
      <h3>{details.phone}</h3>
      <h4>{details.location}</h4>
      <Button onClick={handleShow}>Edit</Button>
      <Button variant="danger" onClick={() => deleteStudent(details.id)}>
        Delete
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalName"
            >
              <Form.Label column sm={1}>
                Name
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Place your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPhone"
            >
              <Form.Label column sm={1}>
                Phone
              </Form.Label>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Place your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalLocation"
            >
              <Form.Label column sm={1}>
                Location
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Place your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Card;
