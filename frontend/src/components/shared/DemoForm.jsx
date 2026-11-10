import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, CheckCircle2, AlertCircle } from "lucide-react";
import { emailjsReady, sendEnquiry } from "../../lib/emailjs";

/*
 * Enquiry form for the static site.
 * - Validates in the browser.
 * - If EmailJS env keys are configured -> genuinely sends via EmailJS and
 *   shows a success state only after the send resolves.
 * - If keys are placeholders -> shows an explicitly labelled DEMO notice and
 *   never claims anything was sent.
 */
export const DemoForm = ({ theme, fields, submitLabel, formId, recipientKey = "group", venture = "Shri Sai Group" }) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({ type: "idle" }); // idle | sending | demo | success | error

    const set = (name, v) => {
        setValues((s) => ({ ...s, [name]: v }));
        setErrors((s) => ({ ...s, [name]: undefined }));
        if (status.type !== "idle" && status.type !== "sending") setStatus({ type: "idle" });
    };

    const validate = () => {
        const e = {};
        fields.forEach((f) => {
            const v = (values[f.name] || "").toString().trim();
            if (f.required && !v) e[f.name] = `${f.label} is required`;
            else if (f.type === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
                e[f.name] = "Enter a valid email address";
            else if (f.type === "tel" && v && v.replace(/\D/g, "").length < 10)
                e[f.name] = "Enter a valid phone number (min 10 digits)";
        });
        return e;
    };

    const onSubmit = async (ev) => {
        ev.preventDefault();
        const e = validate();
        setErrors(e);
        if (Object.keys(e).length > 0) return;

        if (!emailjsReady) {
            setStatus({ type: "demo" });
            return;
        }

        setStatus({ type: "sending" });
        try {
            await sendEnquiry({
                recipientKey,
                venture,
                formName: `${venture} — ${submitLabel}`,
                fields: values,
            });
            setValues({});
            setStatus({ type: "success" });
        } catch (err) {
            console.error("EmailJS send failed", err);
            setStatus({ type: "error" });
        }
    };

    const inputStyle = { "--field-accent": theme.accent };

    return (
        <form onSubmit={onSubmit} noValidate data-testid={`${formId}-form`} className="space-y-8">
            {!emailjsReady && (
                <p
                    data-testid={`${formId}-demo-banner`}
                    role="status"
                    className="inline-flex items-center gap-2 border border-dashed px-3 py-2 text-[11px] uppercase tracking-[0.16em] opacity-70"
                >
                    <Info size={13} /> Demo configuration — emails activate once EmailJS keys are added
                </p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                {fields.map((f) => (
                    <div key={f.name} className={f.type === "textarea" ? "md:col-span-2" : ""}>
                        <label
                            htmlFor={`${formId}-${f.name}`}
                            className="block text-xs uppercase tracking-[0.2em] font-semibold opacity-70 mb-1"
                        >
                            {f.label}
                            {f.required ? " *" : ""}
                            {f.optional ? " (optional)" : ""}
                        </label>

                        {f.type === "textarea" ? (
                            <textarea
                                id={`${formId}-${f.name}`}
                                data-testid={`${formId}-${f.name}-input`}
                                rows={4}
                                className="field-input resize-none"
                                style={inputStyle}
                                placeholder={f.placeholder || ""}
                                value={values[f.name] || ""}
                                onChange={(e) => set(f.name, e.target.value)}
                                aria-invalid={!!errors[f.name]}
                            />
                        ) : f.type === "select" ? (
                            <select
                                id={`${formId}-${f.name}`}
                                data-testid={`${formId}-${f.name}-input`}
                                className="field-input"
                                style={inputStyle}
                                value={values[f.name] || ""}
                                onChange={(e) => set(f.name, e.target.value)}
                                aria-invalid={!!errors[f.name]}
                            >
                                <option value="">Select…</option>
                                {f.options.map((o) => (
                                    <option key={o} value={o}>{o}</option>
                                ))}
                            </select>
                        ) : f.type === "file" ? (
                            <input
                                id={`${formId}-${f.name}`}
                                data-testid={`${formId}-${f.name}-input`}
                                type="file"
                                accept="image/*"
                                className="field-input file:mr-4 file:border file:border-current file:bg-transparent file:px-4 file:py-1.5 file:text-xs file:uppercase file:tracking-[0.15em] file:cursor-pointer"
                                style={inputStyle}
                                onChange={(e) => set(f.name, e.target.files?.[0]?.name || "")}
                            />
                        ) : (
                            <input
                                id={`${formId}-${f.name}`}
                                data-testid={`${formId}-${f.name}-input`}
                                type={f.type || "text"}
                                className="field-input"
                                style={inputStyle}
                                placeholder={f.placeholder || ""}
                                value={values[f.name] || ""}
                                onChange={(e) => set(f.name, e.target.value)}
                                aria-invalid={!!errors[f.name]}
                            />
                        )}

                        {errors[f.name] && (
                            <p data-testid={`${formId}-${f.name}-error`} className="mt-2 text-xs" style={{ color: theme.accent }}>
                                {errors[f.name]}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-start gap-5">
                <button
                    type="submit"
                    disabled={status.type === "sending"}
                    data-testid={`${formId}-submit-button`}
                    className="group relative overflow-hidden border px-9 py-4 text-xs font-bold uppercase tracking-[0.22em] transition-colors duration-500 disabled:opacity-50 disabled:cursor-wait"
                    style={{ borderColor: theme.accent, color: theme.fg }}
                >
                    <span
                        className="absolute inset-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0 group-disabled:translate-y-full"
                        style={{ background: theme.accent }}
                        aria-hidden="true"
                    />
                    <span className="relative transition-colors duration-500 group-hover:text-[#0A0A0A] group-disabled:text-current">
                        {status.type === "sending" ? "Sending…" : submitLabel}
                    </span>
                </button>

                <AnimatePresence mode="wait">
                    {status.type === "demo" && (
                        <motion.div
                            key="demo"
                            data-testid={`${formId}-demo-notice`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="flex items-start gap-3 border border-dashed p-4 text-sm leading-relaxed max-w-xl"
                            style={{ borderColor: theme.accent }}
                            role="status"
                        >
                            <Info size={18} className="mt-0.5 shrink-0" style={{ color: theme.accent }} />
                            <p className="opacity-80">
                                <strong className="font-semibold">Demonstration only.</strong> EmailJS is not
                                configured yet, so your enquiry has <em>not</em> been sent. It will be delivered
                                to <span className="font-semibold">{venture}</span>'s email address as soon as the
                                keys are added.
                            </p>
                        </motion.div>
                    )}
                    {status.type === "success" && (
                        <motion.div
                            key="success"
                            data-testid={`${formId}-success-notice`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="flex items-start gap-3 border p-4 text-sm leading-relaxed max-w-xl"
                            style={{ borderColor: theme.accent }}
                            role="status"
                        >
                            <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: theme.accent }} />
                            <p className="opacity-85">
                                <strong className="font-semibold">Enquiry sent.</strong> Thank you — your message
                                has been emailed to {venture}. We'll get back to you soon.
                            </p>
                        </motion.div>
                    )}
                    {status.type === "error" && (
                        <motion.div
                            key="error"
                            data-testid={`${formId}-error-notice`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="flex items-start gap-3 border p-4 text-sm leading-relaxed max-w-xl"
                            style={{ borderColor: theme.accent }}
                            role="alert"
                        >
                            <AlertCircle size={18} className="mt-0.5 shrink-0" style={{ color: theme.accent }} />
                            <p className="opacity-85">
                                <strong className="font-semibold">Could not send.</strong> Your enquiry was not
                                delivered. Please try again in a moment, or reach us via the phone / WhatsApp
                                options on this page.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </form>
    );
};

export default DemoForm;
