import students from "./Student.jsx";

function Component() {
  const studentList = students.map((student) => (
    <div className="card" key={student.id}>
      <img
        className="card-image"
        src="https://placehold.co/125x125"
        alt="Profile Picture"
      ></img>
      <p className="card-name">{student.name}</p>
      <address className="card-email">{student.email}</address>
    </div>
  ));

  return studentList;
}

export default Component;
