//ProductSelectionPage
import React from 'react';
import './ProductSelectionPage.scss';
import { ErrorBoundary } from '../../components';

const ProductSelectionPage = () => {
    const Regular = 'regular';
    const Platinum = 'platinum';
    const Diamond = 'diamond';

    return (
        <ErrorBoundary>
            <div className="job_page">
                <div className="content">
                    <div className="col">
                        <div className="heading">Regular </div>
                        <h3 className="price">
                            {<small></small>}FREE{<small>/10 Days</small>}
                        </h3>
                        <p>
                            Job Hosting time <span>10 Days</span>
                        </p>
                        <p>
                            Logo in search<span className="yes">Yes</span>
                        </p>
                        <p>
                            Logo in Job Description
                            <span className="yes">Yes</span>
                        </p>
                        <p>
                            Boosted display<span className="no">No</span>
                        </p>
                        <p>
                            Highlight display in Search
                            <span className="no">No</span>
                        </p>
                        <p>
                            Job of The Week<span className="no">No</span>
                        </p>
                        <p>
                            Job of The Month<span className="no">No</span>
                        </p>

                        <div className="btn">
                            <a href={Regular}>Select</a>
                        </div>
                    </div>

                    <div className="col">
                        <div className="heading">Platinum</div>
                        <h3 className="price">
                            {<small>$</small>}100.00{<small>/30 Days</small>}
                        </h3>
                        <p>
                            Job Hosting time <span>30 Days</span>
                        </p>
                        <p>
                            Logo in search<span className="yes">Yes</span>
                        </p>
                        <p>
                            Logo in Job Description
                            <span className="yes">Yes</span>
                        </p>
                        <p>
                            Boosted display<span className="yes">Yes</span>
                        </p>
                        <p>
                            Highlight display in Search
                            <span className="yes">Yes</span>
                        </p>
                        <p>
                            Job of The Week<span className="no">No</span>
                        </p>
                        <p>
                            Job of The Month<span className="no">No</span>
                        </p>

                        <div className="btn">
                            <a href={Platinum}>Select</a>
                        </div>
                    </div>

                    <div className="col">
                        <div className="heading">Diamond</div>
                        <h3 className="price">
                            {<small>$</small>}200.00{<small>/60 Days</small>}
                        </h3>
                        <p>
                            Job Hosting time <span>60 Days</span>
                        </p>
                        <p>
                            Logo in search<span className="yes">Yes</span>
                        </p>
                        <p>
                            Logo in Job Description
                            <span className="yes">Yes</span>
                        </p>
                        <p>
                            Boosted display<span className="yes">Yes</span>
                        </p>
                        <p>
                            Highlight display in Search
                            <span className="yes">Yes</span>
                        </p>
                        <p>
                            Job of The Week<span className="yes">Yes</span>
                        </p>
                        <p>
                            Job of The Month<span className="yes">Yes</span>
                        </p>

                        <div className="btn">
                            <a href={Diamond}>Select</a>
                        </div>
                    </div>
                </div>
            </div>
        </ErrorBoundary>
    );
};
export default ProductSelectionPage;
