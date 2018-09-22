class TextAreaInput extends React.Component<any, any> {
    storage = window.localStorage;

    constructor(props: any) {
        super(props);
        this.state = { text: this.storage.getItem(this.props.name) };
    }

    public handleChange(event: any): void {
        this.setState({ name: event.target.value }); // TODO: do we really want a re-render here?
        this.storage.setItem(this.props.name, event.target.value);
    }

    public render() {
        return (
            <div>
                <div>{this.props.label}</div>
                <textarea
                    name={this.props.name}
                    cols={50}
                    rows={5}
                    placeholder={this.props.placeholder}
                    defaultValue={this.state.text}
                    onChange={e => this.handleChange(e)}
                />
            </div>
        );
    }
}