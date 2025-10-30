import './index.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SignPage() {
  const navigate = useNavigate();
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleSignin = () => {
    navigate('/Game/play', { state: { player1, player2 } });
  };

  return (
    <>
      <div className="sign">
        <div className='container'>
          <h1>Sign In</h1>
          <label htmlFor="player1">PLAYER 1</label>
          <input
            type="text"
            id="player1"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
          />
          <label htmlFor="player2">PLAYER 2</label>
          <input
            type="text"
            id="player2"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
          />
          <button onClick={handleSignin}>SIGN IN</button>
        </div>
      </div>
    </>
  );
}

export default SignPage;
