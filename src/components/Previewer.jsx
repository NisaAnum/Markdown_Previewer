import React, { useEffect, useState } from 'react';
import { marked } from 'marked';
import { useMarkdownContext } from '../contexts/markdowncontexts';

const Previewer = () => {
  const { markdown } = useMarkdownContext();
  const [htmlContent, setHtmlContent] = useState('');
  const [isZoomed, setZoomed] =useState(false);

  useEffect(() => {
    const Html = marked(markdown);
    setHtmlContent(Html);
    // console.log("Original Markdown:", markdown);
    // console.log("Converted HTML:", Html);
  }, [markdown]);

  const toggleZoom=()=> {
    setZoomed(!isZoomed);
  }

  return (
    <div className={` ${isZoomed ? ' fixed inset-0 h-screen' : 'md:w-8/12'} previewer-container bg-green-50 border border-black mx-auto w-full md:w-8/12 mt-4`}>
      <div className="toolbar flex justify-between items-center p-2 bg-green-200 border border-black">
        <i className="fa fa-fire" title="no-stack-dub-sack"></i>
        <span className="text-xl font-serif">Previewer</span>
        <button className="fa fa-arrows-alt" onClick={toggleZoom} title="Zoom"></button>
      </div>
      <div className={`w-full ${isZoomed ? 'h-[calc(100vh-72px)]' : 'h-48'} max-w-none h-auto p-4 border-black prose`}
           dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default Previewer;
