import { render } from '@testing-library/react';
import React from 'react';

function Note( { id, title, content } ) {
    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default Note;