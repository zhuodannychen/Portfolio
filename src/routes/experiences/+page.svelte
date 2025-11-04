<script lang="ts">
  import Experience from './Experience.svelte';
</script>

<section class="layout-md py-12">
  <h2 class="heading2">Work Experience</h2>

  <Experience 
    title='Software Engineer'
    company='Meta'
    url="https://meta.com"
    dates="March 2024 - Current"
    location="Menlo Park, CA"
  >
    <li>
      Product Development
    </li>
  </Experience>

  <Experience 
    title='Software Engineer Intern'
    company='Capital One'
    url="https://capitalone.com"
    dates="June 2023 - August 2023"
    location="San Francisco, CA"
  >
    <li>
      Implemented REST API endpoints for a system designed to uniquely identify web devices, prioritizing user privacy by eliminating reliance on device fingerprinting
    </li>
    <li>
      Wrote automated tests; built Jenkins jobs to create AWS infra and deploy service in a coded manner
    </li>
  </Experience>

  <Experience 
    title='Teaching Assistant'
    company='Texas A&M University'
    url=""
    dates="January 2023 - May 2023"
    location="College Station, TX"
  >
    <li>
      Supported 90+ students as a TA for a competitive programming class taught under Dr. John Keyser
    </li>
    <li>
      Held weekly office hours, debugging sessions, and led discussions; received all positive feedback from student evaluations and quoted as the GOAT TA
    </li>
  </Experience>

  <Experience 
    title='Software Engineer Intern'
    company='Capital One'
    url="https://capitalone.com"
    dates="June 2022 - August 2022"
    location="Plano, TX"
  >
    <li>
      Developed machine learning algorithms such as decision trees to identify hot leads out of 150K+ leads generated monthly
    </li>
    <li>
      Performed feature extraction using information gain and tuned model with cross validation, with 80% accuracy
    </li>
    <li>
      Architected serverless backend and created REST API endpoints
    </li>
  </Experience>
</section>
