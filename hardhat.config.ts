import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-truffle5";
import "@vechain/hardhat-vechain";
import "@vechain/hardhat-ethers";
import "hardhat-contract-sizer";
import "hardhat-ignore-warnings";
import "solidity-coverage";
import "solidity-docgen";
import "hardhat-interface-generator";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.20",
};

const getEnvMnemonic = () => {
  const mnemonic = process.env.MNEMONIC;

  return mnemonic ?? "";
};

module.exports = {
  solidity: {
    version: "0.8.20",
    evmVersion: "paris",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000000,
      },
    },
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
  },
  mocha: {
    timeout: 1800000,
  },
  gasReporter: {
    enabled: false,
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    vechain_solo: {
      url: "http://localhost:8669",
      accounts: {
        mnemonic: getEnvMnemonic(),
        count: 20,
        path: "m/44'/818'/0'/0",
      },
      restful: true,
      gas: 10000000,
    },
    vechain_testnet: {
      url: "https://testnet.vechain.org",
      accounts: {
        mnemonic: getEnvMnemonic(),
        count: 20,
        path: "m/44'/818'/0'/0",
      },
      restful: true,
      gas: 10000000,
    },
    vechain_mainnet: {
      url: "https://mainnet.vechain.org",
      accounts: {
        mnemonic: getEnvMnemonic(),
        count: 20,
        path: "m/44'/818'/0'/0",
      },
      restful: true,
      gas: 10000000,
    },
  },
  docgen: {
    pages: "files",
  },
};

export default config;
