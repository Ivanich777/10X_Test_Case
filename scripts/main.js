import { initSearch } from './modules/search.js';
import { initFilters } from './modules/filters.js';
import { renderCourses } from './modules/render.js';

const coursesData = [];

document.addEventListener('DOMContentLoaded', () => {
  initSearch(coursesData);
  initFilters(coursesData);
  renderCourses(coursesData);
});

