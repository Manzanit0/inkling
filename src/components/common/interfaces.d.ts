interface ITextFieldProps {
    name: string;
    label: string;
    placeholder: string;
    text: string;
    
    handleChange(event: any): void;
}