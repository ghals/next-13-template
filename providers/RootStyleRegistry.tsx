'use client'
import { ReactNode, useState } from 'react'

import { useServerInsertedHTML } from 'next/navigation'

import createCache from '@emotion/cache'
import { CacheProvider, Global } from '@emotion/react'
import { GlobalStyle } from 'app/global.style'

export default function RootStyleRegistry({ children }: { children: ReactNode }) {
  const [cache] = useState(() => {
    const cache = createCache({ key: 'css' })
    cache.compat = true
    return cache
  })

  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(cache.inserted).join(' '),
        }}
      />
    )
  })

  return (
    <CacheProvider value={cache}>
      {children}
      <Global styles={GlobalStyle} />
    </CacheProvider>
  )
}
