import React, { useEffect, useRef, useState } from 'react'

const Linear = props => {

    const [points, setPoints] = useState([])
    const [drawing, setDrawing] = useState(false)
    const [thetas, setThetas] = useState([0, 0])

    const canvasRef = useRef(null)
    const contextRef = useRef(null)

    // Calculate linear regeression
    useEffect(() => {
        if (points.length < 2)
            return

        let xsum = 0
        let xmean = 0
        let ysum = 0
        let ymean = 0

        for (let i = 0; i < points.length; i++) {
            xsum += points[i][0]
            ysum += points[i][1]
        }

        xmean = xsum / points.length
        ymean = ysum / points.length

        let num = 0
        let denom = 0
        for (let i = 0; i < points.length; i++) {
            let x = points[i][0]
            let y = points[i][1]
            num += (x - xmean) * (y - ymean)
            denom += (x - xmean) * (x - xmean)
        }

        let m = num / denom
        let b = ymean - m * xmean

        setThetas([b, m])
    }, [points])

    // Size and draw canvas and points
    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        contextRef.current = ctx

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        canvas.style.width = `${window.innerWidth}px`
        canvas.style.height = `${window.innerHeight}px`

        // background rect draw
        ctx.fillStyle = '#333333'
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        // draw points
        ctx.fillStyle = '#ffffff'
        for (var i = 0; i < points.length; i++) {
            const x = points[i][0]
            const y = points[i][1] 

            ctx.beginPath()
            const circle = ctx.arc(x, y, 8, 0, 2 * Math.PI)
            ctx.fill(circle)
        }

    }, [points])

    // Draw line
    useEffect(() => {
        // draw line if we have thetas
        if (thetas.length < 1)
            return

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        // draw line
        ctx.translate(0, ctx.canvas.height)
        ctx.scale(1, -1)

        const b = thetas[0]
        const m = thetas[1]
        
        const x0 = 0
        const y0 = ctx.canvas.height - (m * x0 + b)
        const x1 = ctx.canvas.width
        const y1 = ctx.canvas.height - (m * x1 + b)

        ctx.strokeStyle = 'white'
        ctx.lineWidth = 5
        ctx.lineCap = "round"     
        
        ctx.beginPath()
        ctx.moveTo(x0, y0)
        ctx.lineTo(x1, y1)
        ctx.stroke()

        ctx.scale(1, -1)
        ctx.translate(0, -1 * ctx.canvas.height)

    }, [thetas])

    const handleMouseDown = (event) => {
        const {button} = event

        if (button === 0)
            setDrawing(true)
    }

    const handleMouseUp = (event) => {
        if (!drawing) return

        const { clientX, clientY } = event

        const canvas = canvasRef.current
        const bRect = canvas.getBoundingClientRect()
        const scaleX = canvas.width / bRect.width    // relationship bitmap vs. element for X
        const scaleY = canvas.height / bRect.height  // relationship bitmap vs. element for Y
  
        const point = [(clientX - bRect.left) * scaleX, (clientY - bRect.top) * scaleY]
        setPoints(prevState => [...prevState, point])
        setDrawing(false)
    }

    return <canvas id="canvas" ref={canvasRef} {...props}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
    />
}

export default Linear
