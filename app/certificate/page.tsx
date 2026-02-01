'use client'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

export default function CertificatePage() {
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
          padding: '0',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: '#d40000',
          color: 'white',
          cursor: 'pointer',
          fontSize: '20px',
          boxShadow: '0 2px 8px rgba(212, 64, 0, 0.3)',
          transition: 'all 0.3s ease',
          zIndex: 1000,
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'
          e.currentTarget.style.backgroundColor = '#b30000'
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 64, 0, 0.4)'
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.backgroundColor = '#d40000'
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(212, 64, 0, 0.3)'
        }}
      >
        {isDark ? '☀️' : '🌙'}
      </button>

      {/* Back Button */}
      <Link href="/" style={{
        position: 'fixed',
        top: '4px',
        left: '20px',
        padding: '0',
        backgroundColor: 'transparent',
        color: '#d40000',
        textDecoration: 'none',
        fontSize: '50px',
        fontWeight: 'bold',
        transition: 'all 0.3s ease',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        width: '80px',
        height: '80px'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.color = '#b30000'
        e.currentTarget.style.transform = 'translateX(-8px) scale(1.1)'
        e.currentTarget.style.textShadow = '2px 2px 4px rgba(212, 64, 0, 0.3)'
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.color = '#d40000'
        e.currentTarget.style.transform = 'translateX(0) scale(1)'
        e.currentTarget.style.textShadow = 'none'
      }}
      >
        «
      </Link>

      {/* Full Certificate */}
      <div style={{
        maxWidth: '95%',
        boxShadow: isDark ? '0 4px 8px rgba(0,0,0,0.5)' : '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: isDark ? '#2a2a2a' : 'white',
        transition: 'all 0.3s ease'
      }}>
        <Image
          src="/certificate.jpeg"
          alt="Twesigye Keith - Ethical Hacking Certificate"
          width={1000}
          height={750}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block'
          }}
        />
      </div>

      {/* Download/Print Options */}
      <div style={{
        marginTop: '30px',
        display: 'flex',
        gap: '15px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <button
          onClick={() => window.print()}
          style={{
            backgroundColor: '#000',
            color: '#d40000',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#333'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#000'
          }}
        >
          Print Certificate
        </button>

        <a
          href="/certificate.jpeg"
          download="Twesigye_Keith_CEH_Certificate.jpeg"
          style={{
            backgroundColor: '#000',
            color: '#d40000',
            textDecoration: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            display: 'inline-block'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#333'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#000'
          }}
        >
          Download Certificate
        </a>
      </div>
    </main>
  )
}