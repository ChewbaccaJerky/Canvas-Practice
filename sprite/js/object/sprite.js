import { context } from '../app.js';

export const createSprite = function createSprite(options){
    const sprite = {
        ctx: context,
        width: options.width,
        height: options.height,
        image: options.image
    };

    return sprite;
};
