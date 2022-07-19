import {Component} from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GDSEButton from "../common/Button";
class Countable extends Component {
    constructor(props) {
        super(props);
        this.state ={
            count:0
        }
    }
    incrementCount(){
        console.log("increment function calling");
        this.setState({
            count:this.state.count+1
        })
    }
    lowIncrementCount(){
        console.log("lowIncrement function calling");
        this.setState({
            count:this.state.count-1
        })
    }
    resetCount(){
        console.log("reset function calling");
        this.setState({
            count:0
        })
    }

    render() {
        return (
            <div>
                <Typography variant="h4" gutterBottom>
                    count:{this.state.count}
                </Typography>
             {/*   <Button variant="contained"
                onClick={()=>{
                    console.log('clicked')
                    this.incrementCount()
                }
                        }
                >Increase</Button>

                <Button variant="contained"
                        onClick={()=>{
                            console.log('clicked')
                            this.lowIncrementCount()
                        }
                        }
                        style={{marginLeft:'15px'}}
                >lowCrease</Button>

                <Button variant="contained"
                        color="error"
                        onClick={()=>{
                            console.log('clicked')
                            this.resetCount()
                        }
                        }
                        style={{marginLeft:'15px'}}
                >reset</Button>*/}
                <GDSEButton
                label="Increase!"
                variant="contained"
                onClick={()=>{
                    console.log('clicked')
                    this.incrementCount()
                }
                }
                style={{marginLeft:'15px'}}
                />
                <GDSEButton
                    label="Decrease!"
                    variant="outlined"
                    onClick={()=>{
                        console.log('clicked')
                        this.lowIncrementCount()
                    }
                    }
                    style={{marginLeft:'15px'}}
                />
                <GDSEButton
                    label="Reset!"
                     variant="outlined"
                    color="error"
                    onClick={()=>{
                        console.log('clicked')
                        this.resetCount()
                    }
                    }
                    style={{marginLeft:'15px'}}
                />
            </div>)

    }
}

export default Countable
