export default function AtlasOverviewNewPage() {
  return (
    <div className="space-y-10">
      <section>
        <p className="text-sm uppercase tracking-[0.2em] text-lime-400">
          Atlas
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-white">
          Atlas Overview
        </h1>
        <p className="mt-4 max-w-3xl text-neutral-400">
          This page is the new top-level overview for the atlas-oriented
          structure. Keep this lightweight first, then gradually migrate old
          AICF-centered wording into operator / property / invariant /
          realization language.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">What this becomes</h2>
          <p className="mt-3 text-sm leading-6 text-neutral-400">
            A top-level map connecting operator semantics, allowed
            transformations, preserved invariants, and measured kernel
            realizations.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Why this shell first</h2>
          <p className="mt-3 text-sm leading-6 text-neutral-400">
            It lets you test the information architecture before committing to
            large internal file renames or route migrations.
          </p>
        </div>
      </section>
    </div>
  );
}