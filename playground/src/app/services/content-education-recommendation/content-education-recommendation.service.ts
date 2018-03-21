import { ContentEducation } from '../../models/content-education/content-education';
import { ContentEducationService } from '../content-education/content-education.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ContentEducationRecommendationService {
    constructor(private _contentEducationService: ContentEducationService) {
    }

    public async getContentRecommendations(): Promise<ContentEducation[]> {
        return await this._contentEducationService.getContentEducations();
    }
}
