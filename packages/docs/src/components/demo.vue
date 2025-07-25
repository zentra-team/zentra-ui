<script setup lang="ts">
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import {
  computed,
  onMounted,
  onUnmounted,
  ref,
  shallowRef,
  watch,
} from 'vue';
// @ts-ignore
import globalsCss from '../../../../packages/core/src/styles/globals.css?inline';

const props = defineProps<{
  name: string
  type: 'functions' | 'components'
}>()

const isDark = ref(false);
const demoRef = shallowRef<HTMLElement>();
let demoRoot: ReturnType<typeof createRoot> | null = null;
let observer: MutationObserver | null = null;

const checkTheme = () => {
  const newTheme = document.documentElement.classList.contains('dark');
  if (newTheme !== isDark.value) {
    isDark.value = newTheme;
  }
};

const sourceLink = computed(() => {
  return `https://github.com/trackly-app/bounce-ui/blob/main/packages/core/src/${props.type}/${props.name}/${props.name}.demo.tsx`
});

const renderReactDemo = async () => {
  if (!demoRef.value) return;

  const shadowHost = demoRef.value;
  const shadowRoot = shadowHost.shadowRoot ?? shadowHost.attachShadow({ mode: 'open' });

  // Очистить shadow DOM
  shadowRoot.innerHTML = '';

  const styleEl = document.createElement('style');
  styleEl.textContent = globalsCss;
  shadowRoot.appendChild(styleEl);

  const mountPoint = document.createElement('div');
  shadowRoot.appendChild(mountPoint);

  // Импорт компонента
  const demoModule = await import(
    `../../../../packages/core/src/${props.type}/${props.name}/${props.name}.demo.tsx`
  );

  // Ререндер
  demoRoot = createRoot(mountPoint);
  demoRoot.render(createElement(demoModule.default, { isDark: isDark.value }));
};

onMounted(async () => {
  checkTheme();

  observer = new MutationObserver(checkTheme);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });

  await renderReactDemo();
});

// Обновить при смене темы
watch(isDark, async () => {
  if (demoRoot) {
    demoRoot.unmount();
    demoRoot = null;
  }
  await renderReactDemo();
});

onUnmounted(() => {
  if (demoRoot) {
    demoRoot.unmount();
    demoRoot = null;
  }
  if (observer) {
    observer.disconnect();
    observer = null;
  }
});
</script>


<template>
  <div class="relative mb-2 rounded-lg bg-[var(--vp-code-block-bg)] p-6">
    <p class="absolute right-2 top-0 text-xs font-medium transition-colors">
      <a :href="sourceLink" target="_blank">source</a>
    </p>
    <div ref="demoRef" />
  </div>
</template>