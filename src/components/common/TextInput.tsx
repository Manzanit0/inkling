class TextInput extends React.Component<any, any> {
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
                <input
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    defaultValue={this.state.text}
                    onChange={e => this.handleChange(e)}
                />
            </div>
        );
    }
}