import React, { useState } from "react";

export default function Form () {

    const [formState, setFormState] = useState({
        name:""

    })
}

const formSubmit = e => {
    e.preventDefault();
    console.log("form submitted");
};

const inputChange = e => {
    console.log("input changed!".e.target.value);
    setFormState({name: e.target.value });
};

return (
    <form onSubmit = {formSubmit}>
        <label htmlFor = "name">
            Name
            <input type= "text" name= "name" />
        </label>
        <button>Submit</button>
    </form>
)

