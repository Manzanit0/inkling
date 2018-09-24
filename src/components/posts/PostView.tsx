
// This should be just a view component - No state.

class PostView extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <h3>
                    {this.props.title}
                </h3>
                <div>
                    {this.props.body}
                </div>
                <h6>
                    <i>Written by {this.props.author}</i>
                </h6>
            </div>
        );
    }
}