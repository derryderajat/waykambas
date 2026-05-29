export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid #000000',
        padding: '80px clamp(20px, 4vw, 60px) 0',
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
    >
      {/* Top: Office Info */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          paddingBottom: '80px',
        }}
      >
        <OfficeColumn
          city="Waykambas"
          cityEn="LAMPUNG"
          address="Taman Nasional Waykambas, Labuhan Ratu, Lampung Timur"
        />
        <OfficeColumn
          city="Bandar Lampung"
          cityEn="KOTA"
          address="Jl. Wolter Monginsidi No. 25, Tanjung Karang Pusat"
        />
        <OfficeColumn
          city="Jakarta"
          cityEn="KANTOR PUSAT"
          address="Jl. Sudirman Kav. 28, Jakarta Selatan 12920"
        />
        <div>
          <p
            style={{
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              color: '#000000',
              marginBottom: '20px',
            }}
          >
            KONTAK
          </p>
          <p style={{ fontSize: '14px', color: '#666666', lineHeight: 2 }}>
            <span style={{ fontSize: '11px', color: '#999', letterSpacing: '0.05em' }}>(COMING SOON)</span>
            <br />
            info@waykambastour.id
            <br />
            +62 (721) 123 4567
            <br />
            Instagram: @waykambastour
          </p>
        </div>
      </div>

      {/* Bottom: Giant Wordmark */}
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          lineHeight: 0.85,
          paddingBottom: '0',
        }}
      >
        <span
          style={{
            display: 'block',
            fontSize: 'clamp(80px, 18vw, 320px)',
            fontWeight: 400,
            letterSpacing: '-0.04em',
            color: '#000000',
            whiteSpace: 'nowrap',
            transform: 'translateY(15%)',
            userSelect: 'none',
          }}
        >
          WAYKAMBAS
        </span>
      </div>
    </footer>
  )
}

function OfficeColumn({
  city,
  cityEn,
  address,
}: {
  city: string
  cityEn: string
  address: string
}) {
  return (
    <div>
      <p
        style={{
          fontSize: '12px',
          fontWeight: 500,
          letterSpacing: '0.18em',
          color: '#000000',
          marginBottom: '20px',
        }}
      >
        {cityEn}
      </p>
      <p style={{ fontSize: '16px', fontWeight: 500, color: '#000000', marginBottom: '8px' }}>
        {city}
      </p>
      <p
        style={{
          fontSize: '14px',
          color: '#666666',
          lineHeight: 1.6,
          marginBottom: '12px',
          maxWidth: '260px',
        }}
      >
        {address}
      </p>

    </div>
  )
}
