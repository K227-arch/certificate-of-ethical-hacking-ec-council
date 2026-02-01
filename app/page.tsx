'use client'

import { useState } from 'react'
import Link from 'next/link'

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
      justifyContent: 'flex-start',
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

      {/* Certificate Summary Card */}
      <div style={{
        maxWidth: '800px',
        width: '100%',
        backgroundColor: isDark ? '#2a2a2a' : 'white',
        borderRadius: '8px',
        padding: '30px',
        marginBottom: '40px',
        marginTop: '60px',
        boxShadow: isDark ? '0 4px 8px rgba(0,0,0,0.5)' : '0 4px 8px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease'
      }}>
        {/* Name Header */}
        <h1 style={{
          color: '#e74c3c',
          fontSize: '28px',
          fontWeight: 'bold',
          marginBottom: '30px',
          borderBottom: `2px solid ${isDark ? '#444' : '#eee'}`,
          paddingBottom: '10px'
        }}>
          Twesigye Keith
        </h1>

        <div style={{
          display: 'flex',
          gap: '30px',
          alignItems: 'flex-start',
          flexWrap: 'wrap'
        }}>
          {/* Certificate Badge */}
          <div style={{
            backgroundColor: '#2980b9',
            borderRadius: '8px',
            padding: '20px',
            color: 'white',
            textAlign: 'center',
            minWidth: '150px',
            position: 'relative'
          }}>
            <div style={{
              backgroundColor: 'white',
              color: '#2980b9',
              padding: '8px',
              borderRadius: '4px',
              marginBottom: '10px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              EC-Council
            </div>
            <div style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '5px'
            }}>
              CEH
            </div>
            <div style={{
              fontSize: '12px',
              marginBottom: '15px'
            }}>
              Certified Ethical Hacker
            </div>
            <div style={{
              backgroundColor: 'white',
              color: '#2980b9',
              padding: '8px',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              CERTIFIED
            </div>
            <div style={{
              marginTop: '10px',
              fontSize: '12px',
              color: '#4CAF50'
            }}>
              ✓ Verified
            </div>
          </div>

          {/* Certificate Details */}
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{
              color: isDark ? '#fff' : '#333',
              marginBottom: '15px',
              fontSize: '18px'
            }}>
              Certification Details:
            </h3>
            
            <p style={{
              color: isDark ? '#ccc' : '#666',
              lineHeight: '1.6',
              marginBottom: '20px',
              fontSize: '14px'
            }}>
              A Certified Ethical Hacker is a skilled professional who understands and knows how to look for weaknesses and 
              vulnerabilities in target systems and uses the same knowledge and tools as a malicious hacker, but in a lawful and 
              legitimate manner to assess the security posture of a target system(s). The Certified Ethical Hacker credential certifies 
              individuals in the specific network security discipline of Ethical Hacking from a vendor-neutral perspective.
            </p>

            {/* Certification Table */}
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              marginBottom: '20px',
              fontSize: '14px'
            }}>
              <thead>
                <tr style={{ backgroundColor: isDark ? '#333' : '#f8f9fa' }}>
                  <th style={{ padding: '8px', textAlign: 'left', color: isDark ? '#fff' : '#333', border: `1px solid ${isDark ? '#444' : '#ddd'}` }}>Certification Number</th>
                  <th style={{ padding: '8px', textAlign: 'left', color: isDark ? '#fff' : '#333', border: `1px solid ${isDark ? '#444' : '#ddd'}` }}>Certification Name</th>
                  <th style={{ padding: '8px', textAlign: 'left', color: isDark ? '#fff' : '#333', border: `1px solid ${isDark ? '#444' : '#ddd'}` }}>Issue Date</th>
                  <th style={{ padding: '8px', textAlign: 'left', color: isDark ? '#fff' : '#333', border: `1px solid ${isDark ? '#444' : '#ddd'}` }}>Expiry Date</th>
                  <th style={{ padding: '8px', textAlign: 'left', color: isDark ? '#fff' : '#333', border: `1px solid ${isDark ? '#444' : '#ddd'}` }}>Issued By</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '8px', color: isDark ? '#ccc' : '#666', border: `1px solid ${isDark ? '#444' : '#ddd'}` }}>ECC2504179368</td>
                  <td style={{ padding: '8px', color: isDark ? '#ccc' : '#666', border: `1px solid ${isDark ? '#444' : '#ddd'}` }}>Certified Ethical Hacker</td>
                  <td style={{ padding: '8px', color: isDark ? '#ccc' : '#666', border: `1px solid ${isDark ? '#444' : '#ddd'}` }}>09 September, 2025</td>
                  <td style={{ padding: '8px', color: isDark ? '#ccc' : '#666', border: `1px solid ${isDark ? '#444' : '#ddd'}` }}>07 September, 2028</td>
                  <td style={{ padding: '8px', border: `1px solid ${isDark ? '#444' : '#ddd'}` }}>
                    <span style={{ color: '#e74c3c' }}>EC-Council</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <div style={{ marginBottom: '15px' }}>
              <h4 style={{ color: isDark ? '#fff' : '#333', marginBottom: '8px' }}>Skills:</h4>
              <p style={{ color: isDark ? '#ccc' : '#666', fontSize: '14px' }}>
                Reconnaissance, Gaining Access, Enumeration, Maintaining Access, and covering your tracks.
              </p>
            </div>

            <Link
              href="/certificate"
              style={{
                backgroundColor: '#e74c3c',
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
                e.currentTarget.style.backgroundColor = '#c0392b'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#e74c3c'
              }}
            >
              View Full Certificate
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}