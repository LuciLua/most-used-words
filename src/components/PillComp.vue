<template>
  <div class="pill">
    <span class="name">
      {{ name }}
    </span>
    <span class="amount">
      {{ amount }}
    </span>
  </div>
</template>

<script>
export default {
  props: ["name", "amount"],
};
</script>

<style scoped>
/* tag scoped define que esse estilo so será aplicado para esse componente*/
.pill {
  background: rgb(212, 21, 59);
  color: #fff;

  margin: 10px;
  border-radius: 30px;
  height: 55px;

  font-size: 1.3rem;

  font-weight: bold;

  display: flex;
  align-items: center;
}

.pill .name {
  margin-left: 15px;
}
.pill .amount {
  margin: 10px;
  padding: 5px;

  border-radius: 18px;

  background: #fff;
  color: rgb(212, 21, 59);

  height: 35px;
  width: 35px;

  font-size: 13px;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>