import { headingStyle, listStyle, paragraphStyle, sectionStyle } from "./policy";

export function PrivacyPolicy() {
    return (
        <section className={sectionStyle}>
            <h1 className={headingStyle}>Privacy Policy</h1>
            <div className="prose prose-lg">
                <p className={paragraphStyle}>
                    By using this website, you consent to the collection and use of your information as described in this Privacy Policy. We are committed to safeguarding your personal information and ensuring adequate security of all data shared with us.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Data Collection</h3>
                <ul className={listStyle}>
                    <li>We may collect information such as your name, email address, phone number, and age.</li>
                    <li>We collect voluntarily shared health information and details necessary for program customization.</li>
                    <li>We also collect website usage data through cookies and analytics tools.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Payment Security</h3>
                <p className={paragraphStyle}>
                    Payment information is processed securely through Authourized Payment Gateway. We do not store card numbers, UPI IDs, passwords, or any sensitive payment details on our servers.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Usage & Sharing</h3>
                <p className={paragraphStyle}>
                    Your information is used to provide services, improve program experiences, communicate updates, send reminders, and fulfill legal obligations. We do not sell or rent your information to any third party. Limited information may be shared with contracted service providers strictly for the execution of services and always under confidentiality agreements.
                </p>
                <p className={paragraphStyle}>
                    You may choose to disable cookies through your browser settings, but doing so may affect certain website features.
                </p>
            </div>
        </section>
    );
}
