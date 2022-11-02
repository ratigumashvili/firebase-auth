import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useForm } from "react-hook-form";
// import { useState } from "react";
import FieldsetGeneral from "../components/FieldsetGeneral";
import FieldsetSiteData from "../components/FieldsetSiteData";
import { Form, Button } from "reactstrap";
import uuid from "react-uuid";

const AddRecords = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await setDoc(doc(db, "records", uuid()), {
      ...data,
      id: uuid(),
    });
  };
  return (
    <div>
      Add Records
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FieldsetGeneral
          register={register}
          // handleChangeInput={handleChangeInput}
          // title={title}
          // dateCollected={dateCollected}
          // collectionNumber={collectionNumber}
          // collectors={collectors}
        />
        <FieldsetSiteData
          register={register}
          // handleChangeInput={handleChangeInput}
          // country={country}
          // province={province}
          // localSituation={localSituation}
          // latitude={latitude}
          // longitude={longitude}
          // GpsDatum={GpsDatum}
        />
        <Button type="submit" color="primary">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default AddRecords;
