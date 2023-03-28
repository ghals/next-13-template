'use client'
import { ReactNode } from 'react'

import { Global } from '@emotion/react'
import { GlobalStyle } from 'app/global.style'

import * as S from './AppLayout.style'

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <S.LayoutContainer>
      <S.Inner>
        {children}
        <Global styles={GlobalStyle} />
      </S.Inner>
    </S.LayoutContainer>
  )
}

export default AppLayout
