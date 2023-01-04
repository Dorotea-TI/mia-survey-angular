import { MiaModel } from "@dorotea/mia-core";

export class MiaSurveyQuestion extends MiaModel {
    id: number = 0;
    survey_id: number = 0;
    title: string = '';
    caption: string = '';
    type: number = 0;
    val: any;
    data: any;
    ord: number = 0;

    static cloneObj(question: MiaSurveyQuestion): MiaSurveyQuestion {
        let newItem = new MiaSurveyQuestion();
        newItem.survey_id = question.survey_id;
        newItem.title = question.title;
        newItem.caption = question.caption;
        newItem.type = question.type;
        newItem.val = question.val;
        newItem.data = JSON.parse(JSON.stringify(question.data));
        return newItem;
      }

      static getSubtypes(): any[] {
        return [
            { id: 0, title: 'Boolean',  },
            { id: 1, title: 'Short answer',  },
            { id: 2, title: 'Paragraph',  },
            { id: 3, title: 'Linear Scale',  },
            { id: 4, title: 'Selector',  },
        ];
      }
}
