const form = document.querySelector('#job-search-form');
const jobList = document.querySelector('#job-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedOption = form.elements['job-category'].value;

  const jobs = jobList.querySelectorAll('li');
  jobs.forEach((job) => {
    job.style.display = 'none';
  });

  const filteredJobs = jobList.querySelectorAll(`li.${selectedOption}`);
  filteredJobs.forEach((job) => {
    job.style.display = 'block';
  });
});