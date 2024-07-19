import React, { Component } from 'react';

class FilterTags extends Component {

    handleRemove = () => {
        if (this.props.onRemove) {
            this.props.onRemove();
        }
    }

    render() {
        const { text } = this.props;

        return (
            <button type="button" className="btn btn-outline-primary rounded-5 mt-2 mx-1">
                {text}
                <button className='text-primary border-0 bg-transparent'
                    onClick={this.handleRemove}>
                    &#x2715; {/* This is the X Button */}
                </button>
            </button>
        );
    }
}

export default FilterTags;

