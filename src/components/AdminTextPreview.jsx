import React from "react";
import { applyScript } from '../lib/scripts'
// I might have to add an ingestMethod just go get the first line of data.

const AdminTextPreview = ({campaignData}) => {
    console.log('LOOK HERE FIRST! ----------------------------- ADMINTEXTPREVIEW COMPONENT');
    console.log(campaignData)

    // const value = campaignProps
    // console.log('ALLFIELDS');
    // console.log(allFields);
    // console.log('TYPE');
    // console.log(type);
    // console.log('SCRIPT-TEXT');
    // console.log(sampleScript);
    // console.log('SAMPLE-TEXTER');
    
    // const sampleTexter = {contactId: "40", texterFirstName:'Happy'};
    // console.log(sampleTexter);
    
    const value = applyScript({
        contact: "test contact", 
        texter: "texter",
        script: "test script", 
        customFields: "custom fields"
    })

    return (
        <div className='admin-text-preview-container'>
             {value}
        </div>
    );
};

export default AdminTextPreview;