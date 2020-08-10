var synth = window.speechSynthesis;

document.getElementById("pitch").addEventListener("change", (e) => {
  // console.log(e.target.value)
  document.getElementById("pitchval").innerHTML = e.target.value;
});
document.getElementById("rate").addEventListener("change", (e) => {
  // console.log(e.target.value)
  document.getElementById("rateval").innerHTML = e.target.value;
});
let sel = document.getElementById("voices");
// synth.getVoices();
let v;
window.synth.onvoiceschanged = () => {
  v = synth.getVoices();
  console.log(v);
  v.forEach((ele) => {
    const opt = document.createElement("option");
    let ename = ele.name;
    let elang = ele.lang;
    //    let evoice = ele;
    opt.textContent = ename + " " + elang;
    opt.setAttribute("v-name", ename);
    opt.setAttribute("v-lang", elang);
    //    opt.setAttribute('v-voice', evoice);
    sel.appendChild(opt);
  });
};
let speak = () => {
  let txt = document.getElementById("txt").value;
  if (txt != "") {
    const synthspeaker = new SpeechSynthesisUtterance(txt);
    let currvoicename = document
      .getElementById("voices")
      .selectedOptions[0].getAttribute("v-name");
    let currvoice;
    v.forEach((ele) => {
      if (ele.name == currvoicename) {
        currvoice = ele;
      }
    });
    synthspeaker.voice = currvoice;

    // console.log(currvoice)
    synthspeaker.rate = document.getElementById("rate").value;
    synthspeaker.pitch = document.getElementById("pitch").value;
    synth.speak(synthspeaker);
  }
};
document.getElementById("speak").onclick = () => {
  speak();
};
