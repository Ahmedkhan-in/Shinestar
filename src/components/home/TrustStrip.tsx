import { Shield, MessageCircle, Clock, CheckCircle, Award } from "lucide-react";

const trustItems = [
  { icon: Award, label: "Licensed Travel Agency", detail: "Registered & regulated" },
  { icon: Shield, label: "Secure Booking", detail: "Transparent pricing" },
  { icon: MessageCircle, label: "24/7 WhatsApp Support", detail: "Before, during & after" },
  { icon: CheckCircle, label: "Verified Reviews", detail: "Real traveler feedback" },
  { icon: Clock, label: "Since 2018", detail: "Years of trusted service" },
];

export function TrustStrip() {
  return (
    <section id="trust" className="bg-white border-b border-surface-grey py-6">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-4">
          {trustItems.map(({ icon: Icon, label, detail }) => (
            <div key={label} className="flex items-center gap-3 min-w-0">
              <div className="shrink-0 w-9 h-9 bg-brand-blue/8 rounded-full flex items-center justify-center">
                <Icon size={16} className="text-brand-blue" />
              </div>
              <div>
                <p className="text-body-sm font-semibold text-brand-ink">{label}</p>
                <p className="text-body-sm text-brand-muted">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
