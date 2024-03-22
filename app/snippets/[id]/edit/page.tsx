import { db } from "@/db"
import { notFound } from "next/navigation";
import SnippedEditForm from '../../../../components/snippet-edit-form';
interface SnippedEditPageProps{
    params:{
        id:string
    }
}

export default async function SnippetEditPage(props:SnippedEditPageProps){
    const id=parseInt(props.params.id)
    const snipped=await db.snipped.findFirst({
        where:{id}
    })

    if(!snipped){
        return notFound()
    }
    return(
        <div className="mt-40">
           <SnippedEditForm snippet={snipped}/>
        </div>
    )
}