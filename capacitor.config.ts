import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.shopfolder.app',
  appName: 'shop-folder',
  webDir: 'dist/shop-folder',
  server: {
    androidScheme: 'https'
  }
};

export default config;
