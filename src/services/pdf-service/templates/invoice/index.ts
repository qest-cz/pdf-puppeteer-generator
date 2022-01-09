import { parseNumberToCzechCurrency, postalCodeTransform, parseDateToCzechDate } from '../utils';
import { InvoicePdfParams } from './types';

export const getInvoiceHtml = (params: InvoicePdfParams) => {
    return `<html>
        <head>
            <style>
                @page {
                    size: A4;
                    margin: 0;
                }
                .page {
                    position: relative;
                    width: 21cm;
                    height: 29.7cm;
                    display: block;
                    margin: 0 auto;
                    margin-bottom: 0.5cm;
                    padding: 24px 21px;
                    position: relative;
                }
                @media not print {
                    .page {
                        box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
                    }
                }
                html,
                body {
                    width: 210mm;
                    height: 297mm;
                    font-family: Arial, sans-serif;
                    font-size: 15px;
                }
                *,
                *:before,
                *:after {
                    box-sizing: border-box;
                }
                h1 {
                    font-size: 21px;
                    font-weight: normal;
                    margin: 0 0 20px;
                    padding: 0;
                }
                .row {
                    display: flex;
                    position: relative;
                }
                .header {
                    justify-content: space-between;
                    margin-bottom: 25px;
                }
                .logo {
                    width: 150px;
                }
                .billing-info {
                    margin-bottom: 40px;
                }
                .half {
                    flex: 1;
                }
                h2 {
                    font-weight: normal;
                    font-size: 23px;
                    margin: 0 0 23px;
                    padding: 0;
                }
                .label {
                    font-weight: bold;
                    font-size: 17px;
                    margin-bottom: 2px;
                    width: 128px;
                    min-width: 128px;
                }
                .half:first-child .label {
                    width: 105px;
                }
                .non-payer {
                    position: absolute;
                    left: 0;
                    bottom: -15px;
                }
                .address {
                    min-height: 58px;
                }
                .dates .label {
                    width: 220px;
                }
                .dates {
                    margin-bottom: 40px;
                }
                table {
                    width: 100%;
                    margin-bottom: 12px;
                }
                thead tr {
                    box-shadow: inset 0 0 0 1000px #bebebe;
                    font-weight: bold;
                }
                hr {
                    margin-bottom: 14px;
                }
                .disabledRow {
                    display: none;
                }
            </style>
        </head>
        <body>
            <div class="page">
                <div class="row header">
                    <div>
                        <h1>FAKTURA</h1>
                        <div>Vystaveno dodavatelem</div>
                    </div>
                    <img
                        src="https://miro.medium.com/fit/c/262/262/1*Qx44zGF6GPe6siKGQcIZgQ.png"
                        alt="logo"
                        class="logo"
                    />
                </div>
                <div class="row billing-info">
                    <div class="half">
                        <h2>Dodavatel</h2>
                        <div class="row">
                            <div class="label">Dodavatel:</div>
                            <div class="value">${params.supplier.name}</div>
                        </div>
                        <div class="row address">
                            <div class="label">Adresa:</div>
                            <div class="value">
                                ${params.supplier.address.street}
                                <br />
                                ${params.supplier.address.city}
                                <br />
                                ${postalCodeTransform(params.supplier.address.postalCode)}
                            </div>
                        </div>
                    </div>
                    <div class="half">
                        <h2>Zákazník</h2>
                        <div class="row">
                            <div class="label">Zákazník:</div>
                            <div class="value">${params.customer.name}</div>
                        </div>
                        <div class="row address">
                            <div class="label">Adresa:</div>
                            <div class="value">
                                ${params.customer.address.street}
                                <br />
                                ${params.customer.address.city}
                                <br />
                                ${postalCodeTransform(params.customer?.address?.postalCode)}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dates">
                    <div class="row">
                        <div class="label">Datum vystavení:</div>
                        <div class="value">${parseDateToCzechDate(params.dateOfIssue)}</div>
                    </div>
                    <div class="row">
                        <div class="label">Splatnost:</div>
                        <div class="value">${parseDateToCzechDate(params.dueDate)}</div>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>Označení dodávky</td>
                            <td>Počet m. j.</td>
                            <td>Cena za m.j.</td>
                            <td>Celkem</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${params.reward.type}</td>
                            <td>${params.reward.number}</td>
                            <td>${parseNumberToCzechCurrency(params.reward.rate)}</td>
                            <td>${parseNumberToCzechCurrency(params.reward.totalBilling)}</td>
                        </tr>
                    </tbody>
                </table>
                <hr/>
            </div>
        </body>
    </html> `;
};
