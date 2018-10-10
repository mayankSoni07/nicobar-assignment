import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { testAction } from '../../redux/actions';

class Shop extends Component {

    componentDidMount() {
        this.props.testAction({ test: "hello" });
    }

    render() {
        console.log('Shop Visit : ', this.props.test)
        return (
            <div className="Shop">
                <h2>Shop Component</h2>
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

Shop = connect(mapStateToProps, mapDispatchToProps)(Shop)
export default Shop;
