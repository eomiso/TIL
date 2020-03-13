<template>
  <div>
    <div class="titleContainer">
      <h1 class="homepage_header">오늘 배운 건
        <br>오늘 적자
      </h1>

      <div class="infoContainer">
        <div class="name">Eomiso's TIL</div>
        <ul>
          <li>
            <a href="https://eomiso.github.io/">Blog(To be refined)</a>
          </li>
          <li>
            <a href="https://github.com/eomiso">GitHub</a>
          </li>
        </ul>
      </div>
      <div class="motoContainer">
        <p>"곁다리가 많다는 것은 제대로 하고 있지 않다는 것이다."</p>
        <p>"남이 하고 있는 것에 휩쓸리지 말고 언제나 기본으로 돌아가자"</p>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Do+Hyeon";
@import "https://fonts.googleapis.com/css?family=Yeon+Sung&display=swap";
.infoContainer {
  text-align: right;
}

.motoContainer {
  text-align: center;
  margin-top: 7rem;
  font-family: "Yeon Sung", cursive;
  font-size: 1.5rem;
}

h1 {
  font-family: "Do Hyeon", sans-serif;
  border-bottom: 6px solid #eda887;
  font-size: 2rem;
}

.homepage_header {
  font-family: "Do Hyeon", sans-serif;
  font-weight: 500;
  border-bottom: 17px solid #eda887;
  word-break: keep-all;
  font-size: 5rem;
  padding-left: 1.2rem;
}
.name {
  font-weight: 900;
  font-size: 2rem;
}
ul {
  list-style: none;
  line-height: 1.5rem;
}
@media (max-width: 550px) {
  h1 .homepage_header {
    font-size: 4.4rem;
  }
  .name {
    font-size: 1.7rem;
  }
}
@media (max-width: 430px) {
  h1 .homepage_header {
    font-size: 3.4rem;
  }
}
</style>
