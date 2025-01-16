// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function createThreshold<Fn extends (...args: any[]) => void>(
  fn: Fn,
  ms: number
): (...args: Parameters<Fn>) => void {
  let lastExecuted = 0;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (...args: Parameters<Fn>) {
      const now = Date.now();

      if (now - lastExecuted >= ms) {
          lastExecuted = now;
          fn(...args);
      } else {
          if (timeoutId !== null) {
              clearTimeout(timeoutId);
          }
          timeoutId = setTimeout(() => {
              lastExecuted = Date.now();
              fn(...args);
          }, ms - (now - lastExecuted));
      }
  };
}