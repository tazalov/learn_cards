import { Meta, StoryObj } from '@storybook/react'

import { SignUpForm } from './'
import { SignUpFormValues } from './useSignUpForm'

const meta = {
  args: {
    onSubmit: (data: SignUpFormValues) => console.log(data),
  },
  component: SignUpForm,
  tags: ['autodocs'],
  title: 'features/Auth/SignUpForm',
} satisfies Meta<typeof SignUpForm>

export default meta
type Story = StoryObj<typeof meta>

export const SignUpFormStory: Story = {}
