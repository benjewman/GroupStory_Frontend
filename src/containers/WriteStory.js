import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

function WriteStory() {
    const history = useHistory();
    // create state variable for the unfinished story or the new story
    // set this variable from the fetch
    const [story, setStory] = useState({});
    const [content, setContent] = useState("");
    let contentWithStoryId = {content: content, story_id: story.id}

    useEffect(() => {
        fetch('http://localhost:3000/last')
        .then(resp => resp.json())
        .then(storyData => {
            console.log(storyData);
            setStory(storyData);
        })
        // add a legitimate array dependency that won't create a loop
    }, [])

    const renderPrompt = () => {
        // if there is a previous chapter, show it, tell the reader they're starting the story
        
        // show the previous chapters

        return <h3>Start your chapter!</h3>
    }

    const handleChange = event => {
        setContent(event.target.value);
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
                alert("There was an error posting this chapter");
            } else {
                history.push('/');
            }
        })


    }
    
    return (
        <div>
            <h2>{story.title}</h2>
            {renderPrompt()}

            {/* Create a form for user to write a chapter */}
            {/* Then post fetch that chapter */}
            <form onSubmit={handleSubmit}>
                Your chapter: 
                <br/>
                <textarea value={content} onChange={handleChange}/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>

        </div>
    );
}

export default WriteStory;