import { render } from '@testing-library/react';
import React from 'react';

function Note() {
    return (
        <div className="note">
            <h1>Note Title</h1>
            <p>Note content goes here. React is amazing.</p>
        </div>
    )
}

export default Note;