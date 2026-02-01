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

      {/* Back Button */}
      <Link href="/" style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        padding: '12px 20px',
        backgroundColor: '#e74c3c',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '6px',
        fontSize: '14px',
        fontWeight: 'bold',
        transition: 'all 0.3s ease',
        zIndex: 1000
      }}>
        ← Back to Summary
      </Link>

      {/* Certificate Title */}
      <h1 style={{
        color: isDark ? '#fff' : '#333',
        marginBottom: '30px',
        textAlign: 'center',
        fontSize: '28px'
      }}>
        Twesigye Keith - Certified Ethical Hacker
      </h1>

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
            backgroundColor: '#2980b9',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#1f5f8b'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#2980b9'
          }}
        >
          🖨️ Print Certificate
        </button>

        <a
          href="/certificate.jpeg"
          download="Twesigye_Keith_CEH_Certificate.jpeg"
          style={{
            backgroundColor: '#27ae60',
            color: 'white',
            textDecoration: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            display: 'inline-block'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#1e8449'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#27ae60'
          }}
        >
          📥 Download Certificate
        </a>
      </div>
    </main>
  )
}