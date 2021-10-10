import * as PIXI from 'pixi.js'

export function StandartSprite(assetName: any){
    let texture = PIXI.Texture.from(assetName)
    let sprite = new PIXI.Sprite(texture)
    sprite.anchor.x = 0.5
    sprite.anchor.y = 0.5
    return sprite
}