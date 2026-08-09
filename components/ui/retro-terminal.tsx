"use client"

import React, { useState, useEffect, useRef } from "react"
import { Terminal } from "lucide-react"

const LOG_TEMPLATES = [
  { type: "INFO", text: "Connecting to RPC: https://rpc.lfdt.pccoe.edu..." },
  { type: "INFO", text: "RPC Connection Established. Client version: Geth v1.13.0" },
  { type: "INFO", text: "Syncing headers... Block #4,829,193 loaded." },
  { type: "DEPLOY", text: "Compiling contract: CampuSign.sol (Solc: v0.8.20)..." },
  { type: "DEPLOY", text: "CampuSign bytecode generated. Optimizations enabled (200 runs)." },
  { type: "TX", text: "Deploying CampuSign to address: 0x8C1B...fC45" },
  { type: "PENDING", text: "Tx Hash: 0x5a2d67bf3c914e1a0b3f88f8d229e0018f2ac391ae88b1b22e11" },
  { type: "CONFIRMED", text: "Block Mined #4,829,194! Gas Used: 1,230,480 (82.03% Limit)" },
  { type: "SUCCESS", text: "CampuSign contract successfully deployed at: 0x8C1B...fC45" },
  { type: "EVENT", text: "New Transfer Event: 10,000 LFDT Tokens -> 0x7a83...4b12" },
  { type: "DEPLOY", text: "Compiling contract: CertiLedger.sol..." },
  { type: "TX", text: "Publishing Certificate Hash: QmZtmU...8f2a on Polygon Mainnet" },
  { type: "CONFIRMED", text: "Polygon Block Mined #32,849,201. Status: SUCCESS" },
  { type: "SUCCESS", text: "CertiLedger verified diploma hash successfully." }
]

export default function RetroTerminal() {
  const [logs, setLogs] = useState<string[]>([])
  const [blockNumber, setBlockNumber] = useState(4829193)
  const [gasPrice, setGasPrice] = useState(15)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setLogs([
      "> [INFO] Initializing PCCOE EVM Node v0.1.0...",
      "> [INFO] Loading genesis configuration...",
      "> [INFO] Sync status: 100% complete."
    ])

    let templateIndex = 0

    const logInterval = setInterval(() => {
      const template = LOG_TEMPLATES[templateIndex]
      const timestamp = new Date().toLocaleTimeString()
      const logLine = `> [${timestamp}] [${template.type}] ${template.text}`
      
      setLogs((prevLogs) => {
        const updated = [...prevLogs, logLine]
        if (updated.length > 9) {
          updated.shift()
        }
        return updated
      })

      if (template.type === "CONFIRMED" || template.type === "SUCCESS") {
        setBlockNumber((prev) => prev + 1)
        setGasPrice(() => Math.floor(Math.random() * 8) + 12)
      }

      templateIndex = (templateIndex + 1) % LOG_TEMPLATES.length
    }, 2000)

    return () => clearInterval(logInterval)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-black/90 shadow-glow font-retro w-full max-w-lg mx-auto">
      {/* Console top bar */}
      <div className="flex items-center justify-between bg-slate-900 px-4 py-2 border-b border-cyan-500/20 text-xs text-cyan-400">
        <div className="flex items-center gap-2">
          <Terminal className="h-3.5 w-3.5" />
          <span className="uppercase tracking-wider">EVM CONSOLE MONITOR v0.1</span>
        </div>
        <div className="flex items-center gap-3 text-[10px]">
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            LIVE
          </span>
          <span className="text-slate-400">|</span>
          <span>BLOCK: #{blockNumber}</span>
          <span className="text-slate-400">|</span>
          <span className="text-cyan-300">{gasPrice} GWEI</span>
        </div>
      </div>

      {/* Console Display Screen */}
      <div className="crt-scanlines bg-[#020d02] p-4 min-h-[220px] text-[#33ff33] text-sm overflow-hidden space-y-1 relative select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(51,255,51,0.06),transparent_80%)] pointer-events-none" />

        <div className="space-y-1.5" ref={containerRef}>
          {logs.map((log, index) => {
            let color = "text-[#33ff33]"
            if (log.includes("[DEPLOY]")) color = "text-[#d946ef]"
            if (log.includes("[TX]") || log.includes("[PENDING]")) color = "text-[#eab308]"
            if (log.includes("[CONFIRMED]") || log.includes("[SUCCESS]")) color = "text-[#22d3ee]"
            
            return (
              <div key={index} className={`${color} leading-relaxed text-glow-green text-xs md:text-sm font-mono break-all`}>
                {log}
              </div>
            )
          })}
          
          <div className="flex items-center gap-1.5 text-xs md:text-sm pt-1">
            <span className="text-[#33ff33] text-glow-green">&gt;</span>
            <span className="h-4 w-2 bg-[#33ff33] animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}
