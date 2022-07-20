import React, {Component, Fragment} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import Grid from '@mui/material/Grid';
import {Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import GDSEButton from "../../components/common/Button";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top10Films: [
                {label: 'male', gender: "male"},
                {label: 'female', gender: "female"}
            ]
        }

    }

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Typography variant="h4">
                    Poster Manage
                </Typography>
                <Grid container spacing={0.5}>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <Typography variant="body2">User Id</Typography>
                        <TextField id="outlined basic" placeholder="User Id" variant="outlined" size="small"
                                   style={{width: '100%'}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <Typography variant="body2">Id</Typography>
                        <TextField id="outlined basic" placeholder="Id" variant="outlined" size="small"
                                   style={{width: '100%'}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <Typography variant="body2">Title</Typography>
                        <TextField id="outlined basic" placeholder="Title" variant="outlined" size="small"
                                   style={{width: '100%'}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <Typography variant="body2">Body</Typography>
                        <TextField id="outlined basic" placeholder="Body" variant="outlined" size="small"
                                   style={{width: '100%'}}/>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xm={6} style={{display: 'flex'}}
                          style={{justifyContent: 'flex-end'}}>
                        <GDSEButton variant="contained" size="small" label="save"/>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

export default withStyles(styleSheet)(Posts)