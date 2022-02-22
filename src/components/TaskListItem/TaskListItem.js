import './TaskListItem.css'

function TaskListItem({text, done, onDelete, onDone}) {
    let classNames = 'd-flex justify-content-between p-3 text-secondary border';

    if (done) {
        classNames += ' done border-success text-success';
    }
    
    const setColor = (btn, textColor) => {
        btn.classList.add(textColor);
        btn.addEventListener('mouseout', () => {
            btn.classList.remove(textColor);
        })
    }

    const onHover = (e) => {
        if (e.target.hasAttribute('data-trash')) {
            setColor(e.target, 'text-danger');
        }
        if (!done) {
            if (e.target.hasAttribute('data-check')) {
                setColor(e.target, 'text-success');
            }
        }
    }

    return (
        <li 
            className={classNames}
            onMouseOver={onHover}
            onClick={onDone}
            data-check
            data-toggle="done">
            <span>
                <i className="fas fa-check"></i>
                <span data-check>{text}</span>
            </span>
            <div>
                <button 
                    className="fas fa-trash btn btn-lg text-secondary" 
                    type="button"
                    onMouseOver={onHover}
                    data-trash
                    onClick={onDelete} />
            </div>
        </li>
    )
}

export default TaskListItem;

//fas fa-trash    fas fa-check 