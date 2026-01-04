const pages = {
    home: {
      title: "Welcome to My Home Page",
      content: "This is the home page, JavaScript."
    },
    service: {
      title: "Welcome To Our Services",
      content: "We offer web design, JavaScript basics, and practice projects."
    },
    about: {
      title: "About Me",
      content: "I'm student in jamhuria university."
    },
    sources: {
      title: "Sources - Code Chapters",
      content: "sources"
    },
    contact: {
      title: "Contact Me",
      content: "contact"
    }
  };
  
  // Chapter code samples
  const chapterCodes = {
    chapter7: `//normal object
  let person = {
      name: "Hamda",
      age: 20,
      city: "mogadhishu",
  };
  /console.log(person.name + " is " + person.age + " years old," + "and she life in " + person.city);/
  console.log(person.name);//by DOT notation
  console.log(person.age);//by DOT notation
  console.log(person.city);//by DOT notation
  
  //object by literal notation
  let student = {
      name: "ubax",
      age: 19,
      major: "networking",
  };
  console.log(student["name"]);// by BRACKET notation
  console.log(student["age"]);// by BRACKET notation
  console.log(student["major"]);// by BRACKET notation
  
  //object by constructor function
  function students(name, age, major){
      this.name = name;
      this.age = age;
      this.major = major;
  }
  
  let student1 = new students("hodan", 21, "IT");
  let student2 = new students("asmaa", 20, "coputer application");
  
  console.log(student1);
  console.log(student2);
  
  //assignment object by constructor function with loop
  let cars = [
      { name: "BMW", model: "C33", year: 2022 },
      { name: "Toyota", model: "Corolla", year: 2020 },
      { name: "Honda", model: "Civic", year: 2021 },
      { name: "Mercedes", model: "E300", year: 2023 }
  ];
  
  for (let i = 0; i < cars.length; i++) {
      console.log(cars[i].name);
      console.log(cars[i].model);
      console.log(cars[i].year);
  }
  
  
  //modify object property
  let Student = {
      name: "ubax",
      age: 19,
      major: "networking",
  };
  Student.age = 21;
  Student["name"] = "rukia";
  console.log(Student);
  
  
  //add new property
  let STudent = {
      name: "saairiin",
      age: 19,
      major: "networking",
  };
  STudent.nationality = "somalia";
  STudent["phoneNumber"] = "611189841";
  console.log(STudent);
  
  //methods of object
  let car = {
      name: "MARCEDES",
      model: "E300",
      greet: function() {
          console.log("Hello, my car name is " + this.name, "and his model is " + this.model);
      }
  };
  car.greet();
  
  
  //for in loop
  let STUdent = {
      name: "saairiin",
      age: 19,
      major: "networking",
  };
  for (let key in STUdent) {
      console.log(key + ": " + STUdent[key]);
  }
  
  //object.entries() loop
  let STUDent = {
      name: "hodan",
      age: 20,
      major: "networking",
  };
  Object.entries(STUDent).forEach(function([key, value]){
      console.log(key + ": " + value);
  });
  
  //object.value()
  let sTUdEnt = {
      name: "naima",
      age: 22,
      major: "networking",
  };
  Object.values(sTUdEnt).forEach(function(value){
      console.log(value);
  });
  
  //object.key() loop
  let STUdEnt = {
      name: "sihaam",
      age: 22,
      major: "networking",
  };
  Object.keys(STUdEnt).forEach(function(key) {
      console.log(key + ": " + STUdEnt[key]);
  });
  
  
  //creating json
  let Person = {
      "name": "ali",
      "age": 20,
      "major": "bussiness"
  };
  console.log(Person.name);
  console.log(Person.age);
  console.log(Person.major);
  
  //converting json to object
  let PErson = {
      "name": "ali",
      "age": 20,
      "major": "bussiness adminstrator"
  };
  let jsonData = '{"name": "ali", "age": 20, "major": "business adminstrator"}'
  let PeRson = JSON.parse(jsonData);
  console.log(PeRson);
  
  //converting object to json
  let studentObj = {
      name: "Amran",
      age: 23,
      major: "public health",
  };
  let jsonString = JSON.stringify(studentObj);
  console.log(jsonString);`,
    chapter8: `
    /* ===== BASIC PAGE SETUP ===== */
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background = "#f4f6f8";

/* ===== CONTAINER ===== */
const container = document.createElement("div");
container.style.padding = "20px";
document.body.appendChild(container);

/* ===== TITLE ===== */
const title = document.createElement("h1");
title.textContent = "DOM Lesson (JavaScript Only)";
title.style.color = "#2c3e50";
container.appendChild(title);

/* ===== PARAGRAPH WITH ID ===== */
const p = document.createElement("p");
p.id = "content";
p.textContent = "This paragraph is selected using getElementById.";
p.style.padding = "10px";
p.style.border = "1px solid #ccc";
container.appendChild(p);

/* ===== getElementById ===== */
const contentElement = document.getElementById("content");
contentElement.style.background = "blue";
contentElement.style.color = "white";

/* ===== ELEMENTS WITH CLASS ===== */
for (let i = 1; i <= 3; i++) {
  const box = document.createElement("div");
  box.className = "box";
  box.textContent = "Box " + i;
  box.style.margin = "10px 0";
  box.style.padding = "10px";
  box.style.background = "#ddd";
  container.appendChild(box);
}

/* ===== getElementsByClassName ===== */
const boxes = document.getElementsByClassName("box");
boxes[0].style.background = "orange";

/* ===== getElementsByTagName ===== */
const divs = document.getElementsByTagName("div");
divs[0].style.border = "2px solid black";

/* ===== querySelector ===== */
const firstBox = document.querySelector(".box");
firstBox.style.color = "red";

/* ===== querySelectorAll ===== */
const allBoxes = document.querySelectorAll(".box");
allBoxes.forEach(box => {
  box.style.borderRadius = "6px";
});

/* ===== CHANGE HTML CONTENT ===== */
contentElement.innerHTML = "<b>Text changed using innerHTML</b>";

/* ===== ATTRIBUTE EXAMPLE ===== */
const link = document.createElement("a");
link.textContent = "Visit Google";
link.href = "https://google.com";
link.target = "_blank";
container.appendChild(link);

/* ===== STYLE CHANGE ===== */
link.style.display = "block";
link.style.marginTop = "10px";
link.style.color = "green";

/* ===== CLASS NAME CHANGE ===== */
link.className = "myLink";

/* ===== CREATE ELEMENT ===== */
const newPara = document.createElement("p");
newPara.textContent = "This element is created using JavaScript.";
newPara.style.color = "purple";
container.appendChild(newPara);

/* ===== REMOVE ELEMENT ===== */
setTimeout(() => {
  newPara.remove();
}, 3000);

/* ===== REPLACE ELEMENT ===== */
const replaceP = document.createElement("p");
replaceP.textContent = "This paragraph will be replaced.";
container.appendChild(replaceP);

const newReplace = document.createElement("p");
newReplace.textContent = "Element replaced successfully!";
newReplace.style.color = "green";

setTimeout(() => {
  container.replaceChild(newReplace, replaceP);
}, 4000);

/* ===== INSERT BEFORE ===== */
const beforeText = document.createElement("p");
beforeText.textContent = "Inserted before title";
beforeText.style.color = "brown";

container.insertBefore(beforeText, title);
    `,
    chapter9:`
  
  // BASIC PAGE SETUP
  document.body.style.fontFamily = "Arial, sans-serif";
  document.body.style.padding = "20px";
  
  
  // DOMContentLoaded EVENT
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded");
  });
  
  
  // BUTTON (CLICK, DBLCLICK)
  const btn = document.createElement("button");
  btn.textContent = "Click Me";
  btn.style.padding = "10px";
  btn.style.margin = "10px";
  document.body.appendChild(btn);
  
  btn.addEventListener("click", () => {
    alert("Button Clicked");
  });
  
  btn.addEventListener("dblclick", () => {
    alert("Button Double Clicked");
  });
  
  
  // MOUSE EVENTS
  const box = document.createElement("div");
  box.textContent = "Hover Me";
  box.style.width = "150px";
  box.style.height = "100px";
  box.style.background = "#4CAF50";
  box.style.color = "white";
  box.style.display = "flex";
  box.style.alignItems = "center";
  box.style.justifyContent = "center";
  box.style.margin = "10px";
  document.body.appendChild(box);
  
  box.addEventListener("mouseover", () => {
    box.style.background = "red";
  });
  
  box.addEventListener("mouseout", () => {
    box.style.background = "#4CAF50";
  });
  
  
  // KEYBOARD EVENTS
  const input = document.createElement("input");
  input.placeholder = "Type here...";
  input.style.display = "block";
  input.style.margin = "10px";
  document.body.appendChild(input);
  
  input.addEventListener("keydown", (e) => {
    console.log("Key Down:", e.key);
  });
  
  input.addEventListener("keyup", (e) => {
    console.log("Key Up:", e.key);
  });
  
  
  // FOCUS & BLUR EVENTS
  input.addEventListener("focus", () => {
    input.style.border = "2px solid green";
  });
  
  input.addEventListener("blur", () => {
    input.style.border = "2px solid red";
  });
  
  
  // FORM EVENTS (SUBMIT, CHANGE, INPUT)
  const form = document.createElement("form");
  
  const nameInput = document.createElement("input");
  nameInput.placeholder = "Enter name";
  nameInput.style.margin = "5px";
  
  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  submitBtn.type = "submit";
  
  form.appendChild(nameInput);
  form.appendChild(submitBtn);
  document.body.appendChild(form);
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form Submitted");
  });
  
  nameInput.addEventListener("change", () => {
    console.log("Value Changed:", nameInput.value);
  });
  
  nameInput.addEventListener("input", () => {
    console.log("Typing:", nameInput.value);
  });
  
  
  // WINDOW EVENTS (RESIZE, SCROLL)
  window.addEventListener("resize", () => {
    console.log("Window Resized");
  });
  
  window.addEventListener("scroll", () => {
    console.log("Scrolling...");
  });
  
  
  // MEDIA EVENTS (PLAY, PAUSE)
  const audio = document.createElement("audio");
  audio.controls = true;
  audio.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  document.body.appendChild(audio);
  
  audio.addEventListener("play", () => {
    console.log("Audio Playing");
  });
  
  audio.addEventListener("pause", () => {
    console.log("Audio Paused");
  });
  
  
  // CLIPBOARD EVENTS
  document.addEventListener("copy", () => {
    console.log("Copied");
  });
  
  document.addEventListener("paste", () => {
    console.log("Pasted");
  });
  
  
  // EVENT DELEGATION
  const list = document.createElement("ul");
  
  for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + i;
    li.style.cursor = "pointer";
    list.appendChild(li);
  }
  
  document.body.appendChild(list);
  
  list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      alert("Clicked: " + e.target.textContent);
    }
  });
  
    `, 
  
  };
  
  // ===== WAIT FOR DOM TO BE READY =====
  function init() {
  // ===== BODY STYLE =====
  document.body.style.margin = "0";
  document.body.style.padding = "0";
  document.body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
  document.body.style.background = "linear-gradient(135deg,   #00d4ff 0%, #0066ff) 100%)";
  document.body.style.minHeight = "100vh";
  
  // ===== HEADER =====
  const header = document.createElement("header");
  header.textContent = "Welcome To My JavaScript Website";
  header.style.cssText =
    "background:linear-gradient(135deg, #00d4ff 0%, #0066ff 100%);color:white;padding:20px;font-size:28px;font-weight:bold;text-align:center;box-shadow:0 4px 15px rgba(0,0,0,0.2);letter-spacing:1px;";
  document.body.appendChild(header);
  
  // ===== NAVIGATION BAR =====
  const navBar = document.createElement("nav");
  navBar.style.cssText =
    "background:rgba(0,0,0,0.8);backdrop-filter:blur(10px);display:flex;justify-content:center;gap:0;box-shadow:0 2px 10px rgba(0,0,0,0.1);padding:5px 0;";
  document.body.appendChild(navBar);
  
  // ===== CONTAINER =====
  const container = document.createElement("div");
  container.style.cssText = "display:flex;min-height:calc(100vh - 180px);padding:20px;";
  document.body.appendChild(container);
  
  // ===== SIDEBAR MENU (HIDDEN BY DEFAULT) =====
  const nav = document.createElement("nav");
  nav.style.cssText =
    "width:250px;background:linear-gradient(180deg, rgba(0,184,212,0.95) 0%, rgba(0,82,204,0.95) 100%);backdrop-filter:blur(10px);color:white;padding:25px;display:none;border-radius:15px;box-shadow:0 8px 32px rgba(0,0,0,0.3);margin-right:20px;transition:all 0.3s ease;";
  container.appendChild(nav);
  
  const menuTitle = document.createElement("h2");
  menuTitle.textContent = "MENU";
  menuTitle.style.textAlign = "center";
  menuTitle.style.color = "white";
  menuTitle.style.fontSize = "24px";
  menuTitle.style.marginBottom = "20px";
  menuTitle.style.textShadow = "2px 2px 4px rgba(0,0,0,0.3)";
  nav.appendChild(menuTitle);
  
  // ===== MAIN CONTENT =====
  const main = document.createElement("main");
  main.style.cssText = "flex:1;padding:40px;background:rgba(255,255,255,0.95);backdrop-filter:blur(10px);display:flex;flex-direction:column;align-items:center;border-radius:20px;box-shadow:0 10px 40px rgba(0,0,0,0.2);min-height:500px;";
  container.appendChild(main);
  
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  h2.style.cssText = "text-align:center;color:#00b8d4;font-size:32px;font-weight:bold;margin-bottom:20px;text-shadow:1px 1px 2px rgba(0,0,0,0.1);";
  p.style.cssText = "font-size:18px;text-align:center;color:#555;line-height:1.6;max-width:800px;";
  main.append(h2, p);
  
  // ===== PAGE FUNCTION =====
  function loadPage(page) {
    h2.textContent = pages[page].title;
  
    // Clear existing content (keep h2 and p, remove everything else)
    p.textContent = "";
    const children = Array.from(main.children);
    children.forEach(child => {
      if (child !== h2 && child !== p) {
        main.removeChild(child);
      }
    });
  
    // Handle special pages
    if (page === "sources") {
      loadSourcesPage();
    } else if (page === "contact") {
      loadContactPage();
    } else {
      p.textContent = pages[page].content;
    }
  }
  
  // ===== LOAD SOURCES PAGE =====
  function loadSourcesPage() {
    p.textContent = "Click on a chapter to view the code:";
    p.style.cssText = "font-size:20px;text-align:center;color:black;font-weight:600;margin-bottom:30px;";
    
    const sourcesContainer = document.createElement("div");
    sourcesContainer.style.cssText = "display:flex;gap:25px;flex-wrap:wrap;justify-content:center;margin-top:30px;width:100%;max-width:900px;";
    
    const codeDisplay = document.createElement("pre");
    codeDisplay.id = "codeDisplay";
    codeDisplay.style.cssText = "background:linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%);color:#f8f8f2;padding:25px;border-radius:15px;width:100%;max-width:900px;margin-top:30px;overflow-x:auto;display:none;font-family:'Fira Code','Courier New',monospace;font-size:14px;line-height:1.6;box-shadow:0 8px 32px rgba(0,0,0,0.3);border:2px solid rgba(0,184,212,0.3);";
    
    ["chapter7", "chapter8", "chapter9"].forEach((chapter, index) => {
      const chapterBox = document.createElement("div");
      chapterBox.style.cssText = "background:linear-gradient(135deg, #00b8d4 0%, #0052cc 100%);color:white;padding:25px 40px;border-radius:12px;cursor:pointer;font-size:18px;font-weight:bold;text-align:center;min-width:160px;transition:all 0.4s cubic-bezier(0.4, 0, 0.2, 1);box-shadow:0 4px 15px rgba(0,184,212,0.4);";
      
      chapterBox.onmouseover = () => {
        chapterBox.style.background = "linear-gradient(135deg,  #00d4ff 0%,  #00d4ff 100%)";
        chapterBox.style.transform = "translateY(-5px) scale(1.05)";
        chapterBox.style.boxShadow = "0 8px 25px rgba(0,184,212,0.6)";
      };
      chapterBox.onmouseout = () => {
        chapterBox.style.background = "black";
        chapterBox.style.transform = "translateY(0) scale(1)";
        chapterBox.style.boxShadow = "0 4px 15px rgba(0,184,212,0.4)";
      };
      
      chapterBox.onclick = () => {
        codeDisplay.textContent = chapterCodes[chapter];
        codeDisplay.style.display = "block";
        codeDisplay.style.animation = "fadeIn 0.5s ease-in";
      };
      
      sourcesContainer.appendChild(chapterBox);
    });
    
    main.appendChild(sourcesContainer);
    main.appendChild(codeDisplay);
  }
  
  // ===== LOAD CONTACT PAGE =====
  function loadContactPage() {
    p.textContent = "";
    
    // Main Contact Container
    const contactWrapper = document.createElement("div");
    contactWrapper.style.cssText = "display:flex;flex-direction:column;align-items:center;width:100%;max-width:900px;gap:30px;";
    
    // Profile Section Card
    const profileCard = document.createElement("div");
    profileCard.style.cssText = "background:linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,250,255,0.95) 100%);border-radius:25px;box-shadow:0 15px 50px rgba(0,184,212,0.25);padding:50px;width:100%;text-align:center;border:3px solid rgba(0,184,212,0.15);transition:all 0.4s ease;";
    profileCard.onmouseover = () => {
      profileCard.style.transform = "translateY(-5px)";
      profileCard.style.boxShadow = "0 20px 60px rgba(0,184,212,0.35)";
    };
    profileCard.onmouseout = () => {
      profileCard.style.transform = "translateY(0)";
      profileCard.style.boxShadow = "0 15px 50px rgba(0,184,212,0.25)";
    };
    
    // Profile Image with better styling
    const profileImg = document.createElement("img");
    profileImg.src = "xamdi.png";
    // profileImg.alt = "Profile Picture";
    profileImg.style.cssText = "width:200px;height:200px;border-radius:50%;display:block;margin:0 auto 30px;border:6px solid #00b8d4;object-fit:cover;box-shadow:0 10px 30px rgba(0,184,212,0.5);transition:all 0.4s cubic-bezier(0.4, 0, 0.2, 1);";
    profileImg.onmouseover = () => {
      profileImg.style.transform = "scale(1.1) rotate(5deg)";
      profileImg.style.boxShadow = "0 15px 40px rgba(0,184,212,0.7)";
      profileImg.style.borderColor = "#0066ff";
    };
    profileImg.onmouseout = () => {
      profileImg.style.transform = "scale(1) rotate(0deg)";
      profileImg.style.boxShadow = "0 10px 30px rgba(0,184,212,0.5)";
      profileImg.style.borderColor = "#00d4ff";
    };
    profileCard.appendChild(profileImg);
    
    // Name Title
    const nameTitle = document.createElement("h3");
    nameTitle.textContent = "Hamda Ali Haashi";
    nameTitle.style.cssText = "color:#00d4ff;font-size:28px;font-weight:bold;margin:0 0 10px 0;text-shadow:1px 1px 3px rgba(0,0,0,0.1);";
    profileCard.appendChild(nameTitle);
    
    // Subtitle
    const subtitle = document.createElement("p");
    subtitle.textContent = "Graphic Designer | Student";
    subtitle.style.cssText = "color:#0066ff;font-size:16px;font-weight:500;margin:0 0 30px 0;font-style:italic;";
    profileCard.appendChild(subtitle);
    
    contactWrapper.appendChild(profileCard);
    
    // Contact Info Grid Container
    const infoGrid = document.createElement("div");
    infoGrid.style.cssText = "display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:25px;width:100%;";
    
    const contactInfo = [
      { label: "📱 Phone", value: "+252617061189", type: "phone", icon: "📱" },
      { label: "✉️ Email", value: "hamdaalihaashi@gmail.com", type: "email", icon: "✉️" },
      { label: "🏫 University", value: "Jamhuriya University", type: "text", icon: "🏫" },
      { label: "📚 Class", value: "CNS242", type: "text", icon: "📚" },
      { label: "🆔 ID", value: "C6240156", type: "text", icon: "🆔" },
      { label: "🎨 Skill", value: "Graphic Design", type: "text", icon: "🎨" },
      { label: "🌐 Website", value: "https://mshospital.so/", type: "website", icon: "🌐" },
      { label: "🔗 Social", value: "https://www.facebook.com/beertabanadir/", type: "website", icon: "🔗" }
    ];
    
    contactInfo.forEach(info => {
      const infoCard = document.createElement("div");
      infoCard.style.cssText = "background:linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(250,255,255,0.95) 100%);border-radius:15px;padding:25px;border-left:5px solid #00b8d4;box-shadow:0 5px 20px rgba(0,184,212,0.2);transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;";
      
      infoCard.onmouseover = () => {
        infoCard.style.transform = "translateY(-8px) scale(1.02)";
        infoCard.style.boxShadow = "0 10px 30px rgba(0,184,212,0.35)";
        infoCard.style.borderLeftColor = "#0066ff";
        infoCard.style.background = "linear-gradient(135deg, rgba(0,184,212,0.1) 0%, rgba(0,82,204,0.1) 100%)";
      };
      infoCard.onmouseout = () => {
        infoCard.style.transform = "translateY(0) scale(1)";
        infoCard.style.boxShadow = "0 5px 20px rgba(0,184,212,0.2)";
        infoCard.style.borderLeftColor = "#00d4ff";
        infoCard.style.background = "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(250,255,255,0.95) 100%)";
      };
      
      // Icon and Label
      const labelContainer = document.createElement("div");
      labelContainer.style.cssText = "display:flex;align-items:center;gap:10px;margin-bottom:12px;";
      
      const iconSpan = document.createElement("span");
      iconSpan.textContent = info.icon;
      iconSpan.style.cssText = "font-size:24px;";
      labelContainer.appendChild(iconSpan);
      
      const label = document.createElement("strong");
      label.textContent = info.label.replace(/^[^\s]+\s/, "");
      label.style.cssText = "color:#0066ff;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:1px;";
      labelContainer.appendChild(label);
      infoCard.appendChild(labelContainer);
      
      // Value
      const value = document.createElement("div");
      value.style.cssText = "color:#333;font-size:16px;font-weight:500;word-break:break-word;";
      
      if (info.type === "email") {
        const emailLink = document.createElement("a");
        emailLink.href = `mailto:${info.value}`;
        emailLink.textContent = info.value;
        emailLink.style.cssText = "color:#555;text-decoration:none;transition:color 0.3s ease;";
        emailLink.onmouseover = function() { this.style.color = "#00d4ff"; this.style.textDecoration = "underline"; };
        emailLink.onmouseout = function() { this.style.color = "#555"; this.style.textDecoration = "none"; };
        value.appendChild(emailLink);
      } else if (info.type === "phone") {
        const phoneLink = document.createElement("a");
        phoneLink.href = `tel:${info.value}`;
        phoneLink.textContent = info.value;
        phoneLink.style.cssText = "color:#555;text-decoration:none;transition:color 0.3s ease;";
        phoneLink.onmouseover = function() { this.style.color = "#00d4ff"; this.style.textDecoration = "underline"; };
        phoneLink.onmouseout = function() { this.style.color = "#555"; this.style.textDecoration = "none"; };
        value.appendChild(phoneLink);
      } else if (info.type === "website") {
        const webLink = document.createElement("a");
        webLink.href = info.value;
        webLink.target = "_blank";
        webLink.rel = "noopener noreferrer";
        webLink.textContent = info.value.length > 40 ? info.value.substring(0, 40) + "..." : info.value;
        webLink.style.cssText = "color:#00d4ff;text-decoration:none;font-weight:600;transition:all 0.3s ease;";
        webLink.onmouseover = function() { 
          this.style.color = "#0066ff"; 
          this.style.textDecoration = "underline";
          this.style.transform = "translateX(3px)";
        };
        webLink.onmouseout = function() { 
          this.style.color = "#00d4ff"; 
          this.style.textDecoration = "none";
          this.style.transform = "translateX(0)";
        };
        value.appendChild(webLink);
      } else {
        value.textContent = info.value;
        value.style.color = "#333";
      }
      
      infoCard.appendChild(value);
      infoGrid.appendChild(infoCard);
    });
    
    contactWrapper.appendChild(infoGrid);
    main.appendChild(contactWrapper);
  }
  
  // ===== CREATE NAVIGATION LINKS =====
  Object.keys(pages).forEach(page => {
    const navLink = document.createElement("a");
    navLink.textContent = page.toUpperCase();
    navLink.href = "#";
    navLink.style.cssText =
      "color:white;padding:15px 30px;text-decoration:none;display:inline-block;font-weight:500;letter-spacing:1px;transition:all 0.3s ease;border-radius:5px;margin:0 2px;position:relative;";
  
    navLink.onmouseover = () => {
      navLink.style.background = "rgba(0,184,212,0.6)";
      navLink.style.transform = "translateY(-2px)";
    };
    navLink.onmouseout = () => {
      if (!navLink.classList.contains("active")) {
        navLink.style.background = "transparent";
        navLink.style.transform = "translateY(0)";
      }
    };
  
    navLink.onclick = (e) => {
      e.preventDefault();
      loadPage(page);
      // Update active link
      navBar.querySelectorAll("a").forEach(link => {
        link.style.background = "transparent";
        link.classList.remove("active");
      });
      navLink.style.background = "linear-gradient(135deg, #00d4ff 0%, #0052cc 100%)";
      navLink.classList.add("active");
    };
  
    navBar.appendChild(navLink);
  });
  
  
  // ===== CREATE SIDEBAR MENU ITEMS (HIDDEN) =====
  Object.keys(pages).forEach(page => {
    const item = document.createElement("div");
    item.textContent = page.toUpperCase();
    item.style.cssText =
      "padding:15px;margin:10px 0;cursor:pointer;background:rgba(255,255,255,0.2);text-align:center;color:white;border-radius:10px;font-weight:500;letter-spacing:1px;transition:all 0.3s ease;box-shadow:0 2px 8px rgba(0,0,0,0.2);";
  
    item.onmouseover = () => {
      item.style.background = "rgba(255,255,255,0.4)";
      item.style.transform = "translateX(10px) scale(1.02)";
      item.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
    };
    item.onmouseout = () => {
      item.style.background = "rgba(255,255,255,0.2)";
      item.style.transform = "translateX(0) scale(1)";
      item.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
    };
  
    item.onclick = () => {
      loadPage(page);
      nav.style.display = "none";
    };
  
    nav.appendChild(item);
  });
  
  // ===== TOGGLE SIDEBAR MENU BUTTON =====
  const menuToggleBtn = document.createElement("button");
  menuToggleBtn.textContent = "☰ MENU";
  menuToggleBtn.style.cssText = "position:fixed;top:80px;left:15px;background:linear-gradient(135deg, #00b8d4 0%, #0052cc 100%);color:white;border:none;padding:12px 20px;cursor:pointer;z-index:1000;border-radius:10px;font-weight:bold;font-size:14px;box-shadow:0 4px 15px rgba(0,184,212,0.5);transition:all 0.3s ease;";
  menuToggleBtn.onmouseover = () => {
    menuToggleBtn.style.transform = "scale(1.1)";
    menuToggleBtn.style.boxShadow = "0 6px 20px rgba(0,184,212,0.7)";
  };
  menuToggleBtn.onmouseout = () => {
    menuToggleBtn.style.transform = "scale(1)";
    menuToggleBtn.style.boxShadow = "0 4px 15px rgba(0,184,212,0.5)";
  };
  menuToggleBtn.onclick = () => {
    if (nav.style.display === "none" || nav.style.display === "") {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  };
  document.body.appendChild(menuToggleBtn);
  
  // ===== DEFAULT PAGE =====
  loadPage("home");
  // Set active navigation link
  const firstNavLink = navBar.querySelectorAll("a")[0];
  firstNavLink.style.background = "linear-gradient(135deg, #00b8d4 0%, #0052cc 100%)";
  firstNavLink.classList.add("active");
  
  // ===== FOOTER =====
  const footer = document.createElement("footer");
  footer.textContent = "© Hamda Ali";
  footer.style.cssText =
    "background:#000000;color:white;text-align:center;padding:10px;";
  document.body.appendChild(footer);
  
  } // End of init function
  
  // Run init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM is already ready
    init();
  }