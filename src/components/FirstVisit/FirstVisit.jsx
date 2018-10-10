import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getFirstVisitData } from '../../redux/actions';
import '../../common.css';

class FirstVisit extends Component {
    componentDidMount() {
        /** Action call to fetch FirstVisit data. */
        this.props.getFirstVisitData();
    }

    render() {
        let new_arrivals;
        /** Assigning data from props (Used ES6) */
        const { firstVisitData } = this.props;
        if (firstVisitData)
            new_arrivals = firstVisitData.new_arrivals;
        return (
            <div>
                <section className=" first-visit">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 ">
                                <div className="nav-visit">
                                    <h1 className="text-center visit-text">
                                        {new_arrivals && new_arrivals.left_top_heading}</h1>
                                    <hr className="text-style text-center" style={{ "borderTop": "1px solid #7C878E" }} />
                                    {new_arrivals && new_arrivals.cta.map((item, index) => {
                                        return <a key={"sub-nav" + index} href="#" className="sub-nav">
                                            <p className="text-center">{item.text}</p>
                                        </a>
                                    })}
                                </div>
                                <div className="row" style={{ "paddingLeft": "127px" }}>
                                    <p className="sub-title">
                                        {new_arrivals && new_arrivals.right_section.title}</p>
                                    <h1 className=" visit-head">{new_arrivals && new_arrivals.right_section.description}
                                        <br />{new_arrivals && new_arrivals.right_section.heading}</h1>
                                    <a className="cta-section" href="#">
                                        <p>{new_arrivals && new_arrivals.right_section.cta.text}</p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-7 ">
                                <a href="#">
                                    <img className="nav-visit-banner" alt="item-img"
                                        src={new_arrivals && new_arrivals.right_section.section_type} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        firstVisitData: state.testReducer.firstVisitData
    }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({ getFirstVisitData }, dispatch);

FirstVisit = connect(mapStateToProps, mapDispatchToProps)(FirstVisit)
export default FirstVisit;