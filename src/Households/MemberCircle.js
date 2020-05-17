import React, {Component} from 'react';

/**
 * Displays a portrait for the user
 */
class MemberCircle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className={"member-circle"} style={{fontSize: this.props.circleSize}}/>
                <div className={"member-circle-name"} style={{fontSize: this.props.nameSize}}>{this.props.member}</div>
            </div>
        );
    }
}

export default MemberCircle