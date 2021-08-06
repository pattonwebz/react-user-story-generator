import React, { useRef, useEffect, useCallback, createRef, useState } from "react"
import CSS from 'csstype';

import styled from 'styled-components'

const CanvasWrapper = styled.div`
    flex: 0 0 50%;
`;

const CanvasEl = styled.canvas`
    width: 100%;
    max-width: 600px;
    height: 335px;
`;

const CanvasOutput = (props: any) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    let ctx: CanvasRenderingContext2D | null = null;

    useEffect(() => {
        // dynamically assign the width and height to canvas
        const canvasEle = canvasRef.current;

        if(null === canvasEle) {
            return;
        }
        canvasEle.width  = canvasEle.clientWidth;
        canvasEle.height = canvasEle.clientHeight;

        ctx = canvasEle.getContext('2d');
    }, []);

    useEffect(() => {

        writeText({ text: 'From: UserStoryGenerator.com', x: 300, y: 320 }, {textAlign: 'center', fontSize: '0.75rem'});

        writeText({ text: 'As A...', x: 30, y: 55 }, {color: 'red', fontSize: '1.25rem'});
        writeText({ text: props.cardValues.storyAsA, x: 40, y: 80 });

        writeText({ text: 'I Want To...', x: 30, y: 155 }, {color: 'green', fontSize: '1.25rem'});
        writeText({ text: props.cardValues.storyIWantTo, x: 40, y: 180 });

        writeText({ text: 'So That...', x: 30, y: 255 }, {color: 'blue', fontSize: '1.25rem'});
        writeText({ text: props.cardValues.storySoThat, x: 40, y: 280 });

    }, [props.cardValues]);

    // write a text
    const writeText = (info: { text: string; x: number; y: number; }, style = {}) => {
        const { text, x, y } = info;
        const { color = 'black', textAlign = 'left', fontSize = '1rem' }: CSS.Properties = style;

        if(null === ctx) {
            return;
        }

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.font = fontSize + ' ' + 'Ariel';
        ctx.textAlign = (textAlign as CanvasTextAlign);
        ctx.fillText(text, x, y);
    }

    return(
        <CanvasWrapper>
            <CanvasEl ref={canvasRef}></CanvasEl>
        </CanvasWrapper>
    )
}

export default CanvasOutput;
