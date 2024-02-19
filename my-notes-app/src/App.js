import React, { useState } from "react";
import Note from "./notes/Note";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(