import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import Accounts from './HomeScreenWidgets/Accounts'
import Banner from './HomeScreenWidgets/Banner'
import Exchanger from './HomeScreenWidgets/Exchanger'
import Info from './HomeScreenWidgets/Info'
import TransactionGraph from './HomeScreenWidgets/TransactionGraph'
import Transactions from './HomeScreenWidgets/Transactions'
const HomeScreen = () => {
  return (
    <Container className='py-3'>
    <Row className='gy-2'>
        <Col md={'9'} >
        <Row >
            <Col md='9'>
            <Banner />
            <br/>
            <TransactionGraph/>
            </Col>
            <Col md='3'>
            <Info/>
            </Col>
           </Row>
           <br/>
            <Transactions/>
        </Col>
        <Col className='gy-2' md={'3'}>
            <Accounts/>
            <br/>
            <Exchanger/>
        </Col>
    </Row>
    </Container>
  )
}

export default HomeScreen