<script lang="ts" setup>
const { t } = useI18n();
setTitle(() => t("track.details.about"));
</script>

<template>
  <div>
    <h2 class="pb-4 pt-10 text-[28px] font-extrabold">
      About
    </h2>
    <p>
      The content at <!--{{ config.websiteDomain }}-->bmm-premium.com is based off of BMM, which is made by "Brunstad Cristian Church". The source code for this fork is available <a href="https://github.com/SteveWyntontje/bmm-premium" target="_blank" class="a">here</a>. This fork is created by <a href="https://github.com/SteveWyntontje" target="_blank" class="a">SteveWyntontje</a>. The license of this fork can be found <a href="https://www.gnu.org/licenses/agpl-3.0.en.html#license-text" target="_blank" class="a">here at GNU.org</a>.
    </p>
  </div>
</template>

<style>
.a:link {
  color: blue;
  background-color: transparent;
  text-decoration: none;
}
.a:visited {
  color: purple;
  background-color: transparent;
  text-decoration: none;
}
.a:hover {
  color: purple;
  background-color: transparent;
  text-decoration: underline;
}
.a:active {
  color: blue;
  background-color: transparent;
  text-decoration: underline;
}
</style>