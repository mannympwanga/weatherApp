/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_API_KEY: string;
    readonly VITE_APP_DEFAULT_LAT: string;
    readonly VITE_APP_DEFAULT_LNG: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }