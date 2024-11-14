// Example.js
import EVMWalletManager from './EVMWalletManager';


const createNewWallet = () => {
    const response = EVMWalletManager.createWallet(true);
    console.log("response",response)
    if (response.success) {
        console.log('New Wallet Address:', response.data.address);
        console.log('Private Key:', response.data.privateKey);
        console.log('Mnemonic:', response.data.mnemonic);
       
    } else {
        console.error('Error:', response.error);
    }
};


module.exports = { createNewWallet };