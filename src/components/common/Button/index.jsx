import React,{Component} from "react";
import propTypes from "prop-types";
import Button from '@mui/material/Button'

class GDSEButton extends  Component{
    static propTypes ={
        onClick:propTypes.func,
        children: propTypes.node,
        variant: propTypes.string,
        className: propTypes.any,
        label: propTypes.string,
        size: propTypes.string,
        disabled: propTypes.bool,
        color: propTypes.string,
        type: propTypes.string,
        endIcon: propTypes.string,
        startIcon: propTypes.string
    }
    static defaultProps = {
        className: "",
        color:"primary",
        label:"",
        size:'medium',
        variant:"contained",
        disabled:false,
        type:"button"
    }
    handleButtonClick= (event) =>{
        const {onClick,disabled} = this.props;

        if(disabled) return;

        onClick && onClick({event});

    }
    renderChildren = (label,children)=> {
        if (label) return label;
        if (children) return children;
    }
    render() {
        const {
            children,
            variant,
            className,
            label,
            size,
            disabled,
            color,
            type,
            endIcon,
            startIcon,
            style,

        }=this.props;
        return(
            <Button
            className={className}
            size={size}
            endIcon={endIcon}
            variant={variant}
            disabled={disabled}
            color={color}
            type={type}
            onClick={this.handleButtonClick}
            style={style}

            >
                {this.renderChildren(label,children)}
            </Button>
        )
    }
}

export default GDSEButton;