"use client";
type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};
const TodoItem = ({ id, complete, title, toggleTodo }: TodoItemProps) => {
  return (
    <div>
      <li className='flex gap-1 items-center'>
        <input
          id={id}
          type='checkbox'
          className='cursor-pointer peer'
          defaultChecked={complete}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label
          htmlFor={id}
          className='cursor-pointer peer-checked:line-through '>
          {title}
        </label>
      </li>
    </div>
  );
};

export default TodoItem;
