import { HardhatUserConfig } from "hardhat/types";
import "@typechain/hardhat";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.17"
      },
    ],
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  }
};

export default config;
