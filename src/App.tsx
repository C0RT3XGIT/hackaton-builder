import React, {useRef} from 'react';
import EmailEditor from "react-email-editor"

function App() {
  const emailEditorRef = useRef(null);

  const onReady = () => {
    console.log(11)
  }

  const exportHtml = () => {
    //   @ts-ignore
    emailEditorRef?.current?.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
    });
  };

  return (
    <div className="App">
      <h1>Hello world</h1>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>
      <EmailEditor ref={emailEditorRef} onReady={onReady} />
    </div>
  );
}

export default App;
