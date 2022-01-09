export const parseNumberToCzechCurrency = (amount: number | undefined) => `${amount.toFixed(2).toString().replace('.', ',')} Kč`;

export const postalCodeTransform = (postalCode: string) => (postalCode.match(/.{1,3}/g) ?? []).join(' ');

const getDate = (d?: Date) => d && `${d.getUTCDate().toString().padStart(2, '0')}`;
const getMonth = (d?: Date) => d && `${(d.getUTCMonth() + 1).toString().padStart(2, '0')}`;

export const parseDateToCzechDate = (d?: Date) => d && `${getDate(d)}.${getMonth(d)}.${d?.getUTCFullYear()}`;
