import { Request, Response, NextFunction } from 'express';
import * as httpCodes from 'http-codes';
import { PdfService } from '../../../../services/pdf-service';

const mockData = {
    supplier: {
        name: 'Cyril Urban',
        address: {
            city: 'Praha',
            postalCode: '11000',
            street: 'Pařížská 127/20',
        },
    },
    customer: {
        name: 'Qest Automation s.r.o.',
        address: {
            city: 'Praha',
            postalCode: '18600',
            street: 'Pobřežní 249/46',
        },
    },
    reward: {
        type: 'Arabica káva - 250 g',
        number: 10,
        rate: 300,
        totalBilling: 3000,
    },
    dateOfIssue: new Date('2022-01-31'),
    dueDate: new Date('2022-02-15'),
};

export const createGetPdfController = (pdfService: PdfService) => async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const pdfBuffer = await pdfService.createInvoice(mockData);

        res.status(httpCodes.OK).set('Content-Type', 'application/pdf').send(pdfBuffer);
    } catch (e) {
        return next(e);
    }
};
