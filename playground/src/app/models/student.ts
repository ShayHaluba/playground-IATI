import { Preferance } from './preferance';
import { StudentSkills } from './student-skills';

export class Student {
    public age: number;
    public grade: number;
    public name: string;
    public preferances: Preferance[];
    public skills: StudentSkills[];
    public point_of_interest: number[];
}


