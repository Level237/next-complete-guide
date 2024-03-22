interface SnippedEditPageProps{
    params:{
        id:string
    }
}

export default function SnippetEditPage(props:SnippedEditPageProps){
    const id=parseInt(props.params.id)

    return(
        <div>
            Editing snipped with id {id}
        </div>
    )
}