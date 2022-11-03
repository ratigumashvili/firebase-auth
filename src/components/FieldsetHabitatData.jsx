import { Row, Col, Label, Input } from "reactstrap";

const FieldsetHabitatData = ({ register }) => {
  return (
    <fieldset>
      <legend>Habitat Data</legend>
      <Row>
        <Col sm="12" md="3">
          <Label htmlFor="habitatCode">Habitat Code</Label>
          <input
            className="form-control"
            type="text"
            {...register("habitatCode")}
            id="habitatCode"
          />
        </Col>
        <Col sm="12" md="9">
          <Label htmlFor="assocSpecied">Habitat and Assoc. Species</Label>
          <input
            className="form-control"
            type="text"
            {...register("assocSpecied")}
            id="assocSpecied"
          />
        </Col>
        <Col sm="12" md="6">
          <Label htmlFor="modFactors">Modifying Factors</Label>
          <input
            className="form-control"
            type="text"
            {...register("modFactors")}
            id="modFactors"
          />
        </Col>
        <Col sm="12" md="6">
          <Label htmlFor="landForm">Land Form</Label>
          <input
            className="form-control"
            type="text"
            {...register("landForm")}
            id="landForm"
          />
        </Col>
        <Col sm="12" md="6">
          <Label htmlFor="landUse">Land Use</Label>
          <input
            className="form-control"
            type="text"
            {...register("landUse")}
            id="landUse"
          />
        </Col>
        <Col sm="12" md="6">
          <Label htmlFor="geology">Geology</Label>
          <input
            className="form-control"
            type="text"
            {...register("geology")}
            id="geology"
          />
        </Col>
        <Col sm="12" md="4">
          <Label htmlFor="soilColour">Soil Colour</Label>
          <input
            className="form-control"
            type="text"
            {...register("soilColour")}
            id="soilColour"
          />
        </Col>
        <Col sm="12" md="4">
          <Label htmlFor="soilTexture">Soil Texture</Label>
          <input
            className="form-control"
            type="text"
            {...register("soilTexture")}
            id="soilTexture"
          />
        </Col>
        <Col sm="12" md="4">
          <Label htmlFor="slope">Slope°</Label>
          <input
            className="form-control"
            type="number"
            // min={0}
            {...register("slope")}
            id="slope"
          />
        </Col>
        <Col sm="12" md="6">
          <Label htmlFor="aspect">Aspect</Label>
          <input
            className="form-control"
            type="text"
            {...register("aspect")}
            id="aspect"
          />
        </Col>
        <Col sm="12" md="6">
          <Label htmlFor="soilPh">Soil pH</Label>
          <input
            className="form-control"
            type="text"
            {...register("soilPh")}
            id="soilPh"
          />
        </Col>
      </Row>
    </fieldset>
  );
};

export default FieldsetHabitatData;
