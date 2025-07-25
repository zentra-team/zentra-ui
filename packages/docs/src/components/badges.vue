<script setup lang="ts">
import {
  BoltIcon,
  CheckCircle,
  ComponentIcon,
  XCircle
} from 'lucide-vue-next';

const props = defineProps<{
  category: string;
  isTest: boolean;
}>();

const CATEGORIES = {
  COMPONENTS: {
    color: 'bg-orange-200 text-orange-800 opacity-80',
    component: ComponentIcon
  },
  UTILITIES: {
    color: "bg-blue-200 text-blue-800 opacity-80",
    component: BoltIcon
  },
} as const;

const testCoverageClass = `${
  props.isTest ? 'bg-green-200 text-green-800 opacity-80' : 'bg-red-200 text-red-800 opacity-80'
}`;
</script>

<template>
  <div class="my-2 flex items-center gap-1">
    <div
      :class="`${
        CATEGORIES[props.category.toUpperCase() as keyof typeof CATEGORIES].color
      } flex items-center rounded-lg px-2 py-1 text-xs`"
    >
      <component :is="CATEGORIES[props.category.toUpperCase() as keyof typeof CATEGORIES].component" class="mr-1 size-3" />
      <span>{{ props.category.toLowerCase() }}</span>
    </div>

    <slot />

    <div :class="`${testCoverageClass} flex items-center rounded-lg px-2 py-1 text-xs`">
      <CheckCircle v-if="props.isTest" class="mr-1 size-3" />
      <XCircle v-else class="mr-1 size-3" />

      <span>test coverage</span>
    </div>
  </div>
</template>