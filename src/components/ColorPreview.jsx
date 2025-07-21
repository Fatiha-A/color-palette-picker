export default function ColorPreview({ color }) {
  return (
    <div style={{ margin: '20px' }}>
      {color ? (
        <div
          style={{
            width: '150px',
            height: '150px',
            backgroundColor: color,
            borderRadius: '100px',
            padding: '12px 12px',
            margin: 'auto',
            border: '2px solid #ccc',
          }}
        />
      ) : (
        <p style={{ fontStyle: 'italic' }}>No color selected</p>
      )}
    </div>
  );
}
