import prisma from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createTodo(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("invalid Title");
  }
  await prisma.todo.create({
    data: { title, complete: false },
  });
  redirect("/");
}

export default function New() {
  return (
    <>
      <div className='flex flex-col gap-6 max-w-3xl h-80 bg-slate-700 w-full px-4'>
        <header className='flex w-full justify-between items-center '>
          <h1 className='font-bold mt-4'>New Todo</h1>
        </header>
        <form
          action={createTodo}
          className='w-full py-2 flex flex-col gap-2 '>
          <input
            type='text'
            name='title'
            className='mr-2 border rounded-md bg-slate-800 outline-none focus-within:border-slate-100 px-2 py-1'
          />
          <div className='flex gap-2 justify-end'>
            <Link href={".."}>
              <button className='border rounded-md hover:bg-gray-600 cursor-pointer p-1'>
                Cancel
              </button>
            </Link>
            <button
              type='submit'
              className='border rounded-md hover:bg-gray-600 cursor-pointer p-1'>
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
