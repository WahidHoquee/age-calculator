import React from "react";
import { Container, Paper, Button, Box, Typography } from "@material-ui/core";
const Result = ({ value, sec }) => {
    const keys = Object.keys(value);
    const val = keys.map((key) => {
        if (key === "title") return "";
        return `${value[key]} ${key}s, `;
    })
    console.log(val)
    return (
        <Box style={{ margin: "50px 250px 0 250px" }}>
            <Paper style={{ padding: 20, textAlign: "center" }}>
                <Typography
                    variant="h5"
                    color="primary"
                    style={{ marginBottom: 10 }}
                >
                    {value.title}
                </Typography>
                <Typography variant="h4">
                    {keys.map((key, index , arr) => {
                        if (key === "title") return "";
                        if(index === arr.length-1) return `${value[key]} ${key}s`;
                        return `${value[key]} ${key}s, `;
                    })} {sec ? 'since your birth' : ''}
                </Typography>
            </Paper>
        </Box>
    );
};

export default Result;
// 22 years, 4 months, 4 days
