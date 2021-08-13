import React, { useState } from "react"

import {ErrorBoundary} from 'react-error-boundary';

import { CardContextProvider, initialCardValues } from '../context/CardContext';

import FormInputs from '../components/FormInputs';
import CanvasOutput from '../components/CanvasOutput';

import styled from 'styled-components'
import {CardFormErrorFallback, CardCanvasErrorFallback } from "../errorBoundry/Fallbacks";

const CardSection = styled.section`
    display: flex;
`;

const handleCardError = (error: Error, info: {componentStack: string}) => {
    console.log(error);
    console.log(info);
}

const CardWrapper = () => {

    const [lastRender, setLastRender] = useState(0);

    const triggerReRenderCanvas = () => {
        setLastRender(new Date().getTime());
    }

    return(
        <CardContextProvider value={initialCardValues}>
            <CardSection>
                <ErrorBoundary FallbackComponent={CardFormErrorFallback} onError={handleCardError}>
                    <FormInputs reRenderCanvasCallback={triggerReRenderCanvas} />
                </ErrorBoundary>
                <ErrorBoundary FallbackComponent={CardCanvasErrorFallback} onError={handleCardError}>
                    <CanvasOutput key={lastRender} />
                </ErrorBoundary>
            </CardSection>
        </CardContextProvider>

    )
}

export default CardWrapper;
