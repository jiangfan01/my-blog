export const showMessage = (text: string) => {
    (window as any).__SHOW_MESSAGE__?.(text);
};