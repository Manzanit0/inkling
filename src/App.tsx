/// <reference path="./components/CreatePostForm.tsx" />

class App extends React.Component {
    render() {
        return (
            <div>
                <p>Inkling!</p>
                <CreatePostForm />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
