import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {

  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [interest, setInterest] = useState(0)
  const [isPrincipleValid, setIsPrincipleValid] = useState(false)
  const [isInterestValid, setIsInterestValid] = useState(false)
  const [isYearValid, setIsYearValid] = useState(false)

  const handleCalculate = (e) => {
    e.preventDefault()
    console.log('Inside handleCalculate function');
    if(principle && rate && year){
      setInterest(principle*rate*year/100)
    }else{
      alert("Please fll form Completely")
    }
  }

  // input validation

  const inputValidation = (inputTag) => {
    const { name, value } = inputTag
    console.log(name, value);
    // console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    // console.log(!!value.match(/\d*\.?\d+$/));
    if (name == "priciple") {
      setPrinciple(value)
      !!value.match(/\d*\.?\d+$/) ? isPrincipleValid(false) : setIsPrincipleValid(true)
    }else if(name == "interest" ){
      setRate(value)
      !!value.match(/\d*\.?\d+$/) ? isInterestValid(false) : setIsInterestValid(true)
    }else if (name == "year") {
      setYear(value)
      !!value.match(/\d*\.?\d+$/) ? isYearValid(false) : setIsYearValid(true)
    }
  }

  // Reset Button

  const handleReset = ()=>{
    setPrinciple(0)
    setInterest(0)
    setRate(0)
    setYear(0)
    setIsInterestValid(false)
    setIsPrincipleValid(false)
    setIsYearValid(false)
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-dark' style={{ minHeight: '100vh', width: '100%' }}>
      <div style={{ width: '600px' }} className='bg-light rounded p-4'>
        <h1 style={{ fontWeight: '700' }}>Simple Interest Calculator</h1>
        <p>Calculate your simple Interest Easily...</p>
        <div className='d-flex justify-content-center align-items-center shadow text-light flex-column bg-warning rounded p-3'>
          <h1 className='fw-bolder'>₹ {interest}</h1>
          <p>Total Interest</p>
        </div>
        <form className="mt-5">
          <div className="mb-3">
            <TextField className='w-100' value={principle || ""} name='priciple' onChange={e => inputValidation(e.target)} id="outlined-basic" label="₹ Principle Amount" variant="outlined" />
          </div>
          {
            isPrincipleValid &&
            <div className="mb-3 text-danger">Invalid Princple Amount</div>
          }
          <div className="mb-3">
            <TextField className='w-100' value={rate || ""} onChange={e => inputValidation(e.target)} name='interest' id="outlined-basic1" label="Rate of Interest (p.a)%" variant="outlined" />
          </div>
          {
            isInterestValid &&
            <div className="mb-3 text-danger">Invalid Interest Percentage</div>
          }
          <div className="mb-3">
            <TextField className='w-100' value={year || ""} onChange={e => inputValidation(e.target)} name='year' id="outlined-basic2" label="Time Period (Yr)" variant="outlined" />
          </div>
          {
            isYearValid &&
            <div className="mb-3 text-danger">Invalid Time Period</div>
          }
          <Stack className='mt-4' direction="row" spacing={2}>
            <Button disabled={isPrincipleValid || isYearValid || isInterestValid} type='submit' onClick={handleCalculate} style={{ width: '50%', height: '70px' }} className='bg-dark' variant="contained">Calculate</Button>
            <Button onClick={handleReset} style={{ width: '50%', height: '70px' }} variant="outlined">Reset</Button>
          </Stack>
        </form>
      </div>
    </div>
  )
}

export default App
