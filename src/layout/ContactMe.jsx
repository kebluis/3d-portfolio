import emailjs from "@emailjs/browser";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { motion } from "framer-motion";
import React from "react";

const ContactMe = ({ changeIsSubmitted, changeIsSent }) => {

  return (
    <div className="block">
      <h1 className="text-4xl stroke-black-2 text-white">Reach Out</h1>
      <Formik
        initialValues={{ email: "", name: "", message: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.email) {
            errors.message = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          changeIsSubmitted(true);
          emailjs
            .send(
              import.meta.env.VITE_SERVICE_ID,
              import.meta.env.VITE_TEMPLATE_ID,
              values,
              import.meta.env.VITE_PUBLIC_ID
            )
            .then(
              function (response) {
                changeIsSent(true);
                console.log("SUCCESS!", response.status, response.text);
              },
              function (error) {
                console.log("FAILED...", error);
              }
            )
            .finally(async () => {
              setSubmitting(false);
              resetForm();
              await setTimeout(() => {
                changeIsSubmitted(false);
                changeIsSent(false);
              }, 2000);
            });
        }}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <span className="grid grid-cols-2">
                <div className="mr-2">
                  <div className="mt-4 ml-1">Name *</div>
                  <Field
                    name="name"
                    className="border-black border-2 rounded-lg p-3 w-full"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="ml-2 text-sm font-thin text-rose-500"
                  />
                </div>
                <div className="ml-2">
                  <div className="mt-4 ml-1">Email *</div>
                  <Field
                    name="email"
                    className="border-black border-2 rounded-lg p-3 w-full"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="ml-2 text-sm font-thin text-rose-500"
                  />
                </div>
              </span>
              <div className="mt-4 ml-1">Message *</div>
              <Field
                as="textarea"
                name="message"
                className="border-black border-2 rounded-lg p-3 w-full"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="ml-2 text-sm font-thin text-rose-500"
              />
              <div className="block text-right my-4">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`${
                    isSubmitting ? "bg-gray-400" : "bg-green-400"
                  } py-2 px-4 rounded-2xl mr-2`}
                >
                  Submit
                </motion.button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ContactMe;
