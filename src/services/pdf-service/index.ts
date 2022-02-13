import * as puppeteer from 'puppeteer';
import { getInvoiceHtml } from './templates/invoice';
import { InvoicePdfParams } from './templates/invoice/types';

export class PdfService {
    async convertHtmlToPdf(html: string) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.setContent(html);

        const pdfBuffer = await page.pdf({ timeout: 300000 });

        await page.close();
        await browser.close();

        return pdfBuffer;
    }

    async createInvoice(invoiceParams: InvoicePdfParams) {
        return this.convertHtmlToPdf(getInvoiceHtml(invoiceParams));
    }
}
