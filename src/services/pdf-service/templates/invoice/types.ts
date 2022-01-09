export type InvoicePdfParams = {
    customer: {
        name: string;
        address: {
            city: string;
            street: string;
            postalCode: string;
        };
    };
    supplier: {
        name: string;
        address: {
            city: string;
            street: string;
            postalCode: string;
        };
    };
    dateOfIssue: Date;
    dueDate: Date;
    reward: {
        type: string;
        number: number;
        rate: number;
        totalBilling: number;
    };
};
