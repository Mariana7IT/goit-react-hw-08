.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.loaderContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
}


.loaderContainer div:nth-child(1) {
  animation-delay: -0.32s;
}

.loaderContainer div:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes blink {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}