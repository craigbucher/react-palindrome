import { useState } from 'react'
import './App.css'
import CheckPalindrome from '../components/CheckPalindrome'

function App() {
  const [palindrome, setPalindrome] = useState('')

  const handleChange = () => {
    setPalindrome(document.getElementById('input-filed').value)
  }

  return (
    <div className="App">
      <h1>Palindrome Checker</h1>
      <input id="input-filed" onChange={handleChange} placeholder='Enter a word...'></input>
      <div className='output'>
        {
          <CheckPalindrome palindrome={palindrome} />
        }
      </div>
    </div>
  )
}

export default App
