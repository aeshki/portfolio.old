import { PROJECTS_API, PROJECTS_NAPI, PROJECTS_STORED, PROJECT_FETCH_RATE, PROJECTS_LAST_FETCH } from './CONSTANT';

async function FETCH_PROJECTS() {
    const projects = await Promise.all(PROJECTS_API.map(async project => {
        const URL = project.API?.name && 'cfwidget' && `https://api.cfwidget.com/${project.API.projectId}`
        if (!URL) throw Error('NO VALID APITYPE');
        console.log(project)
        return { default: project.default, ...await fetch(URL).then(x=>x.json().then(rep => {
            if (x.status != 200) return { API: project.API.name, code: x.status };
            return (project.API.name == 'cfwidget') && {
                head: { id: rep.title },
                title: rep.title,
                list: {
                    content: [
                        { text: rep.created_at && `Projet créé le ${new Date(rep.created_at).toLocaleDateString()}` },
                        { text: rep.downloads?.total && `${rep.downloads.total}~ Téléchargements` },
                    ]
                },
                link: {
                    title: 'voir le projet',
                    href: rep.urls?.curseforge,
                }
            };
        }))};
    }));

    localStorage.setItem('PROJECTS', JSON.stringify(projects));
    localStorage.setItem('PROJECTS_LAST_FETCH', new Date().getTime());
    return projects;
};

export const PROJECTS_SORTED = [
    ...PROJECTS_NAPI,
    ...((!PROJECTS_STORED || (((new Date().getTime() - new Date(PROJECTS_LAST_FETCH).getTime())) > PROJECT_FETCH_RATE)) ? await FETCH_PROJECTS() : PROJECTS_STORED)].map(project => {
    return {
        head: { id: project.id ?? project.default?.id ?? (project.title ?? project.default?.title).split(/ +/).join('-') },
        title: project.title ?? project.default?.title,
        description: project.default?.description,
        list: project.list ?? project.default?.list,
        link: project.link ?? project.default?.link,
        tags: project?.default?.tags
    }
}).sort((a, b) => {
    const algorytm = (data) => {
        return (Math.min(1.5, ((data.description?.length ?? 0) / 100)) +
        Math.min(2.5, (data.list?.content?.length ?? 0)) +
        (data.link ? 0.5 : -0.5));
    };
    return (algorytm(b) - algorytm(a));
});