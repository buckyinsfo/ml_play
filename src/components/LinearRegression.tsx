import React, { useEffect, useRef, useState } from 'react'

const Linear = () => {

    interface Point {
        x: number
        y: number
    }

    const [points, setPoints] = useState<Point[] | undefined>([])
    const [drawing, setDrawing] = useState(false)
    const [thetas, setThetas] = useState([0, 0])

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

    // Calculate linear regeression
    useEffect(() => {
        if (!points == null || points.length < 2)
            return

        let xsum: number = 0
        let xmean: number = 0
        let ysum: number = 0
        let ymean: number = 0

        for (let i = 0; i < points.length; i++) {
            xsum += points[i].x
            ysum += points[i].y
        }   

        xmean = xsum / points.length
        ymean = ysum / points.length

        let num = 0
        let denom = 0
        for (let i =!points ||  0; i < points.length; i++) {
            let x = points[i].x
            let y = points[i].y
            num += (x - xmean) * (y - ymean)
            denom += (x - xmean) * (x - xmean)
        }

        let m: number = num / denom
        let b: number = ymean - m * xmean

        setThetas([b, m])
    }, [points])

    // Size and draw canvas and points
    useEffect(() => {
        if (canvasRef.current) {
            canvasCtxRef.current = canvasRef.current.getContext('2d')
            let ctx = canvasCtxRef.current
            let canvas = canvasRef.current
        
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            canvas.style.width = `${window.innerWidth}px`
            canvas.style.height = `${window.innerHeight}px`

            // background rect draw
            ctx!.fillStyle = '#333333'
            ctx!.fillRect(0, 0, ctx!.canvas.width, ctx!.canvas.height)

            // draw points
            ctx!.fillStyle = '#ffffff'
            for (var i = 0; i < points.length; i++) {
                const x = points[i].x
                const y = points[i].y

                ctx!.beginPath()
                const circle: Path2D | void = ctx!.arc(x, y, 8, 0, 2 * Math.PI)
                if ( circle != null )
                    ctx!.fill(circle)

                setThetas([0, 0])
            }
        }

    }, [points])

    // Draw line
    // useEffect(() => {
    //     // draw line if we have thetas
    //     if (thetas.length < 1)
    //         return

    //     const canvas = canvasRef.current
    //     const ctx = canvas.getContext('2d')

    //     // draw line
    //     ctx.translate(0, ctx.canvas.height)
    //     ctx.scale(1, -1)

    //     const b = thetas[0]
    //     const m = thetas[1]
        
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

    // }, [thetas])

    const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        const { button } = event

        if (button === 0)
            setDrawing(true)
    }

    const handleMouseUp = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        if (!drawing) return
        if (!canvasRef.current) return

        const { clientX, clientY } = event

        const canvas = canvasRef.current
        const bRect = canvas.getBoundingClientRect()
        const scaleX = canvas.width / bRect.width    // relationship bitmap vs. element for X
        const scaleY = canvas.height / bRect.height  // relationship bitmap vs. element for Y
  
        const point = [(clientX - bRect.left) * scaleX, (clientY - bRect.top) * scaleY]
        //const point = [clientX, clientY]
        //setPoints(prevState => [...prevState, point])
        setDrawing(false)
    }

    return <canvas id="canvas" 
        ref={canvasRef} 
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
    />
}

export default Linear
