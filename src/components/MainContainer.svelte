<style>
  .main-container {
    min-height: 575px;
    text-align: center;
    display: flex;
    flex-flow: column;
    flex: 1;
    border: 1px solid #c4c4c4;
    border-radius: 14px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  @media (min-width: 640px) {
    div {
      margin: 0 auto;
    }
  }
</style>

<div class="main-container">
  <slot />
</div>
