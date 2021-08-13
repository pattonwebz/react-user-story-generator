import styled from 'styled-components'

export const FormEl = styled.form`
    flex: 0 0 50%;
`;

export const SubmitButton = styled.input`
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

export const InputTextarea = styled.textarea`
    padding: 0.5rem 0.25rem;
    box-sizing: border-box;
    width: 100%;
`;

export const TextareaAsA = styled(InputTextarea)`
    border-color: red;
`;

export const TextareaIWantTo = styled(InputTextarea)`
    border-color: green;
`;

export const TextareaSoThat = styled(InputTextarea)`
    border-color: blue;
`;
