import React from 'react';
import { connect } from 'react-redux';
import './ColorSelector.css';

function ColorSelector(props) {

    function onClick(event, index) {
        const color = props.colors[index];
        const eventTemp = {
            target: {
                name: event.target.name,
                value: color
            }
        }
        props.handleChange(eventTemp);
    }

    const colorRadioButtons = props.colors.map((color, index) => {
        return (
                <label className="container" key={color.id}>
                    <input inline="true" aria-label={color.name} type="radio" id={color.name} name="color" 
                        defaultChecked={props.colorId === color.id} 
                        onClick={(event) => onClick(event, index)} />
                    <span className="radio-control" style={{ backgroundColor: `#` + color.hexValue }} />
                </label>
        )
    });

    return (
        <div className="ColorSelector">
            {colorRadioButtons}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        colors: state.colorReducer.colors
    }
}

export default connect(mapStateToProps, null)(ColorSelector);