import { Button, IconButton, ButtonGroup } from "@mui/material";
import { Stack } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text">TEXT</Button>
        <Button variant="contained">CONTAINED</Button>
        <Button variant="outlined">OUTLINED</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary">
          TEXT
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} display="block">
        <Button variant="outlined" color="primary" size="small">
          small
        </Button>
        <Button variant="outlined" color="primary" size="medium">
          medium
        </Button>
        <Button variant="outlined" color="primary" size="large">
          large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert('clicked')}
        >
          TEXT
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          secondary
        </Button>
        <IconButton color="success" size="small" aria-label="button">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction='row'>
        <ButtonGroup variant='text' size='small' color='secondary' aria-label='aligment button group'>
            <Button>left</Button>
            <Button>center</Button>
            <Button>large</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};
