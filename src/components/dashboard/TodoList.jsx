import { useMemo, useState } from 'react';
import Card from '../ui/Card';

const checkIcon = (
  <svg
    viewBox='0 0 16 16'
    className='pointer-events-none absolute h-3 w-3 text-white opacity-0 peer-checked:opacity-100'
    aria-hidden='true'
  >
    <path
      d='M6.4 10.8 3.6 8l-1.1 1.1 3.9 3.9L13.5 6 12.4 4.9z'
      fill='currentColor'
    />
  </svg>
);

const defaultTodoList = [];

const TodoList = ({ todoList = defaultTodoList }) => {
  const [completedOverrides, setCompletedOverrides] = useState({});

  const items = useMemo(
    () =>
      (todoList ?? []).map((item, index) => {
        const itemId = item?.id || `${item?.title || item?.todo || 'todo'}-${index}`;

        return {
          ...item,
          id: itemId,
          completed:
            typeof completedOverrides[itemId] === 'boolean'
              ? completedOverrides[itemId]
              : Boolean(item?.completed),
        };
      }),
    [completedOverrides, todoList]
  );

  const toggleTodo = (index) => {
    const item = items[index];
    if (!item?.id) return;

    setCompletedOverrides((current) => ({
      ...current,
      [item.id]: !item.completed,
    }));
  };

  return (
    <Card className='bg-white'>
      <div className='space-y-5 sm:space-y-6'>
        <h2 className='text-lg font-medium sm:text-2xl'>Todo List</h2>

        {items.length > 0 ? (
          <ul className='space-y-4 sm:space-y-5'>
            {items.map((item, index) => {
              const todo = item?.title || item?.todo || 'Todo item';
              const date = item?.date || item?.dueDate || 'No due date';
              const completed = Boolean(item?.completed);

              return (
                <li key={item?.id || `${todo}-${index}`} className='flex items-start gap-3 sm:gap-4'>
                  <label className='relative mt-1 flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center sm:mt-2'>
                    <input
                      type='checkbox'
                      checked={completed}
                      onChange={() => toggleTodo(index)}
                      className='peer sr-only'
                    />
                    <span className='h-4 w-4 rounded-sm border border-brand-secondary bg-white transition peer-checked:bg-brand-secondary' />
                    {checkIcon}
                  </label>

                  <div className='min-w-0 flex-1 space-y-1'>
                    <p
                      className={`break-words text-sm leading-5 sm:text-[15px] sm:leading-snug ${
                        completed ? 'line-through opacity-70' : ''
                      }`}
                    >
                      {todo}
                    </p>

                    <span className='block break-words text-xs text-text-secondary sm:text-sm'>
                      {date}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className='rounded-2xl bg-bg-muted p-5 text-center'>
            <p className='text-sm font-medium'>Nothing on your todo list</p>
            <p className='mt-1 text-sm text-text-secondary'>
              New learning tasks will show up here as they are assigned.
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default TodoList;
