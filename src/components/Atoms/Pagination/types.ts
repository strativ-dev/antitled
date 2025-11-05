import { PaginationProps as AntdPaginationProps } from 'antd';

export type PaginationVariant = 'minimal' | 'button-group';
export type PaginationSize = 'sm' | 'md';
export type ButtonType = 'rounded' | 'square';
export type NextPrevType = 'bordered' | 'minimal';

export type PaginationProps = Omit<AntdPaginationProps, 'size'> & {
  /**
   * Pagination style variant
   * @default 'button-group'
   * - `minimal`: Transparent background with subtle borders
   * - `button-group`: Grouped buttons with borders
   */
  variant?: PaginationVariant;
  /**
   * Size of pagination items
   * @default 'md'
   * - `sm`: 2.25rem height
   * - `md`: 2.5rem height
   */
  size?: PaginationSize;
  /**
   * Hide the "Previous" and "Next" text, showing only arrow icons
   * @default false
   */
  hideNextPrevText?: boolean;
  /**
   * Separate the next/prev buttons from the page numbers
   * @default false
   */
  separatedNextPrev?: boolean;
  /**
   * Shape style of pagination buttons
   * @default 'square'
   * - `square`: Square corners with border-radius
   * - `rounded`: Fully rounded pill shape
   */
  buttonType?: ButtonType;
  /**
   * Style variant for next/prev navigation buttons
   * @default 'minimal'
   * - `bordered`: Buttons with visible borders
   * - `minimal`: Buttons without borders
   * @note Automatically set to 'bordered' when variant is 'button-group'
   */
  nextPrevType?: NextPrevType;
  /**
   * Custom text for the next button
   * @default 'Next'
   */
  nextButtonText?: string;
  /**
   * Custom text for the previous button
   * @default 'Previous'
   */
  prevButtonText?: string;
};

export interface NavButtonProps {
  variant: PaginationVariant;
  size: PaginationSize;
  nextPrevType: NextPrevType;
  hideNextPrevText: boolean;
  buttonText: string;
}
