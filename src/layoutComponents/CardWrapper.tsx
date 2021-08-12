import React, { useState } from "react"

import { CardContextProvider, initialCardValues } from '../context/CardContext';

import FormInputs from '../components/FormInputs';
import CanvasOutput from '../components/CanvasOutput';

import styled from 'styled-components'

const CardSection = styled.section`
    display: flex;
`;

const CardWrapper = () => {

    const [lastRender, setLastRender] = useState(0);

    const triggerReRenderCanvas = () => {
        setLastRender(new Date().getTime());
    }

    return(
        <CardContextProvider value={initialCardValues}>
            <CardSection>
                <FormInputs reRenderCanvasCallback={triggerReRenderCanvas} />
                <CanvasOutput key={lastRender} />
            </CardSection>
        </CardContextProvider>

    )
}

export default CardWrapper;
