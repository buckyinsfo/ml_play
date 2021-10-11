// import React, { MouseEventHandler, useCallback, useEffect, useRef, useState } from 'react'
// import useInterval from 'use-interval'

// interface GradientDescentProps {
//     alpha: number
// }

const Gradient = () => {

    // interface Point {
    //     x: number
    //     y: number
    // }

    // const [points, setPoints] = useState<Point[]>([])
    // // const [habitList, setHabitList] = useState<HabitType[]>([]);
    // const [drawing, setDrawing] = useState(false)
    // const [theta, setTheta] = useState([0, 0])
    // // const [alpha, setAlpha] = useState(0.0001)

    // const canvasRef = useRef<HTMLCanvasElement | null>(null)

    // const hypothesis = (x: number) => theta[0] + theta[1] * x 
    
    // const train = useCallback((alpha) => {
    // const train = (alpha: GradientDescentProps) => {
    //     const m: number = points.length        
        
    //     let thetaZero: number = theta[0]
    //     let thetaOne: number = theta[1]
    //     let thetaZeroSum: number = 0;
    //     let thetaOneSum: number = 0;
                
    //     for (let i = 0; i < m; i++) {
    //         const x: number = points[i][0]
    //         const y: number = points[i][1]
    //         thetaZeroSum += hypothesis(x) - y;
    //         thetaOneSum += (hypothesis(x) - y) * x;
    //     }
       
    //     // setThetaZero( thetaZero - (alpha / m) * thetaZeroSum )
    //     // setThetaOne( thetaOne - (alpha / m) * thetaOneSum )
        
    //     thetaZero = thetaZero - (alpha / m) * thetaZeroSum
    //     thetaOne = thetaOne - (alpha / m) * thetaOneSum 
        
    //     setTheta([thetaZero, thetaOne])
    //     console.log( theta )
    
    // } //,[points, hypothesis, theta])

    // Train the model
    
    // useInterval(() => {
    //     // Your custom logic here
    //     if (points.length < 2)
    //         return

    //     //train(alpha)
    //     //setCount(count + 1);
    // }, 1000);

    // Size and draw canvas and points
    // useEffect(() => {
    //     if (canvasRef.current) {
    //         canvasCtxRef.current = canvasRef.current.getContext('2d')
    //         let ctx = canvasCtxRef.current
    //         let canvas = canvasRef.current
        
    //         canvas.width = window.innerWidth
    //         canvas.height = window.innerHeight
    //         canvas.style.width = `${window.innerWidth}px`
    //         canvas.style.height = `${window.innerHeight}px`

    //         // background rect draw
    //         ctx!.fillStyle = '#333333'
    //         ctx!.fillRect(0, 0, ctx!.canvas.width, ctx!.canvas.height)

    //         // draw points
    //         ctx!.fillStyle = '#ffffff'
    //         for (var i = 0; i < points.length; i++) {
    //             const x = points[i].x
    //             const y = points[i].y

    //             ctx!.beginPath()
    //             const circle: Path2D | void = ctx!.arc(x, y, 8, 0, 2 * Math.PI)
    //             if ( circle != null )
    //                 ctx!.fill(circle)

    //             setTheta([0, 0])
    //         }
    //     }

    // }, [points])

    // Draw line
    // useEffect(() => {
    //     // draw line if we have two points
    //     if (points.length < 2)
    //         return

    //     const canvas = canvasRef.current
    //     const ctx = canvas.getContext('2d')
    //     ctx.translate(0, ctx.canvas.height)
    //     ctx.scale(1, -1)

    //     const b = theta[0]
    //     const m = theta[1]

    //     const x0 = 0
    //     const y0 = ctx.canvas.height - (m * x0 + b)
    //     const x1 = ctx.canvas.width
    //     const y1 = ctx.canvas.height - (m * x1 + b)

    //     ctx.strokeStyle = 'white'
    //     ctx.lineWidth = 5
    //     ctx.lineCap = "round"

    //     ctx.beginPath()
    //     ctx.moveTo(x0, y0)
    //     ctx.lineTo(x1, y1)
    //     ctx.stroke()

    //     ctx.scale(1, -1)
    //     ctx.translate(0, -1 * ctx.canvas.height)

    //     console.log( "Redrew line!")

    // }, [points, theta])

    // const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    //     const { button } = event

    //     if (button === 0)
    //         setDrawing(true)
    // }

    // const handleMouseUp = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    //     if (!drawing) return
    //     if (!canvasRef.current) return

    //     const { clientX, clientY } = event

    //     const canvas = canvasRef.current
    //     const bRect = canvas.getBoundingClientRect()
    //     const scaleX = canvas.width / bRect.width    // relationship bitmap vs. element for X
    //     const scaleY = canvas.height / bRect.height  // relationship bitmap vs. element for Y
  
    //     const point = [(clientX - bRect.left) * scaleX, (clientY - bRect.top) * scaleY]
    //     //setPoints(prevState => [...prevState, point])
    //     setDrawing(false)
    // }

    // return <canvas id="canvas" 
    //     ref={canvasRef} 
    //     onMouseDown={handleMouseDown}
    //     onMouseUp={handleMouseUp}
    // />
    return (<></>)
}

export default Gradient
