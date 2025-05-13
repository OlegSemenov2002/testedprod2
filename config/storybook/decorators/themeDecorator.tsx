import { Story } from '@storybook/blocks';
import { Decorator } from '@storybook/react';
import { Theme } from '../../../src/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
