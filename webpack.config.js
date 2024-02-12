const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const shareAll = mf.shareAll;
const isCapBuild = process.env.CAP_BUILD;

const remotes =
  isCapBuild == null
    // Configuration for when developing locally
    ? {
      shopFolderLogin: "shopFolderLogin@http://localhost:4300/remoteEntry.js",
      shopFolderHome: "shopFolderHome@http://localhost:4400/remoteEntry.js",
      shopFolderContact: "shopFolderContact@http://localhost:4600/remoteEntry.js"
    }
    // Configuration for when building for capacitor
    : {
      shopFolderLogin: "shopFolderLogin@shopFolderLogin/remoteEntry.js",
      shopFolderHome: "shopFolderHome@shopFolderHome/remoteEntry.js",
      shopFolderContact: "shopFolderContact@shopFolderContact/remoteEntry.js"
    };

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "shopFolder",
    publicPath: "auto",
    scriptType: "text/javascript"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },

      // For remotes (please adjust)
      name: "shopFolder",
      filename: "remoteEntry.js",
      // exposes: {
      //     './Component': './/src/app/app.component.ts',
      // },        

      // For hosts (please adjust)
      remotes,

      shared: { ...shareAll({ singleton: true, strictVersion: true, requiredVersion: "auto" }), 'src/assets/logo.png': { eager: true, singleton: true } }

    }),
    sharedMappings.getPlugin()
  ],
};
