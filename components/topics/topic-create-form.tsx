'use client'

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

export default function TopicCreateForm(){

    const [formState,action]=useFormState(actions.createTopic,{
        errors:{}
    })
    return (
        <Popover placement='left'>
            <PopoverTrigger>
                <Button color='primary'>Create a Topic</Button>
            </PopoverTrigger>
            <PopoverContent>
                <form action={action}>
                    <div className='flex flex-col gap-4 p-4 w-80'>
                    <h1 className='text-lg'>Create a Topic</h1>
                    <Input name='name' label="name" labelPlacement='outside' placeholder='Name'/>
                    <Textarea name='description' label="description" labelPlacement='outside' placeholder='Describe your topic'/>
                    <Button type='submit'>Submit</Button>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    )
}