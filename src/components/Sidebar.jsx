import Button from "./Button";

export default function Sidebar({ projects, selectedProjectId, onStartAddProject, onSelectProject }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 text-l font-bold text-stone-200 uppercase">Your projects</h2>
            <Button onClick={onStartAddProject}>+ Add Project</Button>
            <ul className="mt-8">
                {projects.map(({ id, title }) => {
                    let classes = 'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800';

                    if (id === selectedProjectId) {
                        classes += ' text-stone-200 bg-stone-800'
                    } else {
                        classes += ' text-stone-400'
                    }

                    console.log(id, selectedProjectId);

                    return (
                        <li key={id}>
                            <button 
                                className={classes}
                                onClick={() => onSelectProject(id)}
                            >
                                {title}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}