'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
      transition: 'background-color 0.3s ease'
    }}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '12px',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: isDark ? '#333' : '#fff',
          color: isDark ? '#fff' : '#333',
          cursor: 'pointer',
          fontSize: '20px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease',
          zIndex: 1000
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
        }}
      >
        {isDark ? '☀️' : '🌙'}
      </button>

      <div style={{
        maxWidth: '90%',
        boxShadow: isDark ? '0 4px 8px rgba(0,0,0,0.5)' : '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: isDark ? '#2a2a2a' : 'white',
        transition: 'all 0.3s ease'
      }}>
        <Image
          src="/certificate.jpeg"
          alt="Ethical Hacking Certificate"
          width={800}
          height={600}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block'
          }}
        />
      </div>
    </main>
  )
}