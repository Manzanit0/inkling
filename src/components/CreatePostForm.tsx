/// <reference path="./common/TextAreaInput.tsx" />
/// <reference path="./common/TextInput.tsx" />

class CreatePostForm extends React.Component {
    render() {
        return (
            <div>
                <TextInput 
                    name="PostTitle"
                    label="Title"
                    placeholder="Some random title"
                />
                <TextAreaInput
                    name="PostBody"
                    label="Content"
                    placeholder="Type here pls!"
                />
                <button type="submit">Publish</button>
            </div>
        );
    }
}