import { ContentLinks } from './content-links';
import { PrerequisitesSkills } from './prerequisites-skills';

export class ContentEducation {
    public related_poi: number[];
    public skills_to_gain: number[];
    public title: string;
    public description: string;
    public links: ContentLinks[];
    public prerequisites_skills: PrerequisitesSkills[];
}
