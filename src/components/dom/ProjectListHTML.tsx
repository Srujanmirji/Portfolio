import { projects } from '@/constants/projects'

export default function ProjectListHTML() {
    return (
        <section className="sr-only" aria-label="Project Gallery">
            <h2>Selected Projects</h2>
            <ul>
                {projects.map((project, i) => (
                    <li key={i}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link}>{project.title} detailed view</a>
                    </li>
                ))}
            </ul>
        </section>
    )
}
