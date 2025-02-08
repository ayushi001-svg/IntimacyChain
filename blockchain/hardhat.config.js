require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    polygonzk: {
      url: process.env.ALCHEMY_API_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
