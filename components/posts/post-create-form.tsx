'use client'

import React from 'react'
import { useFormState } from 'react-dom'

import {
    Input,
    Button,
    Textarea,
    Popover,
    PopoverTrigger,
    PopoverContent
} from '@nextui-org/react'

import * as actions from "@/actions"
import FormButton from '../common/form-button'
export default function PostCreateForm() {
  return (
   <Popover placement='left'>
     <PopoverTrigger>
        <Button color='primary'>Create a Post</Button>
     </PopoverTrigger>
     <PopoverContent>
        <form action="">
            <div className='flex flex-col gap-4 p-4 w-80'>
                <h3 className='text-lg'> Create a Post</h3>
                <Input
                name='title'
                label="title"
                labelPlacement='outside'
                placeholder='title'
                />
                <Input
                name='content'
                label="Content"
                labelPlacement='outside'
                placeholder='Content'
                />

                <FormButton>Create a Post</FormButton>
            </div>
        </form>
     </PopoverContent>
   </Popover>
  )
}
