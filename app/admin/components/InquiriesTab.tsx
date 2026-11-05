"use client";

interface InquiryItem {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  status: string;
  createdAt: string;
}

interface Props {
  inquiries: InquiryItem[];
}

export default function InquiriesTab({ inquiries }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-foreground mb-4">Contact Inquiries</h2>
      {inquiries.length === 0 ? (
        <div className="p-8 text-center rounded-2xl border border-dashed border-border text-muted">
          No contact messages received yet.
        </div>
      ) : (
        <div className="space-y-3">
          {inquiries.map((inq) => (
            <div key={inq.id} className="p-5 rounded-2xl border border-border bg-card shadow-sm">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-foreground">{inq.name}</h3>
                  <span className="text-xs text-muted">&lt;{inq.email}&gt;</span>
                </div>
                <span className="text-xs text-muted">{new Date(inq.createdAt).toLocaleDateString()}</span>
              </div>
              {inq.subject && <p className="text-sm font-medium text-scholarly mb-2">Subject: {inq.subject}</p>}
              <p className="text-sm text-foreground/90 bg-border/20 p-3 rounded-xl border border-border/40 whitespace-pre-wrap">
                {inq.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
