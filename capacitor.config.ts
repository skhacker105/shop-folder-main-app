import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.shopfolder.app',
  appName: 'shop-folder',
  webDir: 'dist/shop-folder',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    FederatedCapacitor: {
      liveUpdatesKey: '',
      shell: {
        name: 'shopFolder'
      },
      apps: [
        {
          name: 'shopFolderLogin',
          webDir: '../shop-folder-login/dist'
        },
        {
          name: 'shopFolderHome',
          webDir: '../shop-folder-home/dist'
        },
        {
          name: 'shopFolderContact',
          webDir: '../shop-folder-contact/dist'
        }
      ]
    }
  }
};

export default config;
