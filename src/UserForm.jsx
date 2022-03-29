import React from "react";
import "./userform.css";
import Select from "react-select";
import { useState } from "react";
import states from "./states.jsx";
// import axios from "axios";
const UserForm = () => {
  const [age, setAge] = useState(" ");
  const [gender, setGender] = useState(" ");
  const [residence, setResidence] = useState(" ");
  const handleSubmit = () => {
    // console.log(age, gender, residence);
    const sheetData = {
      body: JSON.stringify({
        Age: age,
        Residence: residence,
        Gender: gender,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      method: "POST",
    };
    fetch(
      "https://sheet.best/api/sheets/0d18e440-a53d-43ce-8002-e645a6160b77",
      sheetData
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        // console.log(response);
        setAge("");
        setGender(" ");
        setResidence("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>
          Age:&nbsp;&nbsp;
          <input
            type="number"
            min="18"
            required
            className="a_bar"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </label>
        <br />
        <br />
        <br />
        <br />
        <label>
          Gender:&nbsp;
          <select
            required
            className="g_bar"
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="" disabled selected>
              Select your Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <br />
        <br />
        <br />
        <br />
        Residence:
        <Select
          className="s_bar"
          options={states}
          placeholder="Select your State"
          isSearchable
          required
          onChange={(e) => setResidence(e.label)}
          defaultValue={residence}
        />
        <br />
        <br />
        <br />
        <br />
        <input type="submit" value="Submit" className="btn_submit" />
      </form>
    </div>
  );
};
export default UserForm;
