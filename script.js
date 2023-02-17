// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('#overlay');
const closeButton = document.querySelector('#close-button');

hamburger.addEventListener('click', () => {
  overlay.classList.add('show');
});

closeButton.addEventListener('click', () => {
  overlay.classList.remove('show');
});

document.querySelectorAll('#light-head').forEach((link) => link.addEventListener('click', () => {
  overlay.classList.remove('show');
}));

// Speakers Data
const speakersData = [
  {
    name: 'Dr. Wei Zhang',
    title: 'Professor of Robotics and Control Engineering at Tsinghua University, Beijing, China',
    minus: '',
    image: 'images/wei_zhang.jpg',
    bio: 'Specializes in the development of intelligent robots for manufacturing and healthcare',
  },
  {
    name: 'Dr. John Kim',
    title: 'Chief Scientist at a robotics research institute',
    minus: '',
    image: 'images/john_kim.jpeg',
    bio: 'Develops advanced robotic control systems and human-robot interaction technologies',
  },
  {
    name: 'Professor Anna Wang',
    title: 'Professor of Mechanical Engineering at Stanford University',
    minus: '',
    image: 'images/anna_wang.jpg',
    bio: 'Her research focuses on the design and control of soft robots for applications in healthcare and biomedical engineering',
  },
  {
    name: 'Dr. Ahmed Hassan',
    title: "Associate Professor of Robotics and Artificial Intelligence at King's College London",
    minus: '',
    image: 'images/ahmed_hassan.jpg',
    bio: 'Develops autonomous systems for use in smart cities and transportation',
  },
  {
    name: 'Mark Johnson',
    title: "Head of Robotics at NASA's Jet Propulsion Laboratory",
    minus: '',
    image: 'images/mark_johnson.jpg',
    bio: 'Leads a team of researchers in the development of advanced robotic systems for space exploration, including the Mars rovers',
  },
  {
    name: 'Dr. Monica Patel',
    title: 'Chief Technology Officer at US Robotics',
    minus: '',
    image: 'images/monica_patel.jpeg',
    bio: 'She leads the development of robotic systems that assist with medical procedures, patient care, and medical research',
  }];

// Function to populate Featured Speakers section
function populateFeaturedSpeakers() {
  // Get featured speakers section element
  const featuredSpeakersSection = document.querySelector('#featured-speakers');

  // Loop through speakers data and create speaker cards
  for (let i = 0; i < speakersData.length; i += 1) {
    // Create speaker card div element
    const speakerCard = document.createElement('div');
    speakerCard.classList.add('speaker-card');

    // Create speaker image div element
    const speakerImageDiv = document.createElement('div');
    speakerImageDiv.classList.add('speaker-image');

    // Create speaker image element and set image source
    const speakerImage = document.createElement('img');
    speakerImage.src = speakersData[i].image;

    // Append speaker image to speaker image div
    speakerImageDiv.appendChild(speakerImage);

    // Create speaker info div element
    const speakerInfoDiv = document.createElement('div');
    speakerInfoDiv.classList.add('speaker-info');

    // Create speaker name element and set name text
    const speakerName = document.createElement('h3');
    speakerName.innerText = speakersData[i].name;

    // Create speaker title element and set title text
    const speakerTitle = document.createElement('h4');
    speakerTitle.innerText = speakersData[i].title;

    // Create speaker card minus
    const speakerMinus = document.createElement('div');
    speakerMinus.innerText = speakersData[i].minus;

    // Create speaker bio element and set bio text
    const speakerBio = document.createElement('p');
    speakerBio.innerText = speakersData[i].bio;

    // Append speaker name, title, and bio to speaker info div
    speakerInfoDiv.appendChild(speakerName);
    speakerInfoDiv.appendChild(speakerTitle);
    speakerInfoDiv.appendChild(speakerMinus);
    speakerInfoDiv.appendChild(speakerBio);

    // Append speaker image and info to speaker card
    speakerCard.appendChild(speakerImageDiv);
    speakerCard.appendChild(speakerInfoDiv);

    // Append speaker card to featured speakers section
    featuredSpeakersSection.appendChild(speakerCard);
  }
}

// Call function to populate Featured Speakers section
populateFeaturedSpeakers();
