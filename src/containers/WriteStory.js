import React, { useState, useEffect } from 'react';

function WriteStory() {
    // create state variable for the unfinished story or the new story
    // set this variable from the fetch
    const [story, setStory] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/last')
        .then(resp => resp.json())
        .then(data => console.log(data))
    }, [])
    
    return (
        <div>
            <h2>Write Story</h2>
            {/* if there's a story in the works, add to that story */}
            {/* otherwise program creates a title and user begins the story */}

        </div>
    );
}

export default WriteStory;