import React from 'react';

export interface CardValuesInterface {
    [s: string]: string;
}

export const initialCardValues: CardValuesInterface = {
    storyAsA: '',
    storyIWantTo: '',
    storySoThat: '',
}

const CardContext = React.createContext(initialCardValues);

export const CardContextProvider = CardContext.Provider;

export default CardContext;
