import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";

function Kysely2() {
  const [open, setOpen] = React.useState(false);
  const [viesti, setViesti] = useState("");
  const [kysely, setValues] = React.useState({
    ohjelmointikieli: "",
    koodieditori: "",
  });
  const muuta = (e) => {
    setValues({
      ...kysely,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => {
    console.log("Lähetys");
    vastaus(kysely);
    setOpen(false);
    setViesti("Vastaukset tallennettu. Kiitos!");
  };

  const vastaus = (kysely) => {
    fetch("http://localhost:8080/quizes2", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(kysely),
    })
      .then(response => {
        if (response.ok) {
          alert("Tallennettu!");
        } else {
          alert("Virhe");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Paper sx={{ padding: "10px", margin: "10px" }}>
      <FormControl>
        <FormLabel id="ohjelmointikieli">
          1. Mikä seuraavista on paras ohjelmointikieli?
        </FormLabel>
        <RadioGroup
          aria-labelledby="ohjelmointikieli"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="java"
            control={<Radio />}
            label="Java"
            onChange={(e) => muuta(e)}
          />
          <FormControlLabel
            value="python"
            control={<Radio />}
            label="Python"
            onChange={(e) => muuta(e)}
          />
          <FormControlLabel
            value="javascript"
            control={<Radio />}
            label="JavaScript"
            onChange={(e) => muuta(e)}
          />
          <FormControlLabel
            value="c#"
            control={<Radio />}
            label="C#"
            onChange={(e) => muuta(e)}
          />
          <FormControlLabel
            value="muu"
            control={<Radio />}
            label="Muu"
            onChange={(e) => muuta(e)}
          />
        </RadioGroup>

        <FormLabel id="koodieditori">
          2. Mikä seuraavista on paras koodieditori?
        </FormLabel>
        <RadioGroup aria-labelledby="koodieditori" name="radio-buttons-group">
          <FormControlLabel
            value="eclipse"
            control={<Radio />}
            label="Eclipse"
            onChange={(e) => muuta(e)}
          />
          <FormControlLabel
            value="visual studio code"
            control={<Radio />}
            label="Visual Studio Code"
            onChange={(e) => muuta(e)}
          />
          <FormControlLabel
            value="notepad++"
            control={<Radio />}
            label="Notepad++"
            onChange={(e) => muuta(e)}
          />
          <FormControlLabel
            value="muu"
            control={<Radio />}
            label="Muu"
            onChange={(e) => muuta(e)}
          />
        </RadioGroup>
      </FormControl>
      <Box sx={{ textAlign: "center" }}>
        <Button
          onClick={(e) => handleClose(e)}
          variant="contained"
          startIcon={<CreateIcon />}
        >
          Lisää
        </Button>
      </Box>
    </Paper>
  );
}

export default Kysely2;
