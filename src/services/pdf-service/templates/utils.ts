export const parseNumberToCzechCurrency = (amount: number) => `${amount.toFixed(2).toString().replace('.', ',')} Kč`;

export const parsePostalCode = (postalCode: string) => (postalCode.match(/.{1,3}/g) ?? []).join(' ');

const getDate = (d?: Date) => `${d.getUTCDate().toString().padStart(2, '0')}`;
const getMonth = (d?: Date) => `${(d.getUTCMonth() + 1).toString().padStart(2, '0')}`;

export const parseDateToCzechDate = (d: Date) => `${getDate(d)}.${getMonth(d)}.${d?.getUTCFullYear()}`;
