import { Box, Button, Container, Grid, Stack } from "@mui/material";
import React from "react";
import { useState } from "react";
import styled from "styled-components";

export default function Unda() {
  const [toggle1, settoggle] = useState(false);
  const [toggle2, settoggle2] = useState(false);

  const handleclick = () => {
    settoggle(!toggle1);
  };

  const handleclick2 = () => {
    settoggle2(!toggle2);
  };

  return (
    <>
      <Undar>
        <Container>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
          >
            <Grid
              container
              direction={"column"}
              className="box"
              justifyContent={"center"}
            >
              <Grid item className="blb">
                <Stack direction={"row"} justifyContent={"space-around"}>
                  <div
                    className="bulb1"
                    style={{
                      backgroundColor: toggle1 ? "rgb(255, 199, 68)" : "white",
                    }}
                  ></div>
                  <div
                    className="bulb2"
                    style={{
                      backgroundColor: toggle2 ? "rgb(255, 199, 68)" : "white",
                    }}
                  ></div>
                </Stack>
              </Grid>
              <Grid item className="btn">
                {" "}
                <Stack direction={"row"} justifyContent={"space-around"}>
                  {" "}
                  <Button variant="contained" onClick={handleclick}>
                    {toggle1 ? "on" : "off"}
                  </Button>
                  <Button variant="contained" onClick={handleclick2}>
                    {toggle2 ? "on" : "off"}
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Undar>
    </>
  );
}

const Undar = styled.div`
  body {
    background-color: blueviolet !important;
  }
  .bulb1 {
    border: 1px solid black;
    border-radius: 50%;
    height: 75px;
    width: 75px;
    box-shadow: 0 0 20px black;
  }
  .bulb2 {
    border: 1px solid black;
    border-radius: 50%;
    height: 75px;
    width: 75px;
    box-shadow: 0 0 20px black;
  }
  .box {
    border: 2px solid black;
    border-radius: 10px;
    height: 500px;
    width: 400px;
    padding: 10px;
    background-color: #e65050;
    box-shadow: 0 0 5px black, 0 0 10px black, 0 0 20px black,
      inset 0 0 5px black;
  }
  .blb {
    margin-bottom: 150px;
  }
  .btn {
    margin-top: 50px;
  }
`;
