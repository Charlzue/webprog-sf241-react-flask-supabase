import React from 'react';
import Guestbook from './Guestbook';

function App() {
  return (
    <div className="App">
      <header style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f4f4f4' }}>
        <h1>Welcome to My Profile</h1>
        <p>Cute lang</p>
      </header>
      
      <main>
        <Guestbook />
      </main>
      
      <footer style={{ textAlign: 'center', marginTop: '50px', padding: '10px', fontSize: '0.8rem' }}>
        Built with Flask, React, and Supabase.
      </footer>
    </div>
  );
}

export default App;