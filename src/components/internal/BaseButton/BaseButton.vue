<template>
  <button
    :class="`m-BaseButton m-variant-${variant} m-size-${size}`"
    :data-disabled="booleanToAttribute(disabled)"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
import { booleanToAttribute } from "@/utils";
import { BuildDefaultPropType } from "./props.ts";
import type { PropType } from "./props.ts";

withDefaults(defineProps<PropType>(), BuildDefaultPropType());
</script>
<style>
.m-BaseButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  user-select: none;
  vertical-align: top;

  font-family: var(--default-font-family);
  font-style: normal;
  text-align: center;

  &:where([data-disabled]) {
    --spinner-opacity: 1;
  }

  &:where(.m-loading) {
    position: relative;
  }
}

.m-BaseButton {
  &:where(:not(.m-variant-ghost)) {
    height: var(--base-button-height);
  }
  &:where(.m-variant-ghost) {
    box-sizing: content-box;

    /* Make sure that the height is not stretched in a Flex/Grid layout */
    height: fit-content;
  }
}

.m-BaseButton {
  &:where(.m-size-small) {
    --base-button-classic-active-padding-top: 1px;
    --base-button-height: var(--space-5);
    border-radius: max(var(--radius-1), var(--radius-full));
  }
  &:where(.m-size-medium) {
    --base-button-classic-active-padding-top: 2px;
    --base-button-height: var(--space-6);
    border-radius: max(var(--radius-2), var(--radius-full));
  }
  &:where(.m-size-large) {
    --base-button-classic-active-padding-top: 2px;
    --base-button-height: var(--space-7);
    border-radius: max(var(--radius-3), var(--radius-full));
  }
}
:where(.m-themes) {
  --base-button-classic-after-inset: 2px;
  --base-button-classic-box-shadow-top: inset 0 0 0 1px var(--gray-a4),
    inset 0 -2px 1px var(--gray-a3);
  --base-button-classic-box-shadow-bottom: inset 0 4px 2px -2px var(--white-a9),
    inset 0 2px 1px -1px var(--white-a9);
  --base-button-classic-disabled-box-shadow: var(
      --base-button-classic-box-shadow-top
    ),
    var(--base-button-classic-box-shadow-bottom);
  --base-button-classic-active-filter: brightness(0.92) saturate(1.1);
}
/* prettier-ignore */
.dark,
.dark :where(.m-themes:not(.light, .light-theme)) {
  --base-button-classic-after-inset: 1px;
  --base-button-classic-box-shadow-top:
    inset 0 0 0 1px var(--white-a2),
    inset 0 4px 2px -2px var(--white-a3),
    inset 0 1px 1px var(--white-a6),
    inset 0 -1px 1px var(--black-a6);
  --base-button-classic-box-shadow-bottom: 0 0 transparent;
  --base-button-classic-disabled-box-shadow:
    inset 0 0 0 1px var(--gray-a5),
    inset 0 4px 2px -2px var(--gray-a2),
    inset 0 1px 1px var(--gray-a5),
    inset 0 -1px 1px var(--black-a3),
    inset 0 0 0 1px var(--gray-a2);
  --base-button-classic-active-filter: brightness(1.08);
}

.m-BaseButton:where(.m-variant-classic) {
  background-color: var(--accent-9);
  color: var(--accent-contrast);
  position: relative;
  z-index: 0;

  /* prettier-ignore */
  background-image:
    linear-gradient(to bottom, transparent 50%, var(--gray-a4)),
    linear-gradient(to bottom, transparent 50%, var(--accent-9) 80%);

  /* prettier-ignore */
  box-shadow:
    var(--base-button-classic-box-shadow-top),
    inset 0 0 0 1px var(--accent-9),
    var(--base-button-classic-box-shadow-bottom);

  &::after {
    content: "";
    position: absolute;
    border-radius: inherit;
    pointer-events: none;
    inset: 0;
    z-index: -1;
    border: var(--base-button-classic-after-inset) solid transparent;
    background-clip: content-box;
    background-color: inherit;
    background-image: linear-gradient(
      var(--black-a1),
      transparent,
      var(--white-a2)
    );
    box-shadow: inset 0 2px 3px -1px var(--white-a4);
  }
  /* Better -webkit-tap-highlight-color */
  @media (pointer: coarse) {
    &:where(:active:not([data-state="open"])) {
      outline: 0.5em solid var(--accent-a4);
      outline-offset: 0;
    }
  }
  &:where(:focus-visible) {
    outline: 2px solid var(--focus-8);
    outline-offset: 2px;
  }
  @media (hover: hover) {
    &:where(:hover) {
      &::after {
        background-color: var(--accent-10);
        background-image: linear-gradient(
          var(--black-a2) -15%,
          transparent,
          var(--white-a3)
        );
      }
    }
  }
  &:where([data-state="open"]) {
    &::after {
      background-color: var(--accent-10);
      background-image: linear-gradient(
        var(--black-a2) -15%,
        transparent,
        var(--white-a3)
      );
    }
  }
  &:where(:active:not([data-state="open"], [data-disabled])) {
    background-color: var(--accent-9);
    background-image: linear-gradient(var(--black-a1), transparent);
    padding-top: var(--base-button-classic-active-padding-top);

    /* prettier-ignore */
    box-shadow:
      inset 0 4px 2px -2px var(--gray-a4),
      inset 0 1px 1px var(--gray-a7),
      inset 0 0 0 1px var(--gray-a5),
      inset 0 0 0 1px var(--accent-9),
      inset 0 3px 2px var(--gray-a3),
      inset 0 0 0 1px var(--white-a7),
      inset 0 -2px 1px var(--white-a5);

    &::after {
      box-shadow: none;
      background-color: inherit;
      background-image: linear-gradient(
        var(--black-a2),
        transparent,
        var(--white-a3)
      );
    }
  }
  &:where([data-disabled]) {
    color: var(--gray-a8);
    background-color: var(--gray-2);
    background-image: none;
    box-shadow: var(--base-button-classic-disabled-box-shadow);
    outline: none;
    filter: none;

    &::after {
      box-shadow: none;
      background-color: var(--gray-a2);
      background-image: linear-gradient(
        var(--black-a1) -20%,
        transparent,
        var(--white-a1)
      );
    }
  }
}

