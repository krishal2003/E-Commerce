import { m } from 'framer-motion';
import { Button, TextField, Stack, Box } from '@mui/material';
import { FormEventHandler, useState } from 'react';
import { useSnackbar } from 'notistack';
import { MotionViewport, varFade } from 'src/components/animate';

export default function ContactForm() {
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (name && email && contactNumber && message) {
      enqueueSnackbar('Form submitted successfully!', { variant: 'success' });
    } else {
      enqueueSnackbar('Please fill out all fields.', { variant: 'error' });
    }
  };

  return (
    <Stack component={MotionViewport} spacing={5}>
      <Stack spacing={3}>
        <m.div variants={varFade().inUp}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField
            fullWidth
            label="Email"
            
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField
            fullWidth
            label="Contact Number"
            
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField
            fullWidth
            label="Enter your message here."
            multiline
            rows={4}
            
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </m.div>
      </Stack>

      <m.div variants={varFade().inUp}>
        <Box sx={{ textAlign: 'center' }}>
          <Button size="large" variant="contained" onClick={handleSubmit}>
            Submit Now
          </Button>
        </Box>
      </m.div>
    </Stack>
  );
}
