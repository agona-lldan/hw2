import './style.scss';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
const swiperParams1: SwiperOptions = {
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

const swiperParams2: SwiperOptions = {
  slidesPerView: 6,

  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

new Swiper('.top__swiper', swiperParams1);
new Swiper('.logos__swiper', swiperParams2);
function timer() {
  const curdate = new Date();
  const finishdate = new Date('2023-10-20');
  const residue = Math.floor((finishdate.getTime() - curdate.getTime()) / 1000); // секунды
  const day = document.querySelector('.timer__day');
  const hour = document.querySelector('.timer__hour');
  const minute = document.querySelector('.timer__minute');
  const sec = document.querySelector('.timer__sec');
  if (day) {
    const days = Math.floor(residue / 86400);
    day.textContent = days < 10 ? `0${days}` : String(days);
  }
  if (hour) {
    const hours = Math.floor((residue % 86400) / 3600);
    hour.textContent = hours < 10 ? `0${hours}` : String(hours);
  }
  if (minute) {
    const minutes = Math.floor((residue % 3600) / 60);
    minute.textContent = minutes < 10 ? `0${minutes}` : String(minutes);
  }
  if (sec) {
    const seconds = residue % 60;
    sec.textContent = seconds < 10 ? `0${seconds}` : String(seconds);
  }
}

timer();
setInterval(() => {
  timer();
}, 1000);
