import { isValid } from 'date-fns';

export const isValidDate = (str: string) => {
  return isValid(new Date(str)) && String(new Date(str)) !== 'Invalid Date';
};
