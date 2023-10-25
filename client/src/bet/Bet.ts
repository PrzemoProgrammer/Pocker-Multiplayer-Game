import { Sprite, Container} from "pixi.js";
import CreateComponent from "../components/CreateComponent";
import CreateText from "../components/CreateText";
import BetConfig from "../interfaces/BetConfig";

export default class Bet extends Container {
    image: Sprite | null 
    background: Sprite | null
    text: CreateText 
    config:  BetConfig
  constructor(config: BetConfig) {
    super()
    this.config = config
    this.x = this.config.x
    this.y = this.config.y
    this.background = this.createBackgroundImage()
    this.image = this.createBetImage()
    this.text = this.createBetsCountText()

    this.setVisible(false)
  }

  private createBetImage(): Sprite | null {
    const spriteConfig = this.config.image;
      const sprite = CreateComponent.create(spriteConfig);
      if (sprite) this.addChild(sprite);
      return sprite;
  }

  private createBackgroundImage(): Sprite | null {
    const spriteConfig = this.config.background;
      const sprite = CreateComponent.create(spriteConfig);
      if (sprite) this.addChild(sprite);
      return sprite;
  }

  private createBetsCountText(): CreateText {
    const textConfig = this.config.text;
    const betText = new CreateText(textConfig);
      this.addChild(betText);
      return betText;
  }

  public setVisible(value: boolean){
    this.visible = value
  }
}