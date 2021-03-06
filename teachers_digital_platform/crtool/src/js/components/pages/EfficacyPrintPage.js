import React from "react";

import C from "../../business.logic/constants";
import PrintIntroComponent from "../pages/partial.pages/PrintIntroComponent";
import DimensionInformation from "../common/DimensionInformation";
import ViewEditResponseComponent from "../common/ViewEditResponseComponent";
import EfficacyOveralScoreComponent from "../pages/partial.pages/EfficacyOveralScoreComponent";
import EfficacyScopeEvidenceComponent from "../pages/partial.pages/EfficacyScopeEvidenceComponent";
import EfficacyCriterionBlockSummary from "../../components/pages/summary/EfficacyCriterionBlockSummary";

export default class EfficacyPrintPage extends React.Component {
    componentDidMount() {
        this.props.resetPrintButtonState(C.EFFICACY_PAGE);
    }

    render() {
        return (
            <React.Fragment>
                {this.props.showPrintIntro && <PrintIntroComponent {...this.props} />}

                <DimensionInformation
                    dimensionName={C.EFFICACY_PAGE}
                    dimensionSummary="The efficacy dimension assesses whether curriculum materials are clear, accurate, and objective and how easy the materials are for teachers and students to access."
                    {...this.props}
                    reviewedOnDate={this.props.distinctiveCompletedDate[C.EFFICACY_PAGE]} />

                <ViewEditResponseComponent criterionPage={C.EFFICACY_PAGE} {...this.props} />
                <EfficacyScopeEvidenceComponent {...this.props} />

                <EfficacyOveralScoreComponent
                    dimensionPage={C.UTILITY_PAGE}
                    dimensionName="Efficacy"
                    dimensionKey="efficacy-crt-"
                    dimensionLead="How does this curriculum meet the criteria for efficacy:"
                    {...this.props} />

                <EfficacyCriterionBlockSummary {...this.props} />
            </React.Fragment>
        );
    }
}
