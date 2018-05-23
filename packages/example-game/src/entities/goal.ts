import { RectPositionable } from '@sectjs/basics';
import { LinearCollidable } from '@sectjs/collision';
import { Entity, EntityBinder } from '@sectjs/core';

const createGoal = (bindEntity: EntityBinder, name: string, x: number, height: number) => {
    const positionable = new RectPositionable(0, x, 1, height); // TODO: world space, real coords
    const linearCollidable = new LinearCollidable(name, positionable);

    return bindEntity(new Entity(positionable, linearCollidable));
};

export default createGoal;
