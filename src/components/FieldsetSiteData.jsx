import { countryData } from "../data";
import { Row, Col, Label } from "reactstrap";

const FieldsetSiteData = ({ register, gpsUsed, setGpsUsed }) => {
  const handleGpsUse = (e) => {
    if (e.target.value === "true") {
      setGpsUsed(false);
    } else {
      setGpsUsed(true);
    }
  };
  return (
    <fieldset>
      <legend>Site data</legend>
      <Row>
        <Col sm="12" md="4">
          <Label htmlFor="country">Country</Label>
          <select
            className="form-control"
            id="country"
            {...register("country")}
          >
            {countryData.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </Col>
        <Col sm="12" md="4">
          <Label htmlFor="province">Province</Label>
          <input
            className="form-control"
            type="text"
            id="province"
            {...register("province")}
          />
        </Col>
        <Col sm="12" md="4">
          <Label htmlFor="localSituation">Local situation</Label>
          <input
            className="form-control"
            type="text"
            id="localSituation"
            {...register("localSituation")}
          />
        </Col>
        <Col sm="12" md="3">
          <Label htmlFor="latitude">Latitude</Label>
          <input
            className="form-control"
            type="text"
            id="latitude"
            {...register("latitude")}
          />
        </Col>
        <Col sm="12" md="3">
          <Label htmlFor="longitude">Longitude</Label>
          <input
            className="form-control"
            type="text"
            id="longitude"
            {...register("longitude")}
          />
        </Col>
        <Col sm="12" md="2">
          <Label htmlFor="gps">GPS Used</Label>
          <select onChange={handleGpsUse} className="form-control" id="gps">
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </Col>
        <Col sm="12" md="4">
          <Label htmlFor="GpsDatum">GPS datum</Label>
          <input
            className="form-control"
            type="text"
            {...register("GpsDatum")}
            id="GpsDatum"
            readOnly={gpsUsed}
          />
        </Col>
      </Row>
    </fieldset>
  );
};

export default FieldsetSiteData;
