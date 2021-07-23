import React, { useRef, useEffect, useCallback, createRef } from "react"

import styled from 'styled-components'

const CanvasOutput = () => {

    const CanvasEl = styled.canvas`
        flex: 0 0 50%;
    `;

    const canvasRef = createRef<HTMLCanvasElement>();

    return(
        <CanvasEl ref={canvasRef} />
    )
}

export default CanvasOutput;
