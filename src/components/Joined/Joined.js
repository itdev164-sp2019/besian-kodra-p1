import React, { Component } from 'react';
import DropdownExampleSimple from '../dropDowns/DropdownExampleSimple';
import Beer from '../theBeers/Beer';

const beerType = [{ key: 1, text: 'Light', value: 1 },
{ key: 2, text: 'Medium', value: 2 },
{ key: 3, text: 'Dark', value: 3 }]

const glassType = [{ key: 1, text: 'Pint', value: 1 },
{ key: 2, text: 'Mug', value: 2 },
{ key: 3, text: 'Growler', value: 3 }]

const abvType = [{ key: 1, text: '5.0%', value: 1 },
{ key: 2, text: '6.0%', value: 2 },
{ key: 3, text: '7.5%', value: 3 }]


class Joined extends Component {
    constructor(props) {
        super(props);

        

        this.state = {
            beerImage:0,
            cupImage:0,
        };

    }

    beerzImage(pos){

        this.setState({
            beerImage:pos
        });

    };

    cupzImage(pos){
        this.setState({
            cupImage:pos
        });
    };

    abvType(arg1, arg2){
        this.setState({
            beerImage:arg1,
            cupImage:arg2,

        });
    }



    render() {
        return(
            <div>
                <text>Beer Color</text>
                <br/>
                <DropdownExampleSimple whichSelector="BeerType" options= {beerType} handleClick={(arg1=0) => this.beerzImage(arg1)}/>
                <br/>
                <text>Vessel Type</text>
                <br/>
                <DropdownExampleSimple whichSelector="GlassType" options= {glassType} handleClick={(arg1=0) => this.cupzImage(arg1)}/>
                <br/>
                <text>ABV %</text>
                <br/>
                <DropdownExampleSimple whichSelector="AbvType" options= {abvType} handleClick={(arg1=0, arg2=0) => this.abvType(arg1, arg2)}/>
                <br/>
                <br/>
                <Beer beerz={this.state.beerImage} cupz={this.state.cupImage}/>
            </div>
        );
    }
}

Joined.propTypes = {

};

export default Joined;




