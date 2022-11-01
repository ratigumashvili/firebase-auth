import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import FieldsetGeneral from "../components/FieldsetGeneral";
import FieldsetSiteData from "../components/FieldsetSiteData";

const AddRecords = () => {
  const [recordInput, SetRecordInput] = useState({
    title: "",
    dateCollected: "",
    collectionNumber: "",
    collectors: "",
    country: "",
    province: "",
    localSituation: "",
    latitude: "",
    longitude: "",
    GpsDatum: "",
  });

  const {
    title,
    dateCollected,
    collectionNumber,
    collectors,
    country,
    province,
    localSituation,
    latitude,
    longitude,
    GpsDatum,
  } = recordInput;

  const handleChangeInput = (e) => {
    SetRecordInput({ ...recordInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "records", title), {
      title: title,
      dateCollected: dateCollected,
      collectionNumber: collectionNumber,
      collectors: collectors,
      country: country,
      province: province,
      localSituation: localSituation,
      latitude: latitude,
      longitude: longitude,
      GpsDatum: GpsDatum,
    });
  };
  return (
    <div>
      Add Records
      <form onSubmit={handleSubmit}>
        <FieldsetGeneral
          handleChangeInput={handleChangeInput}
          title={title}
          dateCollected={dateCollected}
          collectionNumber={collectionNumber}
          collectors={collectors}
        />
        <FieldsetSiteData
          handleChangeInput={handleChangeInput}
          country={country}
          province={province}
          localSituation={localSituation}
          latitude={latitude}
          longitude={longitude}
          GpsDatum={GpsDatum}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default AddRecords;
