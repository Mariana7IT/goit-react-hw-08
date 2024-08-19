import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsOps";
import s from "./ContactForm.module.css";

const initialValues = { name: "", number: "" };
const validationSchema = Yup.object({
  name: Yup.string()
    .required("This field is required!")
    .min(3, "Too short!")
    .max(50, "Too long!"),
  number: Yup.string()
    .required("This field is required!")
    .min(3, "Too short!")
    .max(50, "Too long!"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.wrapper}>
        <label>
          Name
          <Field name="name" className={s.contactInput} />
          <ErrorMessage name="name" component="span" className={s.error} />
        </label>
        <label>
          Number
          <Field name="number" className={s.contactInput} />
          <ErrorMessage name="number" component="span" className={s.error} />
        </label>
        <button type="submit" className={s.formBtn} disabled={loading}>
          {loading ? "Adding..." : "Add contact"}
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
