import { PdfService } from '../services/pdf-service';
import { getInvoiceHtml } from '../services/pdf-service/templates/invoice';

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

const htmlPage = getInvoiceHtml(mockData);

const createHtmlPages = (count: number) =>
    Array(count)
        .fill(htmlPage)
        .reduce((acc, cur) => `${acc}${cur}`, '');

const main = async () => {
    await generatePdfsSync(1);
    await generatePdfsSync(10);
    await generatePdfsSync(100);
    await generatePdfsSync(1000);
};

const generatePdfsSync = async (count: number) => {
    const pdfService = new PdfService();
    const htmlPages = createHtmlPages(count);

    const start = new Date();
    await pdfService.convertHtmlToPdf(htmlPages);

    const stop = new Date();

    const totalTimeInSec = (stop.getTime() - start.getTime()) / 1000;
    console.log(`count: ${count}, time in seconds: ${totalTimeInSec}`);
};

main();
