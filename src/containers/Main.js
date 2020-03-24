import React from 'react';
import { useEffect, useState } from 'react';
import StoryTitle from '../components/StoryTitle';

function Main() {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/stories')
        .then(resp => resp.json())
        .then(tales => setStories(tales))
    }, []);

    // function to return a small blurb (first 15 chars) from the first chapter of the story passed in
    const storyBlurb = story => story.chapters[0].content.slice(0, 15);

    // map through stories to create an h3 for each title and a blurb of its content
    const renderStories = () => {
        console.log(stories)
        return (
            <React.Fragment>
                {/* style below so the title is bigger and underlined */}
                {/* {stories.map(story => {
                    return(
                    <React.Fragment>
                    <h3 key={story.id}>{story.title} </h3>  
                    <h3 key={}>"{storyBlurb(story)}..."</h3>
                    </React.Fragment>
                    )
                })} */}
                {stories.map(story => <StoryTitle key={story.id} story={story}/>)}
            </React.Fragment>
        )
    }
    
    return (
        <div>
            <h2>Stories</h2>
            {/* fetches most recently finished stories */}
            {/* try to batch the fetches later */}
            {renderStories()}
        </div>
    );
}

export default Main;