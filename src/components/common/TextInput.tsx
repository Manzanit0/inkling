/// <reference path="./interfaces.d.ts" />

const TextInput = (props: ITextFieldProps) => (
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input
            className="form-control"
            name={props.name}
            placeholder={props.placeholder}
            defaultValue={props.text}
            onChange={e => props.handleChange(e)}
        />
    </div>
);