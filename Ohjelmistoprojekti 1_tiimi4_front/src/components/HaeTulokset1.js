import { useEffect, useState } from "react"
import axios from "axios";
import Tulokset from "./Tulokset";
import { Typography } from "@mui/material";




const HaeTulokset1 = () => {
    const [tulokset, setTulokset] = useState([]);
    const [virhe, setVirhe] = useState("Haetaan");

    const haeKaikkiTulokset = async () => {
        try {
            const response = await axios.get("http://localhost:8080/quizes");
            setTulokset(response.data);
            setVirhe("");
        } catch (error) {
            setTulokset([]);
            setVirhe('Tuloksien haku ei onnistunut');
        }
    }

    useEffect( () => {
        haeKaikkiTulokset()
    }, [])

    if (virhe.length > 0) {
        return ( <Typography>{ virhe }</Typography> );
      }
   
      if (tulokset.length > 0) {
        return ( <Tulokset tulokset={ tulokset } /> );
      }
   
      return ( <Typography>Tuloksia ei löytynyt</Typography> );
}

export default HaeTulokset1;