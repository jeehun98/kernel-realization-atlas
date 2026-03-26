export default function MemoryNewPage() {
  return (
    <div className="space-y-10">
      <section>
        <p className="text-sm uppercase tracking-[0.2em] text-lime-400">
          Memory
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-white">
          Memory Methods
        </h1>
        <p className="mt-4 max-w-3xl text-neutral-400">
          A bridge page for your existing memory-oriented content. Once the new
          top navigation feels right, bind this to the existing method catalog
          and detail pages.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          "Online Reducible Norm",
          "Streaming Weighted Reduction",
          "Re-materializable Intermediate",
          "Tile-Compatible Compute",
        ].map((title) => (
          <div
            key={title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-lg font-semibold text-white">{title}</h2>
          </div>
        ))}
      </section>
    </div>
  );
}