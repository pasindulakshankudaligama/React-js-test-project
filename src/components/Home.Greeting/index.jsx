import {Component} from "react";
import Typography from '@mui/material/Typography';
import pasi from "../../assets/pasi.jpg";
import {styleSheet} from "./style"
import {withStyles} from "@mui/styles";
class Greeting extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} =this.props;
        return (
            <div className={classes.container}>
                <div>
                    <Typography variant="h3" gutterBottom component="div">
                        hello {this.props.name}
                    </Typography>
                </div>
                <div>
                    <img src={pasi} alt=""/>
                </div>
            </div>

        )
    }
}

export default withStyles(styleSheet)(Greeting)