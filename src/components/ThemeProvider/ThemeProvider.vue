<template>
  <div
    :data-has-background="hasBackground ? 'true' : 'false'"
    :data-panel-background="panelBackground"
    :data-radius="radius"
    class="m-themes"
    :class="{ light: appearances === 'light', dark: appearances === 'dark' }"
    :data-is-root="parentTheme ? 'false' : 'true'"
  ></div>
</template>
<script lang="ts" setup>
import { inject, provide } from "vue";
import { ThemeProvideKey } from "./utils";
import type { ThemeConfig } from "./utils";

const props = withDefaults(defineProps<ThemeConfig>(), {
  radius: "medium",
  panelBackground: "translucent",
  hasBackground: true,
  appearances: "inherit",
});
const parentTheme = inject<ThemeConfig>(ThemeProvideKey);
provide(ThemeProvideKey, props);
</script>
