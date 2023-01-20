import {useNavigate} from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import {Button} from "@mui/material";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import TabPanel from "./Tabs/Tabs";
import {useState} from "react";

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const Orders = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const navigate = useNavigate()
    return(
        <div className="ordersDiv">
            <Grid
                container
                direction="column"
                component='section'
                spacing={{ mobile: 3, tablet: 3, laptop:3 , desktop: 3}}
                alignItems="center"
                justifyContent="center"
                style={{
                    width:"100%",
                    margin:'0'
                }}
            >
                <Grid item mobile={10} tablet={5} laptop={4} desktop={4} sx={{textAlign:"center"}}>
                    <p className="divHeader">Your Orders</p>
                </Grid>
                <Grid item mobile={10} tablet={5} laptop={4} desktop={12} sx={{textAlign:"center"}}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="All Orders" {...a11yProps(0)} />
                            <Tab label="Awaiting Payment" {...a11yProps(1)} />
                            <Tab label="Awaiting Shipment" {...a11yProps(2)} />
                            <Tab label="Awaiting Confirm" {...a11yProps(3)} />
                            <Tab label="Awaiting Review" {...a11yProps(4)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        Item One
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item four
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        Item five
                    </TabPanel>
                </Grid>
                <Grid item mobile={10} tablet={5} laptop={4} desktop={1} >
                    ...
                </Grid>
            </Grid>
        </div>

    )
}

export default Orders;