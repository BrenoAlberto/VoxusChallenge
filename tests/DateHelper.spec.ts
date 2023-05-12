import { DateHelper } from '../src/DateHelper';

describe('DateHelper', () => {
    let dateHelper: DateHelper;

    beforeEach(() => {
        dateHelper = new DateHelper();
    });

    describe.each([
        ['2019-01-01', 1],
        ['2019-01-09', 9],
        ['2019-02-10', 41],
        ['2020-02-29', 60],
        ['2020-03-01', 61],
        ['2022-12-31', 365]
    ])('getDayNumberInYear should return correct day number for date %s', (date, expectedResult) => {
        it(`returns ${expectedResult}`, () => {
            expect(dateHelper.getDayNumberInYear(date)).toBe(expectedResult);
        });
    });
});
