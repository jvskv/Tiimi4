import React, { useState } from "react";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { Typography } from "@mui/material";
import axios from "axios";

function Kysely1() {
  const [kysely, setValues] = useState({
    yhtye: "",
    kappale: "",
    elokuva: "",
    ruoka: "",
    urheilulaji: "",
  });

  const [viesti, setViesti] = useState("");

  const kysely1 = async (e) => {
    const formData = {
      yhtye: kysely.yhtye,
      kappale: kysely.kappale,
      elokuva: kysely.elokuva,
      ruoka: kysely.ruoka,
      urheilulaji: kysely.urheilulaji,
    };

    try {
      await axios.post("http://localhost:8080/quiz/add", formData);
      setValues({
        yhtye: "",
        kappale: "",
        elokuva: "",
        ruoka: "",
        urheilulaji: "",
      });
      setViesti("Kiitos vastauksista");
    } catch (error) {
      setValues([]);
      setViesti("Virhe" + error);
    }

    setViesti("Kiitos vastauksista!");
  };

  const muuta = (e) => {
    setValues({
      ...kysely,
      [e.target.name]: e.target.value,
    });

    setViesti("");
  };

  /*   const tyhjenna = (e) => {
    setValues({
      yhtye: "",
      kappale: "",
      elokuva: "",
      ruoka: "",
      urheilulaji: "",
    });

    setViesti("");
  }; */

  return (
    <Paper sx={{ padding: "10px", margin: "10px" }}>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      >
        <Typography sx={{ marginLeft: 1 }}>Mikä on paras yhtye?</Typography>
        <TextField
          required
          fullWidth
          label="Yhtye"
          name="yhtye"
          value={kysely.yhtye}
          onChange={(e) => muuta(e)}
        />
        <Typography sx={{ marginLeft: 1 }}>
          Mikä on paras musiikkikappale?
        </Typography>
        <TextField
          required
          fullWidth
          label="Musiikkikappale"
          name="kappale"
          value={kysely.kappale}
          onChange={(e) => muuta(e)}
        />
        <Typography sx={{ marginLeft: 1 }}>Mikä on paras elokuva?</Typography>
        <TextField
          required
          fullWidth
          label="Elokuva"
          name="elokuva"
          value={kysely.elokuva}
          onChange={(e) => muuta(e)}
        />
        <Typography sx={{ marginLeft: 1 }}>Mikä on paras ruoka?</Typography>
        <TextField
          required
          fullWidth
          label="Ruoka"
          name="ruoka"
          value={kysely.ruoka}
          onChange={(e) => muuta(e)}
        />
        <Typography sx={{ marginLeft: 1 }}>
          Mikä on paras urheilulaji?
        </Typography>
        <TextField
          required
          fullWidth
          label="Urheilulaji"
          name="urheilulaji"
          value={kysely.urheilulaji}
          onChange={(e) => muuta(e)}
        />
        <Box sx={{ textAlign: "center" }}>
          <Button
            onClick={(e) => kysely1(e)}
            variant="contained"
            startIcon={<CreateIcon />}
          >
            Lisää
          </Button>
        </Box>
      </Box>
      <Typography sx={{ marginTop: 3 }}>{viesti}</Typography>
    </Paper>
  );
}
export default Kysely1;
