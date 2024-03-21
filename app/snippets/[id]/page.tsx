import { db } from "@/db";
import { notFound } from "next/navigation";
interface SnippedShowPageProps{
    params:{
        id:string
    }
}
export default async function SnippedShowPage(props:SnippedShowPageProps){
    const snipped=await db.snipped.findFirst({
        where:{id:parseInt(props.params.id)}
    })
    if(!snipped){
        return notFound();
    }
    return (
        <div>{snipped.title}</div>
    )
}