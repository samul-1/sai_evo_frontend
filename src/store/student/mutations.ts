/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { EventParticipation, EventParticipationSlot } from '@/models';

export const mutations = {
  // update the slots of the current event participation
  setEventParticipationSlots: (
    state: any,
    slots: EventParticipationSlot[]
  ) => {
    // TODO check if this correctly triggers reactivity
    state.currentEventParticipation.slots = slots;
  },
  setEventParticipations: (
    state: any,
    participations: EventParticipation[]
  ) => (state.eventParticipations = participations),
  setEvent: (state: any, event: Event) => (state.event = event),
};
