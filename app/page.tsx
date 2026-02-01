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
      fontSize: '16px',
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
            <a href="https://www.eccouncil.org/login/" target="_blank" rel="noopener noreferrer" style={{
              color: '#d40000',
              textDecoration: 'none',
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 'bold'
            }}>Login</a>
            <a href="https://www.eccouncil.org/register/" target="_blank" rel="noopener noreferrer" style={{
              color: '#d40000',
              textDecoration: 'none',
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 'bold'
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
        padding: isMobile ? '15px 10px' : '40px 20px'
      }}>
        {/* Certificate Summary Card */}
        <div style={{
          maxWidth: isMobile ? '100%' : '1000px',
          width: '100%',
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: isMobile ? '15px' : '30px',
          marginBottom: '40px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          {/* Name Header */}
          <h1 style={{
            fontSize: isMobile ? '22px' : '32px',
            fontWeight: '700',
            color: '#d40000',
            marginBottom: isMobile ? '20px' : '30px',
            borderBottom: '2px solid #eee',
            paddingBottom: '10px',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            Twesigye Keith
          </h1>

          <div style={{
            display: 'flex',
            gap: isMobile ? '15px' : '30px',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'flex-start'
          }}>
            {/* Certificate Badge */}
            <div style={{
              backgroundColor: '#2980b9',
              borderRadius: '10px',
              padding: isMobile ? '12px' : '15px',
              color: 'white',
              textAlign: 'center',
              minWidth: isMobile ? '130px' : '150px',
              maxWidth: isMobile ? '200px' : 'none',
              position: 'relative',
              alignSelf: isMobile ? 'center' : 'flex-start',
              boxShadow: '0 3px 9px rgba(0,0,0,0.15)'
            }}>
              {/* White inner card */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '6px',
                padding: isMobile ? '15px 10px' : '18px 12px',
                margin: isMobile ? '6px' : '8px',
                position: 'relative'
              }}>
                {/* EC-Council header */}
                <div style={{
                  color: '#d40000',
                  fontSize: isMobile ? '11px' : '13px',
                  fontWeight: 'bold',
                  marginBottom: isMobile ? '10px' : '12px',
                  letterSpacing: '0.8px'
                }}>
                  EC-Council
                </div>
                
                {/* CEH with red line */}
                <div style={{
                  position: 'relative',
                  marginBottom: isMobile ? '8px' : '10px'
                }}>
                  <div style={{
                    fontSize: isMobile ? '24px' : '30px',
                    fontWeight: 'bold',
                    color: '#000',
                    letterSpacing: isMobile ? '3px' : '4px',
                    position: 'relative'
                  }}>
                    C<span style={{color: '#d40000'}}>|</span>EH
                  </div>
                </div>
                
                {/* Subtitle */}
                <div style={{
                  fontSize: isMobile ? '7px' : '8px',
                  color: '#666',
                  marginBottom: isMobile ? '10px' : '12px',
                  letterSpacing: '1.5px'
                }}>
                  Certified | Ethical | Hacker
                </div>
                
                {/* Certified text */}
                <div style={{
                  backgroundColor: '#000',
                  color: 'white',
                  padding: isMobile ? '4px 8px' : '5px 10px',
                  fontSize: isMobile ? '10px' : '12px',
                  fontWeight: 'bold',
                  letterSpacing: '2px',
                  marginBottom: isMobile ? '8px' : '10px'
                }}>
                  CERTIFIED
                </div>
              </div>
              
              {/* Verified badge */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: isMobile ? '4px' : '5px',
                marginTop: isMobile ? '8px' : '10px',
                fontSize: isMobile ? '10px' : '12px',
                fontWeight: 'bold'
              }}>
                <span style={{
                  color: '#4CAF50',
                  fontSize: isMobile ? '12px' : '14px'
                }}>✓</span>
                <span style={{ color: 'white' }}>Verified</span>
              </div>
            </div>

            {/* Certificate Details */}
            <div style={{ 
              flex: 1, 
              minWidth: isMobile ? '100%' : '300px',
              width: isMobile ? '100%' : 'auto'
            }}>
              <h2 style={{
                fontSize: isMobile ? '16px' : '20px',
                fontWeight: '600',
                color: '#333',
                marginTop: isMobile ? '15px' : '28px',
                marginBottom: '15px'
              }}>
                Certification Details:
              </h2>

              <p style={{
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '20px',
                fontSize: isMobile ? '13px' : '16px'
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
                  fontSize: isMobile ? '13px' : '15px',
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
                  fontSize: isMobile ? '17px' : '18px',
                  fontWeight: '600'
                }}>Skills:</h4>
                <p style={{ color: '#666', fontSize: isMobile ? '15px' : '16px' }}>
                  Reconnaissance, Gaining Access, Enumeration, Maintaining Access, and covering your tracks.
                </p>
              </div>

              {/* ANSI Accreditation Section */}
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ 
                  color: '#333', 
                  marginBottom: '15px',
                  fontSize: isMobile ? '17px' : '18px',
                  fontWeight: '600'
                }}>Standards:</h4>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '10px'
                }}>
                  {/* ANSI Logo */}
                  <div style={{
                    backgroundColor: '#2980b9',
                    borderRadius: '50%',
                    width: isMobile ? '80px' : '100px',
                    height: isMobile ? '50px' : '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    boxShadow: '0 2px 8px rgba(41, 128, 185, 0.3)'
                  }}>
                    <div style={{
                      color: 'white',
                      fontSize: isMobile ? '16px' : '20px',
                      fontWeight: 'bold',
                      letterSpacing: '2px'
                    }}>
                      ANSI
                    </div>
                    <div style={{
                      position: 'absolute',
                      bottom: '8px',
                      color: 'white',
                      fontSize: isMobile ? '8px' : '10px',
                      fontWeight: 'bold'
                    }}>
                      ACCREDITED
                    </div>
                  </div>
                  
                  {/* ANSI Text */}
                  <div style={{
                    textAlign: 'left',
                    color: '#666'
                  }}>
                    <div style={{
                      fontSize: isMobile ? '14px' : '16px',
                      fontWeight: '600',
                      marginBottom: '5px'
                    }}>
                      ANSI Accredited Program
                    </div>
                    <div style={{
                      fontSize: isMobile ? '12px' : '14px',
                      fontWeight: 'bold',
                      letterSpacing: '1px'
                    }}>
                      PERSONNEL CERTIFICATION
                    </div>
                    <div style={{
                      fontSize: isMobile ? '11px' : '13px',
                      marginTop: '5px',
                      fontWeight: '600'
                    }}>
                      17024
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/certificate"
                style={{
                  backgroundColor: '#d40000',
                  color: 'white',
                  textDecoration: 'none',
                  padding: isMobile ? '10px 20px' : '12px 24px',
                  borderRadius: '6px',
                  fontSize: isMobile ? '15px' : '16px',
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