import React from "react"

import styled from "styled-components";

import FormInputs from '../components/FormInputs';
import CanvasOutput from '../components/CanvasOutput';

const HomePage = () => {

    const FlexWrapper = styled.section`
        display: flex;
    `;
    return (
        <>
            <section>
                <h2>Homepage Header</h2>
                <p>Some page content</p>
                <FlexWrapper>
                    <FormInputs />
                    <CanvasOutput />
                </FlexWrapper>
            </section>
        </>
    )
}

export default HomePage;
