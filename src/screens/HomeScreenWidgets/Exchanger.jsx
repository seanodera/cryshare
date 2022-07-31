import React, {useState} from 'react'
import { Button, ButtonGroup, Card, Form, FormControl, FormGroup, FormLabel, FormSelect, ToggleButton } from 'react-bootstrap'

const Exchanger = () => {
  const [radioValue, setRadioValue] = useState('1');
  const [amount, setAmount] = useState(0);
  const [depositCurrency, setDepositCurrency] = useState('');
  const [withdrawCurrency,setWithdrawCurrency] = useState('');
  const [rate,setRate] =useState(13.6);

  return (
    <Card className='round-corners '>
      
      <Card.Body className=' text-start'>
      <Card.Title>Exchange</Card.Title>
       <Form>
        <FormLabel>Amount</FormLabel>
        <FormControl placeholder='amount' type='number' value={amount} onChange={(e) => setAmount(e.currentTarget.value)}/>
        <FormGroup>
          <FormLabel>Deposit Currency</FormLabel>
          <FormSelect>
            <option>BTC</option>
          </FormSelect>
        </FormGroup>
        <FormGroup>
          <FormLabel>Destination Currency</FormLabel>
          <FormSelect>
            <option>ETH</option>
          </FormSelect>
        </FormGroup>
        <FormGroup>
        <FormLabel>Rate</FormLabel>
        <FormControl disabled value={rate}/>
        </FormGroup>
        <FormGroup>
          <FormLabel>Exchanged Amount</FormLabel>
          <FormControl value={amount * rate} type='number' onChange={(e) => setAmount(e.currentTarget.value/rate)}/>
        </FormGroup>
       
        
        
       </Form>
       
      </Card.Body>
      <Card.Footer>
      <Button variant='primary'>Confirm</Button>
      </Card.Footer>
    </Card>
  )
}

export default Exchanger