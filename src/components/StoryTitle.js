import React from 'react';
import '../App.css';
import { useHistory } from "react-router-dom";

function StoryTitle({story}) {
    const history = useHistory();

    const wordCount = story.word_count;
    const title = story.title;
    // extract a small blurb (first 15 chars) from the first chapter
    const blurb = story.chapters[0].content.slice(0, 40);

    // function to push to ShowStory if clicked
    const routeToStory = () => history.push(`/stories/${story.id}`);

    return (
        // Title routes to show page
        // add css to make it look clickable
        <React.Fragment>
            <h3 className="storyTitle" onClick={routeToStory}>{title}</h3>
            <p className="storyBlurb">("{blurb}...") ({wordCount} words)</p>
            <br/>
        </React.Fragment>
    )
}

export default StoryTitle;