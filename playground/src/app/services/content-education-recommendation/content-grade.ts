import { ContentEducation } from "../../models/content-education/content-education";

export class EducationContentRecommandetion {
    constructor(public content: ContentEducation,
                public grade: number = 0,
                public isCoverPrerequisites: boolean,
                public uncoveredPrerequisites: number[],
                public skillRewards: SkillRewards[]) {
    }
}

export class SkillRewards {
    constructor(
    public skill_id: number,
    public reward: number
    ) {}
}