import Image from "next/image";
import {db} from '@/db'
import Link from "next/link";


export default async function Home() {
  const snippets=await db.snipped.findMany();

  const renderedSnippets=snippets.map((snipped)=>{
    return (
      <Link href={`/snippets/${snipped.id}`} key={snipped.id} className="flex justify-between p-2 items-center border rounded">
          <div>{snipped.title}</div>
          <div>View</div>
      </Link>
    )
  })
  return (
   <div>
    <div className="flex m-2 justify-between items-center">
      <h1 className="text-xl font-bold">Snippets</h1>
      <Link className="border p-2 border-rounded" href='snippets/new'>New</Link>
    </div>
    <div className="flex gap-2 flex-col">
    {renderedSnippets}
    </div>
   
    </div>
  );
}
