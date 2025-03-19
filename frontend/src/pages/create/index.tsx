import { FC } from "react";
import { Field, Formik, Form } from "formik";
import { initialValues, inputs } from "../../utils/constants";
import { placeSchema } from "../../utils/schema";

import { createPlace } from "../../utils/service";
import { PlaceData } from "../../types";
const Create: FC = () => {
  const { mutate, isPending } = createPlace();
  const handleSubmit = (values: PlaceData) => {
    mutate(values);
  };
  return (
    <div className="container">
      <h1 className=" text-center text-2xl font-bold my-5">
        Yeni İlan Oluştur
      </h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={placeSchema}
      >
        {({ errors, touched }) => {
          return (
            <Form className="max-w-2xl mx-auto grid gap-1">
              {inputs.map((input, key) => (
                <div key={key} className="field">
                  <label>{input.label}</label>
                  <Field
                    name={input.name}
                    type={input.type || "text"}
                    className="input"
                    placeholder={input.placeholder}
                  />
                  {errors[input.name as keyof typeof errors] &&
                  touched[input.name as keyof typeof touched] ? (
                    <span className="text-xs text-red-600">
                      {errors[input.name as keyof typeof errors]}
                    </span>
                  ) : (
                    <div className="text-transparent select-none text-xs">
                      .
                    </div>
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="my-5 bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Oluştur
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Create;
