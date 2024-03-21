import { db } from '@/db';
import { redirect,notFound } from 'next/navigation';

export default function SnippetCreatePage(){

    async function createSnipped(formData:FormData){
        //This needs to be a server action!
        'use server'
        //Check the user's input and make sure they're valid
        const title=formData.get('title') as string;
        const code=formData.get('code') as string;

        //Create a new record in the database
        const snipped=await db.snipped.create({
            data:{
                title,
                code
            }
        })
        console.log(snipped);
        //Redirect the user back to the root route
        redirect('/')
    }

    return (
        <form action={createSnipped}>
            <h3 className="font-bold m-3">Create a Snipped</h3>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="title">Title</label>
                    <input type="text"
                    name="title"
                    className="border rounded p-2 w-full"
                    id="title"
                    />
                </div>
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="code">Code</label>
                    <textarea 
                    name="code"
                    className="border rounded p-2 w-full"
                    id="code"
                    />
                </div>
                <button type="submit" className="border rounded p-2 bg-blue-200">Create</button>
            </div>
        </form>
    )

}