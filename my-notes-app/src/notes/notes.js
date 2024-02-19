import React, { useState } from 'react';
import './Note.css';

const Note = ({ id, title, content, timestamp }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const handleEdit = () => {
    // Handle editing note here
  };

  const handleDelete = () => {
    // Handle deleting note here
  };

  return (
    <div className="note">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={e => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedContent}
            onChange={e => setEditedContent(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <h3>{title}</h3>
          <p>{content}</p>
          <small>{new Date(timestamp).toLocaleString()}</small>
        </>
      )}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Cancel' : 'Edit'}
      </button>
    </div>
  );
};

export default Note;