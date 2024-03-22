'use client'
import type { Snipped } from "@prisma/client"
import { Editor } from "@monaco-editor/react"
import { useState } from "react"
import * as actions from "@/actions"
interface SnippetEditFormProps{
    snippet:Snipped   
}


export default function SnippedEditForm({snippet}:SnippetEditFormProps){

    const [code,setCode]=useState(snippet.code)
    const handleEditorChange=(value:string='')=>{
        setCode(value)
    }
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
             onChange={handleEditorChange}
            />
        </div>
    )
}