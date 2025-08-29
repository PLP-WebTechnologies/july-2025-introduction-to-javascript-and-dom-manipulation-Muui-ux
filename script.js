// Mental Health Awareness site //

const conditions = ["Depression", "Anxiety", "Bipolar Disorder", "PTSD", "OCD"];
const showConditionsBtn = document.getElementById('showConditionsBtn');
const conditionsList = document.getElementById('conditionsList');

showConditionsBtn.addEventListener('click', () => {
  conditionsList.innerHTML = ""; // clear previous
  conditions.forEach(condition => {
    const li = document.createElement('li');
    li.textContent = condition;
    conditionsList.appendChild(li);
  });
});

// Personalized Advice //

function getAdvice(feeling) {
  feeling = feeling.toLowerCase();
  if(feeling.includes("sad") || feeling.includes("depressed")) {
    return "Try talking to a friend or a counselor. Small steps can make a difference.";
  } else if(feeling.includes("anxious") || feeling.includes("nervous")) {
    return "Practice deep breathing and mindfulness exercises.";
  } else if(feeling.includes("happy") || feeling.includes("good")) {
    return "That's great! Keep nurturing your positive mindset.";
  } else {
    return "Remember, it's okay to have all kinds of feelings. Take care of yourself.";
  }
}

const adviceBtn = document.getElementById('adviceBtn');
const feelingInput = document.getElementById('feelingInput');
const adviceResult = document.getElementById('adviceResult');

adviceBtn.addEventListener('click', () => {
  const feeling = feelingInput.value.trim();
  adviceResult.textContent = getAdvice(feeling);
});

// Who's at Risk & Tips // 

const riskGroups = ["Teenagers", "Young Adults", "Healthcare Workers", "Those with Family History"];
const tips = ["Exercise regularly", "Maintain a healthy sleep routine", "Talk about your feelings", "Limit social media overload", "Practice mindfulness"];

const showRiskBtn = document.getElementById('showRiskBtn');
const riskList = document.getElementById('riskList');

showRiskBtn.addEventListener('click', () => {
  riskList.innerHTML = "";
  for(let i=0; i<riskGroups.length; i++) {
    const li = document.createElement('li');
    li.textContent = riskGroups[i];
    riskList.appendChild(li);
  }
});

const showTipsBtn = document.getElementById('showTipsBtn');
const tipsList = document.getElementById('tipsList');

showTipsBtn.addEventListener('click', () => {
  tipsList.innerHTML = "";
  tips.forEach(tip => {
    const li = document.createElement('li');
    li.textContent = tip;
    tipsList.appendChild(li);
  });
});

// Contact & Comfort Box // 

const contacts = [
  { name: "Mental Health Helpline", phone: "123-456-7890" },
  { name: "Counseling Center", phone: "987-654-3210" },
  { name: "Online Support Chat", phone: "Visit website" }
];

const showContactsBtn = document.getElementById('showContactsBtn');
const contactsList = document.getElementById('contactsList');

showContactsBtn.addEventListener('click', () => {
  contactsList.innerHTML = "";
  contacts.forEach(contact => {
    const li = document.createElement('li');
    li.textContent = `${contact.name} - ${contact.phone}`;
    contactsList.appendChild(li);
  });
});

// Comfort Box
const toggleBoxBtn = document.getElementById('toggleBoxBtn');
const comfortBox = document.getElementById('comfortBox');

toggleBoxBtn.addEventListener('click', () => {
  comfortBox.style.backgroundColor = comfortBox.style.backgroundColor === "lightblue" ? "#ffd6d6" : "lightblue";
});
