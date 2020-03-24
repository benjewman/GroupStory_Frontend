import React from 'react';

function StoryTitle({story}) {
    const title = story.title
    
    return (
        <React.Fragment>
            <h3>{title}</h3>
        </React.Fragment>
    )
}

export default StoryTitle;