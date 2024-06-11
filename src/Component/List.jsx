// import React from "react";
// import Card from "./Card";

// export default function List(props) {
//   return (
//     <div>
//       <h1>User List</h1>
//       {props.students.map((student) => {
//         return <Card key={student.id} details={student} />;
//       })}
//     </div>
//   );
// }

import React from "react";
import Card from "./Card";

export default function List({ students, updateStudent, deleteStudent }) {
  return (
    <div>
      <h1>User List</h1>
      {students.map((student) => (
        <Card
          key={student.id}
          details={student}
          updateStudent={updateStudent}
          deleteStudent={deleteStudent}
        />
      ))}
    </div>
  );
}
