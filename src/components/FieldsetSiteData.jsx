import { useState } from "react";
import { countryData } from "../data";

const FieldsetSiteData = ({
  handleChangeInput,
  country,
  province,
  localSituation,
  latitude,
  longitude,
  GpsDatum,
}) => {
  const [gpsUsed, setGpsUsed] = useState(true);
  return (
    <fieldset>
      <legend>Site data</legend>
      <label htmlFor="country">Country</label>
      <select
        name="country"
        id="country"
        value={country}
        onChange={handleChangeInput}
      >
        {countryData.map((country) => (
          <option key={country.id} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      <label htmlFor="province">Province</label>
      <input
        type="text"
        id="province"
        name="province"
        value={province}
        onChange={handleChangeInput}
      />
      <label htmlFor="localSituation">Local situation</label>
      <input
        type="text"
        id="localSituation"
        name="localSituation"
        value={localSituation}
        onChange={handleChangeInput}
      />
      <label htmlFor="latitude">Latitude</label>
      <input
        type="text"
        id="latitude"
        name="latitude"
        value={latitude}
        onChange={handleChangeInput}
      />
      <label htmlFor="longitude">Longitude</label>
      <input
        type="text"
        id="longitude"
        name="longitude"
        value={longitude}
        onChange={handleChangeInput}
      />
      <label htmlFor="gps">GPS Used</label>
      <select
        id="gps"
        onChange={() => {
          setGpsUsed(!gpsUsed);
        }}
      >
        <option>Yes</option>
        <option>No</option>
      </select>
      <label htmlFor="GpsDatum">GPS datum</label>
      <input
        disabled={!gpsUsed}
        type="text"
        id="GpsDatum"
        name="GpsDatum"
        value={GpsDatum}
        onChange={handleChangeInput}
      />
    </fieldset>
  );
};

export default FieldsetSiteData;
