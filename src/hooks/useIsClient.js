import { useState, useEffect } from 'react'

const useIsClient = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // This runs only on the client
    setIsClient(true)
  }, [])

  return isClient
}

export default useIsClient
