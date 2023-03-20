export interface StripeToken{
    id: string;
    object: string;
    card: {
        id: string;
        object: string;
        address_city: string;
        address_country: string;
        address_line1: string;
        address_line1_check:string;
        address_line2: any;
        address_state: string | number;
        address_zip: number;
        address_zip_check: string;
        country: string;
        brand: string;
        cvc_check: any;
        dynamic_last4: any;
        exp_month: number;
        exp_year: number;
        funding: string;
        last4: number;
        name: string;
    },
    client_ip: string;
    created: Date;
    email: string;
    livemode: boolean;
    type: string;
}
