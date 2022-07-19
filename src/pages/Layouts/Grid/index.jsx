import React, {Component, Fragment} from "react";
import {styleSheet} from "../FlexBox/style";
import {withStyles} from "@mui/styles";
import Grid from '@mui/material/Grid';
import { Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from '@mui/material/Autocomplete';
import GDSEButton from "../../../components/common/Button";

class GridLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
        top10Films:[
                { label: 'male', gender: "male" },
                { label: 'female', gender: "female" }
            ]
        }

    }
    render() {
        const {classes} = this.props;
        return (
       <Fragment>
           <Typography variant="h4">
               Customer Manage
           </Typography>
               <Grid container spacing={0.5}>
               <Grid item lg={6} md={6} sm={6} xm={6}>
               <Typography variant="body2">Customer Name</Typography>
               <TextField id="outlined basic" placeholder="name" label="Customer name" variant="outlined" size="small" style={{width:'100%'}}/>
               </Grid>
                   <Grid item lg={6} md={6} sm={6} xm={6}>
                       <Typography variant="body2">Gender</Typography>
                       <Autocomplete
                           disablePortal
                           id="combo-box-demo"
                           options={this.state.top10Films}
                           sx={{ width: 300 }}
                           renderInput={(params) => <TextField {...params} label="Gender" style={{width:'100%'}}/>}
                       />
                   </Grid>
                   <Grid item lg={6} md={6} sm={6} xm={6}>
                       <Typography variant="body2">NIC</Typography>
                       <TextField id="outlined basic" placeholder="NIC" label="NIC" variant="outlined" size="small" style={{width:'100%'}}/>
                   </Grid>
                   <Grid item lg={6} md={6} sm={6} xm={6}>
                       <Typography variant="body2">Address</Typography>
                       <TextField id="outlined basic" placeholder="Address" label="Address" variant="outlined" size="small" style={{width:'100%'}}/>
                   </Grid>

                   <Grid item lg={6} md={6} sm={6} xm={6} style={{display:'flex'}} style={{justifyContent:'flex-end'}}>
                       <GDSEButton variant="contained" size="small" label="save"/>
                   </Grid>
               </Grid>
       </Fragment>
        )
    }
}

export default withStyles(styleSheet)(GridLayout)