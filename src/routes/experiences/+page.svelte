<script lang="ts">
  import Education from './Education.svelte';
import Experience from './Experience.svelte';
</script>

<section class="layout-md py-8">
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

<section class="layout-md py-8">
  <h2 class="heading2">Education</h2>

  <Education 
    school="Texas A&M University"
    subtitle="B.S. in Computer Science and minor in Economics"
    dates="August 2020 - May 2023"
    location="College Station, TX"
  >
    <li>GPA: 4.0/4.0, Summa Cum Laude</li>
    <li>Organizations: Aggie Competitive Programming Club, Aggie Coding Club, TAMU Blockchain Club</li>
    <li>Relevant Coursework</li>
    <ul class="list-disc pl-7 marker:text-neutral-400 space-y-1">
      <li>Machine Learning (Graduate)</li>
      <li>Competitive Programming (TA)</li>
      <li>Networking</li>
      <li>Blockchains</li>
      <li>Computer Systems</li>
      <li>Database System</li>
      <li>Artificial Intelligence</li>
      <li>Programming Languages</li>
      <li>Data Structures & Algorithms</li>
      <li>Analysis of Algorithms</li>
      <li>Multivariable Calculus</li>
      <li>Linear Algebra</li>
      <li>Probability & Statistics</li>
      <li>Financial Markets</li>
      <li>Money & Banking</li>
    </ul>
  </Education>

  <Education 
    school="Plano West Senior High and Jasper"
    subtitle="Student"
    dates="August 2016 - May 2020"
    location="Plano, TX"
  >
    <li>GPA: 4.32, Summa Cum Laude</li>
    <li>AP Scholar with Distinction</li>
    <li>Organizations: Computer Science Club, Artificial Intelligence Club, Robotics Club</li>
    <li>Led teams to win at multiple programming competitions including Lockheed Martin CodeQuest</li>
    <li>Lectured on advanced algorithms and data-structures that appear frequently in programming contests</li>
    <li>Planned and judged a regional programming contest with 150+ participants</li>
  </Education>
</section>

<section class="layout-md py-8">
  <h2 class="heading2">Awards</h2>
  <ul class="list-disc pl-7 marker:text-neutral-400 space-y-1">
    <li>Facebook Hackerrcup Round 2 Qualifier, Top 8% (2021, 2022)</li>
    <li>12th/52 ICPC Bronze Medal South Central USA (2022)</li>
    <li>8th/80 TAMU Fall Programming Contest, 2nd in freshmen group (2020)</li>
    <li>2nd Place CodeQuest Lockheed Martin Fort Worth (2019)</li>
    <li>2nd Place UTD Battle of the Brains (Spring 2019)</li>
    <li>1st Place Frozen Eagle Programming Competition (2019)</li>
  </ul>
</section>