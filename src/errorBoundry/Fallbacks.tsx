import React from 'react';

export const CardFormErrorFallback = (boundryData: { error: { message: React.ReactNode; }; }) => {
    return (
        <div role="alert">
            <p>Error loading the form</p>
            <pre>{boundryData.error.message}</pre>
        </div>
    )
};

export const CardCanvasErrorFallback = (boundryData: { error: { message: React.ReactNode; }; }) => {
    return (
        <div role="alert">
            <p>Error in the canvas</p>
            <pre>{boundryData.error.message}</pre>
        </div>
    )
};
