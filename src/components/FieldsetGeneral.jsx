import { Row, Col, Label } from "reactstrap";

const FieldsetGeneral = ({ register }) => {
  return (
    <fieldset>
      <legend>General</legend>
      <Row>
        <Col sm="12" md="4">
          <Label htmlFor="dateCollected">Date collected</Label>
          <input
            className="form-control"
            type="date"
            {...register("dateCollected")}
            id="dateCollected"
          />
        </Col>
        <Col sm="12" md="4">
          <Label htmlFor="collectionNumber">Collector's number</Label>
          <input
            className="form-control"
            type="text"
            {...register("collectionNumber")}
            id="collectionNumber"
          />
        </Col>
        <Col sm="12" md="4">
          <Label htmlFor="collectors">Collector(s)</Label>
          <input
            className="form-control"
            type="text"
            {...register("collectors")}
            id="collectors"
          />
        </Col>
      </Row>
    </fieldset>
  );
};

export default FieldsetGeneral;
