import { useState } from "react";
import { seedHarvesting, stateOfSeeds, seedsCollectedFrom } from "../data";
import { Row, Col, Label } from "reactstrap";

const FieldsetCollectionData = ({ register }) => {
  const [seedDisabled, setSeedDisabled] = useState(true);
  const handleSeedSelect = (e) => {
    if (e.target.value === "Other") {
      setSeedDisabled(false);
    } else {
      setSeedDisabled(true);
    }
  };
  return (
    <fieldset>
      <legend>Collection Data</legend>
      <Row>
        <Col sm="12" md="3">
          <Label htmlFor="family">Family</Label>
          <input
            className="form-control"
            type="text"
            id="family"
            {...register("family")}
          />
        </Col>
        <Col sm="12" md="3">
          <Label htmlFor="genus">Genus</Label>
          <input
            className="form-control"
            type="text"
            id="genus"
            {...register("genus")}
          />
        </Col>
        <Col sm="12" md="3">
          <Label htmlFor="species">Species</Label>
          <input
            className="form-control"
            type="text"
            id="species"
            {...register("species")}
          />
        </Col>
        <Col sm="12" md="3">
          <Label htmlFor="infraSpecific">Infra-specific</Label>
          <input
            className="form-control"
            type="text"
            id="infraSpecific"
            {...register("infraSpecific")}
          />
        </Col>
        <Col sm="12" md="3">
          <Label htmlFor="voucherDuplicates">Voucher Duplicates</Label>
          <input
            className="form-control"
            type="number"
            id="voucherDuplicates"
            min={0}
            {...register("voucherDuplicates")}
          />
        </Col>
        <Col sm="12" md="3">
          <Label htmlFor="plantsSampled">Plants Sampled</Label>
          <input
            className="form-control"
            type="number"
            id="plantsSampled"
            min={0}
            {...register("plantsSampled")}
          />
        </Col>
        <Col sm="12" md="3">
          <Label htmlFor="plantsFound">Plants Found</Label>
          <input
            className="form-control"
            type="number"
            id="plantsFound"
            min={0}
            {...register("plantsFound")}
          />
        </Col>
        <Col sm="12" md="3">
          <Label htmlFor="areaSampled">Area sampled</Label>
          <input
            className="form-control"
            type="number"
            id="areaSampled"
            min={0}
            {...register("areaSampled")}
          />
        </Col>
        <Col sm="12" md="2">
          <Label htmlFor="pps">% PPS</Label>
          <input
            className="form-control"
            type="number"
            id="pps"
            {...register("pps")}
          />
        </Col>
        <Col sm="12" md="3">
          <Label htmlFor="seedHarvesting">Seed Harvesting</Label>
          <select
            className="form-control"
            id="seedHarvesting"
            {...register("seedHarvesting")}
          >
            {seedHarvesting.map((seed) => (
              <option key={seed.id} value={seed.name}>
                {seed.name}
              </option>
            ))}
          </select>
        </Col>
        <Col sm="12" md="2">
          <Label htmlFor="stateOfSeeds">State</Label>
          <select
            className="form-control"
            id="stateOfSeeds"
            {...register("stateOfSeeds")}
            onChange={handleSeedSelect}
          >
            {stateOfSeeds.map((seed) => (
              <option key={seed.id} value={seed.name}>
                {seed.name}
              </option>
            ))}
          </select>
        </Col>
        <Col sm="12" md="3">
          <Label htmlFor="other">Other</Label>
          <input
            className="form-control"
            type="text"
            id="other"
            {...register("other")}
            readOnly={seedDisabled}
          />
        </Col>
        <Col sm="12" md="2">
          <Label htmlFor="seedsCollectedFrom">Collected</Label>
          <select
            className="form-control"
            id="seedsCollectedFrom"
            {...register("seedsCollectedFrom")}
          >
            {seedsCollectedFrom.map((seed) => (
              <option key={seed.id} value={seed.name}>
                {seed.name}
              </option>
            ))}
          </select>
        </Col>
      </Row>
    </fieldset>
  );
};

export default FieldsetCollectionData;
