import { writeFileSync } from 'fs';
import { PdfService } from '../services/pdf-service';

const main = async () => {
    const pdfService = new PdfService();
    // const pdfBuffer = await pdfService.convertHtmlToPdf('<div> Hello World </div>');
    const pdfBuffer = await pdfService.createInvoice({
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
    });

    writeFileSync('./test.pdf', pdfBuffer);
};

main();
