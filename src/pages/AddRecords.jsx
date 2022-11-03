import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useForm } from "react-hook-form";
import { Form, Button } from "reactstrap";
import { useState } from "react";
import uuid from "react-uuid";

import FieldsetGeneral from "../components/FieldsetGeneral";
import FieldsetSiteData from "../components/FieldsetSiteData";
import FieldsetHabitatData from "../components/FieldsetHabitatData";
import FieldsetCollectionData from "../components/FieldsetCollectionData";
import FielsetHerbariumData from "../components/FielsetHerbariumData";
import FieldsetEthnobotanicalData from "../components/FieldsetEthnobotanicalData";

const AddRecords = () => {
  const { register, handleSubmit, reset } = useForm();
  const [gpsUsed, setGpsUsed] = useState(true);

  const onSubmit = async (data) => {
    await setDoc(doc(db, "records", uuid()), {
      ...data,
      id: uuid(),
    });
    reset();
    setGpsUsed(true);
  };
  return (
    <>
      <h2>Add Records</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FieldsetGeneral register={register} />
        <FieldsetSiteData
          register={register}
          setGpsUsed={setGpsUsed}
          gpsUsed={gpsUsed}
        />
        <FieldsetHabitatData register={register} />
        <FieldsetCollectionData register={register} />
        <FielsetHerbariumData register={register} />
        <FieldsetEthnobotanicalData register={register} />
        <div className="form-buttons">
          <Button color="danger" onClick={() => reset()}>
            Reset form
          </Button>
          <Button type="submit" color="primary">
            Submit form
          </Button>
        </div>
      </Form>
    </>
  );
};

export default AddRecords;
