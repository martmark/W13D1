import React from "react";
import Clock from "./frontend/clock";
import Tabs from "./frontend/tabs";
import Weather from "./frontend/weather";
import AutoComplete from "./frontend/autocomplete";

const tabs = [
  { title: "one", content: "I am the first" },
  { title: "two", content: "Second pane here" },
  { title: "three", content: "Third pane here" }
];

const names = [
  { name: "Chris" },
  { name: "Colin" },
  { name: "Koy" },
  { name: "Martin" },
  { name: "Sergey" },
  { name: "Shannon" },
  { name: "Trevor" },
  { name: "Valery" }
]

const Root = () => (

  <div>
    <br /><br />
    <Clock />
    <br /><br />
    <Tabs tabsArray={tabs} />
    <br /><br />
    <Weather />
    <br /><br />
    <AutoComplete namesArray={names} />
  </div>
  

);

export default Root;


