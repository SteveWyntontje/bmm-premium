<script lang="ts" setup>
import { useAuth0 } from "@auth0/auth0-vue";
import { Toaster } from "vue-sonner";
import "vue-sonner/style.css";

const { $colorMode } = useNuxtApp();

const { isLoading, loginWithRedirect, isAuthenticated, error, logout } =
  useAuth0();

watch(
  isLoading,
  async (loading) => {
    if (loading) return;

    if (!isAuthenticated.value) {
      await loginWithRedirect();
    }
  },
  { immediate: true },
);

watch(error, async (e) => {
  if (e) {
    const errorCode = e.error;
    console.error(e.message, errorCode);
    if (errorCode === "missing_refresh_token" || errorCode === "invalid_grant") {
      // For these errors we've identified that a logout & relogin likely will fix it.
      await logout({ openUrl: false });
      await loginWithRedirect();
    }
  }
});

const logoutAndRedirect = async () => {
  await logout({ openUrl: false });
  await loginWithRedirect();
};

const { locale } = useI18n();
locale.value = useProfileStore().uiLanguage;
useProfileStore().$subscribe((_, state) => {
  locale.value = state.uiLanguage;
});

useHead({
  titleTemplate: (chunk) => (chunk ? `${chunk} - BMM` : "BMM"),
});
</script>

<template>
  <div class="h-full">
    <Toaster
      :theme="$colorMode.preference"
      expand
      position="bottom-center"
      :toast-options="{
        style: {
          background: 'var(--bmm-background-3)',
          color: 'var(--bmm-label-1)',
        },
      }"
    />
    <NuxtLayout v-if="isAuthenticated && !error">
      <div class="container mx-auto min-w-80 px-2 pb-20 lg:px-9">
        <NuxtPage />
        <div class="teleport" />
      </div>
    </NuxtLayout>
    <div
      v-else-if="!isAuthenticated"
      class="flex h-screen text-center"
      style="-webkit-app-region: drag"
    >
      <div class="m-auto">
        <SiteLogo size="medium" />
        <div>{{ $t("login.redirect-message.redirect-info") }}</div>
        <i18n-t tag="div" keypath="login.redirect-message.manual-redirect-info">
          <span
            class="cursor-pointer underline"
            href="#"
            @click="loginWithRedirect()"
            >{{ $t("login.redirect-message.redirect-link") }}</span
          >
        </i18n-t>
      </div>
    </div>
    <div
      v-else
      class="flex h-screen text-center"
      style="-webkit-app-region: drag"
    >
      <div class="m-auto">
        <SiteLogo size="medium" />
        <div>{{ $t("login.error-message.logout-and-redirect-info") }}</div>
        <div class="mb-5">{{ error }}</div>
        <i18n-t
          tag="div"
          class="mb-5"
          keypath="login.error-message.manual-logout-and-redirect-info"
        >
          <span
            class="cursor-pointer underline"
            href="#"
            @click="logoutAndRedirect()"
            >{{ $t("login.error-message.logout-and-redirect-link") }}</span
          >
        </i18n-t>
        <i18n-t tag="div" keypath="login.error-message.contact-info">
          <a
            class="cursor-pointer underline"
            href="mailto:bmm-support@bcc.no"
            target="_blank"
            >{{ $t("login.error-message.contact-link") }}</a
          >
        </i18n-t>
      </div>
    </div>
  </div>
</template>

<style>
html {
  color-scheme: light dark;
}
html.dark {
  color-scheme: dark;
}
html.light {
  color-scheme: light;
}
.page-enter-active,
.page-leave-active {
  transition: all 200ms ease-out;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
