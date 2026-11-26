"use client";
import { Trash2 } from "lucide-react";

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
  onUpdateStatus: (id: string, status: string) => void;
  onDelete: (id: string) => void;
}

export default function InquiriesTab({ inquiries, onUpdateStatus, onDelete }: Props) {
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
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-foreground">{inq.name}</h3>
                  <span className="text-xs text-muted">&lt;{inq.email}&gt;</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted mr-1">{new Date(inq.createdAt).toLocaleDateString()}</span>
                  <select
                    value={inq.status || "UNREAD"}
                    onChange={(e) => onUpdateStatus(inq.id, e.target.value)}
                    className="px-2.5 py-1 rounded-full text-xs font-semibold bg-border/40 border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-scholarly cursor-pointer"
                  >
                    <option value="UNREAD">📩 UNREAD</option>
                    <option value="READ">✅ READ</option>
                    <option value="ARCHIVED">📦 ARCHIVED</option>
                  </select>
                  <button
                    onClick={() => onDelete(inq.id)}
                    className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted hover:text-red-500 transition-colors"
                    title="Delete inquiry"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
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
