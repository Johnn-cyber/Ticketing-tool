#!/usr/bin/env node
"use strict";


const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownList = document.getElementById("dropdownList");

dropdownBtn.addEventListener("click", function() {
  dropdownList.style.display = dropdownList.style.display === "none" ? "block" : "none";
});

const dropdownBtn1 = document.getElementById("dropdownBtn1");
const dropdownList1 = document.getElementById("dropdownList1");

dropdownBtn1.addEventListener("click", function() {
  dropdownList1.style.display = dropdownList1.style.display === "none" ? "block" : "none";
});
const homeBtn = document.getElementById("homeBtn");
const aboutBtn = document.getElementById("aboutBtn");
const contactBtn = document.getElementById("contactBtn");

const contentArea = document.getElementById("contentArea");
const homePage = document.getElementById("homePage");
const aboutPage = document.getElementById("aboutPage");
const contactPage = document.getElementById("contactPage");

// Initially hide all content sections
homePage.style.display = "none";
aboutPage.style.display = "none";
contactPage.style.display = "none";

// Function to show a specific content section
function showContent(content) {
  contentArea.querySelectorAll(".content").forEach(el => el.style.display = "none");
  content.style.display = "block";
}

// Add click event listeners to buttons
homeBtn.addEventListener("click", () => showContent(homePage));
aboutBtn.addEventListener("click", () => showContent(aboutPage));
contactBtn.addEventListener("click", () => showContent(contactPage));
