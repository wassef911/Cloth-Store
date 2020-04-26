import React, { useState } from "react";

import { db } from "../../../firebase/firebase";

import TextInput from "../../components/textInput";

import "./contact.scss";
function Contact() {
  const [Info, setInfo] = useState({
    name: "",
    Email: "",
    msg: "",
  });

  return (
    <div className="d-flex justify-content-center ">
      <div className="contact d-flex flex-column justify-content-center m-4">
        <TextInput title="Your Email">
          <input
            type="text"
            className="form-control"
            placeholder="name@stuff.com"
            aria-describedby="basic-addon1"
            onChange={(e) => setInfo({ ...Info, Email: e.target.value })}
          ></input>
        </TextInput>

        <TextInput title="Your Name">
          <input
            type="text"
            className="form-control"
            placeholder="name@stuff.com"
            aria-describedby="basic-addon1"
            onChange={(e) => setInfo({ ...Info, name: e.target.value })}
          ></input>
        </TextInput>

        <div class="input-group my-4">
          <div class="input-group-prepend">
            <span class="input-group-text">Your message </span>
          </div>
          <textarea
            class="form-control"
            onChange={(e) => setInfo({ ...Info, msg: e.target.value })}
          ></textarea>
        </div>
        <button className="my-4 btn btn-block  btn-primary rounded-0">
          Send &#8594;
        </button>
      </div>
    </div>
  );
}

export default Contact;
