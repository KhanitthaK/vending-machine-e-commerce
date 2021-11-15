import * as moment from 'moment';

import {
  getDate,
  getDateReportFormat,
  getDateTime,
  getStartOfToday,
  isOlderThanADay,
} from './date-time';

describe('getDateTime and getDate data is not null', () => {
  describe('getDateTime', () => {
    it('returns getDateTime', () => {
      const date = new Date();
      expect(getDateTime(date.toString())).toEqual(moment(date).format());
    });
  });

  describe('getDate', () => {
    it('returns getDate', () => {
      const date = new Date();
      expect(getDate(date.toString())).toEqual(moment(date).format('YYYY-MM-DD'));
    });
  });
});

describe('getDateTime and getDate data is null', () => {
  const dataIsNull = null;
  describe('getDateTime', () => {
    it('returns getDateTime', () => {
      expect(getDateTime(dataIsNull)).toEqual(null);
    });
  });

  describe('getDate', () => {
    it('returns getDate', () => {
      expect(getDate(dataIsNull)).toEqual(null);
    });
  });
});

describe('getDateReportFormat', () => {
  it('returns null', () => {
    expect(getDateReportFormat(null)).toEqual(null);
  });
  it('returns getDateReportFormat', () => {
    expect(getDateReportFormat('12-12-2020')).toEqual('12/12/2020');
  });
});

describe('getStartOfToday', () => {
  it('returns getStartOfToday', () => {
    expect(getStartOfToday()).toEqual(moment().set({ h: 0, m: 0, s: 0, ms: 0 }).valueOf());
  });
});

describe('isOlderThanADay', () => {
  it('returns isOlderThanADay = false', () => {
    expect(isOlderThanADay(moment().set({ h: 0, m: 0, s: 0, ms: 0 }).valueOf())).toEqual(false);
  });
  it('returns isOlderThanADay = true', () => {
    expect(isOlderThanADay(0)).toEqual(true);
  });
});
