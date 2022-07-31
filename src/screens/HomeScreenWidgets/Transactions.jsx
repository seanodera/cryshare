import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Badge, Button,Card, Container, Table } from 'react-bootstrap'

const Transactions = () => {
  const [transactions, setTransactions] = useState([{
    id: 0,
    incoming: true,
    amount: 1*1000,
    date: Date(),
    status: 'Completed',
    name: 'Bitcoin',
  }]);

  useEffect(() => {
    let templist = []; 
  for (let i = 0; i <=3; i++ ){
    let transaction = {
      id: i,
      incoming: true,
      amount: i*1000,
      date: Date(),
      status: 'Processing',
      name: 'Bitcoin',
    };
    templist.push(transaction)
    setTransactions(templist);
  }
  }, [])

  
  return (
    <Card className='round-corners'>
          <Container className='py-3'>
      <div className='d-flex justify-content-between px-4'>
      <h4> Recent Transactions</h4>
      <Button size='sm' variant='outline-primary'>Show All</Button>
      </div>
      <Table hover>
        <thead>
          <th>
            Name
          </th>
          <th>
            Amount
          </th>
          <th>
            Time
          </th>
          <th>
            Status
          </th>
        </thead>
        <tbody>
          {transactions.map(_transaction => <tr key={_transaction.id}>
            <td>
           {_transaction.name}
          </td>
          <td>
            {_transaction.amount}EUR
          </td>
          <td>
            {_transaction.date}
          </td>
          <td>
           
           <Badge className='py-2' bg={ (_transaction.status === 'Completed')? 'success' :
            (_transaction.status === 'Processing')? 'info' : (_transaction.status === 'Pending')? 'warning' : 'danger'}> {_transaction.status}</Badge>
          </td>
          </tr>)}
        </tbody>
      </Table>
    </Container>
    </Card>
  )
}

export default Transactions


export const Transaction = ({id, incoming, amound, date, status, name, ...props}) => {
  return {
    id: id,
    incoming: incoming,
    amount: amound,
    date: date,
    status: status,
    name: name
  }
}
Transaction.PropTypes =  {
    id: PropTypes.number,
    incoming: PropTypes.bool,
    amount: PropTypes.number,
    date: PropTypes.instanceOf(Date),
    status: PropTypes.oneOf(['Completed, Processing, Failed, Canceled, Pending']),
    name: PropTypes.string,
  }
