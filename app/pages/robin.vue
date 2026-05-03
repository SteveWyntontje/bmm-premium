<script lang="ts" setup>
const { t } = useI18n();
setTitle(() => t("track.details.about"));
  
function calculateAge(birthDate: string) {
  const parts = birthDate.split('/');
  let part0 = 0;
  if (parts[0] !== undefined) {
    part0 = parseInt(parts[0])
  };
  let part1 = 0;
  if (parts[1] !== undefined) {
    part1 = parseInt(parts[1]) - 1
  };
  let part2 = 0;
  if (parts[2] !== undefined) {
    part2 = parseInt(parts[2])
  }
  const birthDate2 = new Date(part0, part1, part2); 
  const dateNow = new Date();

  let years = dateNow.getFullYear() - birthDate2.getFullYear();

  if (dateNow.getMonth() < birthDate2.getMonth() ||
  (dateNow.getMonth() === birthDate2.getMonth() && dateNow.getDate() < birthDate2.getDate())) {
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