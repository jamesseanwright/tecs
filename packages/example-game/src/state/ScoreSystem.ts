import { System } from '@sectjs/core';
import ScoreTracking from './ScoreTracking';

class ScoreSystem extends System<ScoreTracking> {
    protected next(component: ScoreTracking, timestamp: number): void {
        // TODO: performance considerations
        component.textRenderable.text = component.score;
    }
}

export default ScoreSystem;
