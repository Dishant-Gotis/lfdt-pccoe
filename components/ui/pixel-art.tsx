import React from "react"

interface PixelArtProps {
  className?: string
  size?: number
}

// 1. Isometric 3D Blockchain Block in Pixel Art (16x16 grid)
export function PixelBlock({ className = "", size = 48 }: PixelArtProps) {
  const grid = [
    ["", "", "", "", "", "", "", "O", "O", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "O", "L", "L", "O", "", "", "", "", "", ""],
    ["", "", "", "", "", "O", "L", "L", "L", "L", "O", "", "", "", "", ""],
    ["", "", "", "", "O", "L", "L", "L", "L", "L", "L", "O", "", "", "", ""],
    ["", "", "", "O", "L", "L", "L", "L", "L", "L", "L", "L", "O", "", "", ""],
    ["", "", "O", "L", "L", "L", "L", "O", "O", "L", "L", "L", "L", "O", "", ""],
    ["", "", "O", "M", "L", "L", "O", "M", "D", "O", "L", "L", "D", "O", "", ""],
    ["", "", "O", "M", "M", "O", "M", "M", "D", "D", "O", "D", "D", "O", "", ""],
    ["", "", "O", "M", "M", "M", "O", "M", "D", "O", "D", "D", "D", "O", "", ""],
    ["", "", "O", "M", "M", "M", "M", "O", "O", "D", "D", "D", "D", "O", "", ""],
    ["", "", "", "O", "M", "M", "M", "M", "D", "D", "D", "D", "O", "", "", ""],
    ["", "", "", "", "O", "M", "M", "M", "D", "D", "D", "O", "", "", "", ""],
    ["", "", "", "", "", "O", "M", "M", "D", "D", "O", "", "", "", "", ""],
    ["", "", "", "", "", "", "O", "M", "D", "O", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "O", "O", "", "", "", "", "", "", ""],
  ]

  const colorMap: Record<string, string> = {
    L: "#67e8f9", // Cyan 300 (Top Face)
    M: "#06b6d4", // Cyan 500 (Left Face)
    D: "#0891b2", // Cyan 600 (Right Face)
    O: "#d946ef", // Fuchsia 500 (Highlight Outline)
  }

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ shapeRendering: "crispEdges" }}
    >
      {grid.map((row, y) =>
        row.map((cell, x) => {
          if (!cell) return null
          return (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width={1}
              height={1}
              fill={colorMap[cell]}
            />
          )
        })
      )}
    </svg>
  )
}

// 2. Interlocking Blockchain Pixel Chain Link (16x16 grid)
export function PixelChain({ className = "", size = 48 }: PixelArtProps) {
  const grid = [
    ["", "", "", "O", "O", "O", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "O", "G", "G", "G", "O", "", "", "", "", "", "", "", "", ""],
    ["", "O", "G", "O", "O", "G", "G", "O", "", "", "", "", "", "", "", ""],
    ["", "O", "G", "O", "O", "O", "G", "O", "", "", "", "", "", "", "", ""],
    ["", "O", "G", "O", "O", "O", "G", "O", "O", "O", "O", "", "", "", "", ""],
    ["", "", "O", "G", "G", "G", "O", "C", "G", "G", "G", "O", "", "", "", ""],
    ["", "", "", "O", "O", "O", "C", "O", "G", "O", "O", "G", "O", "", "", ""],
    ["", "", "", "", "", "", "C", "O", "G", "O", "O", "G", "O", "", "", ""],
    ["", "", "", "", "", "", "O", "G", "O", "O", "O", "G", "O", "", "", ""],
    ["", "", "", "", "", "", "O", "G", "G", "G", "G", "O", "", "", "", ""],
    ["", "", "", "", "", "", "", "O", "O", "O", "O", "", "", "", "", ""],
  ]

  const colorMap: Record<string, string> = {
    G: "#f59e0b", // Amber 500
    C: "#d946ef", // Fuchsia 500
    O: "#ffffff", // White outline
  }

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ shapeRendering: "crispEdges" }}
    >
      {grid.map((row, y) =>
        row.map((cell, x) => {
          if (!cell) return null
          return (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width={1}
              height={1}
              fill={colorMap[cell]}
            />
          )
        })
      )}
    </svg>
  )
}

// 3. Pixel Token Coin (16x16 grid)
export function PixelToken({ className = "", size = 48 }: PixelArtProps) {
  const grid = [
    ["", "", "", "", "O", "O", "O", "O", "O", "O", "O", "O", "", "", "", ""],
    ["", "", "O", "O", "F", "F", "F", "F", "F", "F", "F", "F", "O", "O", "", ""],
    ["", "O", "F", "F", "T", "T", "T", "T", "T", "T", "T", "T", "F", "F", "O", ""],
    ["", "O", "F", "T", "T", "T", "O", "O", "O", "O", "T", "T", "T", "F", "O", ""],
    ["O", "F", "T", "T", "T", "O", "T", "T", "T", "T", "O", "T", "T", "T", "F", "O"],
    ["O", "F", "T", "T", "T", "O", "T", "T", "T", "T", "O", "T", "T", "T", "F", "O"],
    ["O", "F", "T", "T", "T", "O", "O", "O", "O", "O", "T", "T", "T", "T", "F", "O"],
    ["O", "F", "T", "T", "T", "O", "T", "T", "T", "T", "O", "T", "T", "T", "F", "O"],
    ["O", "F", "T", "T", "T", "O", "T", "T", "T", "T", "O", "T", "T", "T", "F", "O"],
    ["O", "F", "T", "T", "T", "O", "O", "O", "O", "O", "T", "T", "T", "T", "F", "O"],
    ["O", "F", "T", "T", "T", "T", "T", "T", "T", "T", "T", "T", "T", "T", "F", "O"],
    ["", "O", "F", "F", "T", "T", "T", "T", "T", "T", "T", "T", "F", "F", "O", ""],
    ["", "", "O", "O", "F", "F", "F", "F", "F", "F", "F", "F", "O", "O", "", ""],
    ["", "", "", "", "O", "O", "O", "O", "O", "O", "O", "O", "", "", "", ""],
  ]

  const colorMap: Record<string, string> = {
    T: "#22d3ee", // Cyan Core
    F: "#a21caf", // Purple Border
    O: "#ffffff", // White outline
  }

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ shapeRendering: "crispEdges" }}
    >
      {grid.map((row, y) =>
        row.map((cell, x) => {
          if (!cell) return null
          return (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width={1}
              height={1}
              fill={colorMap[cell]}
            />
          )
        })
      )}
    </svg>
  )
}
