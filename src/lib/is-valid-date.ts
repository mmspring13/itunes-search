import { isValid } from 'date-fns';

export const isValidDate = (str: string) => {
  return (
    typeof str === 'string' &&
    !Number(str) &&
    isValid(new Date(str)) &&
    String(new Date(str)) !== 'Invalid Date'
  );
};
