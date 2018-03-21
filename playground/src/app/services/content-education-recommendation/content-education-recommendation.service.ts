import { ContentEducation } from '../../models/content-education/content-education';
import { ContentEducationService } from '../content-education/content-education.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ContentEducationRecommendationService {
    constructor(private contentEducationService: ContentEducationService) {
    }

    public async getRecommendations(): Promise<ContentEducation[]> {
        return await this.contentEducationService.getContentEducations();
    }
}
