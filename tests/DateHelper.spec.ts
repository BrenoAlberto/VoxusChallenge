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

    describe.each([
        '2019-1-01',
        '2019-13-01',
        '2019-02-30',
        '2019-00-01',
        '2019-01-00',
        '2019/01/01',
        '1900-02-29',
        '1899-12-31',
        '2023-01-01',
        "abcd-01-01",
        new Date().toISOString(),
        new Date().toString()
    ])('getDayNumberInYear should throw error for invalid date format %s', (invalidDate) => {
        it('throws an error', () => {
            expect(() => dateHelper.getDayNumberInYear(invalidDate)).toThrow('Invalid date format');
        });
    });
});
