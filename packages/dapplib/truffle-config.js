require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food shrug raise random color hunt sister army gentle'; 
let testAccounts = [
"0x392f8ca8f905d3e0801bdbd559887a24253f1bcc5040e924e6d6f31101a76c4a",
"0xcb73124ceb79f9f3d4e9db59c893ca477528bf68782c6dea1f93cad245cbf5af",
"0x335b4ddc5c094992f1896b90829b974f4b56df79a524b3c06d9bc00c52d8a73a",
"0x331210d4ac4b8b0e94998bdf5ed84661174dc03cd5aeb150204e5a0c19ed57bf",
"0x4229440a3de0cf3406451f623626ae4d3e15749584990671e343dd961e1e8d28",
"0xd044e93fac8e9fad60a1846fbf949097a97e8fb8b67236ca413377993d499aed",
"0x24d5e0610dc6e7c558c6201dbc82a89619e79923715508b18258421c41667ff7",
"0xacd8d1a6cfaaf153369f8d970b0529c9e360a60b37437436cf6c66083a82e12c",
"0xd4059c3dc2f46774521d5ad25a334f494ed4b6767b82fbda8f10bacfca409b62",
"0x425e8e73d6bd1afdbe9fb9fe51bc2e608caf70cbde7acb034d843a6c83f0ec1a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

