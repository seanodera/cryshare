import { createChart } from 'lightweight-charts';
import React, { useEffect, useRef, useState } from 'react'
import { Card, Container } from 'react-bootstrap'

const TransactionGraph = () => {
  const [chart, setChart] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) {
      return;
    }
    const handleResize = () => {
      let _chart = chart;
      _chart.applyOptions({ width: container.current.clientWidth });
      setChart(_chart);
    };
    async function getData(){
      var myHeaders = new Headers();
      myHeaders.append("X-CoinAPI-Key", "FF62A693-15F3-47E2-88F2-58065A923271");
      myHeaders.append("Accept", "application/json ");
      
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      let date = new Date(Date.now());
      
      let response = await fetch(`https://rest.coinapi.io/v1/exchangerate/BTC/USD/history?period_id=1DAY&time_end=${date.toISOString()}`, requestOptions)
        .then(response => response.text());
        
      let rawData = response;
      // let templist = [];
      let data = JSON.parse(rawData);
          
          let finalList = [];
          console.log(finalList);
          data.forEach(element => {
            if(element.rate_close <= 0){
              console.log(element);
            }
            finalList.push({time: element.time_close, value: parseFloat(element.rate_close)})
          });
          if(chart !== null){
            chart.remove();
          }
          let _chart = createChart(container);
          
          _chart.addAreaSeries({
            priceFormat: {
              type: 'price'
            }
          }).setData(finalList);
          _chart.timeScale().fitContent();
          
          window.addEventListener('resize', handleResize);
          setChart(_chart);
          return () => {
            window.removeEventListener('resize', handleResize);
    
            chart.remove();
          };
    }
    getData();

  }, [])
  
  return (
    <Card className='round-corners'>
      <Card.Body>
        <Card.Title>BTC EUR rates</Card.Title>
        <Container ref={ref} fluid style={{
          height: '400px'
        }}>

        </Container>
      </Card.Body>
    </Card>
  )
}

export default TransactionGraph