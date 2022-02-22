import './AppInfo.css';
import AddTaskForm from '../AddTaskForm/AddTaskForm'

function AppInfo({onAdd}) {
    return (
        <div className="app-info bg-success bg-gradient p-3">
            <h1 className="mb-2 text-light">Today I'm gonna..</h1>
            <AddTaskForm onAdd={onAdd} />
        </div>
    )
}

export default AppInfo;