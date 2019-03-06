import React,{Component} from 'react';
import './MilkyMate.css';

class MilkyMate extends Component {

    constructor(){
        super()
        this.state = {
            userZipCode: '',
            distance: 10
        }
    }

    zipCodeHandler(input){
        this.setState({userZipCode: input})
    }

    distanceHandler(value){
        this.setState({distance: value})
    }


    render(){
        const zipcodes = require('zipcodes');

        var radius = zipcodes.radius(this.state.userZipCode, this.state.distance);

        console.log(radius)

        let rad = radius.map((e, i) => {
            return(
                <div key={i}>
                <div>
                {e}
                </div>
                </div>
            )
        }
        )
        // console.log(this.state.userZipCode)
        return(
            <div>
                <div className='milkyMateCenterSearch'>

                <input placeholder='enter zip code'type='text' onChange={e => this.zipCodeHandler(e.target.value)}></input>

                <select placeholder='range' onChange={e => this.distanceHandler(e.target.value)}>
                    <option selected value="10"> 10 miles</option>
                    <option value="25"> 25 miles</option>
                    <option value="50">50 miles</option>
                    <option value="100">100 miles</option>
                </select>
                

                <button> search </button>

                </div>
                {rad}
            </div>
        )
    }
}

export default MilkyMate;

//geo location