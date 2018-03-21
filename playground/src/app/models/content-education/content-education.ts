import { ContentLinks } from './content-links';
import { PrerequisitesSkills } from './prerequisites-skills';

export interface ContentEducation {
    related_poi: number[];
    skills_to_gain: number[];
    title: string;
    description: string;
    links: ContentLinks[];
    prerequisites_skills: PrerequisitesSkills[];
}
