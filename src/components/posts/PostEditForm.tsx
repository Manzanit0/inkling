/// <reference path="../common/TextAreaInput.tsx" />
/// <reference path="../common/TextInput.tsx" />

class PostEditForm extends React.Component<any, any> {
    storage = window.localStorage;

    constructor(props: any) {
        super(props);
        this.state = {
            PostTitle: this.storage.getItem("PostTitle") === null ? '' : this.storage.getItem("PostTitle"),
            PostBody: this.storage.getItem("PostBody") === null ? '' : this.storage.getItem("PostBody")
        };
    }

    handleChange = (event: any): void => {
        var obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);
        this.storage.setItem(event.target.name, event.target.value);
    }

    public render() {
        return (
            <div className="card mx-auto" style={{ width: "95%", marginTop: "2.5%" }}>
                <form>
                    <div className="card-body" style={{padding: '20px' }}>
                        <h5 className="card-title">New post</h5>
                        <div className="card-text">
                            <TextInput
                                name="PostTitle"
                                label="Title"
                                placeholder="Some random title"
                                text={this.state.PostTitle}
                                handleChange={this.handleChange}
                            />
                            <TextAreaInput
                                name="PostBody"
                                label="Content"
                                placeholder="Type here pls!"
                                text={this.state.PostBody}
                                handleChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="button" className="btn btn-primary">Publish</button>
                    </div>
                </form>
            </div>
        );
    }
}