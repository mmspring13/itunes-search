import { isValid, parseJSON } from 'date-fns';

export const isValidDate = (str: string) => {
  return isValid(new Date(str)) && String(parseJSON(str)) !== 'Invalid Date';
};
