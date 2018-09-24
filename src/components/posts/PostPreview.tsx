class PostPreview extends React.Component<any, any> {
    public render() {
        return (
            <div>
                {this.props.title} written by {this.props.author}
            </div>
        );
    }
}