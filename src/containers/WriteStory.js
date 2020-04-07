import React, { useState, useEffect } from 'react';

function WriteStory() {
    // create state variable for the unfinished story or the new story
    // set this variable from the fetch
    const [story, setStory] = useState({});

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


        return <h3>Start your chapter!</h3>
    }
    
    return (
        <div>
            <h2>{story.title}</h2>
            {renderPrompt()}

            {/* Create a form for user to write a chapter */}
            {/* Then post fetch that chapter */}


        </div>
    );
}

export default WriteStory;