import { Mushaf } from '../QuranReader';

import { ReadingDay } from './ReadingDay';
import { ReadingGoalStatus } from './ReadingGoal';

export type StreakWithUserMetadata = {
  streak: number;
  readingGoal?: ReadingGoalStatus;
  readingDays: (Omit<ReadingDay, 'date'> & {
    date: string;
  })[];
};

export type StreakWithMetadataParams = {
  from: string;
  to: string;
  mushafId: Mushaf;
};
