import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

function WriteStory() {
    const history = useHistory();
    // create state variable for the unfinished story or the new story
    // set this variable from the fetch
    const [story, setStory] = useState({});
    const [content, setContent] = useState("");
    const [email, setEmail] = useState("");
    let contentWithStoryId = {content: content, story_id: story.id, email: email}

    useEffect(() => {

        fetch('http://localhost:3000/last')
        .then(resp => resp.json())
        .then(storyData => {
            setStory(storyData);
        })

        // add a legitimate array dependency that won't create a loop
    }, [history])

    const renderPrompt = () => {
        // if there is a previous chapter, show it, or tell the reader they're starting the story
        if (story.chapters && story.chapters.length > 0) {
            return <p>Previous chapter: {story.chapters[story.chapters.length - 1].content}</p>
        } else {
            return <p>Start the first chapter of this story...</p>
        }
    }

    const handleChange = event => {
        if (event.target.name === "email") {
            setEmail(event.target.value);
        } else {
            setContent(event.target.value);
        }

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let fetchObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contentWithStoryId)
        }

        fetch('http://localhost:3000/chapters', fetchObj)
        .then(resp => resp.json())
        .then(data => {
            if (data.message) {
                alert(data.message);
            } else {
                console.log(data);
                history.push('/');
            }
        })


    }
    
    return (
        <div>
            <h2>Contribute to a Story in Progress</h2>
            <br/>
            <h3 className="workingTitle">{story.title}</h3>
            {renderPrompt()}

            {/* Create a form for user to write a chapter */}
            {/* Then post fetch that chapter */}
            <form onSubmit={handleSubmit}>
                Your chapter (no less than 250 characters and no more than 500 characters): 
                <br/>
                <textarea name="content" value={content} onChange={handleChange}/>
                <br/>
                Your email address (we'll email you when the story is finished):
                <br/>
                <input type="text" name="email" value={email} onChange={handleChange} />
                <br/>
                <input type="submit" value="Submit"/>
            </form>

        </div>
    );
}

export default WriteStory;