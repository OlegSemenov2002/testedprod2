import {Story} from "@storybook/blocks";
import {Theme} from "../../../src/app/providers/ThemeProvider";
import {Decorator} from "@storybook/react";

export const  ThemeDecorator = (theme: Theme): Decorator => (Story)=>(
    <div className={`app ${theme}`}>
        <Story />
    </div>
)