/* solid */

:where(.m-themes) {
  --base-button-solid-active-filter: brightness(0.92) saturate(1.1);
}
.dark,
.dark :where(.m-themes:not(.light)) {
  --base-button-solid-active-filter: brightness(1.08);
}

.m-BaseButton:where(.m-variant-solid) {
  background-color: var(--accent-9);
  color: var(--accent-contrast);

  @media (hover: hover) {
    &:where(:hover) {
      background-color: var(--accent-10);
    }
  }
  &:where([data-state="open"]) {
    background-color: var(--accent-10);
  }
  &:where(:active:not([data-state="open"])) {
    background-color: var(--accent-10);
    filter: var(--base-button-solid-active-filter);
  }
  /* Better -webkit-tap-highlight-color */
  @media (pointer: coarse) {
    &:where(:active:not([data-state="open"])) {
      outline: 0.5em solid var(--accent-a4);
      outline-offset: 0;
    }
  }
  &:where(:focus-visible) {
    outline: 2px solid var(--focus-8);
    outline-offset: 2px;
  }
  &:where([data-disabled]) {
    color: var(--gray-a8);
    background-color: var(--gray-a3);
    outline: none;
    filter: none;
  }
}

/* soft / ghost */
.m-BaseButton:where(.m-variant-soft, .m-variant-ghost) {
  color: var(--accent-a11);

  &:where([data-disabled]) {
    color: var(--gray-a8);
    background-color: var(--gray-a3);
  }
}

.m-BaseButton:where(.m-variant-soft) {
  background-color: var(--accent-a3);

  &:where(:focus-visible) {
    outline: 2px solid var(--accent-8);
    outline-offset: -1px;
  }
  @media (hover: hover) {
    &:where(:hover) {
      background-color: var(--accent-a4);
    }
  }
  &:where([data-state="open"]) {
    background-color: var(--accent-a4);
  }
  &:where(:active:not([data-state="open"])) {
    background-color: var(--accent-a5);
  }
  &:where([data-disabled]) {
    color: var(--gray-a8);
    background-color: var(--gray-a3);
  }
}

.m-BaseButton:where(.m-variant-ghost) {
  @media (hover: hover) {
    &:where(:hover) {
      background-color: var(--accent-a3);
    }
  }
  &:where(:focus-visible) {
    outline: 2px solid var(--focus-8);
    outline-offset: -1px;
  }
  &:where([data-state="open"]) {
    background-color: var(--accent-a3);
  }
  &:where(:active:not([data-state="open"])) {
    background-color: var(--accent-a4);
  }
  &:where([data-disabled]) {
    color: var(--gray-a8);
    background-color: transparent;
  }
}

/* outline */
.m-BaseButton:where(.m-variant-outline) {
  box-shadow: inset 0 0 0 1px var(--accent-a8);
  color: var(--accent-a11);

  @media (hover: hover) {
    &:where(:hover) {
      background-color: var(--accent-a2);
    }
  }
  &:where([data-state="open"]) {
    background-color: var(--accent-a2);
  }
  &:where(:active:not([data-state="open"])) {
    background-color: var(--accent-a3);
  }
  &:where(:focus-visible) {
    outline: 2px solid var(--focus-8);
    outline-offset: -1px;
  }
  &:where([data-disabled]) {
    color: var(--gray-a8);
    box-shadow: inset 0 0 0 1px var(--gray-a7);
    background-color: transparent;
  }
}

/* surface */
.m-BaseButton:where(.m-variant-surface) {
  background-color: var(--accent-surface);
  box-shadow: inset 0 0 0 1px var(--accent-a7);
  color: var(--accent-a11);

  @media (hover: hover) {
    &:where(:hover) {
      box-shadow: inset 0 0 0 1px var(--accent-a8);
    }
  }
  &:where([data-state="open"]) {
    box-shadow: inset 0 0 0 1px var(--accent-a8);
  }
  &:where(:active:not([data-state="open"])) {
    background-color: var(--accent-a3);
    box-shadow: inset 0 0 0 1px var(--accent-a8);
  }
  &:where(:focus-visible) {
    outline: 2px solid var(--focus-8);
    outline-offset: -1px;
  }
  &:where([data-disabled]) {
    color: var(--gray-a8);
    box-shadow: inset 0 0 0 1px var(--gray-a6);
    background-color: var(--gray-a2);
  }
}
</style>
