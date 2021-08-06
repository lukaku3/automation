<template>
  <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div class="table-responsive">
      <div class="server">
        <h1>This is an server page.</h1>
      </div>

      <div class="accordion" id="ServerList">
        <div class="shadow p-3 mb-5 bg-white rounded">
          <table class="table table-striped table-sm">
            <thead>
            <tr>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, idx) in items" :key="idx">
              <td>{{item.id}}</td>
              <td @click="openModal"><u>{{item.name}}</u></td>
              <td>{{item.ipAddress}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <MyModal  v-show="showContent" @close="showContent = false"></MyModal>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import MyModal from "../components/ModalComponent.vue";

export default defineComponent({

  name: 'Server',
  el: 'server',
  data: function() {
    return {
      showContent: false,
      title: 'server',
      items: [
        {id: 1, name: "Foo", ipAddress: "127.0.10.10"},
        {id: 2, name: "Bar", ipAddress: "127.0.10.11"},
        {id: 3, name: "Bazz", ipAddress: "127.0.10.12"},
      ]
    }
  },
  components: {
    MyModal
  },
  provide() {
    return {
      provideData: this.items,
    }
  },
  methods: {
    closeModal: function() {
      this.showContent = false;
    },
    openModal: function() {
      this.showContent = true;
      console.log('open');
    }
  },
});
</script>

<style scoped>
</style>