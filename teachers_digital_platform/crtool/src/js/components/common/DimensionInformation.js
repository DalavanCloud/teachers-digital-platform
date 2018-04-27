import React from "react";

import C from "../../business.logic/constants";

export default class DimensionInformation extends React.Component {
    renderReviewedOnDate() {
        if (this.props.reviewedOnDate !== undefined) {
            return this.props.reviewedOnDate;
        }
        return this.props.distinctiveCompletedDate[this.props.currentPage]
    }

    render() {
        if (this.props.currentPrintButton !== C.START_PAGE) {
            return (
                <React.Fragment>
                    <div className="block
                                    block__flush-top
                                    block__padded-bottom
                                    block__border-top">
                        <div className="h5">CFPB curriculum review tool</div>
                        <h1>{this.props.dimensionName} summary for {this.props.curriculumTitle}</h1>
                        <p className="lead-paragraph u-mb30">
                            {this.props.dimensionSummary}
                        </p>
                        <p><strong>Grade range:</strong> {this.props.gradeRange}</p>
                        <p><strong>Date of publication:</strong> {this.props.publicationDate}</p>
                        <p><strong>Reviewed on:</strong> {this.renderReviewedOnDate()}</p>
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <hr class="hr u-mb45 u-mt30" />
                    <h2>Curriculum information</h2>
                    <p><strong>Curriculum title:</strong> {this.props.dimensionName}</p>
                    <p><strong>Date of publication:</strong> {this.props.publicationDate}</p>
                    <p><strong>Grade range:</strong> {this.props.gradeRange}</p>
                    <p><strong>Reviewed on:</strong> {this.renderReviewedOnDate()}</p>
                </React.Fragment>
            );
        }
    }
}