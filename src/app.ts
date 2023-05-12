import express, { Request, Response } from 'express';
import { DateHelper } from './DateHelper';

const app = express();
const port = process.env.PORT || 3000;

app.get('/get-day-number-in-year', (req: Request, res: Response) => {
    const date = req.query.date;

    if (!date) {
        return res.status(400).json({ error: 'Date parameter is required' });
    }

    try {
        const dateHelper = new DateHelper();
        const dayNumber = dateHelper.getDayNumberInYear(date as string);
        res.json({ dayNumber });
    } catch (error) {
        // @ts-expect-error
        res.status(400).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
