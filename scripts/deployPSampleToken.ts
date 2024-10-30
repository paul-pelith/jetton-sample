import { toNano } from '@ton/core';
import { PSampleToken } from '../wrappers/PSampleToken';
import { compile, NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const pSampleToken = provider.open(
        PSampleToken.createFromConfig(
            {
                id: Math.floor(Math.random() * 10000),
                counter: 0,
            },
            await compile('PSampleToken')
        )
    );

    await pSampleToken.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(pSampleToken.address);

    console.log('ID', await pSampleToken.getID());
}
