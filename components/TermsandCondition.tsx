
import { headingStyle, listStyle, paragraphStyle, sectionStyle } from "./policy";

export function TermsAndConditions() {
    return (
        <section className={sectionStyle}>
            <h1 className={headingStyle}>Terms and Conditions</h1>
            <div className="prose prose-lg">
                <p className={paragraphStyle}>
                    By using our website or enrolling in a program or consultation, you agree to abide by our terms and conditions.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Medical Disclaimer</h3>
                <p className={`${paragraphStyle} bg-yellow-50 p-4 border-l-4 border-yellow-400`}>
                    Services provided by The Health Tribe are designed for general wellness, lifestyle improvement, and education. <strong>They do not replace independent medical consultation, diagnosis, or treatment.</strong> Do not discontinue any ongoing medical treatment without discussing it with your doctor. The Health Tribe is not intended for medical emergencies. If you experience severe symptoms, seek immediate medical assistance.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">User Responsibilities</h3>
                <ul className={listStyle}>
                    <li>Users retain full responsibility for their health and safety.</li>
                    <li>Users are expected to share accurate and complete information about their existing health conditions for safe and personalized service delivery.</li>
                    <li>Users are expected to provide accurate information during registration and maintain confidentiality of their login credentials.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Intellectual Property</h3>
                <p className={paragraphStyle}>
                    Program materials, videos, worksheets, and digital content are the intellectual property of Earthed Soul Private Limited and cannot be copied, reproduced, or shared without written consent. Misuse of the website or participation for unlawful purposes is strictly prohibited.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Liability & Jurisdiction</h3>
                <p className={paragraphStyle}>
                    The Health Tribe is not responsible for interruptions caused by technical issues, third-party service providers, payment gateway failures, or inaccurate information provided by the user.
                </p>
                <p className={paragraphStyle}>
                    The Health Tribe reserves the right to modify or update these terms and policies at any time. Continued use of the website or services after such changes constitutes acceptance of the updated terms. All disputes shall be subject to the jurisdiction of courts in Bhubaneswar, Odisha, India.
                </p>
            </div>
        </section>
    );
}