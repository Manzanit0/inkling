/// <reference path="./PostPreview.tsx" />

class PostPreviewList extends React.Component<any, any> {
    public render() {
        return (
            <div>
                {this.props.posts.map(post =>
                    <PostPreview title={post.title} author={post.author} />
                )}
            </div>
        );
    }
}