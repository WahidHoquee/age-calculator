import React, { useState } from "react";
import { Container, Paper, Button, Box, Typography } from "@material-ui/core";
import {differenceInSeconds, differenceInMinutes, differenceInHours, differenceInDays, differenceInWeeks, differenceInMonths, differenceInYears} from 'date-fns'
import Header from "./Header";
import DatePicker from "./DatePicker";
import Result from "./Result";

const App = () => {
  const [birthDate, setBirthDate] = useState(new Date());
  const [presentDate, setPresentDate] = useState(new Date());
  const [ageResult, setAgeResult] = useState([]);
  const handleCalculate = () => {
    const year = differenceInYears(presentDate, birthDate);
    const month = differenceInMonths(presentDate, birthDate);
    const week = differenceInWeeks(presentDate, birthDate);
    const day = differenceInDays(presentDate, birthDate);
    const hour = differenceInHours(presentDate, birthDate);
    const minute = differenceInMinutes(presentDate, birthDate);
    const second = differenceInSeconds(presentDate, birthDate);
    const seconds = {
      title: 'AGE IN SECONDS IS:',
      second: second,
    }
    const minutes = {
      title: 'AGE IN MINUTES IS:',
      minute: minute,
      second: second % minute
    }
    const hours = {
      title: 'AGE IN HOURS IS:',
      hour: hour,
      minute: minute % hour,
      second: second % minute
    }
    const days = {
      title: 'AGE IN DAYS IS:',
      day: day,
      hour: hour % day,
      minute: minute % hour,
    }
    const weeks = {
      title: 'AGE IN WEEK IS:',
      week: week,
      day: day % (week*7) || day,
      hour: hour % day,
    }
    const months = {
      title: 'AGE IN MONTH IS:',
      month: month,
      week: Math.floor((day % Math.round(month*30.44)) / 7) || week,
      day: Math.floor((day % (month*30.44)) % 7) || day % 7,
    }
    const years = {
      title: 'AGE IS:',
      year: year,
      month: month % year || month,
      day: Math.floor((day % (month*30.44))) || day,
    }
    setAgeResult([years, months, weeks, days, hours, minutes, seconds])
  }
  return (
    <>
      <Header />
      <Container style={{paddingBottom: 50}}>
        <Paper style={{ padding: 40, margin:'0 100px', display: 'flex', flexDirection:"column", justifyContent: "center" }}>
          <DatePicker text="Date of Birth" selectedDate={birthDate} handleDateChange={setBirthDate}/>
          <DatePicker text="Age at Date" selectedDate={presentDate} handleDateChange={setPresentDate}/>
          <Button 
            variant="contained" 
            color="primary" 
            style={{padding: '15px 20px', fontSize: 16, margin: '0 auto'}} 
            onClick={handleCalculate}
          >
              Calculate
          </Button>
        </Paper>
        {
          ageResult.map((res, index, arr) => {
            if(arr.length-1 === index) return <Result value={res} sec={true}/>
            return <Result value={res}/>
        })
        }
      </Container>
    </>
  );
};

export default App;
