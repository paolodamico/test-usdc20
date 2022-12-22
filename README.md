# Test USDC ERC20 token


### Deploy
```
REPORT_GAS=true yarn hardhat test
yarn hardhat compile
yarn hardhat run scripts/deploy.ts --network polygonMumbai
```


### Verify contract
```
yarn hardhat verify --network polygonMumbai --contract contracts/TestUSDC20.sol:TestUSDC20 --constructor-args arguments.js {address}
```