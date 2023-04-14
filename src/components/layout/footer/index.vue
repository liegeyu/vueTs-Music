<template>
  <div class="footer-container bg-vice">
    <PlayerBar />
    <div class="player-main">
      <div class="player-details">
        <PlayerDetails />
      </div>
      <div class="palyer-controller">
        <PlayerController />
      </div>
      <div class="palyer-actions">
        <PlayerActions />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PlayerBar from "./components/PlayerBar.vue";
import PlayerDetails from "./components/PlayerDetails.vue";
import PlayerController from "./components/PlayerController.vue";
import PlayerActions from "./components/PlayerActions.vue";
</script>

<style scoped lang="scss">
.footer-container {
  height: 100%;

  .player-main {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 1.25rem;
    flex-grow: 1;
    .player-details,
    .palyer-controller,
    .palyer-actions {
      flex: 1;
    }
  }
}
</style>
