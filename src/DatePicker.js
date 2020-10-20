import React, {useState} from "react";
import { Grid, Typography,  } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";

const DatePicker = ({text, selectedDate, handleDateChange}) => {
    return (
            <Grid container justify="center" alignItems="center" style={{marginBottom: 40}}>
                <Grid item style={{marginRight: 120}}>
                    <Typography variant="h6">{text}</Typography>
                </Grid>
                <Grid item>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            autoOk
                            variant="inline"
                            inputVariant="outlined"
                            format="dd/MM/yyyy"
                            value={selectedDate}
                            InputAdornmentProps={{ position: "start" }}
                            onChange={date => handleDateChange(date)}
                            
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
            </Grid>
    );
};

export default DatePicker;
