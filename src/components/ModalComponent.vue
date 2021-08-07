<template>
  <div id="overlay">
    <div id="content" class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
<!--          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
        </div>
        <div class="modal-body">
          <div></div>
        </div>
        <div class="modal-footer">
          <button type="button" v-on:click="$emit('close')" class="btn btn-primary">戻る </button>
          <button type="button" v-on:click="$emit('close')" class="btn btn-success">保存 </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyModal",
  // methods: {
  //   openModal: function($event) {
  //     // this.showContent = true;
  //     console.log('open', $event);
  //     // this.initModal()
  //   },
  // }
}
</script>

<style scoped>
#content {
  z-index: 2;
  width: 80%;
  padding: 1em;
  background: #fff;
}
#overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>