import React, { useReducer, useState } from "react";

import { InputTextarea, FormEl, SubmitButton } from "../styledElements/formElements";

import styled from "styled-components";

const TextareaAsA = styled(InputTextarea)`
    border-color: red;
`;

const TextareaIWantTo = styled(InputTextarea)`
    border-color: green;
`;

const TextareaSoThat = styled(InputTextarea)`
    border-color: blue;
`;

const formReducer = (initialValues: {[key: string]: string}, updatedValues: {name: string; value: string;} ) => {
    const reducedState = {
        ...initialValues,
        [updatedValues.name]: updatedValues.value
    };

    return reducedState;
}

const FormInputs = (props: any) => {

    const [formData, setFormData] = useReducer(formReducer, props.cardValues);
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const target = event.currentTarget as HTMLTextAreaElement;
        setFormData({
            name: target.name,
            value: target.value,
        });
        props.cardValues[target.name] = target.value;
    };

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        setSubmitting(true);
        props.dataCallback(props.cardValues);
        setSubmitting(false);
    }

    return(
        <FormEl
            className="form--inputform"
            onSubmit={handleSubmit}
        >
            <fieldset disabled={submitting}>
                <legend>Enter your story details</legend>
                <label>
                    <p>As a...</p>
                    <TextareaAsA name='storyAsA' onChange={handleChange} value={formData.storyAsA || ''} />
                </label>
                <label>
                    <p>i want to...</p>
                    <TextareaIWantTo name='storyIWantTo' onChange={handleChange} value={formData.storyIWantTo || ''} />
                </label>
                <label>
                    <p>so that...</p>
                    <TextareaSoThat name='storySoThat' onChange={handleChange} value={formData.storySoThat || ''} />
                </label>
            </fieldset>
            <SubmitButton type="submit" value="Submit" disabled={submitting} />
        </FormEl>
    )
}

export default FormInputs;
