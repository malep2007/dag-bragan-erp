import React, { Component } from 'react';
import CustomerInquiry from '../InquiryForm/CustomerInquiryForm/CustomerInquiryForm';
import Aux from '../../hoc/Aux';

import classes from './InquiryForm.css';

class InquiryForm extends Component {
    state = {
        customer_details: {
            id: 'IQ/NO/2018/09/22',
            first_name: 'Ephraim',
            last_name: 'Malinga'
        },
        job_details: {
            hygiene: false,
            technical: false
        },
        approval_details: {
            recorded_by: {
                first_name: 'Chris',
                last_name: 'Kaweesa'
            },
            reviewed_by: {
                first_name: 'Chris',
                last_name: 'Kaweesa'
            }
        }
    }

    render() {
        return (
            <Aux className = {classes.InquiryForm}>
                <CustomerInquiry />
            </Aux>
        )
    }
};

export default InquiryForm;