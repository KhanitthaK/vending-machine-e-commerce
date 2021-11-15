import * as moment from 'moment';

const DAY_IN_MILLISECONDS = 86_400_000;

export const getDate = (date: string) => {
  return date ? moment(date).format('YYYY-MM-DD') : null;
};

export const getDateReportFormat = (date: string) => {
  return date ? moment(date).format('DD/MM/YYYY') : null;
};

export const getDateTime = (date: string) => {
  return date ? moment(date).utcOffset(7).format() : null;
};

export const getStartOfToday = () => {
  return moment().set({ h: 0, m: 0, s: 0, ms: 0 }).valueOf();
};

export const isOlderThanADay = (timeInMilliseconds: number) => {
  return !timeInMilliseconds || Date.now() - timeInMilliseconds >= DAY_IN_MILLISECONDS;
};
