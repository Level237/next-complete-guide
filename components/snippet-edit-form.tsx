'use client'
import type { Snipped } from "@prisma/client"
interface SnippetEditFormProps{
    snippet:Snipped   
}
export default function SnippedEditForm({snippet}:SnippetEditFormProps){

    return (
        <div>
            Client Component has title {snippet.title}
        </div>
    )
}