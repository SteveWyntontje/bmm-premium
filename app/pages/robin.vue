<script lang="ts" setup>
const { t } = useI18n();
setTitle(() => t("track.details.about"));
  
function calculateAge(birthDate: string) {
  birthDate = new Date(birthDate);
  const dateNow = new Date();

  var years = dateNow.getFullYear() - birthDate.getFullYear();

  if (dateNow.getMonth() < birthDate.getMonth() ||
  (dateNow.getMonth() === birthDate.getMonth() && dateNow.getDate() < birthDate.getDate())) {
  years--;
  }

  return years;
}

const robinsLeeftijd = calculateAge("04/13/2013");

const petrockleeftijd = calculateAge("04/13/2026");




</script>

<template>
  <div>
    <h2 class="pb-4 pt-10 text-[28px] font-extrabold">
      Robin van Oord is very cool:D
    </h2>
    <p>
      hello i am {{ robinsLeeftijd }} years young
    </p>
    my pet rock named gary is {{ petrockleeftijd }} years
    <p/>
    i live in the netherlands
    <p/>
    AD  :  https://share.google/osWN5ePkWjNbOQkeE  <--- :D
  </div>
</template>

<style>
.a:link {
  color: gold;
  background-color: transparent;
  text-decoration: none;
}
.a:visited {
  color: red;
  background-color: transparent;
  text-decoration: none;
}
.a:hover {
  color: blue;
  background-color: transparent;
  text-decoration: underline;
}
.a:active {
  color: green;
  background-color: transparent;
  text-decoration: underline;
}
</style>