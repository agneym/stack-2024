/** @type {import('prettier').Config} */
export default {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    import("prettier-plugin-tailwindcss"),
  ],
  importOrder: ["^react$", "^[./]"],
  importOrderSortSpecifiers: true,
};
