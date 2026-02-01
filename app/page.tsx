import Image from 'next/image'

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      backgroundColor: '#f5f5f5'
    }}>
      <h1 style={{
        marginBottom: '30px',
        color: '#333',
        textAlign: 'center'
      }}>
        Ethical Hacking Certificate
      </h1>
      
      <div style={{
        maxWidth: '90%',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: 'white'
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