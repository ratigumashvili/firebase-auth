import { use, materials, medicine } from "../data";
import { Row, Col, Label } from "reactstrap";

const FieldsetEthnobotanicalData = ({ register }) => {
  return (
    <fieldset>
      <legend>Ethnobotanical Data</legend>
      <Row>
        <Col sm="12" md="6">
          <Label htmlFor="vernacularName">Vernacular name</Label>
          <input
            className="form-control"
            type="text"
            id="vernacularName"
            {...register("vernacularName")}
          />
        </Col>
        <Col sm="12" md="6">
          <Label htmlFor="language">Language</Label>
          <input
            className="form-control"
            type="text"
            id="language"
            {...register("language")}
          />
        </Col>
        <Col sm="12" md="4">
          <Label htmlFor="use">Use</Label>
          <select className="form-control" id="use" {...register("use")}>
            {use.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </Col>
        <Col sm="12" md="4">
          <Label htmlFor="materials">Materials</Label>
          <select
            className="form-control"
            id="materials"
            {...register("materials")}
          >
            {materials.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </Col>
        <Col sm="12" md="4">
          <Label htmlFor="medicine">Medicine</Label>
          <select
            className="form-control"
            id="medicine"
            {...register("medicine")}
          >
            {medicine.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </Col>
      </Row>
    </fieldset>
  );
};

export default FieldsetEthnobotanicalData;
