import { useEffect, useState } from 'react'

export function useMount() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return mounted
}
