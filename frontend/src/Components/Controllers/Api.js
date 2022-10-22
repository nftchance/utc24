const fetchProjects = async () => {
    return fetch('projects/')
        .then(res => res.json())
}

const fetchProject = async (id) => {
    return fetch(`projects/${id}`)
        .then(res => res.json())
}

const fetchMembers = async () => {
    return fetch('members/')
        .then(res => res.json())
        .then(res => res.filter(member => member.name))
}

const fetchMember = async (id) => {
    return fetch(`members/${id}`)
        .then(res => res.json())
}

module.exports = {
    fetchProjects,
    fetchProject,
    fetchMembers,
    fetchMember
}