import { plantHabit } from "../data";
import { Row, Col, Label } from "reactstrap";

const FielsetHerbariumData = ({ register }) => {
  return (
    <fieldset>
      <legend>Herbarium Data</legend>
      <Row>
        <Col sm="12" md="6">
          <Label htmlFor="plantHabit">Plant Habit</Label>
          <select
            className="form-control"
            id="plantHabit"
            {...register("plantHabit")}
          >
            {plantHabit.map((plant) => (
              <option key={plant.id} value={plant.name}>
                {plant.name}
              </option>
            ))}
          </select>
        </Col>
        <Col sm="12" md="6">
          <Label htmlFor="plantHeigth">Plant Height (m)</Label>
          <input
            className="form-control"
            type="number"
            min={0}
            id="plantHeigth"
            {...register("plantHeigth")}
          />
        </Col>
        <Col sm="12">
          <Label htmlFor="otherDesc">Other descriptors</Label>
          <textarea
            className="form-control"
            id="otherDesc"
            {...register("otherDesc")}
          />
        </Col>
      </Row>
    </fieldset>
  );
};

export default FielsetHerbariumData;
