import Button from "./Button";
import logo from '../assets/no-projects.png';

export default function EmptyProjectPage({ onStartAddProject }) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img className="w-16 h-16 object-contain mx-auto" src={logo} alt="An empty project list" />
            <h2 className="text-xl font-bold text-stone-700 my-4">No Project Selected</h2>
            <p className="text-stone-600 mb-4">Select a project or get started with a new one</p>
            <Button onClick={onStartAddProject}>Create New Project</Button>
        </div>
    )
}