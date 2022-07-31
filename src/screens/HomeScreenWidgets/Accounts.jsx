import React, { useState } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import {MdCancel} from 'react-icons/md'
const Accounts = () => {
  const [account, setAccount] = useState('');
  return (
    <Card className='round-corners'>
      <Card.Header>
        Account
      </Card.Header>
      <Card.Body>
        {(account === '')? <Col>
        <MdCancel size={50} style={{
          color: '#FF1744',
        }}/>
        <h6>No Account Connected</h6>
        </Col> : <div></div>}
      </Card.Body>
      <Card.Footer>
        <Button>
         {(account === '')? 'Connect Account' : ' Genarate Statement'}
        </Button>
      </Card.Footer>
    </Card>
  )
}

export default Accounts