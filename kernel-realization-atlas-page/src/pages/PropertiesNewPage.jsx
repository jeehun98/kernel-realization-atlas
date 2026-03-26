const blocks = [
  {
    id: "order-rewritable",
    title: "Order Rewritable",
    desc: "Execution order may change while preserving the intended result.",
  },
  {
    id: "tile-composable",
    title: "Tile Composable",
    desc: "The operator admits tile-wise partition and recomposition.",
  },
  {
    id: "rematerializable",
    title: "Rematerializable",
    desc: "It may be cheaper to recompute an intermediate than to store it.",
  },
  {
    id: "reduction-equivalence",
    title: "Reduction Equivalence",
    desc: "Alternative reduction paths must still preserve the intended outcome.",
  },
  {
    id: "normalization-preservation",
    title: "Normalization Preservation",
    desc: "Statistical meaning must survive transformation and schedule changes.",
  },
  {
    id: "bounded-numeric-drift",
    title: "Bounded Numeric Drift",
    desc: "Numerical change may be tolerated only within controlled bounds.",
  },
];

export default function PropertiesNewPage() {
  return (
    <div className="space-y-10">
      <section>
        <p className="text-sm uppercase tracking-[0.2em] text-lime-400">
          Properties & Invariants
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-white">
          Constraint System
        </h1>
        <p className="mt-4 max-w-3xl text-neutral-400">
          A temporary unified page for both properties and invariants. Later you
          can split this into dedicated catalog pages if the navigation needs it.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {blocks.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-xl font-semibold text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-400">
              {item.desc}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}