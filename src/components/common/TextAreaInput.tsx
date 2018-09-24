/// <reference path="./interfaces.d.ts" />

const TextAreaInput = (props: ITextFieldProps) => (
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <textarea
            className="form-control"
            name={props.name}
            cols={50}
            rows={5}
            placeholder={props.placeholder}
            defaultValue={props.text}
            onChange={e => props.handleChange(e)}
        />
    </div>
);