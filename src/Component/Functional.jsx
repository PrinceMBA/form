// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import { v4 as uuid } from "uuid";

// function Functional(props) {
//   // Uncomment and use the useState hook if you want to manage state
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [age, setAge] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const student = {
//       name,
//       email,
//       phone,
//       age,
//       id: uuid(),
//     };

//     // console.log(student);

//     props.data(student);
//     setName("");
//     setEmail("");
//     setPhone("");
//     setAge("");
//   };

//   if (name.length === 0 && email.length > 0) {
//     let newStudent = {
//       name: name,
//       email: email,
//       id: uuid(),
//     };
//     props.addNewStudent(newStudent);
//     setName("");
//     setEmail("");
//   }

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
//         <Form.Label column sm={1}>
//           Name
//         </Form.Label>
//         <Col>
//           <Form.Control
//             type="text"
//             placeholder="Place your name"
//             value={name}
//             onChange={(e) => {
//               setName(e.target.value);
//             }}
//           />
//         </Col>
//       </Form.Group>

//       <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
//         <Form.Label column sm={1}>
//           Email
//         </Form.Label>
//         <Col>
//           <Form.Control
//             type="text"
//             placeholder="Place your email"
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//           />
//         </Col>
//       </Form.Group>

//       <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
//         <Form.Label column sm={1}>
//           Phone
//         </Form.Label>
//         <Col>
//           <Form.Control
//             type="number"
//             placeholder="Place your phonenumber"
//             value={phone}
//             onChange={(e) => {
//               setPhone(e.target.value);
//             }}
//           />
//         </Col>
//       </Form.Group>

//       <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
//         <Form.Label column sm={1}>
//           Age
//         </Form.Label>
//         <Col>
//           <Form.Control
//             type="number"
//             placeholder="Place your age"
//             value={age}
//             onChange={(e) => {
//               setAge(e.target.value);
//             }}
//           />
//         </Col>
//       </Form.Group>

//       <Form.Group as={Row} className="mb-3">
//         <Col sm={{ span: 10, offset: 1 }}>
//           <Button type="submit">Sign in</Button>
//         </Col>
//       </Form.Group>
//     </Form>
//   );
// }

// export default Functional;

// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import { v4 as uuid } from "uuid";

// function Functional({ addNewStudent }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [age, setAge] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const student = {
//       name,
//       email,
//       phone,
//       age,
//       id: uuid(),
//     };

//     addNewStudent(student);
//     setName("");
//     setEmail("");
//     setPhone("");
//     setAge("");
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
//         <Form.Label column sm={1}>
//           Name
//         </Form.Label>
//         <Col>
//           <Form.Control
//             type="text"
//             placeholder="Place your name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </Col>
//       </Form.Group>

//       <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
//         <Form.Label column sm={1}>
//           Email
//         </Form.Label>
//         <Col>
//           <Form.Control
//             type="text"
//             placeholder="Place your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Col>
//       </Form.Group>

//       <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
//         <Form.Label column sm={1}>
//           Phone
//         </Form.Label>
//         <Col>
//           <Form.Control
//             type="number"
//             placeholder="Place your phone number"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </Col>
//       </Form.Group>

//       <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
//         <Form.Label column sm={1}>
//           Age
//         </Form.Label>
//         <Col>
//           <Form.Control
//             type="number"
//             placeholder="Place your age"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//           />
//         </Col>
//       </Form.Group>

//       <Form.Group as={Row} className="mb-3">
//         <Col sm={{ span: 10, offset: 1 }}>
//           <Button type="submit">Sign in</Button>
//         </Col>
//       </Form.Group>
//     </Form>
//   );
// }

// export default Functional;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { v4 as uuid } from "uuid";

function Functional({ addNewStudent }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const student = {
      name,
      phone,
      location,
      id: uuid(),
    };

    addNewStudent(student);
    setName("");
    setPhone("");
    setLocation("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
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

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPhone">
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

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalLocation">
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

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 1 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default Functional;
