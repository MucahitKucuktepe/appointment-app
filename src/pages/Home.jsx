import { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
import { appointmentData } from "../helper/data";

const Home = () => {
  const [appointments, setAppointments] = useState(appointmentData);
  const handleAdd = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  };
  const handleDelete = (id) => {
    const filteredList = appointments.filter((item) => item.id !== id);
    setAppointments(filteredList);
  };
  const handleDoubleClick = (id) => {
    console.log(id);
    const updatedList = appointments.map((item) =>
      item.id === id ? { ...item, consulted: !item.consulted } : item
    );
    setAppointments(updatedList)
  };
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors handleAdd={handleAdd} />
      <AppointmentList
        appointments={appointments}
        handleDelete={handleDelete}
        handleDoubleClick={handleDoubleClick}
      />
    </main>
  );
};

export default Home;
