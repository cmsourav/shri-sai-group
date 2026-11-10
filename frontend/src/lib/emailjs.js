import emailjs from "@emailjs/browser";

const env = process.env;

/* Placeholder env values mean EmailJS is not configured yet -> demo state. */
const isPlaceholder = (value) =>
    !value || /^(YOUR_|REPLACE_|CHANGE_ME|DEMO)/i.test(value.trim());

const config = {
    publicKey: env.REACT_APP_EMAILJS_PUBLIC_KEY?.trim(),
    serviceId: env.REACT_APP_EMAILJS_SERVICE_ID?.trim(),
    templateId: env.REACT_APP_EMAILJS_TEMPLATE_ID?.trim(),
};

export const emailjsReady = Object.values(config).every((v) => !isPlaceholder(v));

/* Fixed recipient allowlist — visitors can never supply an arbitrary to_email. */
const recipients = {
    trust: env.REACT_APP_EMAIL_TO_TRUST?.trim(),
    boutique: env.REACT_APP_EMAIL_TO_BOUTIQUE?.trim(),
    travels: env.REACT_APP_EMAIL_TO_TRAVELS?.trim(),
    tyre: env.REACT_APP_EMAIL_TO_TYRE?.trim(),
    group: env.REACT_APP_EMAIL_TO_GROUP?.trim(),
};

export const sendEnquiry = async ({ recipientKey, venture, formName, fields }) => {
    if (!emailjsReady) return { demo: true };

    const toEmail = recipients[recipientKey];
    if (!toEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(toEmail)) {
        throw new Error("This form has no valid configured recipient.");
    }

    const templateParams = {
        to_email: toEmail,
        venture: venture || "Shri Sai Group",
        form_name: formName,
        time: new Date().toLocaleString("en-IN"),
        // Primary template fields
        name: (fields.name || "").trim(),
        email: (fields.email || "").trim(),
        phone: (fields.phone || "").trim(),
        message: (fields.message || "").trim(),
        // Full detail line for extra fields (service, date, vehicle type…)
        details: Object.entries(fields)
            .filter(([k]) => !["name", "email", "phone", "message"].includes(k))
            .map(([k, v]) => `${k.replace(/_/g, " ")}: ${v}`)
            .join("\n"),
    };

    const response = await emailjs.send(config.serviceId, config.templateId, templateParams, {
        publicKey: config.publicKey,
        limitRate: { id: "shrisai-enquiry", throttle: 1000 },
    });
    return { demo: false, response };
};
