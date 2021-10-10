import * as PIXI from 'pixi.js'
import nigga from '../assets/niga.jpg'
import { StandartSprite } from './utils/assets-loader'
import anime from 'animejs'
export class Game extends PIXI.Container {
  private sprite = StandartSprite(nigga)
  public ticker = PIXI.Ticker.shared
  constructor() {
    super()
    this.addContainer()
    this.update()
    this.animation()
  }

  addContainer() {
    this.addChild(this.sprite)

  }
  animation(){
    anime({
      targets: this.sprite.scale,
      duration: 500,
      loop: true,
      easing: 'linear',
      x: 2,
      y: 2,
      direction: 'alternate',
    })
  }
  update() {
    this.ticker.add(() => {
      this.rotation += 0.01
    })
  }
}
