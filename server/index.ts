import * as alt from 'alt-server';
import { PluginSystem } from '@AthenaServer/systems/plugins';
import { PaintShopView } from './src/view';

const PLUGIN_NAME = 'Paint Shop Plugin';

PluginSystem.registerPlugin(PLUGIN_NAME, () => {
    PaintShopView.init();
    alt.log(`~lg~${PLUGIN_NAME} was Loaded`);
});
