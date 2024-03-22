'use server'

import { db } from "@/db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function editSnippet(id:number,code:string){
    await db.snipped.update({
        where:{id},
        data:{code}
    });
    redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id:number){
    await db.snipped.delete({
        where:{id}
    });

    revalidatePath('/')
    redirect('/')
}
export async function createSnipped(formState:{message:string},formData:FormData){
  
    //Check the user's input and make sure they're valid
    try{

    
    const title=formData.get('title') ;
    const code=formData.get('code');

    if(typeof title !=='string' || title.length < 3){
        return {
            message:"Title must be longer"
        }
    }

    if(typeof code !=="string" || code.length < 10){
        return {
            message:"code must be longer"
        }
    }
    //Create a new record in the database
   const snipped=await db.snipped.create({
        data:{
            title,
            code
        }
    })
    
    //throw new Error('failed to save to database.')
    
}catch(error:unknown){
    if(error instanceof Error){
        return {
            message:error.message
        }
    }else{
        return{
            message:'Something went wrong...'
        }
    }
}
    
    revalidatePath('/')
    //Redirect the user back to the root route
    redirect('/')
}