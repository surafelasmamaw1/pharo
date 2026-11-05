export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background pt-32">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-4 border-scholarly/20 border-t-scholarly animate-spin" />
        <p className="text-sm text-muted font-medium">Loading...</p>
      </div>
    </div>
  );
}
