import React from 'react'
import RootLayout from './layout/RootLayout'
import { ThemeProvider, useTheme } from './hooks/ThemeProvider';

const AfterApp = () => {

  return (
    <ThemeProvider>
      <RootLayout />
    </ThemeProvider>
  )
}

export default AfterApp