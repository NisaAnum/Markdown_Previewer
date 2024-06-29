import React from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { MarkdownProvider } from './contexts/markdowncontexts';
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  return (
    <MarkdownProvider>
      <div className="App flex flex-col items-center justify-center min-h-screen bg-green-200">
        <div className="app-container flex flex-col items-center gap-4 w-full">
          <Editor />
          <Previewer />
        </div>
      </div>
    </MarkdownProvider>
  );
};

export default App;
