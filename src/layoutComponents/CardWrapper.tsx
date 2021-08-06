import React, { useEffect, useRef, useState } from "react"

import FormInputs from '../components/FormInputs';
import CanvasOutput from '../components/CanvasOutput';

import styled from 'styled-components'

const CardSection = styled.section`
    display: flex;
`;

const CardWrapper = () => {

    interface CardValuesInterface {
        [s: string]: string;
    }

    const initialCardValues: CardValuesInterface = {
        storyAsA: '',
        storyIWantTo: '',
        storySoThat: '',
    }

    const [cardValues, setCardValues] = useState(initialCardValues);
    const [lastRender, setLastRender] = useState(0);

    const updateCardValues = (values: CardValuesInterface) => {
        setCardValues(values);
        setLastRender(new Date().getTime());
    }




    return(
        <CardSection>
            <FormInputs cardValues={cardValues} dataCallback={updateCardValues} />
            <CanvasOutput cardValues={cardValues} key={lastRender} />
        </CardSection>
    )
}

export default CardWrapper;
