'use client'

import { useState } from 'react'
import { useCrypto } from '@/hooks/useCrypto'

type Props = {
  onSelect: (coinId: string, name: string) => void
}

const CryptoTable = ({ onSelect }: Props) => {
  const { data, isLoading, isError } = useCrypto()
  const [search, setSearch] = useState('')

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Failed to load</p>

  const filtered = data.filter((coin: any) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 w-full border rounded bg-white dark:bg-gray-800 dark:text-white"
      />

      <table className="w-full bg-white dark:bg-gray-800 border dark:border-gray-700 text-sm">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="p-2 text-left">Coin</th>
            <th className="p-2 text-left">Price</th>
            <th className="p-2 text-left">Change (24h)</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((coin: any) => (
            <tr
              key={coin.id}
              onClick={() => onSelect(coin.id, coin.name)}
              className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <td className="p-2">{coin.name}</td>
              <td className="p-2">${coin.current_price.toFixed(2)}</td>
              <td
                className="p-2"
                style={{
                  color: coin.price_change_percentage_24h > 0 ? 'green' : 'red',
                }}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CryptoTable
