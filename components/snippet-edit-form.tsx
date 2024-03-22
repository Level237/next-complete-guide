'use client'
import type { Snipped } from "@prisma/client"
import { Editor } from "@monaco-editor/react"
interface SnippetEditFormProps{
    snippet:Snipped   
}
export default function SnippedEditForm({snippet}:SnippetEditFormProps){

    return (
        <div>
            <Editor
            height='40vh'
            theme="vs-dark"
            language="javascript"
            defaultValue={snippet.code}
            options={{ 
                minimap:{enabled:false}
             }}
            />
        </div>
    )
}