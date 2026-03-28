export const errorBeingShown = ref<string | null>();

// code is only used for tracking purposes to identify the error independent of the users language.
// So you can just make one up but please make sure to not change it afterwards.
export default function showErrorToUser(code: string, message: string) {
  if (errorBeingShown.value != null) {
    console.error(message, code);
  } else errorBeingShown.value = message;
}

export function errorHasBeenAcknowledged() {
  errorBeingShown.value = null;
}
