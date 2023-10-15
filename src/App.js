import React, { useState } from 'react';
import './App.css';

function App() {
    const [isColorListVisible, setIsColorListVisible] = useState(false);
    const [selectedColor, setSelectedColor] = useState('');
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#8A2BE2', '#A52A2A', '#DEB887', '#5F9EA0', '#7FFF00'];

    const toggleColorList = () => {
        setIsColorListVisible(!isColorListVisible);
    };

    const selectColor = (color) => {
        setSelectedColor(color);
        setIsColorListVisible(false);
    };

    return (
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <button 
                className="pick-color-button"
                style={{ backgroundColor: selectedColor }}
                onClick={toggleColorList}
            >
                {selectedColor || 'Pick a color'}
            </button>

            {isColorListVisible && (
                <div className="color-list">
                    {colors.map((color, index) => (
                        <div
                            key={index}
                            className="color-box"
                            style={{ backgroundColor: color }}
                            onClick={() => selectColor(color)}
                        ></div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
