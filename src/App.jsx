import { useState } from 'react';
import ColorButton from './components/ColorButton';
import ColorPreview from './components/ColorPreview';
import Card from './components/Card'; 

export default function App() {
  const [selectedColor, setSelectedColor] = useState(null);
  const handleColorClick = (color) => setSelectedColor(color);
  const resetColor = () => setSelectedColor(null);
  const colors = [ 'black', 'white', 'green', 'white', 'black', 'orange', 'purple' ];

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial', color: 'white' }}>
      <h1 style={{ textAlign: 'center' }}>🎨 Color Palette Picker</h1>


      <Card>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', }}>
          <ColorButton color="red" emoji="🟥" onClick={handleColorClick} />
          <ColorButton color="blue" emoji="🟦" onClick={handleColorClick} />
          <ColorButton color="green" emoji="🟩" onClick={handleColorClick} />
          <ColorButton color="white" emoji="⬜" onClick={handleColorClick} />
          <ColorButton color="black" emoji="⬛" onClick={handleColorClick} />
          <ColorButton color="orange" emoji="🟧" onClick={handleColorClick} />
          <ColorButton color="purple" emoji="🟪" onClick={handleColorClick} />

        </div>

        <ColorPreview color={selectedColor} />

        <button
          onClick={resetColor}
          style={{
            padding: '8px 22px',
            backgroundColor: '#d67d7def',
            color: '#000000',
            border: '2px solid black',
            borderRadius: '12px',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          Reset
        </button>
      </Card>
    </div>
  );
}
