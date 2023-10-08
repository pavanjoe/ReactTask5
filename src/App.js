import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    if (birthDate) {
      const birthYear = new Date(birthDate).getFullYear();
      const currentYear = new Date().getFullYear();
      const calculatedAge = currentYear - birthYear;
      setAge(calculatedAge);
    }
  };

  return (
    <div className="centered-container">
      <h1>Age Calculator</h1>
      <div>
        <label>Enter your date of birth:</label><br /><br />
        <input className='form-control custom'
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={calculateAge}>Calculate Age</button>
      {age && <b><p>Your age is: {age} years</p></b>}
    </div>
  );
}

export default App;
