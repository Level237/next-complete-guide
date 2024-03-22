import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";

import * as action from "@/actions"
interface SnippedShowPageProps{
    params:{
        id:string
    }
}
export default async function SnippedShowPage(props:SnippedShowPageProps){
    await new Promise((receive)=>{
        setTimeout(receive,2000)
    })
    const snipped=await db.snipped.findFirst({
        where:{id:parseInt(props.params.id)}
    })
    if(!snipped){
        return notFound();
    }
    const deleteSnippetAction=action.deleteSnippet.bind(null,snipped.id)
    return (
        <div>
            <div className="flex m-4 justify-between items-center">
                <h1 className="text-xl font-bold">{snipped.title}</h1>
                <div className="flex gap-4">
                    <Link href={`/snippets/${snipped.id}/edit`} className="p-2 border rounded">Edit</Link>
                    <form action={deleteSnippetAction}>
                        <button type="submit" className="p-2 border rounded">Delete</button>
                    </form>
                    
                </div>
            </div>
            <pre className="p-3 border rounded bg-gray-400 border-gray-200">
                <code>
                    {snipped.code}
                </code>
            </pre>
        </div>
        
    )
}