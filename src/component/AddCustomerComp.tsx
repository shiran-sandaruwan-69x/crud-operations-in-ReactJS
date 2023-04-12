import React from 'react';
import {Box, Button, Card, CardContent, FormControl, Grid, Input, Stack, TextField, Typography} from "@mui/material";
import './css/AddCustomerComp.css'

class AddCustomerComp extends React.Component {
    render() {
        return (
            <Box className='addCustomer'>
                <Card sx={{border: '1px solid black',maxWidth:550}}>
                    <CardContent>
                        <Typography gutterBottom variant='h6'>Customer Form</Typography>
                        <Typography gutterBottom color='textSecondary' variant='body2' component='p'>fill up the form and our team will get back you within 24 hours</Typography>
                        <form>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField size='small' type='text' variant='standard'
                                               placeholder='enter customer id'
                                               fullWidth required/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField size='small' type='text' variant='outlined'
                                               placeholder='enter customer full name'
                                               fullWidth required multiline rows={4}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField size='small' type='email' label='email' variant='outlined'
                                               placeholder='enter customer email' fullWidth required/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField size='small' type='number' label='phone' variant='outlined'
                                               placeholder='enter customer phone' fullWidth required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant='contained' type='submit' fullWidth>add to table</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Box>
        );
    }
}

export default AddCustomerComp;