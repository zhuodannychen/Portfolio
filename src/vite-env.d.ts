/// <reference types="svelte" />
/// <reference types="vite/client" />
/// <reference types="@sveltejs/kit" />

declare module '*.yaml' {
  const data: any;
  export default data;
}

declare module '*.yml' {
  const data: any;
  export default data;
}
