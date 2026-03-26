export default function AnalysisNewPage() {
  return (
    <div className="space-y-10">
      <section>
        <p className="text-sm uppercase tracking-[0.2em] text-lime-400">
          Analysis
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-white">
          Analysis Workspace
        </h1>
        <p className="mt-4 max-w-3xl text-neutral-400">
          This is the new top-level analysis landing page. Later you can plug in
          the current lab analysis components here instead of keeping them under
          the old overview tree.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div
          id="metrics"
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h2 className="text-xl font-semibold text-white">Metrics</h2>
          <p className="mt-3 text-sm leading-6 text-neutral-400">
            Connect this block to the existing analysis metrics JSON files once
            the new layout is stable.
          </p>
        </div>

        <div
          id="configs"
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h2 className="text-xl font-semibold text-white">Configs</h2>
          <p className="mt-3 text-sm leading-6 text-neutral-400">
            Map realization variants and configuration presets into a catalog
            view here.
          </p>
        </div>

        <div
          id="deepdive"
          className="rounded-2xl border border-white/10 bg-white/5 p-6 md:col-span-2"
        >
          <h2 className="text-xl font-semibold text-white">Deep Dive</h2>
          <p className="mt-3 text-sm leading-6 text-neutral-400">
            This area can later host the current KernelDetailView or a new atlas
            deep-dive route structure.
          </p>
        </div>
      </section>
    </div>
  );
}