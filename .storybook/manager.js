import { addons } from '@storybook/addons';

addons.setConfig({
    selectedBarPanel: 'storybook/docs',
    toolbar: {
        zoom: { hidden: true },
        eject: { hidden: true },
        copy: { hidden: true },
        fullscreen: { hidden: true }
    },
    enableShortcuts: false
});
