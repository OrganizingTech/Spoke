import React, { Fragment } from "react";
import { applyScript } from '../lib/scripts'
// I might have to add an ingestMethod just go get the first line of data.

const AdminTextPreview = ({campaignData}) => {
    // console.log('LOOK HERE FIRST! ----------------------------- ADMINTEXTPREVIEW COMPONENT');
    // console.log("customFields", campaignData.customFields);
    const customFields = campaignData.customFields
    const script = campaignData.formValues.interactionSteps.script
    const texter = {contactId: "40", texterFirstName: "Happy"};
    // console.log("Seeking texter", campaignData)    
    const value = applyScript({
        contact: "test contact", 
        texter: texter,
        script: script, 
        customFields: customFields
    })

    return (
        <Fragment>
             {value}
        </Fragment>
    );
};

export default AdminTextPreview;