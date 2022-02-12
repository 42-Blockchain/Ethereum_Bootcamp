require("dotenv").config();
const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const provider = new HDWalletProvider({
  providerOrUrl: process.env.RINKEBY_URL || "",
  privateKeys: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
});

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!

  compilers: {
    solc: {
      version: "^0.8.0",
    },
  },
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      port: 8545,
    },
    rinkeby: {
      provider: () => provider,
      network_id: 4,
    },
  },
};
