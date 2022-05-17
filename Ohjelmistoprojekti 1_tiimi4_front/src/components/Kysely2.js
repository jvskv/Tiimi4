import React, { useState, useEffect } from "react";
import CreateIcon from "@mui/icons-material/Create";
import { Button } from "@mui/material";

function Kysely2 () {

    const [value, setValue] = useState({
        ohjelmointikieli: '',
        koodieditori: ''
    })

    const handleChange = (event) => {
        setValue({...value, [event.target.name]: event.target.value})  
    };

    const handleSubmit = (event) => {
        addAnswer(value)
        console.log(value)
    };

    const addAnswer = (value) => {
        fetch("https://localhost:8080/quizes2",{
          method:'POST',
          headers: {'Content-type':'application/json'},
          body: JSON.stringify(value)
        })
        .then(response => {
          if (response.ok) {
            alert('Saved!')
          }
          else {
            alert('Something went wrong')
          }
        })
        .catch(err => console.log(err))
      }

    return (
        <div className="checks">
            <form>
                <p>1. Mikä seuraavista on paras ohjelmointikieli:</p>
                <input
                    type="radio"
                    id="ohjelmointikieli"
                    name="ohjelmointikieli"
                    value="Java"
                    onChange={handleChange}
                />
                <label htmlFor="ohjelmointikieli">Java</label>
                <br />
                <input
                    type="radio"
                    id="ohjelmointikieli"
                    name="ohjelmointikieli"
                    value="Python"
                    onChange={handleChange}
                />
                <label htmlFor="ohjelmointikieli">Python</label>
                <br />
                <input
                    type="radio"
                    id="ohjelmointikieli"
                    name="ohjelmointikieli"
                    value="JavaScript"
                    onChange={handleChange}
                />
                <label htmlFor="ohjelmointikieli">JavaScipt</label>
                <br />
                <input
                    type="radio"
                    id="ohjelmointikieli"
                    name="ohjelmointikieli"
                    value="C#"
                    onChange={handleChange}
                />
                <label htmlFor="ohjelmointikieli">C#</label>
                <br />
                <input
                    type="radio"
                    id="ohjelmointikieli"
                    name="ohjelmointikieli"
                    value="Else"
                    onChange={handleChange}
                />
                <label htmlFor="ohjelmointikieli">Jokin muu</label>
                <br />
                <br />
                <p>2. Mikä seuraavista on paras koodieditori:</p>
                <input
                    type="radio"
                    id="koodieditori"
                    name="koodieditori"
                    value="Eclipse"
                    onChange={handleChange}
                />
                <label htmlFor="koodieditori">Eclipse</label>
                <br />
                <input
                    type="radio"
                    id="koodieditori"
                    name="koodieditori"
                    value="Visual Studio Code"
                    onChange={handleChange}
                />
                <label htmlFor="koodieditori">Visual Studio Code</label>
                <br />
                <input
                    type="radio"
                    id="koodieditori"
                    name="koodieditori"
                    value="Notepad++"
                    onChange={handleChange}
                />
                <label htmlFor="koodieditori">Notepad++</label>
                <br />
                <input
                    type="radio"
                    id="koodieditori"
                    name="koodieditori"
                    value="Else"
                    onChange={handleChange}
                />
                <label htmlFor="koodieditori">Jokin muu</label>
                <br />
                <Button 
                    variant="contained" 
                    onClick={handleSubmit}
                    startIcon={<CreateIcon />}
                    >
                    Lisää
                </Button>
            </form>
        </div>
    )
}

export default Kysely2