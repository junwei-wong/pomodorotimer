import { Button, Container, Typography, Box } from '@mui/material';
import { useState } from 'react';
import { useTimer } from 'react-timer-hook';

function Timer() {
  const [currentSeconds, setCurrentSeconds] = useState(1500);
  const time = new Date();
  time.setSeconds(time.getSeconds() + currentSeconds); // 10 minutes timer
  const { minutes, seconds, start, resume, restart, pause, isRunning } =
    useTimer({
      expiryTimestamp: time,
      autoStart: false,
      onExpire: () => {},
    });
  const resetTimeHandler = (resetSeconds: number) => {
    setCurrentSeconds(resetSeconds);
    const resetTime = new Date();
    resetTime.setSeconds(resetTime.getSeconds() + resetSeconds);
    restart(resetTime);
  };
  return (
    <Container sx={{ height: '80vh' }}>
      {/* <Typography variant="h3" align="center">
          Timer
        </Typography> */}
      <Box textAlign="center" sx={{ py: '10px' }}>
        <Button
          variant={currentSeconds === 1500 ? 'outlined' : 'text'}
          onClick={() => resetTimeHandler(1500)}
        >
          Pomodoro
        </Button>
        <Button
          variant={currentSeconds === 300 ? 'outlined' : 'text'}
          onClick={() => resetTimeHandler(300)}
        >
          Short Break
        </Button>
        <Button
          variant={currentSeconds === 600 ? 'outlined' : 'text'}
          onClick={() => resetTimeHandler(600)}
        >
          Long Break
        </Button>
      </Box>
      <Typography variant="h2" textAlign="center">
        {minutes}:{seconds}
      </Typography>
      <Box textAlign="center">
        <Button
          sx={{ my: '4px', mx: '2px' }}
          variant="contained"
          color="success"
          onClick={() => {
            start();
            resume();
          }}
          disabled={isRunning}
        >
          Start
        </Button>
        <Button
          sx={{ my: '4px', mx: '2px' }}
          variant="contained"
          color="error"
          onClick={pause}
          disabled={!isRunning}
        >
          Pause
        </Button>
        <Button
          sx={{ my: '4px', mx: '2px' }}
          variant="contained"
          color="secondary"
          onClick={() => resetTimeHandler(currentSeconds)}
        >
          Reset
        </Button>
      </Box>
    </Container>
  );
}

export default Timer;
