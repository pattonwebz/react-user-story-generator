import React, { useReducer, useState, useContext } from "react";

import CardContext from '../context/CardContext';

import { FormEl, SubmitButton, TextareaAsA, TextareaIWantTo, TextareaSoThat } from "../styledElements/formElements";

const FormInputs = (props: any) => {
    // throw 'broken';
    const cardValues = useContext(CardContext);

    const formReducer = (initialValues: {[key: string]: string}, updatedValues: {name: string; value: string;} ) => {
        const reducedState = {
            ...initialValues,
            [updatedValues.name]: updatedValues.value
        };

        return reducedState;
    }

    const [formData, setFormData] = useReducer(formReducer, cardValues);
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const target = event.currentTarget as HTMLTextAreaElement;
        setFormData({
            name: target.name,
            value: target.value,
        });
        cardValues[target.name] = target.value;
    };

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        setSubmitting(true);
        setTimeout(() => {}, 3000);
        props.reRenderCanvasCallback();
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
