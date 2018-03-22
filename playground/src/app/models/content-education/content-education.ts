import { ContentLinks } from './content-links';
import { PrerequisitesSkills } from './prerequisites-skills';
import { ExamQuestion } from './exam-question';

export interface ContentEducation {
    _id: string;
    related_poi: number[];
    skills_to_gain: number[];
    title: string;
    description: string;
    links: ContentLinks[];
    prerequisites_skills: PrerequisitesSkills[];
    exams: ExamQuestion[];
}
