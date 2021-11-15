"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOlderThanADay = exports.getStartOfToday = exports.getDateTime = exports.getDateReportFormat = exports.getDate = void 0;
const moment = require("moment");
const DAY_IN_MILLISECONDS = 86400000;
exports.getDate = (date) => {
    return date ? moment(date).format('YYYY-MM-DD') : null;
};
exports.getDateReportFormat = (date) => {
    return date ? moment(date).format('DD/MM/YYYY') : null;
};
exports.getDateTime = (date) => {
    return date ? moment(date).utcOffset(7).format() : null;
};
exports.getStartOfToday = () => {
    return moment().set({ h: 0, m: 0, s: 0, ms: 0 }).valueOf();
};
exports.isOlderThanADay = (timeInMilliseconds) => {
    return !timeInMilliseconds || Date.now() - timeInMilliseconds >= DAY_IN_MILLISECONDS;
};
//# sourceMappingURL=date-time.js.map