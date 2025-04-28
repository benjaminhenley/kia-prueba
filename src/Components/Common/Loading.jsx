import React from 'react'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  return (
    <div className='loading'>
        <Stack sx={{ color: '#00C0E4' }} spacing={2} direction="row">
            <CircularProgress color="inherit" />
        </Stack>
    </div>
  )
}

export default Loading