import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('usa');
  const [contactNumber, setContactNumber] = useState('');
  const [checkBoxChecked, setCheckBoxChecked] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleCheckBoxChange = (event) => {
    setCheckBoxChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Email:', email);
    console.log('Gender:', gender);
    console.log('Country:', country);
    console.log('Contact Number:', contactNumber);
    console.log('Checkbox Checked:', checkBoxChecked);

    
  };

  const handleReset = () => {
    setName('');
    setPassword('');
    setConfirmPassword('');
    setEmail('');
    setGender('');
    setCountry('usa');
    setContactNumber('');
    setCheckBoxChecked(false);
  };

  return (
    <div className="container">
      <h2>Register Form</h2>

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>name</label>
          <input type='text' placeholder='Enter The Your name' value={name} onChange={handleNameChange} required/>
        </div>

        <div className='form-group'>
          <label>password</label>
          <input type='password' placeholder='password' value={password} onChange={handlePasswordChange} required/>
        </div>

        <div className='form-group'>
          <label>confirmpassword</label>
          <input type='password' placeholder='confirmpassword' value={confirmPassword} onChange={handleConfirmPasswordChange} required/>
        </div>

        <div className='form-group'>
          <label>Email</label>
          <input type='text' placeholder='email' value={email} onChange={handleEmailChange} required/>
        </div>

        <div className='form-group'>
          <label className="radio-label">male
            <input type='radio' name="gender" value="male" checked={gender === 'male'} onChange={handleGenderChange} />
          </label>
          <label className="radio-label">female
            <input type='radio' name="gender" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
          </label>
        </div>

        <div className='form-group'>
          <label>country</label>
          <select className='country' id="country" name="country" value={country} onChange={handleCountryChange} required>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="uk">UK</option>
            <option value="australia">Australia</option>
          </select>
        </div>

        <div className='form-group'>
          <label>Contact Number</label>
          <input type='text' placeholder='Enter your contact number' value={contactNumber} onChange={handleContactNumberChange} required/>
        </div>

        <div className='form-group'>
          <label>checkbox</label>
          <input type='checkbox' checked={checkBoxChecked} onChange={handleCheckBoxChange} required/>
        </div>

        <div className='form-button'>
          <button className='restate-button' type='reset' onClick={handleReset}>Reset</button>
          <button className='submit-button' type='submit'>Submit</button>
        </div>
      </form>

    </div>
  );
}

export default App;
