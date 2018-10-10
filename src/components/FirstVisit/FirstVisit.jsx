import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { testAction } from '../../redux/actions';

class FirstVisit extends Component {

    componentDidMount() {
        this.props.testAction({ test: "hello" });
    }

    render() {
        console.log('first Visit : ', this.props.test)
        return (
            <div className="FirstVisit">
                <h2>First Visit Component</h2>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        test: state.testReducer.test
    }
}

const mapDispatchToProps = (dispatch, getState) => bindActionCreators({
    testAction
}, dispatch);

FirstVisit = connect(mapStateToProps, mapDispatchToProps)(FirstVisit)
export default FirstVisit;
