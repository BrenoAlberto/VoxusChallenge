export class DateHelper {
    private readonly daysInMonth: number[] = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    public getDayNumberInYear(date: string): number {
        this.ensureFormatConstraints(date);

        const year = parseInt(date.substring(0, 4));
        const month = parseInt(date.substring(5, 7));
        const day = parseInt(date.substring(8, 10));
        this.ensureRangeConstraints(day, month, year);

        let dayOfYear = day;

        for (let i = 1; i < month; i++) {
            dayOfYear += this.getDaysInMonth(i, year);
        }

        return dayOfYear;
    }

    private ensureFormatConstraints(date: string): void {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
            throw new Error("Invalid date format");
        }
    }

    private ensureRangeConstraints(day: number, month: number, year: number): void {
        if (year < 1900 || year > 2022 || month < 1 || month > 12 || day < 1 || day > this.getDaysInMonth(month, year)) {
            throw new Error("Invalid date format");
        }
    }

    private getDaysInMonth(month: number, year: number): number {
        if (month === 2 && this.isLeapYear(year)) {
            return 29;
        }
        return this.daysInMonth[month];
    }

    private isLeapYear(year: number): boolean {
        return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
}
