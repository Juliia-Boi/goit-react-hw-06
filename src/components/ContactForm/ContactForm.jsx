import { useId } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9\-\+]{9,15}$/, "Invalid phone number format")
    .required("Required"),
});

export default function ContactFormCopy({ onAdd }) {
  const id = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <div className={css.container}>
        <Form className={css.form}>
          <div className={css.labelInput}>
            <label htmlFor={`${id}-name`}>Name</label>
            <Field
              className={css.input}
              type="text"
              name="name"
              id={`${id}-name`}
            />
          </div>
          <ErrorMessage className={css.error} name="name" component="span" />
          <div className={css.labelInput}>
            <label htmlFor={`${id}-number`}>Number</label>
            <Field
              className={css.input}
              type="text"
              name="number"
              id={`${id}-number`}
            />
          </div>
          <ErrorMessage className={css.error} name="number" component="span" />
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </Form>
      </div>
    </Formik>
  );
}
