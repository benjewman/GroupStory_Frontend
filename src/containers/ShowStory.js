import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function ShowStory(props) {
    // create variable for the storyId we can use to fetch
    const storyId = props.match.params.storyId;

    // initialize variables with empty assignments that we reassign during fetch
    // must use state hook so the component rerenders after fetch
    const [title, setTitle] = useState('');
    const [chapters, setChapters] = useState([]); 

    // fetch the story with a hook that only runs once thanks to the empty array as the second argument
    useEffect(() => {
        fetch(`http://localhost:3000/stories/${storyId}`)
        .then(resp => resp.json())
        .then(storyData => {
            // reassign our state variable with data from the fetch
            setTitle(storyData.title);
            setChapters(storyData.chapters); 
        })
    }, []);

    // Create array with all the chapters' contents in order
    const contentArray = chapters.map(chapter => chapter.content)
    // Join the array elements with a space
    const combinedContent = contentArray.join(' ')

    return (
        <div>
            <h2>{title}</h2>
            <p>{combinedContent}</p>
        </div>
    )
}

export default ShowStory;