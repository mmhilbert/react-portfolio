const Project = ({project}) => {

    return (
        <div className="card glass w-full shadow-xl col-span-1">
            <figure>
                <img
                src={project.imgSrc}
                alt={project.title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
                <div className="card-actions justify-end">
                <a href={project.href} className="btn btn-primary">View Now</a>
                </div>
            </div>
        </div>
    )
}

export default Project