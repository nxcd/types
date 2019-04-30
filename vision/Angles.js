"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Measure_1 = require("../unit-system/Measure");
exports.newAngleResponse = (unit, average, values) => {
    return {
        unit: unit, values: values, average: average, to: function (unit) {
            let rv = this;
            if (rv.unit !== unit) {
                let cvt = (v) => {
                    return unit == Measure_1.Unit.degree ? (180 * v) / Math.PI : (Math.PI * v) / 180;
                };
                rv = Object.assign(Object.assign({}, rv), rv);
                rv.unit = unit;
                let vals;
                if (rv.values) {
                    // late assignment to avoid compiler error
                    vals = rv.values;
                    Object.entries(vals).forEach(([k, v]) => {
                        vals[k] = cvt(v);
                    });
                }
                rv.average = cvt(rv.average);
            }
            return rv;
        }
    };
};
