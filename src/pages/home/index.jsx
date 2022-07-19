import {Component, Fragment} from "react";
import Greeting from "../../components/Home.Greeting";
import Countable from "../../components/countable";
import Divider from '@mui/material/Divider'

class HomePage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Fragment>
                <Greeting name="Pasindu"/>
                <Divider light/>
                <Countable/>
            </Fragment>

        )
    }
}

export default HomePage