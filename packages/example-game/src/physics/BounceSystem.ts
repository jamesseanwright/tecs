import { System } from '@tecs/core';
import { hasRectangularCollision, LinearCollidable, LinearCollisionSystem } from '@tecs/collision';
import { Positionable, RectPositionable } from '@tecs/basics';
import Bounceable from './Bounceable';

class BounceSystem extends System<Bounceable> {
    protected next(component: Bounceable, timestamp: number): void {
        if (component.linearCollidable.hasCollisionWith('paddle')) {
            component.moveable.xSpeed *= -1;
        }
    }
}