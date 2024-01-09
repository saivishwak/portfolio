import type { DateRange, Photo, LabelledValue, LinkButton, Section, TagsList, IconName } from '../shared';

interface Screenshot {
  /**
   * [WEB] Source of the screenshot.
   */
  src: Photo;

  /**
   * [WEB] Alt text for the screenshot.
   */
  alt: string;
}

export interface Award {
  /**
   * Name of the project.
   */
  name: string;

  company: string;

  /**
   * Date range when you were working on the project.
   */
  date: Date;

  /**
   * A short overview of the project. You can use markdown syntax.
   */
  description?: string;
}

export interface AwardsSection extends Section {
  /**
   * List of your projects in a chronological order. Start with the most recent one.
   */
  awards: Award[];

  config: Section['config'] & {
    /**
     * [WEB] Configuration of the button that displays project's screenshots.
     */
    screenshots?: {
      /**
       * [WEB] Icon displayed within the button.
       */
      icon?: IconName;

      /**
       * [WEB] Title displayed when hovering the button.
       */
      title?: string;
    };
  };
}
