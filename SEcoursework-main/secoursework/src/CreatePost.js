import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';


function CreatePost() {


  let navigate = useNavigate();


  const firstValues = {
    postTitle: "",
    postText: "",
    postUsername: "",
  };

  const validationSchema = Yup.object().shape({
    postTitle: Yup.string().required("Title is required"),
    postText: Yup.string().required(),
    postUsername: Yup.string().min(3).max(15).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
        console.log(response);
        console.log("Succesfully stored in the database");
        navigate("/");
    });
  };



  return (
    <div className="createApostPage">
      <Formik
        initialValues={firstValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="containerForm">
          <label>Title: </label>
          <ErrorMessage name="postTitle" component="span" />
          <Field
            autocomplete="off"
            id="createPostInput"
            name="postTitle"
            placeholder="(Ex. Title...)"
          />
          <label>Post: </label>
          <ErrorMessage name="postText" component="span" />
          <Field
            autocomplete="off"
            id="createPostInput"
            name="postText"
            placeholder="(Ex. Post...)"
          />
          <label>Username: </label>
          <ErrorMessage name="postUsername" component="span" />
          <Field
            autocomplete="off"
            id="createPostInput"
            name="postUsername"
            placeholder="(Ex. John123...)"
          />

          <button type="submit"> Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;


