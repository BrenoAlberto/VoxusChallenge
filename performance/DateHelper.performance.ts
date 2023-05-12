import { DateHelper } from '../src/DateHelper'
import { measurePerformance } from './measurer'

const numberOfRuns = 100000

const dateHelper = new DateHelper()

measurePerformance(
    'DateHelper getDayNumberInYear',
    dateHelper.getDayNumberInYear.bind(dateHelper),
    ['2020-12-31'],
    numberOfRuns
)

measurePerformance(
    'DateHelper ensureFormatConstraints',
    dateHelper["ensureFormatConstraints"].bind(dateHelper),
    ['2020-12-31'],
    numberOfRuns
)

measurePerformance(
    'DateHelper ensureRangeConstraints',
    dateHelper["ensureRangeConstraints"].bind(dateHelper),
    [31, 12, 2020],
    numberOfRuns
)

measurePerformance(
    'DateHelper getDaysInMonth',
    dateHelper["getDaysInMonth"].bind(dateHelper),
    [12],
    numberOfRuns
)

measurePerformance(
    'DateHelper isLeapYear',
    dateHelper["isLeapYear"].bind(dateHelper),
    [2020],
    numberOfRuns
)