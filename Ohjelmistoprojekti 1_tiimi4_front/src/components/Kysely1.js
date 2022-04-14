import React, { useState } from "react";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { Typography } from "@mui/material";

function Kysely1() {
  const [setValues] = useState({
    kentta1: "",
    kentta2: "",
    kentta3: "",
    kentta4: "",
    kentta5: "",
  });

  const [viesti, setViesti] = useState("");

  const kysely1 = (e) => {
    setValues({
      kentta1: "",
      kentta2: "",
      kentta3: "",
      kentta4: "",
      kentta5: "",
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
        <Typography sx={{marginLeft: 1}}>Mikä on paras yhtye?</Typography>
        <TextField required id="outlined-yhtye"/>
        <Typography sx={{marginLeft: 1}}>Mikä on paras musiikkikappale?</Typography>
        <TextField required id="outlined-kappale"/>
        <Typography sx={{marginLeft: 1}}>Mikä on paras elokuva?</Typography>
        <TextField required id="outlined-elokuva"/>
        <Typography sx={{marginLeft: 1}}>Mikä on paras ruoka?</Typography>
        <TextField required id="outlined-ruoka"/>
        <Typography sx={{marginLeft: 1}}>Mikä on paras urheilulaji?</Typography>
        <TextField required id="outlined-urheilulaji" />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Button
            onClick={(e) => kysely1(e)}
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
export default Kysely1;