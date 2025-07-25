<script setup>
import Meta from '../../src/components/meta.vue'
import Api from '../../src/components/api.vue'
import Badges from '../../src/components/badges.vue'
import Demo from '../../src/components/demo.vue'
import Code from '../../src/components/code.vue'
</script>

# {{ $params.name }}

<Badges :category="$params.category" :is-test="$params.isTest" />

<Meta :last-modified="$params.lastModified" :category="$params.category" />

{{ $params.description }}

<Code :code="$params.example" lang="typescript" />

## Usage

<Code :code="$params.usage" lang="typescript" />

## Api

<Api :apiParameters="$params.apiParameters" />
