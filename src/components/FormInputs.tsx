import React from "react"

import styled from 'styled-components'

const FormInputs = () => {

    const FormEl = styled.form`
        flex: 0 0 50%;
    `;

    const SubmitButton = styled.input`
        color: #fff;
        background-color: #000;
        margin: 1rem 0;
        padding: 0.5rem 2.5rem;
        border: none;
        &:hover,
        &:focus {
            background: lighten(#000, 35%);
        }
    `;

    const InputTextarea = styled.textarea`
        padding: 0.5rem 0.25rem;
    `;

    const TextareaAsA = styled(InputTextarea)`
        border-color: red;
    `;

    const TextareaIWantTo = styled(InputTextarea)`
        border-color: green;
    `;

    const TextareaSoThat = styled(InputTextarea)`
        border-color: blue;
    `;

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        alert('You have submitted the form.')
    }

    return(
        <FormEl
            className="form--inputform"
            onSubmit={handleSubmit}
        >
            <fieldset>
                <legend>Enter your story details</legend>
                <label>
                    <p>As a...</p>
                    <TextareaAsA name="story-as-a" />
                </label>
                <label>
                    <p>i want to...</p>
                    <TextareaIWantTo name="story-i-want-to" />
                </label>
                <label>
                    <p>so that...</p>
                    <TextareaSoThat name="story-so-that" />
                </label>
            </fieldset>
            <SubmitButton type="submit" value="Submit" />
        </FormEl>
    )
}

export default FormInputs;
