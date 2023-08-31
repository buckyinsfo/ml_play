import React, { useCallback, useEffect, useRef, useState } from 'react'
// import useInterval from 'use-interval'

// interface IGradDescProps {
//     alpha: number
// }

const Gradient = () => {

    interface IPoint {
        x: number
        y: number
    }

    const [points, setPoints] = useState<IPoint[]>([])
    const [drawing, setDrawing] = useState<boolean>(false)
    const [thetas, setThetas] = useState<[ number, number ]>([0, 0])
    const [alpha, setAlpha] = useState< number>(0.0001)

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)

    const hypothesis = useCallback( (x: number) => { return ( thetas[0] + thetas[1] * x )}, [thetas])
    
    const train = useCallback((alpha: number) => {
        const m: number = points.length        
        
        let thetaZero: number = thetas[0]
        let thetaOne: number = thetas[1]
        let thetaZeroSum: number = 0;
        let thetaOneSum: number = 0;
                
        for (let i = 0; i < m; i++) {
            const x: number = points[i].x
            const y: number = points[i].y
            thetaZeroSum += hypothesis(x) - y
            thetaOneSum += (hypothesis(x) - y) * x
        }
       
        thetaZero = thetaZero - (alpha / m) * thetaZeroSum
        thetaOne = thetaOne - (alpha / m) * thetaOneSum 
        
        setThetas([thetaZero, thetaOne])
        console.log( thetas )
    
    } ,[points, hypothesis, thetas])

    // Train the model with this timer
    // useInterval(() => {
    //     if (points.length < 2)
    //         return

    //     train(alpha)
    //     //setCount(count + 1);
    //  }, 1000);

    // Size and draw canvas and points
    useEffect(() => {
        if ( !points )
            return

        if ( !canvasRef.current )
            return
            
        const renderCtx = canvasRef.current.getContext('2d');
        if ( !renderCtx )
            return
                
        setContext(renderCtx);

        canvasRef.current.width = window.innerWidth
        canvasRef.current.height = window.innerHeight
        canvasRef.current.style.width = `${window.innerWidth}px`
        canvasRef.current.style.height = `${window.innerHeight}px`

        if (context) {
            // background rect draw
            context.fillStyle = '#333333'
            context.fillRect(0, 0, context.canvas.width, context.canvas.height)

            // draw points
            context.fillStyle = '#ffffff'

            for (var i = 0; i < points.length; i++) {
                const x = points[i].x
                const y = points[i].y 

                context.beginPath()
                const circle = context.arc(x, y, 8, 0, 2 * Math.PI)
                context.fill(circle!)
            }
        }
    }, [context, points])

    // Draw line
    useEffect(() => {
        if ( thetas.length < 1 )
            return

        const canvas = canvasRef.current
        if ( canvas == null )
            return

        if ( !context )
            return 

        context.translate(0, context.canvas.height)
        context.scale(1, -1)

        const b = thetas[0]
        const m = thetas[1]
        
        const x0 = 0
        const y0 = context.canvas.height - (m * x0 + b)
        const x1 = context.canvas.width
        const y1 = context.canvas.height - (m * x1 + b)

        context.strokeStyle = 'white'
        context.lineWidth = 5
        context.lineCap = "round"     
        
        context.beginPath()
        context.moveTo(x0, y0)
        context.lineTo(x1, y1)
        context.stroke()

        context.scale(1, -1)
        context.translate(0, -1 * context.canvas.height)

    }, [context, thetas])

    const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        const { button } = event

        if ( button !== 0 )
            return
        
        setDrawing(true)    
    }

    const handleMouseUp = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        if ( !drawing ) 
            return

        if ( !canvasRef.current )
            return

        // get mouse button & click point
        const { button, clientX, clientY } = event
        if ( button !== 0 )
            return
        
        const canvas = canvasRef.current
        const bRect = canvas.getBoundingClientRect()
        const scaleX = canvas.width / bRect.width    // relationship bitmap vs. element for X
        const scaleY = canvas.height / bRect.height  // relationship bitmap vs. element for Y
  
        const point: IPoint = { x: (clientX - bRect.left) * scaleX, y: (clientY - bRect.top) * scaleY }
        setPoints( (prevState: IPoint[]) => [...prevState, point] )

        setDrawing(false)
    }

    return <canvas id="canvas" 
        ref={canvasRef}
        style={{
            border: '2px solid #000',
            marginTop: 10,
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
    />
}

export default Gradient