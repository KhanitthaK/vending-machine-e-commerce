"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCamel = void 0;
exports.toCamel = (str) => {
    return str.replace(/([-_][a-z])/g, group => {
        return group.toUpperCase().replace('-', '').replace('_', '');
    });
};
//# sourceMappingURL=to-camel.js.map