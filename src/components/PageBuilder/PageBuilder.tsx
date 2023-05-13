import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";
import plugin from 'grapesjs-blocks-basic'
import { useEffect, useState } from "react";
import './style.css';
import { bogdanHTML } from 'templates/templateString'
import Lottie, {useLottie} from "lottie-react";
import loadingAnimation from "assets/paperplane-loading.json"

const Primary = () => {
  const [isLoading, setLoading] = useState(true);
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
  const lootieOptions = {
    animationData: loadingAnimation,
    loop: true
  };

  const {View} = useLottie(lootieOptions);

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
      setLoading(false);
    })
    //Clear the editor
    localStorage.clear();
  }, []);
  console.log(isLoading)

  return (
    <div id="wrapper">
      <div id="gjs" style={{display: isLoading ? "none" : "block"}}/ >
      {
        isLoading &&
        <div id="loader">
          {View}
        </div>
      }
    </div>
    )
};

export default Primary;
