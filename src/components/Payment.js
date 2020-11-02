import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const Payment = () => {
    return (
        <div className="container">
            <div className="d-block ml-4">
            <legend>Select your payment method</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  PayPal
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Payoneer
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input type="radio" name="radio1"  />{' '}
                  bkash
                </Label>
              </FormGroup>
              <button className="btn btn-info mt-3">Proceed</button>
            </div>
        </div>
    );
};

export default Payment;