import TodoItem from "@/components/TodoItem";
import prisma from "@/db";
import Link from "next/link";

async function toggleTodo(id: string, complete: boolean) {
  "use server";
  await prisma.todo.update({ where: { id }, data: { complete } });
}
// async function filterCompleted(id: string, complete: boolean) {
//   "use server";
//   await prisma.todo.findMany({ where:{id,   });
// }

export default async function Home() {
  const todos = await prisma.todo.findMany();
  console.log(todos); // const newData = await prisma.todo.create({
  //   data: { title: "Push the call", complete: false },
  // });

  // console.log(newData);
  return (
    <>
      <div className='flex flex-col justify-between items-centermax-w-3xl h-16 bg-slate-700 w-full px-4'>
        <header className='flex w-full justify-between items-center '>
          <h1 className='font-bold'>Todos</h1>
          <Link href={"/new"}>
            <button className='border rounded-md hover:bg-gray-600 cursor-pointer p-1'>
              New
            </button>
          </Link>
        </header>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
          />
        ))}
      </ul>
      <button className='w-full font-semibold py-1 px-2 bg-red-700 mt-2'>
        Clear Completed
      </button>
    </>
  );
}
