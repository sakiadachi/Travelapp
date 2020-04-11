import { getDiffDay } from'../client/js/formHandler';

describe("getDiffDay", () => {
    test("it returns the correct result", () => {
        const ts = 1586577357;
        const dateDivided = 1586922954;

        expect(getDiffDay(ts, dateDivided)).toBeCloseTo(4);
    });
});