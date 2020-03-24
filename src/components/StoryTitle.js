import React from 'react';
import '../App.css';

function StoryTitle({story}) {
    const title = story.title

    // extract a small blurb (first 15 chars) from the first chapter
    const blurb = story.chapters[0].content.slice(0, 15);

    return (
        <React.Fragment>
            <h3 className="storyTitle">{title}</h3>
            <p className="storyBlurb">("{blurb}...")</p>
        </React.Fragment>
    )
}

export default StoryTitle;