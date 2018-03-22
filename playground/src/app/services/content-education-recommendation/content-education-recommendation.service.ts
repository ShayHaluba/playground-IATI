import { ContentEducation } from '../../models/content-education/content-education';
import { ContentEducationService } from '../content-education/content-education.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Student } from '../../models/student/student';
import * as _ from 'lodash';
import { EducationContentRecommandetion, SkillRewards } from './content-grade';
import { StudentService } from '../student/student.service';

const SKILL_WEIGHT = 0.1;

@Injectable()
export class ContentEducationRecommendationService {
    private _student: Student;
    private _contentRec: EducationContentRecommandetion[];
    public starClick = new EventEmitter();
    public searchClick = new EventEmitter();

    constructor(private _contentEducationService: ContentEducationService,
                private _studentService: StudentService) {
        this._contentRec = new Array<EducationContentRecommandetion>();
    }

    public async getContentRecommendations(): Promise<EducationContentRecommandetion[]> {
        this._contentRec = new Array<EducationContentRecommandetion>();
        const contentEducationList = await this._contentEducationService.getContentEducations();
        this._student = this._studentService.getLoggedInStudent();
        this._fillGradesForContentEducations(this._student, contentEducationList);

        return await this._contentRec;
    }

    private _fillGradesForContentEducations(student: Student, contentList: ContentEducation[]) {
        _.forEach(contentList, (content) => {
            let curContentRec = new EducationContentRecommandetion(content, 0, true, [], []);

            _.forEach(content.prerequisites_skills, (contentSkill) => {
                let studentSkill = _.find(this._student.skills, (studentSkill) => studentSkill.skill_id === contentSkill.skill_id);
                let studentSkillLevel = 0;
                if (studentSkill) {
                    studentSkillLevel = studentSkill.level;
                }

                if (studentSkillLevel < contentSkill.min) {
                    curContentRec.isCoverPrerequisites = false;
                    curContentRec.uncoveredPrerequisites.push(contentSkill.skill_id);
                }
                else {
                    const studentLevelToGain = contentSkill.max - studentSkillLevel;
                    if (studentLevelToGain > 0) {
                        let rewardForSkill = studentLevelToGain * SKILL_WEIGHT;
                        curContentRec.skillRewards.push(new SkillRewards(contentSkill.skill_id, rewardForSkill));
                        curContentRec.grade += rewardForSkill;
                    }
                }
            });

            this._contentRec.push(curContentRec);
        });
    }


}
