// Vite resolves these asset imports to their served URL string at build time.
// `vite/client` covers most media types; `.pdf` is declared here explicitly.
declare module "*.pdf" {
  const src: string;
  export default src;
}
