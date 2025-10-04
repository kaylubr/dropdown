import { toggleDropdown } from "./toggleDropdown";
import "./style.css";

const content = document.querySelector('#content');
const btn = document.querySelector('#toggleBtn');

btn.addEventListener('click', () => {
  toggleDropdown(content);
});

const navContent = document.querySelector('#navContent');
const navBtn = document.querySelector('#navBtn');

navBtn.addEventListener('click', () => {
  toggleDropdown(navContent);
});