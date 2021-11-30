# blockchain-developer-bootcamp-final-project


Final project - MyToken and a wallet to controll, send and review = Operative dashboard 

Deployed version url: : https://codesandbox.io/s/react-write-read-smart-contracts-forked-212n0?file=/src/App.js

Note : the application refresh every new login so can be utilize to control different smart contract. In this sa the ABI code need to be reported

How to run this project locally:

Prerequisites

    Node.js >= v14

    Truffle and Ganache

    Yarn

    git checkout master


Contracts

    Run yarn install in project root to install Truffle build and smart contract dependencies

    Run local testnet in port 7545 with an Ethereum client, e.g. Ganache

    truffle migrate --network development

    truffle console --network development

    Run tests in Truffle console: test

    development network id is 1337, remember to change it in Metamask as well!


Frontend

    cd client

    yarn install

    yarn start

    Open http://localhost:3000


Screencast link

    Functionality ERC20 token and Dapp are explained in  - Watch Video

    https://www.loom.com/share/4b0c1d061a284c108d93e67535b6d40c


Public Ethereum wallet for certification:   0x15Cad4807b93A4dD2eE534F844EE898a22618426

It is available on the test network Rinkeby 


Project description

    Creaction of  Token Wallet to store, exchange, send and receive 

    In order to get the ERC-20 Token balance, you will need to do a number of things.

        -Connect to the application

        -Write up the ABI for the smart contract that we want to use to interact with the blockchain

        -Find an ERC20-Token to get the balance of

        -Find a wallet to get the balance of


Simple workflow
  
    Enter service web site
  
    Login with Metamask
  
    Browse smart contract code
  
    Select baalnce of 
  
    Agree on contract, pay erc20 with Metamask (smart contract call)
  
    Balance if and list of trasaction transferred to user account (smart contract call)


Directory structure
  
    client: Project's React frontend.
  
    contracts: Smart contracts that are deployed in the Rinkeby testnet.
  
    migrations: Migration files for deploying contracts in contracts directory.
  
    test: Tests for smart contracts.

TODO features

    -The graph as a index solution (https://thegraph.com/

    -For L2 scaling the solution we are planning to use Polygon (https://polygon.technology/)

    -To manage the smart contract we will leverage the Openzeppelin upgrade (https://docs.openzeppelin.com/learn/upgrading-smart-contracts)


