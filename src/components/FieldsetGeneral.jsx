import { Row, Col, Label, Input } from "reactstrap";

const FieldsetGeneral = ({ register }) => {
  return (
    <fieldset>
      <legend>General</legend>
      <Row>
        <Col sm="12" md="4">
          <Label htmlFor="dateCollected">Date collected</Label>
          <Input
            type="date"
            id="dateCollected"
            {...register("dateCollected")}
          />
        </Col>
        <Col sm="12" md="4">
          <Label htmlFor="collectionNumber">Collector's number</Label>
          <Input
            type="text"
            id="collectionNumber"
            {...register("collectionNumber")}
          />
        </Col>
        <Col sm="12" md="4">
          <Label htmlFor="collectors">Collector(s)</Label>
          <Input type="text" id="collectors" {...register("collectors")} />
        </Col>
      </Row>
    </fieldset>
  );
};

export default FieldsetGeneral;
