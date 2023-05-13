import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";
import plugin from 'grapesjs-blocks-basic'
import { useEffect, useState } from "react";
import './style.css';
import { bogdanHTML } from 'templates/templateString'


const Primary = () => {
  const templateData = {
    eventName: "Stas",
    eventDescription: "Stas",
    uspTitle1: "Stas",
    uspDescription1: "Stas",
    uspTitle2: "Stas",
    uspDescription2: "Stas",
    targetAudience: "Stas",
  }
  const htmlToRender = bogdanHTML(templateData);

  useEffect(() => {
    const editor = grapesjs.init({
      container: '#gjs',
      // Size of the editor
      height: '100vh',
      width: 'auto',
      // Disable the storage manager for the moment
      plugins: [plugin],
      pluginsOpts: {
        'gjs-blocks-basic': {
          stylePrefix: '',
          flexGrid: 1
        }
      }
    });
    editor.on("load", () => {
      // @ts-ignore
      editor.addComponents(htmlToRender);
    })
    //Clear the editor
    localStorage.clear();
  }, []);

  return (
      <div id="gjs"/ >
    )
};

export default Primary;
