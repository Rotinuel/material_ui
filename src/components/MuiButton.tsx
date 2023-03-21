import Button from '@mui/material/Button'
import { Stack } from '@mui/system'

export const MuiButton = () => {
  return (
   <Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='text'>TEXT</Button>
            <Button variant='contained'>CONTAINED</Button>
            <Button variant='outlined'>OUTLINED</Button>
        </Stack>
        <Stack direction='row' spacing={4}>
            <Button variant='contained' color='primary'>TEXT</Button>
            <Button variant='contained' color='secondary'>secondary</Button>
            <Button variant='contained' color='error'>Error</Button>
            <Button variant='contained' color='warning'>warning</Button>
            <Button variant='contained' color='info'>info</Button>
            <Button variant='contained' color='success'>success</Button>
        </Stack>
   </Stack>
  )
}
