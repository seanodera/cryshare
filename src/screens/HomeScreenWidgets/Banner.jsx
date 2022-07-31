import React from 'react'
import { Container } from 'react-bootstrap'
import {BsFillCalendarFill} from 'react-icons/bs'

const Banner = () => {
    let date = Date();
    
  return (
    <Container className='banner round-corners p-0'>
       <div className='p-2' style={{backgroundImage: 'linear-gradient(90deg,#FF1744,#FF1744, #FF1744,rgba(255, 23, 68, 0.4)'}}>
       <p style={{color: 'white'}}><BsFillCalendarFill/> {date}</p>
        <br/>
        <h5 style={{color: 'white'}}> Good Evening, Sean!</h5>
       </div>
    </Container>
  )
}

export default Banner