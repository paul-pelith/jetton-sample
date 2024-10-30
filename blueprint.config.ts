import { Config } from '@ton/blueprint';
import { ScaffoldPlugin } from 'blueprint-scaffold';
export const config: Config = {
    network: 'testnet',
    plugins: [new ScaffoldPlugin()],
};
