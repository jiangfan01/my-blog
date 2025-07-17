export function throttle<T extends (...args: never[]) => void>(fn: T, delay: number): T {
    let lastCall = 0;
    return function (...args: Parameters<T>) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            fn(...args);
        }
    } as T;
}