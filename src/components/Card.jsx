export default function Card({ children }) {
  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: '#9c2f2f28',
        boxShadow: '0 4px 12px rgba(252, 247, 244, 1)',
        borderRadius: '46px',
        textAlign: 'center',
      }}
    >
      {children}
    </div>
  );
}