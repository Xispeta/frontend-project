import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import "./style.css";
import { findByLabelText } from "@testing-library/react";
export default function App() {
  const [data, setData] = useState({ message: [] });
  const [query, setQuery] = useState("list/all");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://dog.ceo/api/breeds/${query}`);

      setData(result.data);
    };
    fetchData();
  }, [query]);

  const styleFooter = {
    diplay:"flex",
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <div style={styleFooter}></div>
      <input
        type=""
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <select>
        {listBreeds(data).map((item) => (
          <option key={item.id} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );

  function listBreeds(data) {
    debugger;
    let result2 = [];
    result2 = new Array(...Object.entries(data.message));
    let breeds = [];

    for (let i = 0; i < result2.length; i++) {
      if (result2[i][1].length > 0) {
        for (let j = 0; j < result2[i][1].length; j++) {
          breeds.push(result2[i][0] + "-" + result2[i][1][j]);
        }
      } else {
        breeds.push(result2[i][0]);
      }
    }
    return breeds;
  }
}
