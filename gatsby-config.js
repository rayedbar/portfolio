module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://gatsby-starter-clean-resume.netlify.com/`,
    name: `Rayed Bin Wahed`,
    role: `Software Engineer`,
    email: `rayed.bin.wahed@g.bracu.ac.bd`,
    phone: `+880 1774-882517`,
    socialMedia: [
      {
        name: "github",
        link: "https://github.com/rayedbar",
      },
      { name: "linkedin", link: "https://linkedin.com/in/rayedbw/" },
      // { name: "facebook", link: "https://facebook.com" },
      { name: "twitter", link: "https://twitter.com/rayedbw" },
      // { name: "instagram", link: "https://instagram.com" },
    ],
    about: `<p>Having used Machine Learning in conjunction with IoT devices to improve the lives of Intellectually and Developmentally Disabled (IDD) individuals, I  experienced first-hand the wonders of modern Artificial Intelligence. My team and I developed systems to track blood oxygen saturation, detect accidental falls, and monitor sleep. These measurements gave us tremendous insight into the Quality of Life of IDD individuals allowing us to provide proactive care. Additionally, I used Machine Learning to drive new business opportunities and acquire better insight into customer behaviour.</p>
            <p>My primary research interests are:</p>
            <ul>
              <li>Deep Learning</li>
              <li>Reinforcement Learning</li>
              <li>Computer Vision</li>
            </ul>`,
    projects: [
      {
        title: "Face Recognition",
        when: "2019",
        company: "Therap (BD) Ltd.",
        where: "Dhaka, Bangladesh",
        moreInfo: `<p>Recognize known faces video. See a demonstration 
        <a href="https://drive.google.com/file/d/19qYo28wIxOvuBK_8A7esPuHISOZmUmjH/view?usp=sharing" target="_blank">Here</a>.
        </p>`,
        videoSrcUrl:
          "https://drive.google.com/file/d/19qYo28wIxOvuBK_8A7esPuHISOZmUmjH/view?usp=sharing",
        videoTitle: "Face Recognition",
      },
      {
        title: "Pulse Oximetry",
        when: "2019",
        company: "Therap (BD) Ltd.",
        where: "Dhaka, Bangladesh",
        moreInfo: `<p>Progressive Web App to track individual pulse oximetry. See demonstration 
        <a href="https://drive.google.com/file/d/1r7zyy5o-K4HcayGznVe2gKz3tkBTs9vL/view?usp=sharing" target="_blank">Here</a>.
        </p>`,
      },
    ],
    education: [
      // {
      //   degree: "Ph.D.",
      //   major: "Computer Science",
      //   when: "2014-2018",
      //   school: "Harvard University",
      //   where: "Cambridge, MA",
      //   moreInfo: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      //   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      //   See my thesis <a href="#">here</a>.</p>`,
      // },
      // {
      //   degree: "M.Sc.",
      //   major: "Software Engineering",
      //   when: "2012-2014",
      //   school: "Stanford University",
      //   where: "Stanford, CA",
      //   moreInfo: `"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
      //   totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."`,
      // },
      {
        degree: "B.Sc.",
        major: "Computer Science",
        when: "2012-2016",
        school: "BRAC University",
        where: "Dhaka, Bangladesh",
        moreInfo: `<ul>
          <li>Final year CGPA: 3.89/4.00; Overall CGPA: 3.75/4.00</li>
          <li>Awarded High Distinction</li>
          <li>Merit-Based Scholarship</li>
          <li>Data Structures and Discrete Mathematics Teaching Assistant</li>
        </ul>`,
      },
      {
        degree: "General Certificate of Secondary Education (GCSE)",
        when: "2009-2011",
        school: "The Aga Khan School",
        where: "Dhaka, Bangladesh",
        moreInfo: `<ul>
          <li>A-Level: 3A, 1B</li>
          <li>O-Level: 8A</li>
          <li>Business Club Prefect</li>
          <li>School Debate, Football, and Cricket teams</li>
        </ul>`,
      },
    ],
    experience: [
      {
        role: "Team Lead, Machine Learning",
        when: "2018-Present",
        company: "Therap (BD) Ltd.",
        where: "Dhaka, Bangladesh",
        moreInfo: `<ul>
          <li><strong>Pulse Oximetry</strong>: Implemented a Progressive Web App 
          (PWA) using AWS Amplify, React, and GraphQL to track blood oxygen saturation (SpO2) 
          and heart rate of IDD individuals as an early detection mechanism for COVID-19.
          </li> 
        </ul>`,
      },
      {
        role: "Web Developer",
        when: "2010-2014",
        company: "Amazon",
        where: "Vancouver, BC",
        moreInfo: `See my <a href="#" target="_blank" rel="noopener noreferrer">work</a>.`,
      },
    ],
    skills: [
      {
        name: "Python",
        level: "90",
        experience: "4 years",
      },
      {
        name: "TensorFlow and PyTorch",
        level: "85",
        experience: "3 years",
      },
      {
        name: "Data Visualization and Wrangling",
        level: "80",
        experience: "3 years",
      },
      {
        name: "Java",
        level: "70",
        experience: "5 years",
      },
      {
        name: "JavaScript",
        level: "85",
        experience: "4 years",
      },
      {
        name: "React",
        level: "75",
        experience: "1 years",
      },
      {
        name: "GraphQL",
        level: "60",
        experience: "1 years",
      },
      {
        name: "SQL",
        level: "80",
        experience: "3 years",
      },
      {
        name: "Linux",
        level: "75",
        experience: "8 years",
      },
    ],
    interests: [
      "Reading",
      "Programming",
      "Playing the violin",
      "Running",
      "Watching Monty Python and the Holy Grail",
    ],
    //available_themes: ["great-gatsby", "master-yoda", "wonder-woman", "darth-vader", "luke-lightsaber"],
    theme: "great-gatsby",
    //fonts. Available: [default, programmer]
    font: "default",
  },
  plugins: [
    // Make sure this plugin is first in the array of plugins
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-186456215-1",
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`IBM Plex Mono`],
      },
    },
  ],
}
