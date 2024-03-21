import Image from "next/image";
import {db} from '@/db'
export default async function Home() {
  const snippets=await db.snipped.findMany();

  const renderedSnippets=snippets.map((snipped)=>{
    return (
      <div key={snipped.id}>
          {snipped.title}
      </div>
    )
  })
  return (
   <div>{renderedSnippets}</div>
  );
}
