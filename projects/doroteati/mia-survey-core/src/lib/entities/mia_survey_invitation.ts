import { MiaModel } from "@dorotea/mia-core";

export class MiaSurveyInvitation extends MiaModel {
    id: number = 0;
    survey_id: number = 0;
    user_id: number = 0;
    email: string = '';
    caption: string = '';
    created_at: string = '';
    updated_at: string = '';
    token: string = '';
    limit: number = 0;
}
