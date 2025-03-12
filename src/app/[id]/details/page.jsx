

export default async function page({params}) {

  const { id } = await params
  
  console.log(id)

  return (
  <h1 className="text-white">Details Page {id}</h1>
  );
}
