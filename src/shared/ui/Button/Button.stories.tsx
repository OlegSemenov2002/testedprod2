import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { ThemeDecorator } from '../../../../config/storybook/decorators/themeDecorator';

const meta: Meta<typeof Button> = {
    title: 'Design Shares/Button',
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },

};

export const BackgroundTheme: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundThemeInverted: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },

};

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND,
        square: true,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareSizeM: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: ButtonSize.M,
    },
};
export const SquareSizeXl: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND,
        square: true,
        size: ButtonSize.XL,
    },
};
