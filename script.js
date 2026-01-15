const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

/* Utility Functions */
function addBotMessage(text) {
    const msg = document.createElement("div");
    msg.className = "bot-message";
    msg.innerHTML = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addUserMessage(text) {
    const msg = document.createElement("div");
    msg.className = "user-message";
    msg.innerText = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

/* Send Text Message */
function sendMessage() {
    const text = userInput.value.trim();
    if (text === "") return;

    addUserMessage(text);
    userInput.value = "";

    handleResponse(text.toLowerCase());
}

/* Voice Input */
function startVoice() {
    if (!("webkitSpeechRecognition" in window)) {
        alert("Voice input not supported in this browser");
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-IN";
    recognition.start();

    recognition.onresult = function (event) {
        const voiceText = event.results[0][0].transcript;
        addUserMessage(voiceText);
        handleResponse(voiceText.toLowerCase());
    };
}

/* Main Bot Logic */
function handleResponse(msg) {

    /* Greetings */
    if (msg.includes("hi") || msg.includes("hello")) {
        addBotMessage(`Hi 👋 I am <b>EduGuide Bot</b>.<br>How can I help you?
        <div class="options">
            <button onclick="courses()">Courses</button>
            <button onclick="exams()">Exams</button>
            <button onclick="careers()">Careers</button>
        </div>`);
    }

    /* Thank You */
    else if (msg.includes("thank")) {
        addBotMessage("You're welcome 😊<br>Happy to help you anytime!");
    }

    /* Bye */
    else if (msg.includes("bye")) {
        addBotMessage("Goodbye 👋<br>All the best for your future!");
    }

    else {
        addBotMessage("Please choose an option below 👇");
    }
}

/* COURSES */
function courses() {
    addBotMessage(`📘 <b>Courses After Intermediate</b><br>
    <b>1. B.Tech</b> – Engineering & Technology<br>
    <b>2. Degree</b> – B.Sc, B.Com, B.A<br>
    <b>3. Diploma</b> – Technical skills<br>
    <b>4. Medical</b> – Doctor-related courses<br><br>
    Type: <b>B.Tech / Degree / Diploma / Medical</b>`);
}

/* EXAMS */
function exams() {
    addBotMessage(`📝 <b>Popular Exams</b><br>
    • EAMCET – Engineering & Medical<br>
    • JEE – IITs/NITs<br>
    • NEET – Medical<br>
    • GATE – Higher studies & PSU jobs<br>
    • UPSC – IAS, IPS<br>
    • SSC – Govt jobs<br>
    • Banking – IBPS, SBI<br>
    • Railways – RRB Exams`);
}

/* CAREERS */
function careers() {
    addBotMessage(`💼 <b>Career Options</b><br>
    • Software Engineer<br>
    • Data Analyst<br>
    • Doctor<br>
    • Government Jobs<br>
    • Banking & Finance<br><br>
    Type the career name to know stages & roles`);
}

/* Degree Details */
function degreeDetails() {
    addBotMessage(`🎓 <b>Degree Courses</b><br>
    <b>B.Sc</b> – Science (Maths, Physics, CS, Biology)<br>
    <b>B.Com</b> – Commerce, Accounting, Finance<br>
    <b>B.A</b> – Arts, Humanities, Social Sciences`);
}

/* B.Tech Branches */
function btechBranches() {
    addBotMessage(`🏗 <b>B.Tech Branches</b><br>
    <b>CSE</b> – Software, AI, Web Dev<br>
    <b>AI & DS</b> – Data, ML, Analytics<br>
    <b>ECE</b> – Electronics & Communication<br>
    <b>EEE</b> – Electrical Systems<br>
    <b>MECH</b> – Mechanical Design`);
}

/* Medical */
function medicalDetails() {
    addBotMessage(`🩺 <b>Medical Field</b><br>
    • MBBS – Doctor<br>
    • BDS – Dentist<br>
    • BAMS / BHMS – AYUSH<br>
    <b>Exam:</b> NEET<br>
    <b>Stages:</b> Inter → NEET → Medical College → Internship`);
}

/* IT Careers */
function itCareers() {
    addBotMessage(`💻 <b>IT Careers</b><br>
    <b>Software Engineer</b><br>
    Stages: Degree → Coding → Projects → Job<br><br>
    <b>Data Analyst</b><br>
    Skills: Python, SQL, Excel, Power BI<br>
    Roles: Analyst, BI Engineer`);
}

/* Govt Exams */
function govtCareers() {
    addBotMessage(`🏛 <b>Government Jobs</b><br>
    <b>UPSC</b>: Prelims → Mains → Interview<br>
    <b>SSC</b>: Tier 1 → Tier 2 → Skill Test<br>
    <b>Banking</b>: Prelims → Mains → Interview<br>
    <b>Railways</b>: CBT → Skill Test → Medical`);
}

/* Keyword Listener */
document.addEventListener("click", () => {
    const text = userInput.value.toLowerCase();

    if (text.includes("degree")) degreeD
