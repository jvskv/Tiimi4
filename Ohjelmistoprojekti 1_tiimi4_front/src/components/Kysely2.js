import React, { useState, useEffect } from "react";
import CreateIcon from "@mui/icons-material/Create";
import { Button } from "@mui/material";

function Kysely2 () {

    const [checked, setChecked] = useState(false)
    const [textfield, setTextfield] = useState(false);
    const [textfield1, setTextfield1] = useState(false);
    const [value, setValue] = React.useState({
        ohjelmointikieli: '',
        koodieditori: ''
    })

    const handleChange = (event) => {
            setValue({...value, [event.target.name]: event.target.value})  
    };

    const handleSubmit = (event) => {
        setValue({
            ohjelmointikieli: '',
            koodieditori: ''
        })
        console.log(value)
        addAnswer(value)
    };

    const addAnswer = (value) => {
        fetch("https://localhost:8080/vastaus2",{
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
                    type="checkbox"
                    id="ohjelmointikieli"
                    name="ohjelmointikieli"
                    value="Java"
                    onChange={handleChange}
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                />
                <label htmlFor="ohjelmointikieli">Java</label>
                <br />
                <input
                    type="checkbox"
                    id="ohjelmointikieli"
                    name="ohjelmointikieli"
                    value="Python"
                    onChange={handleChange}
                />
                <label htmlFor="ohjelmointikieli">Python</label>
                <br />
                <input
                    type="checkbox"
                    id="ohjelmointikieli"
                    name="ohjelmointikieli"
                    value="JavaScript"
                    onChange={handleChange}
                />
                <label htmlFor="ohjelmointikieli">JavaScipt</label>
                <br />
                <input
                    type="checkbox"
                    id="ohjelmointikieli"
                    name="ohjelmointikieli"
                    value="C#"
                    onChange={handleChange}
                />
                <label htmlFor="ohjelmointikieli">C#</label>
                <br />
                <input
                    type="checkbox"
                    id="ohjelmointikieli"
                    name="ohjelmointikieli"
                    value="Else"
                    onChange={() => {
                    setTextfield(!textfield)
                      }
                    }
                    textfield={textfield}
                />
                <label>
                    Jokin muu, mikä:
                    <input
                    name="ohjelmointikieli"
                    type="text"
                    disabled={!textfield}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <p>2. Mikä seuraavista on paras koodieditori:</p>
                <input
                    type="checkbox"
                    id="koodieditori"
                    name="koodieditori"
                    value="Eclipse"
                    onChange={handleChange}
                />
                <label htmlFor="koodieditori">Eclipse</label>
                <br />
                <input
                    type="checkbox"
                    id="koodieditori"
                    name="koodieditori"
                    value="Visual Studio Code"
                    onChange={handleChange}
                />
                <label htmlFor="koodieditori">Visual Studio Code</label>
                <br />
                <input
                    type="checkbox"
                    id="koodieditori"
                    name="koodieditori"
                    value="Notepad++"
                    onChange={handleChange}
                />
                <label htmlFor="koodieditori">Notepad++</label>
                <br />
                <input
                    type="checkbox"
                    id="koodieditori"
                    name="koodieditori"
                    value="Else"
                    onChange={() => {
                    setTextfield1(!textfield1)
                      }
                    }
                    textfield1={textfield1}
                />
                <label>
                    Jokin muu, mikä:
                    <input
                    name="koodieditori"
                    type="text"
                    disabled={!textfield1}
                    onChange={handleChange}
                    />
                </label>
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