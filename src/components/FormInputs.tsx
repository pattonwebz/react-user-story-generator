import React from "react"

const FormInputs = () => {

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        alert('You have submitted the form.')
    }

    return(
        <form
            className="form--inputform"
            onSubmit={handleSubmit}
        >
            <fieldset>
                <label>
                    <p>As a...</p>
                    <textarea name="story-as-a" />
                </label>
                <label>
                    <p>i want to...</p>
                    <textarea name="story-i-want-to" />
                </label>
                <label>
                    <p>so that...</p>
                    <textarea name="story-so-that" />
                </label>
            </fieldset>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default FormInputs;
