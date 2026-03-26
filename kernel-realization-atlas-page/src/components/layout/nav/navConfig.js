export const NAV_ITEMS = [
  {
    key: "atlas",
    label: "Atlas",
    href: "/atlas-new",
    panel: "atlas",
  },
  {
    key: "operators",
    label: "Operators",
    href: "/operators-new",
    panel: "operators",
  },
  {
    key: "properties",
    label: "Properties",
    href: "/properties-new",
    panel: "properties",
  },
  {
    key: "analysis",
    label: "Analysis",
    href: "/analysis-new",
    panel: "analysis",
  },
];

export const MENU_PANELS = {
  atlas: {
    title: "Kernel Realization Atlas",
    sections: [
      {
        title: "Start Here",
        links: [
          {
            label: "Atlas Overview",
            href: "/atlas-new",
            desc: "Project map and top-level entry points",
          },
          {
            label: "Memory Methods",
            href: "/memory-new",
            desc: "Memory-oriented optimization patterns",
          },
        ],
      },
      {
        title: "Guides",
        links: [
          {
            label: "Properties",
            href: "/properties-new",
            desc: "Optimization-enabling properties",
          },
          {
            label: "Analysis",
            href: "/analysis-new",
            desc: "Execution comparison and deep dive",
          },
        ],
      },
    ],
    featured: {
      title: "Atlas Home",
      desc: "Explore operators, invariants, properties, and realization paths from a single top-level map.",
      href: "/atlas-new",
    },
  },

  operators: {
    title: "Operators",
    sections: [
      {
        title: "Core Operators",
        links: [
          {
            label: "GEMM",
            href: "/operators-new#gemm",
            desc: "Tiling, scheduling, epilogue fusion",
          },
          {
            label: "Softmax",
            href: "/operators-new#softmax",
            desc: "Reduction stability and realization choices",
          },
          {
            label: "LayerNorm",
            href: "/operators-new#layernorm",
            desc: "Normalization-oriented execution",
          },
        ],
      },
      {
        title: "Update / Elementwise",
        links: [
          {
            label: "ReLU",
            href: "/operators-new#relu",
            desc: "Domain pruning and cheap realization",
          },
          {
            label: "BatchNorm",
            href: "/operators-new#batchnorm",
            desc: "Training/inference distinctions",
          },
          {
            label: "Adam Step",
            href: "/operators-new#adamstep",
            desc: "Optimizer update realization",
          },
        ],
      },
    ],
    featured: {
      title: "Operator Catalog",
      desc: "Browse operator families and jump into deep dives or realization comparisons.",
      href: "/operators-new",
    },
  },

  properties: {
    title: "Properties & Invariants",
    sections: [
      {
        title: "Properties",
        links: [
          {
            label: "Order Rewritable",
            href: "/properties-new#order-rewritable",
            desc: "Order changes allowed",
          },
          {
            label: "Tile Composable",
            href: "/properties-new#tile-composable",
            desc: "Partitionable into tiles",
          },
          {
            label: "Rematerializable",
            href: "/properties-new#rematerializable",
            desc: "Recompute instead of store",
          },
        ],
      },
      {
        title: "Invariants",
        links: [
          {
            label: "Reduction Equivalence",
            href: "/properties-new#reduction-equivalence",
            desc: "Equivalent reduced result",
          },
          {
            label: "Normalization Preservation",
            href: "/properties-new#normalization-preservation",
            desc: "Statistical consistency",
          },
          {
            label: "Bounded Numeric Drift",
            href: "/properties-new#bounded-numeric-drift",
            desc: "Controlled numerical deviation",
          },
        ],
      },
    ],
    featured: {
      title: "Constraint System",
      desc: "See what transformations are allowed and what semantics must remain unchanged.",
      href: "/properties-new",
    },
  },

  analysis: {
    title: "Analysis",
    sections: [
      {
        title: "Explore",
        links: [
          {
            label: "Realization Comparison",
            href: "/analysis-new",
            desc: "Compare execution variants",
          },
          {
            label: "Kernel Deep Dive",
            href: "/analysis-new#deepdive",
            desc: "Detailed kernel-level reading",
          },
        ],
      },
      {
        title: "Evidence",
        links: [
          {
            label: "Metrics",
            href: "/analysis-new#metrics",
            desc: "Measured behavior and execution signature",
          },
          {
            label: "Configs",
            href: "/analysis-new#configs",
            desc: "Variant-specific settings",
          },
        ],
      },
    ],
    featured: {
      title: "Analysis Workspace",
      desc: "Move from high-level property reasoning to measured execution results.",
      href: "/analysis-new",
    },
  },
};