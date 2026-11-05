"use client";
import { Trash2 } from "lucide-react";

interface ApplicationItem {
  id: string;
  applicantName: string;
  parentName?: string;
  email: string;
  phone: string;
  emergencyPhone?: string;
  gradeLevel: string;
  age?: string;
  gender?: string;
  previousSchool?: string;
  city?: string;
  program?: string;
  notes?: string;
  status: string;
  createdAt: string;
}

interface Props {
  applications: ApplicationItem[];
  onUpdateStatus: (id: string, status: string) => void;
  onDelete: (id: string) => void;
}

export default function ApplicationsTab({ applications, onUpdateStatus, onDelete }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-foreground mb-4">Student Applications</h2>
      {applications.length === 0 ? (
        <div className="p-8 text-center rounded-2xl border border-dashed border-border text-muted">
          No applications received yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {applications.map((app) => (
            <div key={app.id} className="p-5 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-semibold text-lg text-foreground">{app.applicantName}</h3>
                  <p className="text-xs text-muted">Grade/Level: <span className="font-medium text-foreground">{app.gradeLevel}</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={app.status}
                    onChange={(e) => onUpdateStatus(app.id, e.target.value)}
                    className="px-2.5 py-1 rounded-full text-xs font-semibold bg-border/40 border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-scholarly cursor-pointer"
                  >
                    <option value="PENDING">⏳ PENDING</option>
                    <option value="REVIEWED">👀 REVIEWED</option>
                    <option value="ACCEPTED">✅ ACCEPTED</option>
                    <option value="REJECTED">❌ REJECTED</option>
                  </select>
                  <button
                    onClick={() => onDelete(app.id)}
                    className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted hover:text-red-500 transition-colors"
                    title="Delete application"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="text-xs text-muted space-y-1 mb-3 pt-2 border-t border-border/50">
                <p><strong className="text-foreground">Email:</strong> {app.email}</p>
                <p><strong className="text-foreground">Phone:</strong> {app.phone} {app.emergencyPhone ? `(Emergency: ${app.emergencyPhone})` : ""}</p>
                {app.parentName && <p><strong className="text-foreground">Parent/Guardian:</strong> {app.parentName}</p>}
                {(app.age || app.gender || app.city) && (
                  <p><strong className="text-foreground">Student Info:</strong> {[app.age ? `${app.age} yrs` : "", app.gender, app.city].filter(Boolean).join(" • ")}</p>
                )}
                {app.previousSchool && <p><strong className="text-foreground">Previous School:</strong> {app.previousSchool}</p>}
                {app.program && <p><strong className="text-foreground">Program:</strong> {app.program}</p>}
                {app.notes && <p className="mt-2 text-foreground/80 italic">&ldquo;{app.notes}&rdquo;</p>}
              </div>
              <div className="text-[11px] text-muted text-right">
                Submitted: {new Date(app.createdAt).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
