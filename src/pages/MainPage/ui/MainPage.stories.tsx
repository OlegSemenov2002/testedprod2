import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import MainPage from './MainPage';


const meta: Meta<typeof MainPage> = {
    title: 'Design Pages/MainPage',
    component: MainPage,
};

export default meta;

type Story = StoryObj<typeof MainPage>;


export const Primary: Story = {
    args: {


    },
};

export const Secondary: Story = {
    args: {

    },
};
