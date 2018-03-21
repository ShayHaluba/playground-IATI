import { ContentLinks } from './content-links';
import { PrerequisitesSkills } from './prerequisites-skills';

export class ContentEducation {
    public preferances_to_gain: number[];
    public skills_to_gain: number[];
    public title: string;
    public description: string;
    public links: ContentLinks[];
    public prerequisites_skills: PrerequisitesSkills[];
}
