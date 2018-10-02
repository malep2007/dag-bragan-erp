import React from 'react';
import Aux from '../../../hoc/Aux';
import classes from './CustomerInquiryForm.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


const customerInquiryForm = (props) => (
    <Aux>

        <Form className={classes.CustomerInquiryForm}>
            <h5>Business Details</h5>
            <FormGroup>
                <Label>
                    Business Name
                </Label>
                <Input type="text">
                </Input>
                <Label>
                    Address
                </Label>
                <Input type="address">
                </Input>
            </FormGroup>
            <h5>Contact Person</h5>
            <FormGroup>
                <Label>
                    First Name
                </Label>
                <Input type="text">
                </Input>
                <Label>
                    Last Name
                </Label>
                <Input type="text">
                </Input>
            </FormGroup>
            <h5>Job Type</h5>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox"></Input>
                    Hygine
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox"></Input>
                    Technical
                </Label>
            </FormGroup>
            <FormGroup className={classes.Approval}>
                <Label>Recorded by</Label>
                <Input type="text"></Input>
                <Label>Reviewed by</Label>
                <Input type="text"></Input>
                <Label>Proposed Inspection Date</Label>
                <Input type="date"></Input>
            </FormGroup>
            <h5>Extra Details</h5>
            <FormGroup>
                <Input type="textarea"></Input>
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    </Aux>
);

export default customerInquiryForm;