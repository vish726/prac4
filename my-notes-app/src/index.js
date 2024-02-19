import React from 'react';
import ReactDOM from 'react-dom';
import Note from './notes/Note';
import './index.css';

const notes = [
  {
    id: 1,
    title: 'Note 1',
    content: 'Content of note 1.',
    timestamp: new Date().getTime()
  },
  {
    id: 2,
    title: 'Note 2',
    content: 'Content of note 2.',
    timestamp: new Date().getTime()
  }
];

function App() {
  return (
    <div className="container">
      {notes.map(note => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          timestamp={note.timestamp}
        />
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));