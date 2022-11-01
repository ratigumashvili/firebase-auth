import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import FieldsetGeneral from "../components/FieldsetGeneral";

const AddRecords = () => {
  const [recordInput, SetRecordInput] = useState({
    title: "",
    dateCollected: "",
    collectionNumber: "",
    collectors: "",
  });

  const { title, dateCollected, collectionNumber, collectors } = recordInput;

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
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default AddRecords;
