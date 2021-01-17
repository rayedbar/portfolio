module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://rayedbinwahed.netlify.app`,
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
      { name: "twitter", link: "https://twitter.com/rayedbw" },
    ],
    about: `<p>
              Having used Machine Learning in conjunction with IoT devices to 
              improve the lives of Intellectually and Developmentally Disabled (IDD) individuals, 
              I  experienced first-hand the wonders of modern Artificial Intelligence. 
              My team and I developed systems to 
              <strong>recognize faces in video</strong>, 
              <strong>track blood oxygen saturation</strong>, 
              <strong>detect accidental falls</strong>, and 
              <strong>monitor sleep</strong>. 
              These measurements gave us tremendous insight into the 
              Quality of Life of our end customers allowing us to provide proactive care. 
              Additionally, I used Machine Learning to drive <strong>new business initiatives</strong> 
              and acquire better insight into <strong>customer behaviour</strong>.
            </p>
            <p>
              I am primarily interested in the <strong>interaction between intelligent agents and their environment</strong>. 
              How can this interaction lead to better behaviour, improved perception, and more robust models of the world? 
              What are the computational tradeoffs in doing this effectively and in real-time?
              I think these are intriguing questions and ones that will allow us to understand
              <strong>what it means to learn, to think, to act, and to be intelligent</strong>.
            </p>
            <p>Consequently, I am interested in:</p>
            <ul>
              <li>Machine Learning</li>
              <li>Deep Reinforcement Learning and Robotics</li>
              <li>Computer Vision and Visual Perception</li>
              <li>Computational Neuroscience</li>
            </ul>
            `,
    projects: [
      {
        title: "Protected Face Recognition from Video",
        when: "2020",
        company: "Therap (BD) Ltd.",
        where: "Dhaka, Bangladesh",
        moreInfo: `
        <ul>
          <li>Detect all faces in a video.</li>
          <li>Recognize faces of individuals whose identity needs to be protected and blur them.</li>
        </ul>
        <p>
          <a href="https://github.com/rayedbar/face-recognition" target="_blank" rel="noopener noreferrer">Code</a> | 
          <a href="https://drive.google.com/file/d/1ZvdSyrSRgqwJCGB7Ks4sZKm9anzHHo97/view?usp=sharing" target="_blank" rel="noopener noreferrer">Paper</a> |
          <a href="https://drive.google.com/file/d/1Zjq13fnfwNCF3zA2BdlMkZLR-9zuVgLd/view?usp=sharing" target="_blank" rel="noopener noreferrer">Video Demonstration</a>
        </p>
        `,
      },
      {
        title: "Pulse Oximetry Tracking Website",
        when: "2020",
        company: "Therap (BD) Ltd.",
        where: "Dhaka, Bangladesh",
        moreInfo: `
        <ul>
          <li>Progressive Web App to track SpO2 and heart-rate.</li>
          <li>Add alert recipients and customize thresholds.</li>
          <li>Send real-time SMS and Email notifications.</li>
        </ul>
        <p>
          <a href="https://test.hsbtbio.com/" target="_blank" rel="noopener noreferrer">Live Site</a> | 
          <a href="https://drive.google.com/file/d/1r7zyy5o-K4HcayGznVe2gKz3tkBTs9vL/view?usp=sharing" target="_blank" rel="noopener noreferrer">Video Demonstration</a>
        </p>
        `,
      },
      {
        title: "Accidental Fall Detection",
        when: "2020",
        company: "Therap (BD) Ltd.",
        where: "Dhaka, Bangladesh",
        moreInfo: `
        <ul>
          <li>Detect accidental fall from smartwatch gyroscope and accelerometer sensor data.</li>
          <li>Detect Activities of Daily Living (sitting, walking, standing, etc.).</li>
        </ul>
        <p>
          <a href="https://drive.google.com/file/d/1sNoZhevF-ptmp_8GWK0h8wqiQ1DxK06i/view?usp=sharing" target="_blank" rel="noopener noreferrer">Paper</a>
        </p>
        `,
      },
    ],
    education: [
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
        degree: "Nanodegree",
        major: "Machine Learning",
        when: "2019-2020",
        school: "Udacity",
        where: "Dhaka, Bangladesh",
        moreInfo: `
        <ul>
          <li>Human Activity Recognition (HAR) LSTM Deep Learning model. 
          Final project involving extensive data preprocessing, training, hyperparameter tuning, and deployment for real-time inference.
            <a href="https://github.com/rayedbar/human-activity-recognition-smartwartch" target="_blank" rel="noopener noreferrer">Code.</a>
          </li>
          <li>Text plagiarism detector.
            <a href="https://github.com/rayedbar/plagiarism_detection" target="_blank" rel="noopener noreferrer">Code.</a>
          </li>
          <li>IMDB sentiment analysis web app powered by Amazon SageMaker, API Gateway, and Lambda.
            <a href="https://github.com/rayedbar/imdb-sentiment-analysis-sagemaker-app" target="_blank" rel="noopener noreferrer">Code.</a>
          </li>
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
