export const PROJECTS = [
    {
        default: {
            id: 'baby-mobs',
            title: 'Baby Mobs',
            description: "Baby Mobs est un pack de comportement dédié à l'univers de Minecraft Bedrock. Cette add-on permet d'ajouter des variantes des créatures enfant plus puissant.",
            tags: ['Minecraft Bedrock', 'JSON', 'Add-on']
        },
        API: { name: 'cfwidget', projectId: '852745', },
    },
    {
        default: {
            id: 'ukiyo-ui',
            title: 'Ukiyo UI',
            description: "C'est un pack de ressource dédié à l'univers de Minecraft Bedrock. Le pack permet de donner un nouveau style plus esthétique, plus simple, et plus coloré.",
            tags: ['Minecraft Bedrock', 'JSON', 'Add-on', 'Pack de Texture']
        },
        API: { name: 'cfwidget', projectId: '704780' },
    },
    {
        default: {
            id: 'u!bu',
            created_at: '2020-10-20T20:46:00.000Z',
            title: 'Undertale Between World',
            description: "Undertale Between World est un fan-made du célèbre jeu Undertale créé par Toby Fox. Il a pour bût de rejoindre tout les univers alternatif plus un tout nouvelle univers riche en personnage et en exploration, de nouvelles mécaniques de combat vous attende également !",
            tags: ['Undertale', 'GDScript', 'Jeu PC', '[ En cours de dev ]']
        },
    }
];

export const PROJECT_FETCH_RATE = (30 * 60 * 1000);
export const PROJECTS_LAST_FETCH = JSON.parse(localStorage.getItem('PROJECTS_LAST_FETCH')) ?? 0;
export const PROJECTS_STORED = JSON.parse(localStorage.getItem('PROJECTS'));
export const PROJECTS_NAPI = PROJECTS.filter(x=>!x.API&&x.default);
export const PROJECTS_API = PROJECTS.filter(x=>x.API);

export const PROG_LANGUAGES = [
    { title: 'HTML', href: '#' },
    { id: 'js', title: 'JavaScript', href: '#' },
    { id: 'py',title: 'Python', href: '#' },
    { title: 'CSS', href: '#', },
    { id: 'cs', title: 'C#', href: '#' },
    { id: 'cpp', title: 'C++', href: '#' },
    { id: 'gd', title: 'GDScript', href: '#' }
];

export const PROG_FRAMEWORK = [
    { ext: 'svg', title: 'React', href: '#' }
];

export default {
    PROJECTS,
    PROG_LANGUAGES,
    PROG_FRAMEWORK
};