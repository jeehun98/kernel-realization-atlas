const sections = [
  {
    id: "gemm",
    title: "GEMM",
    desc: "Tiling, schedule shape, epilogue fusion, data movement, tensor core use.",
  },
  {
    id: "softmax",
    title: "Softmax",
    desc: "Reduction structure, numerical stability, streaming-friendly realization.",
  },
  {
    id: "layernorm",
    title: "LayerNorm",
    desc: "Statistic accumulation, normalization preservation, reduction placement.",
  },
  {
    id: "relu",
    title: "ReLU",
    desc: "Domain pruning semantics and low-cost execution path.",
  },
  {
    id: "batchnorm",
    title: "BatchNorm",
    desc: "Train vs inference distinction and state dependency.",
  },
  {
    id: "adamstep",
    title: "Adam Step",
    desc: "Update realization and optimizer-state traffic.",
  },
];

export default function OperatorsNewPage() {
  return (
    <div className="space-y-10">
      <section>
        <p className="text-sm uppercase tracking-[0.2em] text-lime-400">
          Operators
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-white">
          Operator Catalog
        </h1>
        <p className="mt-4 max-w-3xl text-neutral-400">
          Start with a lightweight catalog page. Later you can bind each item
          to the existing deep dive data and analysis configs.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {sections.map((item) => (
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