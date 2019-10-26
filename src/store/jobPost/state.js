export default {
  token: localStorage.getItem('access_token') || null,
  lastFiveJobPosts: null,
  liveJobPosts: null,
  waitingJobPosts: null,
  expiredJobPosts: null,
  publicJobPosts: null,
  jobPostEmailTemplate: null,
  jobBoardModal: false,
};
