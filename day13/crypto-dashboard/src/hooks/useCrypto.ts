'use client'
import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export const useCrypto = () => {
  const { data, error } = useSWR(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd',
    fetcher
  )

  return {
    data,
    isLoading: !data && !error, // ✅ manually calculated
    isError: !!error,
  }
}

