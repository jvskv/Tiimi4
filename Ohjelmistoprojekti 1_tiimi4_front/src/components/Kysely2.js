import React, { useState } from 'react';
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { Typography } from "@mui/material";

function Kysely2() {

  const [setValues] = useState({
        kysymys1: "",
        kysymys2: "",
    });
    
  const [viesti, setViesti] = useState("");
    
  const Quiz2 = (e) => {
    setValues({
          kysymys1: "",
          kysymys2: "",
 
  });
    
  setViesti("Kiitos vastauksista!");
      };
    

  return (
    <Box>
      <Paper sx={{ padding: "10px", margin: "10px" }}>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        >  
        <Typography sx={{marginTop: 1}}>1) Mikä seuraavista on paras ohjelmointikieli:</Typography>
        <input
          type="checkbox"
          id="ohjelmointikieli"
          name="ohjelmointikieli"
          value="Java"
        />
        Java
        <br></br>
        <input
          type="checkbox"
          id="ohjelmointikieli"
          name="ohjelmointikieli"
          value="Python"
        />
        Python
        <br></br>
        <input
          type="checkbox"
          id="ohjelmointikieli"
          name="ohjelmointikieli"
          value="JavaScript"
        />
        JavaScript
        <br></br>
        <input
          type="checkbox"
          id="ohjelmointikieli"
          name="ohjelmointikieli"
          value="C#"
        />
        C#
        <br></br>
        <input
          type="checkbox"
          id="ohjelmointikieli"
          name="ohjelmointikieli"
          value="Else"
        />
        Jokin muu, mikä?
        <textarea id="ohjelmointikieli" name="ohjelmointikieli"></textarea>
        <Typography sx={{ marginTop: 2}}>2) Mikä seuraavista on paras koodieditori:</Typography>
        <input
          type="checkbox"
          id="koodieditori"
          name="koodieditori"
          value="Eclipse"
        />
        Eclipse
        <br></br>
        <input
          type="checkbox"
          id="koodieditori"
          name="koodieditori"
          value="Visual Studio Code"
        />
        Visual Studio Code
        <br></br>
        <input
          type="checkbox"
          id="koodieditori"
          name="koodieditori"
          value="NotePad++"
        />
        Notepad++
        <br></br>
        <input
          type="checkbox"
          id="koodieditori"
          name="koodieditori"
          value="Else"
        />
        Jokin muu, mikä?
        <textarea id="koodieditori" name="koodieditori"></textarea>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Button
            onClick={(e) => Quiz2(e)}
            variant="contained"
            sx={{ marginRight: 3 }}
            startIcon={<CreateIcon />}
          >
            Lisää
          </Button>
        </Box>
        <Typography sx={{ marginTop: 3 }}>{viesti}</Typography>
      </Paper>
    </Box>
  );
}
export default Kysely2;

  