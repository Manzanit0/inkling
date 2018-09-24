/// <reference path="./components/posts/PostEditForm.tsx" />

class App extends React.Component {
    constructor(props){
        super(props);
    }

    public render() {
        return (
            <div>
                <PostEditForm />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
