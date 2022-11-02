import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useForm } from "react-hook-form";
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
    <>
      <h2>Add Records</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FieldsetGeneral register={register} />
        <FieldsetSiteData register={register} />
        <Button type="submit" color="primary">
          Send
        </Button>
      </Form>
    </>
  );
};

export default AddRecords;
