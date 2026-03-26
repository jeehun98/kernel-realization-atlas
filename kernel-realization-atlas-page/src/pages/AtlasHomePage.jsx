import { Link } from "react-router-dom";

const cards = [
  {
    title: "Operator Atlas",
    desc: "Browse operator-centered realization space and execution paths.",
    href: "/operators-new",
  },
  {
    title: "Property Catalog",
    desc: "See which transformations each operator family can admit.",
    href: "/properties-new",
  },
  {
    title: "Analysis Workspace",
    desc: "Compare variants and inspect metrics, configs, and signatures.",
    href: "/analysis-new",
  },
  {
    title: "Memory Methods",
    desc: "Explore memory-centric optimization patterns and reuse models.",
    href: "/memory-new",
  },
  {
    title: "Legacy AICF View",
    desc: "Keep the previous structure available while testing the new shell.",
    href: "/",
  },
  {
    title: "Lab Analysis",
    desc: "Jump into the existing lab analysis page from the new entry shell.",
    href: "/overview/lab",
  },
];

export default function AtlasHomePage() {
  return (
    <div className="space-y-12">
      <section className="py-8">
        <p className="text-sm uppercase tracking-[0.2em] text-lime-400">
          Kernel Realization Atlas
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white lg:text-6xl">
          A structured map of operators, properties, invariants, and execution
          paths.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-neutral-400">
          Start from semantics, move through realizable transformation space,
          and end at concrete measured execution behavior.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.title}
            to={card.href}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-lime-400/40 hover:bg-white/10"
          >
            <div className="text-lg font-semibold text-white">{card.title}</div>
            <div className="mt-3 text-sm leading-6 text-neutral-400">
              {card.desc}
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}