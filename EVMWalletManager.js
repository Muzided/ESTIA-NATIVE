// EVMWalletManager.js
import { ethers } from 'ethers';
import 'react-native-get-random-values';
import "@ethersproject/shims";

class EVMWalletManager {
 
    static createWallet(includeMnemonic = false) {
        try {
            // Generate entropy for wallet creation
            const entropy = ethers.utils.randomBytes(16);
            const mnemonic = ethers.utils.entropyToMnemonic(entropy);
            const wallet = ethers.Wallet.fromMnemonic(mnemonic);
            
            const response = {
                success: true,
                data: {
                    address: wallet.address,
                    privateKey: wallet.privateKey,
                }
            };

            if (includeMnemonic) {
                response.data.mnemonic = mnemonic;
            }

            return response;

        } catch (error) {
            return {
                success: false,
                error: 'Failed to create wallet: ' + error.message
            };
        }
    }

   
}

export default EVMWalletManager;