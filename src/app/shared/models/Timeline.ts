interface BaseTimelineItem {
  startDate: Date;
  endDate?: Date;
  includeToggleBtn?: boolean;
}
export interface TimelineMilestone extends BaseTimelineItem {
  milestone: string;
}

export interface TimelineDateRange extends BaseTimelineItem {
  title: string;
  description: string;
}

export type TimelineItem = TimelineDateRange | TimelineMilestone;
