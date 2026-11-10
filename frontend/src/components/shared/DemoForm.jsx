import { useState } from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

/*
 * Frontend-validation-only enquiry form for a STATIC website.
 * On valid submit it shows an explicitly labelled DEMONSTRATION notice —
 * it never claims the enquiry was sent, stored or received.
 */
export const DemoForm = ({ theme, fields, submitLabel, formId }) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [demoShown, setDemoShown] = useState(false);

    const set = (name, v) => {
        setValues((s) => ({ ...s, [name]: v }));
        setErrors((s) => ({ ...s, [name]: undefined }));
        setDemoShown(false);
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

    const onSubmit = (ev) => {
        ev.preventDefault();
        const e = validate();
        setErrors(e);
        if (Object.keys(e).length === 0) setDemoShown(true);
    };

    const inputStyle = { "--field-accent": theme.accent };

    return (
        <form onSubmit={onSubmit} noValidate data-testid={`${formId}-form`} className="space-y-8">
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
                    data-testid={`${formId}-submit-button`}
                    className="group relative overflow-hidden border px-9 py-4 text-xs font-bold uppercase tracking-[0.22em] transition-colors duration-500"
                    style={{ borderColor: theme.accent, color: theme.fg }}
                >
                    <span
                        className="absolute inset-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0"
                        style={{ background: theme.accent }}
                        aria-hidden="true"
                    />
                    <span className="relative transition-colors duration-500 group-hover:text-[#0A0A0A]">
                        {submitLabel}
                    </span>
                </button>

                {demoShown && (
                    <motion.div
                        data-testid={`${formId}-demo-notice`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-3 border border-dashed p-4 text-sm leading-relaxed max-w-xl"
                        style={{ borderColor: theme.accent }}
                        role="status"
                    >
                        <Info size={18} className="mt-0.5 shrink-0" style={{ color: theme.accent }} />
                        <p className="opacity-80">
                            <strong className="font-semibold">Demonstration only.</strong> This is a static
                            website — your enquiry has <em>not</em> been sent or stored. To reach us, please
                            use the phone, WhatsApp or email options shown on this page.
                        </p>
                    </motion.div>
                )}
            </div>
        </form>
    );
};

export default DemoForm;
