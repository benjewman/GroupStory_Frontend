import React from 'react';
import '../App.css';
import { useHistory } from "react-router-dom";

function StoryTitle({story}) {
    const title = story.title

    const history = useHistory();
    // extract a small blurb (first 15 chars) from the first chapter
    const blurb = story.chapters[0].content.slice(0, 15);

    // function to push to ShowStory if clicked
    const routeToStory = () => history.push(`/stories/${story.id}`);

    return (
        // Make Title clickable and route to a show page
        <React.Fragment>
            <h3 className="storyTitle" onClick={routeToStory}>{title}</h3>
            <p className="storyBlurb">("{blurb}...")</p>
        </React.Fragment>
    )
}

export default StoryTitle;