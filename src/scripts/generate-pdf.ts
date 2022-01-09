import { writeFileSync } from 'fs';
import { PdfService } from '../services/pdf-service';

const main = async () => {
    const pdfService = new PdfService();
    const pdfBuffer = await pdfService.convertHtmlToPdf('<div> Hello World </div>');
    writeFileSync('./test.pdf', pdfBuffer);
};

main();
