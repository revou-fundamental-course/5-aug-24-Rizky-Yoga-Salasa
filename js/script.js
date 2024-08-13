// Mendeklarasikan variabel elemen
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var modal = document.getElementById("myModal");
var modalText = document.querySelector("#modalText");
var span = document.getElementsByClassName("close")[0];
var resultArea = document.querySelector(".result");

// Fungsi untuk menghitung BMI
function calculate() {
    // Menyembunyikan beberapa element
    document.getElementById('featuresHeader').style.display = 'none';
    document.getElementById('featuresContent').style.display = 'none';
    document.getElementById('tutorialBtn').style.display ='none';
    document.getElementById('intro-text').style.display ='none';
    document.getElementById('call-to-action').style.display ='none';
    document.getElementById('tutorial-text').style.display ='none';

    if (age.value === '' || height.value === '' || weight.value === '' || (male.checked === false && female.checked === false)) {
        modal.style.display = "block";
        modalText.innerHTML = "Semua kolom diwajibkan untuk diisi";
    } else {
        countBmi();
    }
}

// Fungsi untuk menghitung BMI dan menampilkan hasil
function countBmi() {
    var p = [age.value, height.value, weight.value];
    if (male.checked) {
        p.push("male");
    } else if (female.checked) {
        p.push("female");
    }

    var bmi = Number(p[2]) / (Number(p[1]) / 100 * Number(p[1]) / 100);

    var result = '';
    var color = ''; // Variable to store the color based on BMI
    if (bmi < 18.5) {
        result = 'Kekurangan berat badan';
        color = 'orange';
    } else if (18.5 <= bmi && bmi <= 24.9) {
        result = 'Normal (ideal)';
        color = 'green';
    } else if (25 <= bmi && bmi <= 29.9) {
        result = 'Kelebihan berat badan';
        color = 'orange';
    } else if (bmi >= 30) {
        result = 'Kegemukan (Obesitas)';
        color = 'red';
    }

    // Apply color to result and comment
    resultArea.style.display = "block";
    document.querySelector(".comment").innerHTML = `Kamu <span id="comment">${result}</span>`;
    document.querySelector("#result").innerHTML = bmi.toFixed(2);

    // Change the color of result and comment based on BMI
    document.querySelector("#result").style.color = color;
    document.querySelector("#comment").style.color = color;
}

// Fungsi untuk mereset form
function resetForm() {
    // Mengosongkan semua input
    age.value = '';
    height.value = '';
    weight.value = '';
    male.checked = false;
    female.checked = false;

    // Menampilkan kembali elemen yang disembunyikan
    document.getElementById('featuresHeader').style.display = 'block';
    document.getElementById('featuresContent').style.display = 'block';
    document.getElementById('tutorialBtn').style.display ='block';
    document.getElementById('intro-text').style.display ='block';
    document.getElementById('call-to-action').style.display ='block';
    document.getElementById('tutorial-text').style.display ='block';

    // Mengembalikan nilai hasil dan komentar ke default
    document.getElementById("result").innerHTML = '00.00';
    document.querySelector(".comment").innerHTML = '';
  
    // Menyembunyikan area hasil
    resultArea.style.display = "none";
}

// Fungsi untuk menutup modal saat menekan tombol close
span.onclick = function() {
    modal.style.display = "none";
}

// Fungsi untuk menutup modal saat mengklik di luar modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == tutorialModal) {
        tutorialModal.style.display = "none";
    }
}

// Tutorial modal handling
var tutorialModal = document.getElementById("tutorialModal");
var tutorialBtn = document.getElementById("tutorialBtn");
var closeTutorial = document.getElementsByClassName("close-tutorial")[0];

tutorialBtn.onclick = function() {
    tutorialModal.style.display = "block";
}

closeTutorial.onclick = function() {
    tutorialModal.style.display = "none";
}
