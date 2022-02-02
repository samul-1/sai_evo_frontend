import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router';
import MainTeacher from '../views/teacher/MainTeacher.vue';
import MainStudent from '../views/student/MainStudent.vue';
import CourseList from '../views/shared/CourseList.vue';
import CourseDashboard from '../views/teacher/CourseDashboard.vue';
import CourseExercises from '../views/teacher/CourseExercises.vue';
import CourseExams from '../views/teacher/CourseExams.vue';
import EventEditor from '../components/teacher/EventEditor/EventEditor.vue';
import EventParticipationPage from '../views/student/EventParticipationPage.vue';
import EventParticipationsMonitor from '../views/teacher/EventParticipationsMonitor.vue';
import Login from '../views/Login.vue';
import {
  courseDashboardSidebarOptions,
  courseListSidebarOptions,
} from '@/navigation/sidebar';
import { getTranslatedString as _ } from '@/i18n';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/teacher',
    name: 'MainTeacher',
    component: MainTeacher,
    redirect: { name: 'TeacherCourseList' },
    meta: {
      // TODO permissions
    },
    children: [
      {
        path: 'courses',
        name: 'TeacherCourseList',
        component: CourseList,
        meta: {
          routeTitle: _('headings.course_list'),
          sidebarOptions: courseListSidebarOptions,
        },
      },
      {
        path: 'courses/:courseId',
        name: 'CourseDashboard',
        component: CourseDashboard,
        meta: {
          routeTitle: _('headings.course_title'),
          sidebarOptions: courseDashboardSidebarOptions,
        },
      },
      {
        path: 'courses/:courseId/exercises',
        name: 'CourseExercises',
        component: CourseExercises,
        meta: {
          routeTitle: _('headings.course_exercises'),
          sidebarOptions: courseDashboardSidebarOptions,
        },
      },
      {
        path: 'courses/:courseId/exams',
        name: 'CourseExams',
        component: CourseExams,
        meta: {
          routeTitle: _('headings.course_exams'),
          sidebarOptions: courseDashboardSidebarOptions,
        },
      },
      {
        path: 'courses/:courseId/exams/:examId',
        component: EventEditor,
        name: 'ExamEditor',
        meta: {
          sidebarOptions: courseDashboardSidebarOptions,
        },
      },
      {
        path: 'courses/:courseId/exams/:examId/progress',
        component: EventParticipationsMonitor,
        name: 'ExamProgress',
        meta: {
          sidebarOptions: courseDashboardSidebarOptions,
          routeTitle: _('headings.exam_progress'),
        },
      },
      {
        path: 'courses/:courseId/exams/:examId/results',
        component: EventParticipationsMonitor,
        name: 'ExamResults',
        props: {
          refreshData: false,
          allowEdit: true,
        },
        meta: {
          sidebarOptions: courseDashboardSidebarOptions,
          routeTitle: _('headings.exam_results'),
        },
      },
    ],
  },
  {
    path: '/student',
    name: 'MainStudent',
    component: MainStudent,
    redirect: { name: 'StudentCourseList' },
    meta: {
      // TODO permissions
    },
    children: [
      {
        path: 'courses',
        name: 'StudentCourseList',
        component: CourseList,
        meta: {
          routeTitle: _('headings.course_list'),
        },
      },
      {
        path: 'courses/:courseId/exams/:examId',
        component: EventParticipationPage,
        name: 'ExamParticipationPage',
        meta: {
          routeTitle: _('headings.ongoing_exam'),
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
