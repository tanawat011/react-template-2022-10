import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Button description',
      },
      page: null,
    },
  },
  argTypes: {
    color: { control: { type: 'select' } },
    size: { control: { type: 'select' } },
    type: { control: { type: 'select' } },
    icon: { control: { type: 'none' } },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (props) => <Button label='Button' {...props} />

export const Customable = Template.bind({})

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
}

export const Ternary = Template.bind({})
Ternary.args = {
  color: 'ternary',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

const VariantTemplate: ComponentStory<typeof Button> = (props) => (
  <div className='flex'>
    <Primary label='Button' {...props} {...Primary.args} />
    <Secondary label='Button' {...props} {...Secondary.args} />
    <Ternary label='Button' {...props} {...Ternary.args} />
  </div>
)

export const Variants = VariantTemplate.bind({})
