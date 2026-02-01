'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div style={{
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: '14px',
      lineHeight: '1.6',
      color: '#444',
      background: '#fff',
      minHeight: '100vh'
    }}>
      {/* Navbar - simplified design */}
      <nav style={{
        backgroundColor: '#333',
        padding: '8px 0',
        borderBottom: '3px solid #d40000'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 20px',
          flexWrap: isMobile ? 'wrap' : 'nowrap',
          gap: isMobile ? '15px' : '0'
        }}>
          {/* Logo */}
          <div style={{
            backgroundColor: 'white',
            padding: isMobile ? '6px 12px' : '8px 16px',
            borderRadius: '4px',
            fontWeight: 'bold',
            fontSize: isMobile ? '14px' : '16px',
            color: '#333'
          }}>
            EC-Council
          </div>

          {/* Right side navigation links */}
          <div style={{
            display: 'flex',
            gap: isMobile ? '15px' : '25px',
            alignItems: 'center'
          }}>
            <a href="#" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: isMobile ? '11px' : '12px'
            }}>Contact</a>
            <a href="#" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: isMobile ? '11px' : '12px'
            }}>Login</a>
            <a href="#" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: isMobile ? '11px' : '12px'
            }}>Register</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: isMobile ? '20px 15px' : '40px 20px'
      }}>
        {/* Certificate Summary Card */}
        <div style={{
          maxWidth: '800px',
          width: '100%',
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: isMobile ? '20px' : '30px',
          marginBottom: '40px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          {/* Name Header */}
          <h1 style={{
            fontSize: isMobile ? '24px' : '28px',
            fontWeight: '700',
            color: '#d40000',
            marginBottom: '30px',
            borderBottom: '2px solid #eee',
            paddingBottom: '10px',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            Twesigye Keith
          </h1>

          <div style={{
            display: 'flex',
            gap: isMobile ? '20px' : '30px',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            flexDirection: isMobile ? 'column' : 'row'
          }}>
            {/* Certificate Badge */}
            <div style={{
              backgroundColor: '#2980b9',
              borderRadius: '8px',
              padding: '20px',
              color: 'white',
              textAlign: 'center',
              minWidth: '150px',
              position: 'relative',
              alignSelf: isMobile ? 'center' : 'flex-start'
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
            <div style={{ flex: 1, minWidth: isMobile ? '100%' : '300px' }}>
              <h2 style={{
                fontSize: isMobile ? '16px' : '17px',
                fontWeight: '600',
                color: '#333',
                marginTop: isMobile ? '0' : '28px',
                marginBottom: '15px'
              }}>
                Certification Details:
              </h2>

              <p style={{
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '20px',
                fontSize: isMobile ? '13px' : '14px'
              }}>
                A Certified Ethical Hacker is a skilled professional who understands and knows how to look for weaknesses and
                vulnerabilities in target systems and uses the same knowledge and tools as a malicious hacker, but in a lawful and
                legitimate manner to assess the security posture of a target system(s). The Certified Ethical Hacker credential certifies
                individuals in the specific network security discipline of Ethical Hacking from a vendor-neutral perspective.
              </p>

              {/* Certification Table */}
              <div style={{ overflowX: 'auto' }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: isMobile ? '11px' : '13px',
                  marginBottom: '20px',
                  minWidth: isMobile ? '500px' : 'auto'
                }}>
                  <thead>
                    <tr>
                      <th style={{
                        background: '#e0e0e0',
                        padding: isMobile ? '8px' : '10px',
                        fontWeight: '600',
                        color: '#333',
                        textAlign: 'left'
                      }}>Certification Number</th>
                      <th style={{
                        background: '#e0e0e0',
                        padding: isMobile ? '8px' : '10px',
                        fontWeight: '600',
                        color: '#333',
                        textAlign: 'left'
                      }}>Certification Name</th>
                      <th style={{
                        background: '#e0e0e0',
                        padding: isMobile ? '8px' : '10px',
                        fontWeight: '600',
                        color: '#333',
                        textAlign: 'left'
                      }}>Issue Date</th>
                      <th style={{
                        background: '#e0e0e0',
                        padding: isMobile ? '8px' : '10px',
                        fontWeight: '600',
                        color: '#333',
                        textAlign: 'left'
                      }}>Expiry Date</th>
                      <th style={{
                        background: '#e0e0e0',
                        padding: isMobile ? '8px' : '10px',
                        fontWeight: '600',
                        color: '#333',
                        textAlign: 'left'
                      }}>Issued By</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{
                        padding: isMobile ? '8px' : '10px',
                        border: '1px solid #ccc',
                        color: '#666'
                      }}>ECC2504179368</td>
                      <td style={{
                        padding: isMobile ? '8px' : '10px',
                        border: '1px solid #ccc',
                        color: '#666'
                      }}>Certified Ethical Hacker</td>
                      <td style={{
                        padding: isMobile ? '8px' : '10px',
                        border: '1px solid #ccc',
                        color: '#666'
                      }}>09 September, 2025</td>
                      <td style={{
                        padding: isMobile ? '8px' : '10px',
                        border: '1px solid #ccc',
                        color: '#666'
                      }}>07 September, 2028</td>
                      <td style={{
                        padding: isMobile ? '8px' : '10px',
                        border: '1px solid #ccc'
                      }}>
                        <span style={{ color: '#d40000' }}>EC-Council</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <h4 style={{
                  color: '#333',
                  marginBottom: '8px',
                  fontSize: isMobile ? '15px' : '16px',
                  fontWeight: '600'
                }}>Skills:</h4>
                <p style={{ color: '#666', fontSize: isMobile ? '13px' : '14px' }}>
                  Reconnaissance, Gaining Access, Enumeration, Maintaining Access, and covering your tracks.
                </p>
              </div>

              <Link
                href="/certificate"
                style={{
                  backgroundColor: '#d40000',
                  color: 'white',
                  textDecoration: 'none',
                  padding: isMobile ? '10px 20px' : '12px 24px',
                  borderRadius: '6px',
                  fontSize: isMobile ? '13px' : '14px',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  width: isMobile ? '100%' : 'auto',
                  textAlign: 'center',
                  boxSizing: 'border-box'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#b30000'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#d40000'
                }}
              >
                View Full Certificate
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}