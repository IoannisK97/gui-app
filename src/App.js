import React, { useState } from 'react';
import './App.css'; 

const App = () => {
  const [showContent, setShowContent] = useState(false);

  const handleButtonClick = () => {
    setShowContent(!showContent);
  };

  const listOfStrings = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','Item 2', 'Item 3', 'Item 4', 'Item 5','Item 2', 'Item 3', 'Item 4', 'Item 5'];

  return (
    <div className="app-container">
      <div className="left-section">
        <button onClick={handleButtonClick}>QA Manager Gui</button>
      </div>
      {showContent && (
        <div className="right-section">
          <div className="object">Object 1</div>
          <div className="object">Object 2</div>
          <div className="object">Object 3</div>
          {listOfStrings.map((string, index) => (
              <li key={index}>{string}</li>
            ))}
        </div>
      )}
    </div>
  );
};

export default App;
