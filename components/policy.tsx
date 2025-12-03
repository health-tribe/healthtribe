import React from 'react';

// Shared styles for consistency
export const sectionStyle = "max-w-4xl mx-auto px-6 py-24";
export const headingStyle = "text-3xl font-bold mb-6 text-gray-900 border-b pb-4 border-gray-200";
export const paragraphStyle = "mb-4 text-gray-700 leading-relaxed";
export const listStyle = "list-disc pl-5 mb-4 text-gray-700 leading-relaxed space-y-2";

export function CancelPolicy() {
    return (
        <section className={sectionStyle}>
            <h1 className={headingStyle}>Refund and Cancellation Policy</h1>
            <div className="prose prose-lg">
                <p className={paragraphStyle}>
                    All our offerings are digital services including wellness programs, online awareness sessions, workshops, consultations, and digital content. Due to the nature of these services, refunds and cancellations are limited.
                </p>
                <p className={paragraphStyle}>
                    <strong>Program Enrollment:</strong> Refunds are not provided once payment has been made to enroll for the programs. If a member is unable to start the batch of a group program due to unavoidable circumstances, the member may request to join a subsequent batch.
                </p>
                <p className={paragraphStyle}>
                    <strong>Discontinuation:</strong> If a member discontinues during an ongoing program, re-joining will attract a revival fee of ₹5,000 to resume in a subsequent batch.
                </p>
                <p className={paragraphStyle}>
                    <strong>Consultations:</strong> Consultation bookings, once confirmed, are not eligible for cancellation or refund. If you are unable to attend, you may request a rescheduling subject to availability and prior approval.
                </p>
            </div>
        </section>
    );
}



