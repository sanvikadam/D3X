export interface ShipmentQuote {
    carrier_code: string;
    carrier_delivery_days: string;
    carrier_friendly_name: string;
    carrier_id: string;
    carrier_nickname: string;
    confirmation_amount: string;
    confirmation_currency: string;
    delivery_days: string;
    error_messages: string;
    estimated_delivery_date: string;
    guaranteed_service: string;
    insurance_amount: string;
    insurance_currency: string;
    negotiated_rate: string;
    other_amount: string;
    other_currency: string;
    package_type: string;
    rate_id: string;
    rate_type: string;
    service_code: string;
    service_type: string;
    ship_date: string;
    shipping_amount: string;
    shipping_currency: string;
    trackable: string;
    validation_status: string;
    warning_messages: string;
    zone: string;
}

export interface ConfirmQuote {
    
}
