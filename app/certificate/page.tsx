'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CertificatePage() {
  const [isDark, setIsDark] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: isMobile ? '15px' : '20px',
      backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
      transition: 'background-color 0.3s ease'
    }}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        style={{
          position: 'fixed',
          top: isMobile ? '15px' : '20px',
          right: isMobile ? '15px' : '20px',
          padding: '0',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: '#d40000',
          color: 'white',
          cursor: 'pointer',
          fontSize: isMobile ? '16px' : '20px',
          boxShadow: '0 2px 8px rgba(212, 64, 0, 0.3)',
          transition: 'all 0.3s ease',
          zIndex: 1000,
          width: isMobile ? '36px' : '48px',
          height: isMobile ? '36px' : '48px',
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
        top: isMobile ? '10px' : '4px',
        left: isMobile ? '15px' : '20px',
        padding: '0',
        backgroundColor: 'transparent',
        color: '#d40000',
        textDecoration: 'none',
        fontSize: isMobile ? '32px' : '50px',
        fontWeight: 'bold',
        transition: 'all 0.3s ease',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        width: isMobile ? '56px' : '80px',
        height: isMobile ? '56px' : '80px'
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
        maxWidth: isMobile ? '95%' : '40%',
        width: '100%',
        boxShadow: isDark ? '0 4px 8px rgba(0,0,0,0.5)' : '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: isDark ? '#2a2a2a' : 'white',
        transition: 'all 0.3s ease',
        marginTop: isMobile ? '70px' : '90px',
        marginBottom: isMobile ? '15px' : '30px'
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
        marginTop: isMobile ? '15px' : '30px',
        display: 'flex',
        gap: isMobile ? '10px' : '15px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: isMobile ? 'column' : 'row',
        width: isMobile ? '100%' : 'auto',
        maxWidth: isMobile ? '280px' : 'none'
      }}>
        <button
          onClick={() => window.print()}
          style={{
            backgroundColor: '#000',
            color: '#d40000',
            border: 'none',
            padding: isMobile ? '10px 16px' : '12px 24px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: isMobile ? '12px' : '14px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            width: isMobile ? '100%' : 'auto'
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
            padding: isMobile ? '10px 16px' : '12px 24px',
            borderRadius: '6px',
            fontSize: isMobile ? '12px' : '14px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            display: 'inline-block',
            textAlign: 'center',
            width: isMobile ? '100%' : 'auto',
            boxSizing: 'border-box'
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