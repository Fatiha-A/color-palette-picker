export default function ColorButton({ color, emoji, onClick }) {
  return (
    <button
      onClick={() => onClick(color)}
      style={{
        backgroundColor: "#64525204",
        margin: '4px',
        padding: '4px 6px',
        border: '2PX solid black',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '10px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {emoji} {color.toUpperCase()}
    </button>
  );
}

