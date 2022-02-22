import TaskListItem from "./TaskListItem/TaskListItem";

function TaskList({data, onDelete, onDone}) {
    const listItems = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <TaskListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onDone={(e) => onDone(id, e.currentTarget.getAttribute('data-toggle'))} />
        )
    })

    return (
        <ul className="p-0">
            {listItems}
        </ul>
    )
}

export default TaskList;