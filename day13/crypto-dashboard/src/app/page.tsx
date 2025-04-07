'use client'

import { useState } from 'react'
import ThemeToggle from '@/components/ThemeToggle'
import CryptoTable from '@/components/CryptoTable'
import CryptoChart from '@/components/CryptoChart'

export default function Home() {
  const [selectedCoin, setSelectedCoin] = useState<{ id: string; name: string } | null>(null)

  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-6 transition">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Crypto Dashboard</h1>
        <ThemeToggle />
      </div>

      <CryptoTable onSelect={(id, name) => setSelectedCoin({ id, name })} />

      {selectedCoin && <CryptoChart coinId={selectedCoin.id} name={selectedCoin.name} />}
    </main>
  )
}
