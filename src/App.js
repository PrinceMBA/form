// import React, { useState } from "react";
// import Functional from "./Component/Functional";
// import List from "./Component/List";
// import { Container, Row, Col } from "react-bootstrap";

// export default function App() {
//   const [students, setStudents] = useState([
//     {
//       name: "Thalas",
//       email: "mbayayaye@gmail.com",
//       phone: "074631345",
//       age: "21",
//       id: "1",
//     },
//     {
//       name: "Mbameyo",
//       email: "Mbameyoe@gmail.com",
//       phone: "08230193",
//       age: "20",
//       id: "2",
//     },
//   ]);

//   const addNewStudent = (newStudent) => {
//     setStudents([...students, newStudent]);
//   };

//   console.log(students);

//   return (
//     <div>
//       <Container fluid>
//         <Row>
//           <Col>
//             <Functional data={addNewStudent} />
//           </Col>

//           <Col>
//             <List students={students} />
//           </Col>
//         </Row>
//       </Container>

//       {/* Render or display the list of students here if needed */}
//     </div>
//   );
// }

import React, { useState } from "react";
import Functional from "./Component/Functional";
import List from "./Component/List";
import { Container, Row, Col } from "react-bootstrap";

export default function App() {
  const [students, setStudents] = useState([
    {
      name: "Thalas",
      email: "mbayayaye@gmail.com",
      phone: "074631345",
      location: "Kumasi",
      id: "1",
    },
    {
      name: "Mbameyo",
      email: "Mbameyoe@gmail.com",
      phone: "08230193",
      location: "Tema",
      id: "2",
    },
  ]);

  const addNewStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
  };

  const deleteStudent = (studentId) => {
    setStudents(students.filter((student) => student.id !== studentId));
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Functional addNewStudent={addNewStudent} />
          </Col>
          <Col>
            <List
              students={students}
              updateStudent={updateStudent}
              deleteStudent={deleteStudent}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
