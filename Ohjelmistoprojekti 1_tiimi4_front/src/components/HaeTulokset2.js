import { useEffect, useState } from "react"
import axios from "axios";
import Tulokset2 from "./Tulokset2";
import { Typography } from "@mui/material";




const HaeTulokset2 = () => {
    const [tulokset2, setTulokset2] = useState([]);
    const [virhe, setVirhe] = useState("Haetaan");

    const haeKaikkiTulokset = async () => {
        try {
            const response = await axios.get("http://localhost:8080/quizes2");
            setTulokset2(response.data);
            setVirhe("");
        } catch (error) {
            setTulokset2([]);
            setVirhe('Tuloksien haku ei onnistunut');
        }
    }

    useEffect( () => {
        haeKaikkiTulokset()
    }, [])

    if (virhe.length > 0) {
        return ( <Typography>{ virhe }</Typography> );
      }
   
      if (tulokset2.length > 0) {
        return ( <Tulokset2 tulokset2={ tulokset2 } /> );
      }
   
      return ( <Typography>Tuloksia ei löytynyt</Typography> ); 
}

export default HaeTulokset2;