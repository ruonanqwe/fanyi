"use client"

import { useEffect, useRef } from "react"

export default function ArchitectureDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = 500

    // Colors
    const colors = {
      background: "#f8f9fa",
      border: "#d1d5db",
      primary: "#3b82f6",
      secondary: "#10b981",
      text: "#1f2937",
      arrow: "#6b7280",
    }

    // Clear canvas
    ctx.fillStyle = colors.background
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw boxes
    const drawBox = (
      x: number,
      y: number,
      width: number,
      height: number,
      title: string,
      items: string[],
      color: string,
    ) => {
      // Box
      ctx.fillStyle = color
      ctx.strokeStyle = colors.border
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.roundRect(x, y, width, height, 10)
      ctx.fill()
      ctx.stroke()

      // Title
      ctx.fillStyle = "#ffffff"
      ctx.font = "bold 16px Arial"
      ctx.textAlign = "center"
      ctx.fillText(title, x + width / 2, y + 25)

      // Items
      ctx.fillStyle = "#ffffff"
      ctx.font = "14px Arial"
      ctx.textAlign = "left"
      items.forEach((item, index) => {
        ctx.fillText(`• ${item}`, x + 15, y + 55 + index * 25)
      })
    }

    // Draw arrow
    const drawArrow = (fromX: number, fromY: number, toX: number, toY: number) => {
      const headLength = 15
      const angle = Math.atan2(toY - fromY, toX - fromX)

      ctx.strokeStyle = colors.arrow
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(fromX, fromY)
      ctx.lineTo(toX, toY)
      ctx.stroke()

      // Arrow head
      ctx.beginPath()
      ctx.moveTo(toX, toY)
      ctx.lineTo(toX - headLength * Math.cos(angle - Math.PI / 6), toY - headLength * Math.sin(angle - Math.PI / 6))
      ctx.lineTo(toX - headLength * Math.cos(angle + Math.PI / 6), toY - headLength * Math.sin(angle + Math.PI / 6))
      ctx.closePath()
      ctx.fillStyle = colors.arrow
      ctx.fill()
    }

    // Calculate positions based on canvas size
    const boxWidth = canvas.width / 4 - 30
    const boxHeight = 150
    const startX = 20
    const startY = 50
    const gap = 20

    // Draw the architecture components
    drawBox(
      startX,
      startY,
      boxWidth,
      boxHeight,
      "Speech Recognition (ASR)",
      ["Aliyun/Tencent Cloud", "Google Speech-to-Text", "Noise filtering", "Dialect support"],
      colors.primary,
    )

    drawBox(
      startX + boxWidth + gap,
      startY,
      boxWidth,
      boxHeight,
      "Translation Engine",
      ["DeepL + Google Translate", "Custom terminology", "User glossaries", "Context awareness"],
      colors.secondary,
    )

    drawBox(
      startX + (boxWidth + gap) * 2,
      startY,
      boxWidth,
      boxHeight,
      "AI Voice Synthesis",
      ["ElevenLabs", "Amazon Polly", "Azure Neural TTS", "Speed adjustment"],
      colors.primary,
    )

    drawBox(
      startX + (boxWidth + gap) * 3,
      startY,
      boxWidth,
      boxHeight,
      "Video Processing",
      ["FFmpeg", "Wav2Lip sync", "Subtitle embedding", "Format conversion"],
      colors.secondary,
    )

    // Draw the processing layer
    drawBox(
      startX,
      startY + boxHeight + gap,
      canvas.width - 40,
      100,
      "Async Processing Engine",
      ["Celery + RabbitMQ", "WebSocket progress notifications", "Parallel processing", "Error handling & retry logic"],
      "#6366f1",
    )

    // Draw the API layer
    drawBox(
      startX,
      startY + boxHeight + gap + 100 + gap,
      canvas.width - 40,
      100,
      "API & Integration Layer",
      ["RESTful API", "Webhook callbacks", "SDK support", "Authentication & rate limiting"],
      "#8b5cf6",
    )

    // Draw arrows
    drawArrow(startX + boxWidth, startY + boxHeight / 2, startX + boxWidth + gap, startY + boxHeight / 2)

    drawArrow(
      startX + boxWidth * 2 + gap,
      startY + boxHeight / 2,
      startX + boxWidth * 2 + gap * 2,
      startY + boxHeight / 2,
    )

    drawArrow(
      startX + boxWidth * 3 + gap * 2,
      startY + boxHeight / 2,
      startX + boxWidth * 3 + gap * 3,
      startY + boxHeight / 2,
    )
  }, [])

  return (
    <div className="w-full">
      <canvas ref={canvasRef} className="w-full border rounded-lg" style={{ height: "500px" }} />
    </div>
  )
}

