export class CreateShipment {
    pickupAddr: string;
    dropAddr: string;
    packWidth: number;
    packHeight: number;
    packWeight: number;
    sku: number;
    name: string;
    quantity: number;
    price: number;
}

export class GetShipment {
    name : string;
    date: number;
    day: string;
    serviceType: string;
    currency: string;
    amount: number;
}
