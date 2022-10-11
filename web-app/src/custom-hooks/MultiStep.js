// @ts-check

import { useState } from "react";

/**
 * @param {any[]} steps
 */
export default function useMultiStep(steps/* : ReactElement[] */) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    function next() {
        setCurrentStepIndex(currentStepIndex + 1);
    }

    function previous() {
        setCurrentStepIndex(currentStepIndex - 1);
    }

    function reset() {
        setCurrentStepIndex(0);
    }

    /**
     * @param {import("react").SetStateAction<number>} index
     */
    function goTo(index) {
        setCurrentStepIndex(index);
    }

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
        next,
        previous,
        reset,
        goTo
    }
}
