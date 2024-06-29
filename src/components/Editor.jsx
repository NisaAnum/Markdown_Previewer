import React, { useEffect, useState } from 'react';
import { useMarkdownContext } from '../contexts/markdowncontexts';

const Editor = () => {
  const { markdown, setMarkdown } = useMarkdownContext();
  const [isZoomed, setIszoomed] = useState(false);

  // Set default content if markdown is empty
  useEffect(() => {
    if (!markdown) {
      setMarkdown(`# Welcome to Anum React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// This is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == \`\\\`\\\`\` && lastLine == \`\\\`\\\`\`) {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`);
    }
  }, [markdown]);

  const toggleZoom=()=> {
    setIszoomed(!isZoomed);
  }

  return (
    <div className={`editor-container  bg-green-50 border mt-3 mx-auto w-full ${isZoomed ? 'fixed inset-0 h-screen' : 'md:w-1/2'}`}>
      <div className="toolbar flex justify-between items-center p-2 bg-green-200 border border-black shadow-md">
      <i className="fa fa-fire" title="no-stack-dub-sack"></i>
        <span className='text-xl font-serif '>Editor</span>
        <button className="fa fa-arrows-alt" onClick={toggleZoom} title="Zoom"></button>
      </div>
      <textarea
        className={`editor w-full ${isZoomed ? 'h-[calc(100vh-72px)]' : 'h-48'} p-2 text-base border-black bg-green-50 `}
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Editor;
