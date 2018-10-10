import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { getShopData } from '../../redux/actions';
import '../../common.css';

let self;

class Shop extends Component {
    constructor(props) {
        super(props);
        self = this;
    }

    componentDidMount() {
        this.props.getShopData();
    }

    render() {
        return (
            <section className="twxt" style={{ "marginTop": "77px" }}>
                <div className="container">
                    <section className="image-effect">
                        <div className="row">
                            {this.props.shopData && this.props.shopData.our_shop.map((item, index) => {
                                return self.displayShop(item, index)
                            })}
                        </div>
                    </section>
                </div>
            </section>
        );
    }

    displayShop(item, index) {
        let style = {};
        if (index % 2) {
            style["padding"] = "0px 0px 0px 27px";
        } else {
            style["padding"] = "0px 27px 0px 0px";
        }
        if (index > 1) {
            style["marginTop"] = "77px";
        }
        return (
            <div key={"img-content" + index} className="col-md-6" style={style}>
                <div className="img-content">
                    <img alt="item-img" src={item.image_url} />
                    <div className="overlay1">
                        <h2 className="text-center shop-titel">{item.category_name}</h2>
                    </div>
                    <div className="overlay">
                        <div className="text text-center">
                            <hr className="hr-width" />
                            {item.ctas && item.ctas.map((menuItem, index) => {
                                return <p key={"shop-sub-title" + index} className="shop-sub-title">{menuItem.text}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        shopData: state.testReducer.shopData
    }
}

const mapDispatchToProps = (dispatch, getState) => bindActionCreators({
    getShopData
}, dispatch);

Shop = connect(mapStateToProps, mapDispatchToProps)(Shop)
export default Shop;