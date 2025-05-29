import type { Preview } from '@storybook/react';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { ThemeDecorator } from './decorators/themeDecorator';
import { CssDecorator } from './decorators/cssDecorator';
import { RouterDecorator } from './decorators/routeDecorator';

// @ts-ignore
const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        RouterDecorator,
        ThemeDecorator(Theme.LIGHT),
        CssDecorator,
    ],

};

export default preview;
