import * as PIXI from "pixi.js";
import sceneManager from "../utility/SceneManager";
import AssetsManager from "../utility/AssetsManager";
import LoadingScreen from "../components/LoadingScreen";

export default class BootScene extends PIXI.Container {
    constructor() {
      super();

      this.create()
    }

    async create(){
      await this.preload()
      this.startLoadingScreen()
      this.startNextScene()
    }
  
    preload() {
      const images = [
        "loading_text",
        "loading_woman",
        "loading_elements",
        "loading_background",
      ];

      let totalImages = images.length;

      for (let i = 0; i < totalImages; i++) {
        let sprite = images[i];
        let source = `assets/loadScreen/${sprite}.png`
  
        AssetsManager.addImage(sprite, source);
    }
  }
  
    startNextScene() {
      sceneManager.startScene("PreloadScene");
    }

    startLoadingScreen(){
      const loadingScreen = new LoadingScreen(this)
    }
  }

  
  