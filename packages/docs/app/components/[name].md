<script setup>
import Meta from '../../src/components/meta.vue'
import Api from '../../src/components/api.vue'
import Demo from '../../src/components/demo.vue'
import Badges from '../../src/components/badges.vue'
import Code from '../../src/components/code.vue'
</script>

# {{ $params.name }}

<Badges :category="$params.category" :is-test="$params.isTest" />

<Meta :last-modified="$params.lastModified" :category="$params.category" />

{{ $params.description }}

## Usage

<Code :code="$params.example" lang="typescript" />

<Code :code="$params.usage" lang="typescript" />

## Demo

<Demo :type="$params.type" :name="$params.name" />

<template v-if="$params.apiParameters.length">

## Api

<Api :apiParameters="$params.apiParameters" />

</template>
