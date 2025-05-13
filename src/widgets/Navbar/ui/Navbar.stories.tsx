import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'Design Widgets/Navbar',
    component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
    args: {

    },
};

export const Secondary: Story = {
    args: {

    },
};
