require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note spice company grace clip bottom gate'; 
let testAccounts = [
"0xaa13e7ef78a4a40724422c3a5f08603633f5ee34e00546b450a2edd1e1e2d434",
"0x9c950b590d1176448e0a0986978963e1315969a095b0c73f28a6ab878269342e",
"0x5a1718446b60588e893d81e763185fc8111bf0a81795aec2d430b12f1bfe04f5",
"0xaa25ced93300c6eac5c3e318be9c27c8475eac41f57b9edccb56a999b9e10d16",
"0xb9495d197322d788708c8ad77603e0484c45beee64eb1b28b3402be30cc5f349",
"0x9995cde669dd6f7992928e45e277a1d4ba007dd6ae259077c7385f9cc4330907",
"0xb98834c1176a16e24c8c165d7accb77308fe377982e8fa7a9109b615a3658323",
"0x1808991f70b4f6238ee8a62f3cc20facb00b9058c64763b23140a605ed2c073c",
"0x4126784882fc3dbc550fa3369fe50c11ed44224ae4ab0ac6d867ad6dc0ea8d30",
"0x16f3f01d8a4953f2e2cad2cb960dd7db6d9faa1f3fe0488e5ac84558d021c7bf"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


