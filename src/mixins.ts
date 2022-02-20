/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { mapState } from 'vuex';
import { getTranslatedString as _ } from './i18n';
import { Course, CoursePrivilege } from './models';
import router from './router';
import store from './store/index';
import { SharedState } from './store/types';
import { getErrorData, setPageWideError } from './utils';
export const courseIdMixin = {
  computed: {
    courseId(): string {
      return router.currentRoute.value.params.courseId as string;
    },
  },
};

export const eventIdMixin = {
  computed: {
    eventId(): string {
      return router.currentRoute.value.params.examId as string;
    },
  },
};

export const loadingMixin = {
  methods: {
    async withLoading(
      callback: () => unknown,
      onError?: (e?: unknown) => unknown
    ) {
      const sharedState = (store.state as { shared: SharedState })
        .shared;

      sharedState.loading = true;
      try {
        await callback();
      } catch (e) {
        onError?.(e);
      } finally {
        sharedState.loading = false;
      }
    },
    async withFirstLoading(
      callback: () => unknown,
      onError = setPageWideError
    ) {
      const sharedState = (store.state as { shared: SharedState })
        .shared;

      sharedState.firstLoading = true;
      try {
        await callback();
      } catch (e: any) {
        onError?.(e);
      } finally {
        sharedState.firstLoading = false;
      }
    },
    async withLocalLoading(callback: () => unknown) {
      const sharedState = (store.state as { shared: SharedState })
        .shared;

      sharedState.localLoading = true;
      try {
        await callback();
      } catch (e: any) {
        store.commit('shared/setErrorNotificationData', {
          data: getErrorData(e),
        });
      } finally {
        sharedState.localLoading = false;
      }
    },
    setPageWideError,
  },
  computed: {
    ...mapState('shared', ['firstLoading', 'localLoading']),
  },
};

export const savingMixin = {
  watch: {
    saving(newVal: boolean) {
      (store.state as any).shared.saving = newVal;
    },
    savingError(newVal: boolean) {
      (store.state as any).savingError = newVal;
    },
  },
};

export const coursePrivilegeMixin = {
  methods: {
    hasPrivileges(requiredPrivilegesList: CoursePrivilege[]) {
      /**
       * Given a list of required privileges, returns true iff the current
       * user has such privileges for the current course
       */
      const myPrivileges =
        (store.state as any).shared.courses.find(
          (c: Course) =>
            c.id ==
            (router.currentRoute.value.params.courseId as string)
        )?.privileges ?? [];

      return requiredPrivilegesList.every((p) =>
        myPrivileges.includes(p)
      );
    },
  },
};
