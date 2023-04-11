/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client-react" />

interface ImportMetaEnv {
  readonly VITE_DEV_INSPECTOR_HOTKEYS: string?;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
