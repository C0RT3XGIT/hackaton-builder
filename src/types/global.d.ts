declare global {
  interface Window {
    editor: any;
  }
}
export interface ITemplateData {
  eventName: string;
  eventDescription: string;
  uspTitle1: string;
  uspDescription1: string;
  uspTitle2: string;
  uspDescription2: string;
  targetAudience: string;
}
