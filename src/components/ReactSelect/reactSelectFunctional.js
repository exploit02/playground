import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import AsyncSelect from "react-select/async";
import { reactSelectStyles } from "./reactSelect.styles";
import { promiseOptions, rulesArray } from "./utils";
import FormValidator from "../../utils/formValidator";

const styles = createUseStyles(reactSelectStyles);

function ReactSelectFunctional() {
    const classes = styles();

    const validator = new FormValidator(rulesArray);

    const [formSubmitted, setFormSubmitted] = useState(false);

    const [state, setState] = useState({
        color_1: "",
        color_2: "",
        name: "",
        email: "",
    });

    const [validationState, setValidationState] = useState(validator.valid());

    const validation = formSubmitted ? validator.validate(state) : validationState;

    const inputHandler = (e, name) => {
        setState((prevState) => ({
            ...prevState,
            [name]: e?.value || "",
        }));
    };
    const submitHandler = (e) => {
        e.preventDefault();
        const validation = validator.validate(state);

        setValidationState(validation);
        setFormSubmitted(true);

        // if validation.isValid do the form submission
    };

    return (
        <div className={classes.root}>
            <h3>React Select</h3>
            <p>Functional Component - 1st & 3rd field has empty validation</p>
            <form onSubmit={submitHandler}>
                <div className={classes.row}>
                    <div className={classes.inputContainer}>
                        <AsyncSelect
                            isClearable
                            cacheOptions
                            loadOptions={promiseOptions}
                            className={classes.select}
                            onChange={(e) => inputHandler(e, "color_1")}
                        />
                        <span className={classes.helperText}>{validation?.color_1?.message}</span>
                    </div>
                    <div className={classes.inputContainer}>
                        <AsyncSelect
                            cacheOptions
                            defaultOptions
                            loadOptions={promiseOptions}
                            className={classes.select}
                            onChange={(e) => inputHandler(e, "color_2")}
                        />
                        <span className={classes.helperText}>{validation?.color_2?.message}</span>
                    </div>
                    <div className={classes.inputContainer}>
                        <input
                            name="name"
                            autoComplete="off"
                            className={classes.input}
                            value={state.name}
                            onChange={(e) => inputHandler({ value: e.target.value }, e.target.name)}
                        />
                        <span className={classes.helperText}>{validation?.name?.message}</span>
                    </div>

                    <div className={classes.inputContainer}>
                        <input
                            name="email"
                            type="email"
                            autoComplete="off"
                            className={classes.input}
                            value={state.email}
                            onChange={(e) => inputHandler({ value: e.target.value }, e.target.name)}
                        />
                        <span className={classes.helperText}>{validation?.email?.message}</span>
                    </div>
                </div>

                <div className={classes.row}>
                    <button type="submit" className={classes.submitButton}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ReactSelectFunctional;
