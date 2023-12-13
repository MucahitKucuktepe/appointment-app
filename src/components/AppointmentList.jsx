import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { TiDeleteOutline } from "react-icons/ti";

const AppointmentList = ({ appointments }) => {
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      {appointments.map(({ id, patient, consulted, doctor, day }) => (
        <div
          key={id}
          className={consulted ? "appointments consulted" : "appointments"}
          role="button"
        >
          <Row className="justify-content-between align-items-center">
            <Col>
              <h4>{patient} </h4>
              <h5>{doctor} </h5>
            </Col>
            <Col>
              <h5>Date: {day.toLocaleDateString("tr")}</h5>
              <h6>Time: {day.toLocaleTimeString("tr")}</h6>
            </Col>
            <Col className="text-end">
              <TiDeleteOutline className="text-danger fs-2 " type="button" />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AppointmentList;
