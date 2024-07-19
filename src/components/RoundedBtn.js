import React, { Component } from 'react';
import roundedBtn from './css/RoundedBtn.module.css';


class RoundedBtn extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // const btnStyle = {
        // fontWeight: 'bold',
        // color: 'white',
        // borderRadius: '2rem',
        // cursor: 'pointer',
        // width: 'auto',
        // height: '42.66px',
        // border: 'none',
        // backgroundColor: '#7A1CA7',
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        // boxSizing: 'border-box',
        // padding: '20px'
        // } 
        return ( 
            <div>
             <button className={roundedBtn.btnStyle}>{this.props.label}
            </button>
         </div>
         );
    }
}
 
export default RoundedBtn;