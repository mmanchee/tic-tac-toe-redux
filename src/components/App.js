import React from 'react';
import Game from './Game';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <div className="contain">
        <Header />
        <div id="spacing">
          <Game />
        </div>
        <Footer />
      </div>
      
    </React.Fragment>
  );
}



export default App;
