import { SearchFilter } from '@/api/interfaces';
import {
  Course,
  EventParticipation,
  Exercise,
  Tag,
  Event,
  User,
} from '@/models';

export interface StudentState {
  currentEventParticipation: EventParticipation | null;
  eventParticipations: EventParticipation[];
  editingEvent: Event | null;
}
export interface TeacherState {
  exercises: Exercise[];
  events: Event[];
  eventParticipations: EventParticipation[];
  currentExercisePage: number;
  users: User[];
}
export interface SharedState {
  user: User;
  courses: Course[];
  token: string;
  refreshToken: string;
  loading: boolean;
  saving: boolean;
  savingError: boolean;
  showSuccessFeedback: boolean;
  tags: Tag[];
}

interface StoreOperationParameters<T> {
  courseId: string;
  eventId: string;
  exerciseId: string;
  ruleId: string;
  slotId: string;
  templateId: string;
  filters: SearchFilter;
  children: 'choices' | 'sub_exercises' | 'testcases';
  fromFirstPage: boolean;
  participationIds: string[];
  participationId: string;
  //payload: T;
  changes: Partial<T>;
  mutate: boolean;
  reFetch: boolean;
}

export type ActionPayload<T> = Partial<
  StoreOperationParameters<T>
> & { payload: T };

export type MutationPayload<T> = Partial<
  StoreOperationParameters<T>
> & { payload: T };
