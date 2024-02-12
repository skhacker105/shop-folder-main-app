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
          webDir: '../shop-folder-login/dist',
          liveUpdateConfig: {
            appId: "abcd1234",
            channel: "production",
            autoUpdateMethod: "background",
          },
        },
        {
          name: 'shopFolderHome',
          webDir: '../shop-folder-home/dist',
          liveUpdateConfig: {
            appId: "133a341c",
            channel: "production",
            autoUpdateMethod: "background",
          },
        },
        {
          name: 'shopFolderContact',
          webDir: '../shop-folder-contact/dist',
          liveUpdateConfig: {
            appId: "94b38408",
            channel: "production",
            autoUpdateMethod: "background",
          },
        }
      ]
    }
  }
};

export default config;
