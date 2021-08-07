<template>
  <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div class="table-responsive">
      <div class="playbook">
        <h1>This is an playbook page.</h1>
      </div>

      <div class="accordion" id="PlaybookList">
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
            <tr v-for="(item, idx) in playbooks" :key="idx">
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
import {computed, defineComponent} from "vue";
import {useStore} from "vuex";
import MyModal from "../components/ModalComponent.vue";

export default defineComponent({
  name: 'Playbook',
  el: 'playbook',
  setup() {
    const store = useStore()
    return {
      count: computed(() => store.state.playbooks.length ),
      playbooks: computed(() => store.state.playbooks ),
    }
  },
  data: function() {
    return {
      showContent: false,
      title: 'playbook',
    }
  },
  components: {
    MyModal
  },
  provide() {
    return {
      // provideData: this.items,
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