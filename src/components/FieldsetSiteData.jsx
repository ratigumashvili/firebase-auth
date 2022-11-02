import { useState } from "react";
import { countryData } from "../data";
import { Row, Col, Label, Input } from "reactstrap";

const FieldsetSiteData = ({ register }) => {
  const [gpsUsed, setGpsUsed] = useState(true);
  return (
    <fieldset>
      <legend>Site data</legend>
      <Row>
        <Col sm="12" md="4">
          <Label htmlFor="country">Country</Label>
          <Input type="select" id="country" {...register("country")}>
            {countryData.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </Input>
        </Col>
        <Col sm="12" md="4">
          <Label htmlFor="province">Province</Label>
          <Input type="text" id="province" {...register("province")} />
        </Col>
        <Col sm="12" md="4">
          <Label htmlFor="localSituation">Local situation</Label>
          <Input
            type="text"
            id="localSituation"
            {...register("localSituation")}
          />
        </Col>
        <Col sm="12" md="3">
          <Label htmlFor="latitude">Latitude</Label>
          <Input type="text" id="latitude" {...register("latitude")} />
        </Col>
        <Col sm="12" md="3">
          <Label htmlFor="longitude">Longitude</Label>
          <Input type="text" id="longitude" {...register("longitude")} />
        </Col>
        <Col sm="12" md="2">
          <Label htmlFor="gps">GPS Used</Label>
          <Input
            type="select"
            id="gps"
            onChange={() => {
              setGpsUsed(!gpsUsed);
            }}
          >
            <option>Yes</option>
            <option>No</option>
          </Input>
        </Col>
        <Col sm="12" md="4">
          <Label htmlFor="GpsDatum">GPS datum</Label>
          <Input
            disabled={!gpsUsed}
            type="text"
            id="GpsDatum"
            {...register("GpsDatum")}
          />
        </Col>
      </Row>
    </fieldset>
  );
};

export default FieldsetSiteData;
