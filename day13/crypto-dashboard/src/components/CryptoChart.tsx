'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend)

type Props = {
  coinId: string
  name: string
}

const CryptoChart = ({ coinId, name }: Props) => {
  const [labels, setLabels] = useState<string[]>([])
  const [prices, setPrices] = useState<number[]>([])

  useEffect(() => {
    if (!coinId) return

    const fetchChartData = async () => {
      try {
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`,
          {
            params: {
              vs_currency: 'usd',
              days: 5,
            },
          }
        )

        const priceData = res.data.prices
        const formattedLabels = priceData.map((entry: any) =>
          new Date(entry[0]).toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
          })
        )

        const formattedPrices = priceData.map((entry: any) => entry[1])

        setLabels(formattedLabels)
        setPrices(formattedPrices)
      } catch (err) {
        console.error('Failed to fetch chart data', err)
      }
    }

    fetchChartData()
  }, [coinId])

  const data = {
    labels,
    datasets: [
      {
        label: `${name} Price (USD)`,
        data: prices,
        fill: true,
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        borderColor: 'rgb(34, 197, 94)',
        tension: 0.3,
      },
    ],
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mt-6">
      <h2 className="text-lg font-bold mb-2">{name} Price (Last 5 Days)</h2>
      <Line data={data} />
    </div>
  )
}

export default CryptoChart
