import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './phoneNumberValidation.css';

export interface PhoneNumberInputProps {
    value: string;
    handleChange: (value: string) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = (props) => {
    return (
        <div className="phone-input-container">
            <label className="label">
                Phone Number
                <PhoneInput
                    country={'us'}
                    value={props.value}
                    onChange={props.handleChange}
                    inputProps={{
                        required: true
                    }}
                    containerClass="react-tel-input"
                    inputClass="form-control"
                />
            </label>
        </div>
    );
};

export default PhoneNumberInput;
