import { headingStyle, paragraphStyle, sectionStyle } from "./policy";

export function ShippingPolicy() {
    return (
        <section className={sectionStyle}>
            <h1 className={headingStyle}>Shipping & Delivery Policy</h1>
            <div className="prose prose-lg">
                <p className={paragraphStyle}>
                    All services provided by The Health Tribe are digital or virtual in nature. <strong>There is no physical shipping involved.</strong>
                </p>
                <p className={paragraphStyle}>
                    Access to digital products, program materials, and online sessions is delivered either immediately after payment or as per the program schedule communicated to the participant.
                </p>
                <p className={paragraphStyle}>
                    In case of any delay due to technical issues, access will be restored within 24 to 48 hours.
                </p>
                <p className={paragraphStyle}>
                    Consultation bookings, once confirmed, are not eligible for cancellation or refund. If you are unable to attend, you may request a rescheduling subject to availability and prior approval.
                </p>
            </div>
        </section>
    );
}