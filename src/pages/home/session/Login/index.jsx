import React, {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import GDSEButton from "../../../../components/common/Button";
import GDSESnackBar from "../../../../components/common/SnackBar";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "admin", password: "admin", formData: {
                user_name: '', password: ''
            },
            //for snackbar
            open:false,
            message:'',
            severity:''
        }
    }

    checkValidity() {
        console.log("login button clicked")
        console.log("user name : " + this.state.userName)
        console.log("password : " + this.state.password)
        console.log(this.state.formData)

        let formData = this.state.formData

        if (formData.user_name===this.state.userName && formData.password===this.state.password){
            console.log("credntail mathched!")
            this.setState({
                open:true,
                message:'user credential matching success!',
                severity:'success'
                }
            )
        }else{
            console.log("credential didn't match!")
            this.setState({
                open:true,
                message:'user credential not match!',
                severity:'error'
        }
            )
        }

    }

    render() {
        const {classes} = this.props;
        return (<div
                className={classes.container}>
                <div className={classes.login__cover}>
                    <div className={classes.title__container}>
                        <Typography variant="h4">Login</Typography>
                    </div>
                    <div className={classes.form__container}>
                        <TextField
                            id="outlined-basic"
                            label="user name"
                            variant="outlined"
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.user_name = e.target.value
                                this.setState({formData})
                            }}
                        />
                        <TextField
                            id="outlined-basic"
                            type="password"
                            label="password"
                            variant="outlined"
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.password = e.target.value
                                this.setState({formData})
                            }}
                        />
                    </div>
                    <div className={classes.btn__container}>
                        <GDSEButton label="Login"
                                    onClick={() => {
                                        console.log("login button clicked")
                                        this.checkValidity()
                                    }}
                        />
                    </div>
                </div>
            <GDSESnackBar
            open={this.state.open}
            onClose={()=>{
                this.setState({open:false})
            }}
            message={this.state.message}
            autoHideDuration={3000}
            severity={this.state.severity}
            variant="filled"
            />
            </div>)
    }
}

export default withStyles(styleSheet)(Login)