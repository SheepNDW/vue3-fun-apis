<script setup>
import ProfileCardSkeleton from './components/ProfileCardSkeleton.vue'
import ProfileCard from './components/ProfileCard.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <ProfileCard />
    </template>
    <template #fallback>
      <ProfileCardSkeleton />
    </template>
  </Suspense>
</template>
