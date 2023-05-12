class DateHelper {
    private readonly daysInMonth: Map<number, number> = new Map([   
        [1, 31],
        [2, 28],
        [3, 31],
        [4, 30],
        [5, 31],
        [6, 30],
        [7, 31],
        [8, 31],
        [9, 30],
        [10, 31],
        [11, 30],
        [12, 31]
    ]);
 
    public getDayNumberInYear(date: string): number {
        this.ensureIsValidDate(date);
        const year = date.substring(0, 4);
        const monthInt = parseInt(date.substring(5, 7));
        const dayInt = parseInt(date.substring(8, 10));
        const daysInMonth = this.getDaysInMonth(monthInt);
        if (dayInt > daysInMonth) throw new Error("Invalid date format");
        return dayInt + this.getSumOfDaysUntilMonth(monthInt, year);
    }


    private ensureIsValidDate(date: string): void {
        if (date.length !== 10) {
            throw new Error("Invalid date format");
        }
        if (date[4] !== "-" || date[7] !== "-") {
            throw new Error("Invalid date format");
        }
        for (let i = 0; i < date.length; i++) {
            if (i === 4 || i === 7) {
                continue;
            }
            if (isNaN(parseInt(date[i]))) {
                throw new Error("Invalid date format");
            }
        }
    }

    private getDaysInMonth(month: number): number {
        return this.daysInMonth.get(month) || 0;
    }

    private getSumOfDaysUntilMonth(month: number, year: string): number {
        let sum = 0;
        for (let i = 1; i < month; i++) {
            sum += this.getDaysInMonth(i);
        }
        if (this.isLeapYear(parseInt(year)) && month > 2) {
            sum++;
        }
        return sum;
    }

    private isLeapYear(year: number): boolean {
        return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
}

const dateHelper = new DateHelper();
console.log(dateHelper.getDayNumberInYear("2019-01-09"));
console.log(dateHelper.getDayNumberInYear("2019-02-10"));