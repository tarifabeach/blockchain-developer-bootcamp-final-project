//const Token = artifacts.require("sampleToken");
//const { BN, constants, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');
const sampleToken = artifacts.require("./sampleToken.sol");

var chai = require("chai");

const BN = web3.utils.BN;

const chaiBN = require ("chai-bn") (BN);

chai.use(chaiBN);

var chaiAsPromised = require ("chai-as-promised");
chai.use(chaiAsPromised);

const expect = chai.expect;

//contract ("Token Test",async (accounts)=>{
    
 //   it("all tokens should be in my account", async() =>{

   // let instance = await Token.deployed();
    //let totalSupply = await instance.totalSupply;
    //let balance = await instance.balanceof(account [0]);
    //assert.equal(balance.valueOf(), initialSupply.valueOf(), "The balance was not the same");
    //expect(await instance.balanceOf(accounts [0])).to.be.a.bignumber.equal(totalSupply);

        contract("Token Test",async (accounts)=>{

       const [deployerAccount,recipient,anotherAccount] =accounts;

              
        it("one-all tokens should be in my account", async () => {
            let instance = await sampleToken.deployed();
            let totalSupply =await instance.totalSupply();
            expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(totalSupply);
        })

                

        it("two-is possible to send token between accounts", async () => {

            const sendTokens=1;
            let instance= await sampleToken.deployed();
            let totalSupply = await instance.totalSupply();
            expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(totalSupply);
            expect(instance.transfer(recipient, sendTokens)).to.eventually.be.fulfilled;
            expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(totalSupply.sub(new BN(sendTokens)));
            expect(instance.balanceOf(recipient)).to.eventually.be.a.bignumber.equal(new BN(sendTokens));
        });


        it("three is not possible to send more tokens than available in total", async()=>{
            
            let instance= await sampleToken.deployed();
            let balanceOfDeployer=await instance.balanceOf(deployerAccount);
            expect(instance.transfer(recipient,new BN(balanceOfDeployer))).to.eventually.be.rejected;
            expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(balanceOfDeployer);
        });

        it("should not have any tokens in my deployerAccounts", async()=>{
            let instance= await sampleToken.deployed();
            expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(new BN(0));
        });
      
      
      
    });

//Four Addition test("Initial State", function () {
    //it("the deployer is the owner", async function () {
      //const [owner] = accounts;
  
      //expect(await this.token.owner()).to.equal(owner);

      
//More Addition tests on name 
//const name = 'sampleToken';
  //const symbol = 'AGO';

  //const initialSupply = new BN(100);

  //beforeEach(async function () {
    //this.token = await ERC20Mock.new(name, symbol, initialHolder, initialSupply);
  //});

  //it('has a name', async function () {
    //expect(await this.token.name()).to.equal(name);
  //});

  //it('has a symbol', async function () {
    //expect(await this.token.symbol()).to.equal(symbol);
  //});

  //it('has 18 decimals', async function () {
    //expect(await this.token.decimals()).to.be.bignumber.equal('18');
  //});

  //describe('set decimals', function () {
    //const decimals = new BN(6);

    //it('can set decimals during construction', async function () {
      //const token = await ERC20DecimalsMock.new(name, symbol, decimals);
      //expect(await token.decimals()).to.be.bignumber.equal(decimals);
    //});
    